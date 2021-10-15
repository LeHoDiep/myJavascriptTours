'use strict'
console.log('Bài 6:Hàm-Function');
//Bài 6:Hàm-Function
// Hàm được chia làm 2 loại
//1.Khai báo hàm (function Declaration)
hoisted(); //*function Declaration bị hoisting
// dùng trước khai báo sau
// vậy nên mới có việc khai báo tên trước code sau, xài ở giữa
function hoisted(){
    console.log('function Declaration hoisting');
}
//2.Biểu thức hàm(function Expression)
// handle1();//*Uncaught TypeError: handle1 is not a function
var handle1 = function (){
    console.log('function Expression không hoisting');
}
handle1();//*function Expression không hoisting

// IIFE(immediately invokable Function Expression)
// (khởi tạo và thực thi function ngay sau đó)
;(function(){
    let a = 1;
    let b = 2;
    console.log(a+b);
})()
 let a = 3;//IIFE giúp mình gói lại chạy đoạn code đó và
 //vẫn có thể khai báo trùng tên được
 //nếu thiếu dấu ; , rơi vào trường hợp phía trên có 1 function
 //vừa khai báo nhưng chưa chạy thì nó sẽ chạy hàm đó liền
 //và lỗi dòng này lúc này nó hiểu là function trên đang () để chạy code


//  Anonymous function
// callback: hàm nhận 1 hàm làm đối số (parameter)
//          thì hàm ở parameter đó gọi là callback function
// function1(function2())   //function2() là callback function
setTimeout(function(){
    console.log('tôi là anonymous function trong setTimeout')
},1000)

// Arrow Function Hàm rút gọn (dùng thay thế cho function Expression nhanh hơn)
//                                               anonymous function
//  không phụ thuộc this và không thể dùng làm function Declaration
//  Không có this nên nó lấy cái this ở Global chính là window
//  vd1:
//bật use strict để demo
function handle2(){
    console.log(this); 
}

const handle3 = ()=>{
    console.log(this);
}
handle2() //*undefined
handle3()//*windowObject
//----------------------------------

//vd2: trong ví dụ này mình k để name vì this.name có thể thành windowns.name
var person = {
    fullName: 'Điệp đẹp trai',
    // function express với this
    getNameByFunctExpr: function(){
        console.log(this.fullName);
    },
    // arrow function express với this
    getNameByArrowFunct: () => {
        console.log(this.fullName);
    },
}

person.getNameByFunctExpr();  //*'Điệp đẹp trai'
person.getNameByArrowFunct(); //*undefined

// Ngoài ra arrow function sẽ không gọi được với new/ cũng như không có super

// Phân biệt tham số(parameter) và đối số(argument)
function handle4(a,b){          //a và b gọi là tham số
    return a + b;
}
handle4(2,4)                    //2 và 4 gọi là đối số
// tham số mặt định (DEFAULT PARAMETER)
//  khai báo 1 parameter gắn giá trị nếu như y 
//  không được gán thì sẽ lấy giá trị default đó
function handle5(x, y = 10){
    console.log(x +' '+ y)
}
handle5(5);//*5 10  
handle5(5,7);//*5 7

// Tham số còn lại (Rest Parameter)
// vd1:
function handle6(a,b,...restValue){
    console.log(restValue); //luôn luôn là mảng
}
handle6(1,2,3,4); //* [3, 4] a = 1 , b = 2
handle6(3,2,1,3,4,2,2);//*[1, 3, 4, 2, 2] a = 3, b = 2
// vd2:
function handle7(a,b,...restValue){
    let result = 0;
    for (const item of restValue) {
        result += item;
    }
    return result;
}

console.log(handle7(1,2,3,4,5));//*3+4+5 = 12


