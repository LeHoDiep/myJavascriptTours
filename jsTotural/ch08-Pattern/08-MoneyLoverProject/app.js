//xây dựng app quản lý thu chi theo title công việc
//áp dụng các kiến thức revealing Module pattern

//Bước 1//tạo itemController chuyên quản lý các item
const itemController = (function(){ //Module Pattern
    //private Function
    function Item(name , amount){ //constructor function tạo các item
        this.name = name
        this.amount = amount
        this.id = new Date().toISOString()//tạo id cho dể search/delete/update
    }
    //dùng kỹ thuật revealing pattern rút ngắn phần public function
    function createItem(name, amount){//hàm tạo Item
        return new Item(name, amount)//dùng constructor
    }
    return{
    //public Function
        createItem

    }
})()

//Bước 2: tạo sẵn các Module mà chưa có function nào cả
//tạo UIController chuyên quản lý các giao diện hiện ẩn

const UIController = (function(){
//Bước 4:tạo function add item lên giao diện sau khi đã tạo được item ở bước 3
    function add(item){
        // mình có item mình sẽ add nó vào list
        let newItemDiv = document.createElement('div')
        newItemDiv.className = 'card p-2 flex-row align-items-center justify-content-between mb-3'
        newItemDiv.innerHTML = `
            <div>
                <p><span>${item.name}</span></p>
                <p><span>${item.amount}</span></p>
            </div>
            <button class="btn btn-small btn-info btn-start-edit" data-id=${item.id}>Sửa</button>
        `
        document.querySelector('.list').appendChild(newItemDiv)
        renderTotalAmount()
        document.getElementById('name').value = ''
        document.getElementById('amount').value = ''
    }//kết thúc bước 4
    //function render ra số tiền sau mổi lần add
    function renderTotalAmount(){
        document.querySelector('#amountTotal').innerHTML = `${LSController.getTotalAmount()}`
    }

    // bước 7: function renderAll
    function renderAll(){
        document.querySelector('.list').innerHTML = ''
        const list = LSController.getList()
    
        list.forEach(item => {
            add(item)
         
        });
        //tính tiền
        renderTotalAmount()
        
    }

    //edit//tạo function getItem bên LS trước
    //startUpdate giúp hiển thị thông tin các item đã click nút sửa
    //sau khi xong làm update bên LS 
    function startUpdate(id){
        const item = LSController.getItem(id)
        //hiển thị nút sữa khi được click vào 1 phần tử và ẩn đi nút thêm
        document.getElementById('btn-group').className = 'd-flex justify-content-between'
        document.getElementById('btn-add').classList.add('d-none')
        document.getElementById('btn-edit').dataset.id = item.id        //set id cho dể sữa
        document.getElementById('btn-remove').dataset.id = item.id      //set id cho dể sữa
        document.getElementById('name').value = item.name
        document.getElementById('amount').value = item.amount
    }
    function resetForm(){
        document.getElementById('name').value = ''
        document.getElementById('amount').value = ''
        document.getElementById('btn-edit').dataset.id = ''    
        document.getElementById('btn-remove').dataset.id = ''
        document.getElementById('btn-group').className = 'd-none justify-content-between'
        document.getElementById('btn-add').classList.remove('d-none')
    }
    //delete
    function remove(){
        resetForm()
        renderAll()
    }
    function removeAll(){
        resetForm()
        renderAll()
        document.querySelector('#amountTotal').innerHTML = 0
    }
    return {
        add,
        renderAll,
        renderTotalAmount,
        startUpdate,
        resetForm,
        remove,
        removeAll
    }
})()

