// //PROTOTYPE
// //kiểu 1 prototype: không dùng class
// //chỉ kế thừa bằng các prototype từ constructor function mà thôi
// //tạo constructor function Student
// function Student(name, birthday){
//     this.name = name
//     this.birthday = birthday
//     this.id = new Date().toISOString()
// };
// //ta chia ra làm 2 object đối lập
// //---Store: add getStudents
// //---renderUI: add 
// //STORE
// function Store(){}
// Store.prototype.getStudents = function (){
//     return JSON.parse(localStorage.getItem('students')) || []
// }
// Store.prototype.add = function(student){
//     const students = this.getStudents(); // store.getStudent
//     students.push(student)
//     localStorage.setItem('students', JSON.stringify(students))
// }
// Store.prototype.remove = function(id){
//     let students = this.getStudents();
//     let indexRemove = students.findIndex(student =>student.id === id )
//     students.splice(indexRemove,1)
//     localStorage.setItem('students', JSON.stringify(students))
// }
// Store.prototype.getStudent = function(id){
//     let students = this.getStudents();
//     return students.find(student => student.id === id)
// }

// //UI
// function renderUI(){};//constructor rỗng, k kế thừa từ bất cứ ai,rỗng hoàn toàn chỉ có
// //  __proto__ của object mà thôi

// renderUI.prototype.add = function (student){
//     const store = new Store()
//     const students = store.getStudents()
//     const tr = document.createElement('tr')
//     tr.innerHTML = `
//     <td>${students.length + 1}</td>
//     <td>${student.name}</td>
//     <td>${student.birthday}</td>
//     <td><button class="btn btn-sm btn-danger btn-remove" data-id="${student.id}">Xóa</td>
//     `
//     document.querySelector('table tbody').appendChild(tr)
//     document.getElementById('name').value = ''
//     document.getElementById('birthday').value = ''
// }
// renderUI.prototype.clear = function(){
//     document.querySelector('table tbody').innerHTML = ''

// }
// renderUI.prototype.render = function(){
//     const store = new Store()
//     const students = store.getStudents()
//     let html = students.reduce((result, current, currentIndex)=>{
//         return result + `
//         <tr>
//             <td>${currentIndex + 1}</td>
//             <td>${current.name}</td>
//             <td>${current.birthday}</td>
//             <td><button class="btn btn-sm btn-danger btn-remove" data-id="${current.id}">Xóa</td>
//         </tr>
//         `
//     },'')
//     document.querySelector('table tbody').innerHTML = html
// }
// renderUI.prototype.alert = function(message, type = 'success'){
//     const alert = document.createElement('div')
//     alert.className = `alert alert-${type}`
//     alert.innerHTML = message
//     document.getElementById('noitification').appendChild(alert)
//     setTimeout(() => {
//         alert.remove()
//     }, 2000);
// }
// //PROTOTYPE


//CLASS
//tạo constructor function Student
class Student{
    constructor(name, birthday){
        this.name = name
        this.birthday = birthday
        this.id = new Date().toISOString()
    }
};
//ta chia ra làm 2 object đối lập
//---Store: add getStudents
//---renderUI: add 
//STORE
class Store{
    getStudents(){
        return JSON.parse(localStorage.getItem('students')) || []
    }
    add(student){
        const students = this.getStudents(); // store.getStudent
        students.push(student)
        localStorage.setItem('students', JSON.stringify(students))
    }
    remove(id){
        let students = this.getStudents();
        let indexRemove = students.findIndex(student =>student.id === id )
        students.splice(indexRemove,1)
        localStorage.setItem('students', JSON.stringify(students))
    }
    getStudent(id){
        let students = this.getStudents();
        return students.find(student => student.id === id)
    }
}


//UI
class renderUI{
    add(student){
        const store = new Store()
        const students = store.getStudents()
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${students.length + 1}</td>
        <td>${student.name}</td>
        <td>${student.birthday}</td>
        <td><button class="btn btn-sm btn-danger btn-remove" data-id="${student.id}">Xóa</td>
        `
        document.querySelector('table tbody').appendChild(tr)
        document.getElementById('name').value = ''
        document.getElementById('birthday').value = ''
    };
    clear(){
        document.querySelector('table tbody').innerHTML = ''
    };
    render(){
        const store = new Store()
        const students = store.getStudents()
        let html = students.reduce((result, current, currentIndex)=>{
            return result + `
            <tr>
                <td>${currentIndex + 1}</td>
                <td>${current.name}</td>
                <td>${current.birthday}</td>
                <td><button class="btn btn-sm btn-danger btn-remove" data-id="${current.id}">Xóa</td>
            </tr>
            `
        },'')
        document.querySelector('table tbody').innerHTML = html
    };
    alert(message, type = 'success'){
        const alert = document.createElement('div')
        alert.className = `alert alert-${type}`
        alert.innerHTML = message
        document.getElementById('noitification').appendChild(alert)
        setTimeout(() => {
            alert.remove()
        }, 2000);
    };
};//constructor rỗng, k kế thừa từ bất cứ ai,rỗng hoàn toàn chỉ có
//  __proto__ của object mà thôi



//CLASS

//app
document.querySelector('form').addEventListener('submit',event=>{
    const store = new Store()
    const ui = new renderUI()
    event.preventDefault()//chặn submit lại
    const name = document.getElementById('name').value
    const birthday = document.getElementById('birthday').value
    let newStudent = new Student(name,birthday)
    ui.add(newStudent)//hiển thị sự add mới lên màn hình
    store.add(newStudent)//lưu student vào local
    ui.alert(`Bạn vừa thêm thành công ${name}`)
}) 

window.addEventListener('DOMContentLoaded',()=>{
    const ui = new renderUI()
    ui.render()
} )

//nhớ rằng event không thể click dính các dom do js tạo ra , nên ta phải lắng nghe sự kiện, từ tbody đã có sẵn
document.querySelector('table tbody').addEventListener('click', event =>{
    if(event.target.classList.contains('btn-remove')){
        
        const idRemove = event.target.dataset.id
        const student = new Store().getStudent(idRemove)
        const isconfirm = confirm(`Bạn có muốn xóa sinh viên ${student.name}`)
        new Store().remove(idRemove)
        new renderUI().clear()
        new renderUI().render()
        new renderUI().alert(`Bạn vừa xóa thành công ${student.name}`)
    }
})