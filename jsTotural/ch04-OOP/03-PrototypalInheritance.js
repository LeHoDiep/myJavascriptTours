// Prototypal Inheritance : kế thừa nguyên mẫu
// [[Prototype]]
// trong js 1 số thuộc tính ẩn trong obj được gọi là [[Prototype]]
//          dù bị ẫn nhưng có nhiều cách sử dụng nó 
//          một trong những cách dùng là thông qua getter và setter là _proto_
//          vd: tạo object rabbit kế thừa object animal

let animal = {
    eats: true,
    walk(){
        console.log('tao chạy bộ nè')
    }
}

let rabbit = {
    jumps: true,
}

let longeEar = {
    ear: 'long',
    __proto__: rabbit
}
rabbit.__proto__ = animal;    //set rabit.[[Prototype]] = animal
console.log(rabbit.jumps)
console.log(rabbit.eats)


//mình co thể Prototype Chain(dây kế thừa/gia phả) nhiều tầng prototype trong object

console.log(longeEar.jumps)
console.log(longeEar.eats)
longeEar.walk()

//Lưu ý với __proto__
/* trước es6(2015) không có cách chính thống nào truy vào prototype của 1 object
   vậy nên hầu hết các trình duyệt đều thêm vào 1 accessor property(get/set) được gọi là __proto__
   __proto__ không phải thuộc tính của [[Prototype]] mà là getter và setter của nó
   __proto__ tính đến năm 2021 thì đang được loại bỏ, k còn khuyên dùng nữa
                nhưng vẫn còn giữ lại trên 1 số lý do chưa cập nhật/ hay gì đó ai biết :))
    chúng ta nên thay thế nó bằng Object.getPrototypeOf()/ Object.setPrototypeOf() (ES6)
*/

//Giá trị của this trong Proto

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

let user = {
    __proto__: student,
    isUser: true
}
user.fullName = 'Khủng Long'
//lúc này ta biết rằng nó đang chạy set FunllName , nhưng this này của ai
//this luôn đại diện cho thằng phía trước dấu .
//nên sẽ là của user, tức là user sẽ tạo ra 1 lastName và 1 FirstName mới k chung với student
console.log(user)
console.log(student)

//dùng Object.keys() sẽ log ra đc các key không có prototype
//dùng forin thì key của object và của proto sẽ log ra hết 

//ngoài việc kế thừa chúng ta còn có thể bỏ các thuộc tính kế thừa ra khỏi object
//bằng obj.hasOwnProperty(key): return true nều key đó thuộc object k phải kế thừa

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

let user = {
    __proto__: student,
    isUser: true
}

//trong đây ta có Proto chain sau: user kế thừa student, student kế thừa null
//null typeOf là Object
//nên ta sẽ có obj.hasOwnProperty(key) dù không khai báo lần nào vì nó có sẳn trong null
//nhưng nó bị enumerable: false nên không được liệt kê trong forin