//tạo LocalStorageController chuyên quản lý localStorage
const LSController = (function(){
    //bước 5 tạo add để add vào LS
    //nhưng trước tiên cần function getList để lấy data trong ls
    function getList(){
        return JSON.parse(localStorage.getItem('list')) || [] 
        //return ra list , k có thì mảng rỗng
    }

    function add(item){
        const list = getList()
        list.push(item)
        localStorage.setItem('list', JSON.stringify(list))
    }//hết bước 5
    //hàm tính tiền
    function getTotalAmount(){
        const totalAmount = getList().reduce((result,current)=>{
            return result + Number.parseInt(current.amount)
        },0)
        return totalAmount.toLocaleString()//cho hiển thị tiền có dấu ,
    }

    //edit
    function getItem(id){
        return getList().find(item => item.id === id)
    }
    function update(id,{newItemName, newItemAmount}){//destructuring
        const list = getList()
        for(let i = 0; i<= list.length - 1 ; i++){//for thì break dc, for each thì k
            if(list[i].id === id){
                list[i].name = newItemName
                list[i].amount = newItemAmount
                break
            }
        }
        localStorage.setItem('list',JSON.stringify(list))
    }

    //delete
    function remove(id){
        let list = getList()
        list = list.filter(item => item.id !== id)
        localStorage.setItem('list',JSON.stringify(list))
    }
    //delete-all
    function removeAll(){
        localStorage.removeItem('list')
    }
    return {
        add,
        getList,
        getTotalAmount,
        //edit
        getItem,
        update,
        remove,
        removeAll
    }
})()

//tạo app quản lý toàn bộ chương trình
//Bước 3: xây dựng app trước cụ thể là function init lắng nghe sự kiện
//          submit và chặn submit
//          tạo item

const App = (function(){
    function init(){
        //renderAll
        UIController.renderAll()//render mỗi khi load
        //add
        document.querySelector('form').addEventListener('submit', event=>{
            event.preventDefault()
            const newItemName = document.querySelector('#name').value//lấy tên từ input
            const newItemAmount = document.querySelector('#amount').value//lấy tên từ input
            const newItem = itemController.createItem(newItemName,newItemAmount)//tạo 1 item
            //kết thúc bước 3
            //bước 6: dùng add của UI và LS
            LSController.add(newItem)//add ls để có tổng chi phí, sau đó gọi add để add lên ui
                                    //kèm cập nhật
            UIController.add(newItem)
            //kết thúc bước 6
        })

        // start update
        // document.querySelector('.btn-start-edit') không được vì nó render sau khi đc load
        // nên ta lắng nghe cái list và lấy data-id
        document.querySelector('.list').addEventListener('click', event=>{
            if(event.target.classList.contains('btn-start-edit')){//nếu chổ click là 1 element có class là btn-start-edit
                                                                    //thì làm
                // console.log(event.target.data-)
                let id = event.target.dataset.id
                UIController.startUpdate(id)
  
            }
        })
        //lưu update
        document.querySelector('#btn-edit').addEventListener('click',event=>{
            event.preventDefault()
            let id = event.target.dataset.id
            const newItemName = document.querySelector('#name').value//lấy tên từ input
            const newItemAmount = document.querySelector('#amount').value//lấy tên từ input
            console.log(newItemName,newItemAmount)
            LSController.update(id,{newItemName,newItemAmount})
            //sau đó render lại
            UIController.renderAll()
            UIController.resetForm()

        })
        //Back
        document.querySelector('#btn-back').addEventListener('click',event=>{
            event.preventDefault()
            UIController.resetForm()
        })

        //xóa
        document.querySelector('#btn-remove').addEventListener('click',event=>{
            event.preventDefault()
            let id = event.target.dataset.id
            let itemRemove = LSController.getItem(id)
            let isConfirm = confirm(`Bạn Có muốn xóa "${itemRemove.name}"`)
            if(isConfirm){
                LSController.remove(id)
                UIController.remove()
            }
        })

        //btn-remove-all
        document.querySelector('#btn-remove-all').addEventListener('click',event=>{
            event.preventDefault()
            let isConfirm = confirm(`Bạn Có muốn xóa hết không`)
            if(isConfirm){
                LSController.removeAll()
                UIController.removeAll()
            }
        })
    }
    
    return {
        init
    }
})()


//sử dụng
window.addEventListener('DOMContentLoaded', App.init)