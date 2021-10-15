// Thuộc tính prototype sử dụng rộng rãi trong js
// mọi constructor function có sẵn trong js đều sử dụng nó

//Tổng kết các khái niệm như sau:
//-[[Prototype]] là 1 thuộc tính ẩn trong object(function).đại diện cho prototype thực tế
//-__proto__ là get/set truy cập của [[Prototype]]
//-thuộc tính 'prototype' tồn tại trong constructor function nó là 1 thuộc tính bình thường
//      không phải là [[Prototype]]. nó giúp ta kế thừa khi tạo object từ constructor function

//Object.prototype
//      object rỗng
let obj = {}
console.log(obj.toString()) //[object Object]
//đến đây ta phát hiện ra rằng , ta không hề tạo method toString nhưng sao ta vẫn có
//      chúng ta thường nói rằng nó có sẵn, nhưng nó có sẵn như nào 
//let obj = {} thật ra là let obj = new Object{}
//      mà bên trong Object.prototype có method toString nên obj đã được kế thừa từ constructor này
//      thông qua thuộc tính prototype


//bên trong obj sẽ có __proto__ chính là đại diện cho prototype đã kế thừa từ Object
//          nên trong __proto__ sẽ có toString
//          và vậy nên __proto__ là Object.prototype
//  ta có thể kiểm tra bằng cách
console.log(obj.__proto__ === Object.prototype) //*true

//không còn 1 [[Prototype]] bên trong Object.prototype nữa vì Object là nguyên thủy nhất rồi 
//                          không kế thừa của ai
console.log(Object.prototype.__proto__) //null
console.log(obj.__proto__.__proto__) //null

//các prototype được xây dựng sẵn
//vd: Array,Date,Function cũng giữ trong mình các phương thức có sẵn trong prototype
//vd:
let arr = [1,2,3] // let arr = new Array()
// arr này không có prototype vì k phải constructor function
//  nhưng arr có __proto__ là đại diện cho [[Prototype]] đã kế thừa từ prototype Array
console.log(arr.__proto__ === Array.prototype) //true
// console.log(Array.prototype) bên trong prototype của Array vẫn sẽ có __proto__ của object
// vì array bản chất là object tạo thành, là con trỏ
console.log(arr.__proto__.__proto__ === Array.prototype.__proto__);//true
console.log(arr.__proto__.__proto__ === Object.prototype);
//vì vậy bên trong arr.__proto__: là kế thứa prototype của Array
//              nhưng Array.prototype.__proto__ là kế thừa prototype của Object

//==> mọi thứ đều kế thừa từ Object , hay nói cụ thể thì Object là đứng đầu nhánh trong sơ
// đồ phả hệ kế thừa ta có thể tham khảo hình này ở mục Other built-in prototypes dưới đây
//https://javascript.info/native-prototypes

//có trường hợp Object có các method trùng nhau của các prototype
//ví dụ như toString cả Object và Array đều có 
//vậy thì arr sẽ chọn cái gia phả gần hơn, giống cha chứ k giống ông nội nha
console.log(Array.prototype)
console.log(Object.prototype)
console.log(Array.prototype.toString() === arr.__proto__.toString()) // true


//Primitives - kiểu nguyên thủy
//String,number, boolean không phải là các object nhưng chúng ta vẫn có thể
//truy cập chúng bằng cách dưới đây
let a = 1
console.log(a.toString())
console.log((2).toString())
console.log(Number(2).toString())
//những thằng này được coi là object ẩn và jsEngine tối ưu chúng , 
// vì thế ta vẫn có String.prototype Number.prototype Boolean.prototype

// có thể nói rằng String , number, boolean là nguyên thủy không phải là object, không thể bị tham chiếu
//  nhưng bản chất thì là object
//lưu ý: null và undifined không có các Object Wrapper chúng là giá trị đặt biệt, vậy nên k có thuộc tính prototype




//chúng ta có thể thay đổi prototype, và khi thay thế/ thêm thì các object được tạo sẽ có method đó để sử dụng

String.prototype.show = function (){
    console.log(this)
}

let str = 'hello'
str.show()

//đây là 1 điều k nên làm , vì prototype như này gọi là prototype toàn cục
//khi làm thế này thì tất cả các String từ trước hay sau khi làm điều này đều có thể .show được
//về sau rất dể đè code và gây ra sai lệch

//trong lập trình hiện đại , người ta ứng dụng điều này cho 1 việc duy nhất là polyfilling

// polyfilling: tự code các method mà ES cũ không hổ trợ
// ví dụ phiên bản trước [].every() không có
//   ta dùng Array.prototype.every = function(){} để thêm method này


//ngoài ra ta còn có thể mượn prototype của nhau

//ví dụ 1 object có thể mượn được method join() của Array.prototype vì join chỉ quan tâm index mà thôi
obj = {
    0: 'hello',
    1: 'xin chào',
    2: 'ni hào ma',
    length: 3 // join cần length và index
}
//cố tình khai báo thằng obj kha khá giống array để join hoạt động được
obj.join = Array.prototype.join

obj = obj.join(',');
console.log(obj) //hello,xin chào,ni hào ma

//chiến hơn nữa, ta biết rằng Object là đỉnh của nhánh rồi nên nó sẽ không có .__proto__
console.log(Object.prototype)//không có __proto__
//nhưng ta có thể cho nó có thêm __proto__ là Array.prototype (cho Object kế thừa lại Array)
//Cha cho con kế thừa và phát triễn, con kế thừa lại
Object.__proto__ = Array.prototype
console.log(Object.__proto__)

//và yên tâm là Object.prototype sẽ không bị mất sau khi kế thừa kiểu này