// 'use strict'
console.log("Bài 1: Khai báo biến , Scope, hoisting"); 
//var: ngày xưa ES chỉ có var thôi, không có let như bây giờ
//  reassigning:
//  Khai báo và gán biến
var name = 'Điệp'
console.log(name); //*Điệp
name = 'Điệp đẹp trai' //reAssigning
console.log(name); //*Điệp đẹp trai

//  Khai báo và không gán biến
var age 
console.log(age); //*undefined
age = 10;
console.log(age); //*10

//Quy tắc đặt tên:
//  không bắt đầu bằng số, 
//  bắt đầu bằng chữ cái ,
//  nguyên tắc cammelCase,Undercore,Pascal case(UpperCammel)
//  được phép dùng _ và $ ở đầu

//Hoisting với var (Hoisting: đưa lên trên)
//  nếu ta dùng
console.log(msg); //*undefined
var msg = 'Hello';

//  đoạn code trên sẽ tương đương đoạn code sau:
//      var msg;
//      console.log(msg); //*undefined
//      msg = 'Hello';

//NormalMode/UseStrictMode
//  js có 2 chế độ code ở normal code 
//      ta có thể khai báo biến mới không cần var
message = 'Thông Báo'
console.log(message); //*Thông Báo
//  nhưng nếu useStrict thì sẽ không thành công ngay

//let: (ES6 trở lên),const(hằng số)
//  giống var nhưng sẽ không bị hoisting
//      console.log(msg1); //*error
//      let msg1 = 'Hello';

//const là hằng số nhưng với OBJECT lưu ý điều này
const profile =  {name: 'Điệp'}; //hằng số với địa chỉ của object
                                 //trong vùng nhớ
                                 //nên thay đổi properties bình thường
profile.name = 'Đẹp trai';
//  profile = {name : 'Điệp đẹp trai'} //sai
console.log(profile.name);//*Đẹp trai

//  tương tự với ARRAY
const array1 = [1,2,3,4,5]; // hằng số địa chỉ không phải giá trị 
                            //bên trong
array1.push(6); // nhét 6 vào cuối
console.log(array1); //*(6) [1, 2, 3, 4, 5, 6]

//Scope: trong js có 3 loại scope
//  Global Scope : toàn cục
//  Function Scope : trong hàm
//  Block Scope : cục bộ

//  var sẽ KHÔNG bị can thiệp bởi block Scope
if(true){
    var x = 10;
}
console.log(x);//*10 xuyên block scope
//  let/const thì có blockScope

//let/const: không bị hoisting  |var : bị hoisting(use strict)
//           có blockScope      |      không có blockScope















