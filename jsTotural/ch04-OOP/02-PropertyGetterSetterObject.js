// có 2 loại thuộc tính trong object:
//          thuộc tính dữ liệu:  value properties
//      thuộc tính bộ truy cập: accessor properties
let student = {
    lastName : 'Điệp',//value properties
    firstName: 'Lê',  //value properties
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
       ;[this.firstName, this.lastName] = value.split(' ')
    }
}
student.fullName = 'Trà Long'
console.log(student)
// {lastName: "Long", firstName: "Trà"}
// firstName: "Trà"
// fullName: "Trà Long"
// lastName: "Long"



//Bộ mô tả (descriptor) của bộ accessor properties sẽ 
//          không có writable và value như value properties
//          nhưng có thêm get và set function
//get: 1 function không có tham số, hoạt động khi thuộc tính được đọc(gọi)
//set: 1 function có tham số,       hoạt động khi thuộc tính được set
//enumerable:
//configurable:




//có thể tạo thêm getter và setter cho object được tạo sẳn
//           thông qua defineProperty

student = {
    lastName : 'Điệp',//value properties
    firstName: 'Lê',  //value properties
}
Object.defineProperty(student, 'fullName',{
    get(){
        return `${this.lastName} ${this.firstName}`
    },
    set(value){
        ;[this.lastName,this.firstName] = value.split(' ')
    }
})
//mặc định sẽ có enumerable là false cho accessor properties
student.fullName = 'Tinh gia'
console.log(student.fullName)
for (const key in student) {
    console.log(key)
}

//getter và setter thông minh:
//vd://giả sử muốn cấm người code gán tên người dùng bé hơn 4
student = {
    get name(){
        return this._name   //return vể 1 cái name ảo ,mình đặt là _name cho có sự phân biệt
    },
    set name(value){
        if(value.length < 4){
            alert('Name is too short')
            return
        }
        this._name = value
    }
}
// student.name = 'Huệ' lỗi liền

student.name = 'Hồng'
console.log(student.name)
console.log(student._name)

//_name: fact là: việc đặt tên có _ ở trước là quy ước ngầm của các dev
// để hiểu ngầm với nhau rằng thuộc tính này sẽ private không cho truy cập