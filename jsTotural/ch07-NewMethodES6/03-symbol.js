//[Nên ôn lại object method trước khi qua bài này]
// Symbol là gì
//          khái niệm
//        *là đại diện cho một định danh duy nhất kiểu dữ liệu nguyên thủy
//        *được tạo bằng symbol()
//          đút kết
//        *các symbol thì được cam kết duy nhất
//        *symbol không tự động chuyển sang string
//        *cho phép tạo nhiều thuộc tính ẩn trong object
//id thuộc kiểu symbol()
let id = Symbol()
//chúng ta có thể truyền thêm một đoạn mô tả vào symbol(gọi là tên symbol)
//việc này rất hữu ích cho việc debug
let id2 = Symbol('id')//id2 là 1 symbol với mô tả là 'id'

//        *các symbol thì được cam kết duy nhất: ngay cả khi ta tạo nhiều symbol
//                                                               có cùng mô tả
//              //chúng cũng khác nhau về mặt giá trị, mô tả chỉ là cái mark
//                                                      không tác động gì cả
//
//ví dụ: cho lý thuyết này
let id1 = Symbol('id')
console.log(id1 == id2) //false
console.log(id1 === id2)//false

//        *symbol không tự động chuyển sang string
//          hầu hết js hỗ trợ convert  ngầm hiểu sang toString, như alert vậy đó
//          nhưng symbol thì không
// alert(id1)//Cannot convert a Symbol value to a string
// vậy nếu muốn hiển thị 1 symbol thì sao
// alert(id1.toString())//Symbol(id)
//lấy mô tả bằng thuộc tính description
// alert(id1.description)//Symbol(id)



//Thuộc tính "ẩn"
//Symbol cho phép tạo các thuộc tính ẩn của object. các thành phần khác 
//không thuộc code chúng ta không thể truy cập hoặc ghi đè được

//vd:
const initState = ()=>({
    id: 1
})
const state = initState()
//giả sử ta không để ý, vô tình làm thay đổi id thì sao
state.id = 2
//giống như chơi game trên trình duyệt, người dùng có thể mở impact và truy
//cập vào biến của chúng ta
//có thể thay đổi thông tin
//giả sử ta có 1 nhân vật
let character = {
    health : 100 
}
character.health = 1000 //ãi chĩa
//để ngăn sự truy cập như này ta có thể dùng symbol

character = {
    [Symbol('health')] : 100 //[] tạo ra tên kết hợp cho key
}
console.log(character) // không lấy được

//cách để lấy
let health = Symbol('health')
character = {
    [health] : 100 
}
console.log(character[health]) //*100

//*Symbol bị bỏ qua bởi for-in
let user = {
    name: 'Điệp',
    age: 22,
    [Symbol('id')]: 123 //chổ này mà dùng global symbol registry
    //                      thì vừa có thể try cập vừa có thể ẩn prop
    // [Symbol.for('id')]: 123 //chổ này mà dùng global symbol registry
    // 
}

for(let key in user){
    console.log(key)//chỉ log ra name và age là key mà thôi
}
console.log(Object.values(user))    //["Điệp", 22] k có symbol
console.log(Object.keys(user))      //["name", "age"] k có symbol
console.log(Object.entries(user))   //[Array(2), Array(2)] k có symbol

//có 1 cách lấy đc
let clone = Object.assign({},user)
console.log(clone)
/*
{name: "Điệp", age: 22, Symbol(id): 123}
age: 22
name: "Điệp"
Symbol(id): 123 //lấy được dưới dạng 1 key bth, k còn là Symbol đặc biệt
*/



// Global Symbol
// ta biết rằng Symbol tạo cùng giá trị description cũng khác nhau
// nhưng đôi khi ta lại muốn cùng giá trị thì giống nhau
// ta có thể dùng 1 thằng là global symbol registry
//  tạo symbol trước và truy cập sau, đảm bảo việc truy cập lại có thể
//          chính xác
//vd:
 id = Symbol.for('id') //nếu symbol chưa tồn tại thì nó sẽ được tạo
//khi ta muốn đọc lại
 let idAgain = Symbol.for('id')
//ta có thể kiểm tra
console.log(id === idAgain)//true


//Symbol.keyFor chỉ dành cho Global symbol
// giống .description của Symbol bth
// Global symbol vẫn dùng .description bình thường được
console.log(Symbol.keyFor(id))      //id
console.log(Symbol.keyFor(idAgain)) //id
console.log(idAgain.description)    //id
let id3 = Symbol('id')
console.log(Symbol.keyFor(id3))     //undefined

//Hệ Thống Symbol 
//có nhiều method symbol mà js đã sử dụng cho object
//chúng ta có thể đùng nó để tinh chỉnh object
//tham khảo trang này
// https://tc39.es/ecma262/#sec-well-known-symbols