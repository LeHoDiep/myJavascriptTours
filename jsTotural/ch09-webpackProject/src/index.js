//9 import bootstrap
import 'bootstrap/scss/bootstrap.scss'
//10 tiến hành tạo giao diện bên html thôi


//14 import Http class
import http from './http'
//test thử xem code đúng chưa :))
// http.readPosts().then(res => {
//     console.log(res)
// })
//FUNCTION
//function add() nhận vào title và description để đẩy lên api

//renderPost(title,description) render 1 post lên UI
const renderPost = (post) => {
    const {id,title,description} = post
    const listNode = document.querySelector('#list')
    const newCard = document.createElement('div')
    newCard.className = 'card p-2 d-flex flex-row justify-content-between align-items-center mb-3'
    newCard.innerHTML = `
    <div>
        <p><strong>${title}</strong></p>
        <p>${description}</p>
    </div>
    <div >
        <button data-id='${id}' class="btn btn-info btn-start-edit">Edit</button>
        <button data-id='${id}' class="btn btn-danger btn-remove">Remove</button>
    </div>
    `
    listNode.appendChild(newCard)
}
//làm thông báo
const alertMsg = (msg, type = 'success')=>{
    const newAlert = document.createElement('div')
    newAlert.className = `alert alert-${type}`
    newAlert.textContent = msg
    document.querySelector('#notification').appendChild(newAlert)
    //sau 2s thì remove
    setTimeout(()=>{
        newAlert.remove()
    },2000)
}
//renderAllPost() render tất cả data api lên UI
const renderAllPost = () => {
    //mình dùng return ở đây để tý gọi hàm mình có thể then tiếp cho sướng
    //nếu nó hoàn thành việc lấy data từ api thì then xài tiếp cho việc thông báo

    return http.readPosts().then(res => {
        //ngoài ra mình có thể dùng reduce
        //nhưng để code đọc dể hơn nên mình dùng kiểu này
        res.forEach(post => {
            renderPost(post)
        });
    })
}
//clearFrom() tẩy trắng form và cập nhật lại list
const clearForm = () => {
    document.querySelector('#title').value=''
    document.querySelector('#description').value=''
    document.querySelector('#list').innerHTML = ''
    return renderAllPost()
}
//add(title, description) add lên data api
//nếu add thành công thì sẽ gọi renderAllPost()
//cập nhật UI luôn
const add = (post) => {
    //clearForm() return về renderAll mà renderAll lại return 1 promise
    //nên mình then đc, tức là nếu http thành công thì chạy then
    http.createPost(post).then(res => {
        return clearForm()
    }).then(()=>{
        alertMsg('Add thành công')
    })
}

//edit start khi nhấn vào edit
//thì mình hiển thị thông tin của thằng vừa nhấn lên form
//kèm theo id cho nút update để tý bấm update chính xác
const editStart = id => {
    http.readPost(id).then(res =>{
        document.querySelector('#title').value = res.title
        document.querySelector('#description').value = res.description
        document.querySelector('#btn-edit').dataset.id = id
        //bật btn-group lên và tắt nút add đi
        document.querySelector('#btn-group').classList.remove('d-none')
        document.querySelector('#btn-group').classList.add('d-flex')
        document.querySelector('#btn-add').classList.add('d-none')
    })
}

//edit end
const editEnd = (id,post) =>{
    http.updatePost(id,post).then(res =>{
        return clearForm()
    }).then(()=>{
        alertMsg('Đã cập nhật thành công')
    })
    
}

//remove 
const remove = id =>{
    http.deletePost(id).then(res =>{
        return clearForm()
    }).then(()=>{
        alertMsg('Đã xóa thành công')
    })
}


//tạo function init post
const initPost = () => {
    renderAllPost()

    //add 1 post lên api và cập nhật ui
    document.querySelector('form').addEventListener('submit',event=>{
        event.preventDefault()
        const title = document.querySelector('#title').value
        const description = document.querySelector('#description').value
        add({title,description})
    })
    //Edit start
    document.querySelector('#list').addEventListener('click', event => {
        if(event.target.classList.contains('btn-start-edit')){
            editStart(event.target.dataset.id)
        }
    })

    //nút back
    document.querySelector('#btn-back').addEventListener('click', event => {
        event.preventDefault()
        clearForm()
        document.querySelector('#btn-edit').dataset.id = ''
        //hiển thị lại nút add, ẩn nút back và edit
        document.querySelector('#btn-group').classList.add('d-none')
        document.querySelector('#btn-group').classList.remove('d-flex')
        document.querySelector('#btn-add').classList.remove('d-none')
    })

    //edit end
    document.querySelector('#btn-edit').addEventListener('click',event=>{
        event.preventDefault()
        const title = document.querySelector('#title').value
        const description = document.querySelector('#description').value
        const id = event.target.dataset.id
        editEnd(id,{title,description})
    })

    //remove post từ api và cập nhật lên list
    document.querySelector('#list').addEventListener('click', event => {
        if(event.target.classList.contains('btn-remove')){
            const titlePost = event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.textContent
            const isConfirmed = confirm(`Do you want to remove ${titlePost}`)
            if(isConfirmed){
                remove(event.target.dataset.id)
            }
        }
    })
}




//FUNCTION
//script
window.addEventListener('DOMContentLoaded', initPost)


//15 
//bước cuối cùng là build ra để xài
//bật terminal gõ npm run build tạo file dist và kết thúc chương trình
