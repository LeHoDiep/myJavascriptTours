//module pattern là gì
//cùng xem qua ví dụ
//ta có function map 
// function map (){
//     const toaDo = [15.00090998,105.12312312]
//     function layToaDo() {
//         return toaDo
//     }
//     return {
//         inToaDo: function() {
//             console.log(layToaDo())
//         }
//     }
// }
//dùng thì
// map().inToaDo()//*(2) [15.00090998, 105.12312312]
//giờ muốn bỏ cái hàm này vào list để dùng đi dùng lại nhiều lần
//chuyển từ project này sang project khác| chuyển giao cho người khác dùng
//giống như myToy

//mình sẽ tạo 1 file tên lid.js và import vào html
//cuối cùng là bỏ đoạn code function map vào lib


//sau khi chuyển function qua lib.js
//người dùng bị giới hạn tên
// let map = 'TP HCM'
//Uncaught SyntaxError: Identifier 'map' has already been declared

//cmt hết dòng trên
//sử dụng
map.inToaDo()//*(2) [15.00090998, 105.12312312]
