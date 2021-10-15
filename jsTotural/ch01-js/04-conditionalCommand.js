console.log('Bài 4: Câu lệnh điều kiện - Conditional command');
// Bài 4: Câu lệnh điều kiện - Conditional command
// IF(condition clause)
if(true){
    console.log('do something');
}
// IF ELSE
let a = 8
if(a < 7){
    console.log(1);
}else{
    console.log(2);
}
//* 2
let b = 8
if(b < 7){
    console.log(1);
}else if(b > 7){
    console.log(2);
}else if(b == 8){
    console.log(3);
}else{
    console.log('order result');
}
//* 2 vì code chạy từ trên xuống thấy thỏa điều kiện a > 7 trước

// SWITCH CASE
var choice = 1;
switch(choice){
    case 1:{
        console.log('Hello 1');
        break;
    };
    case 2:{
        console.log('Hello 2');
        break;
    }
    case 3:{
        console.log('Hello 3');
        break;
    }
    default:{
        console.log('order choose');
        break;
    }
}
//  *thiếu break thì sẽ bị trôi lệnh xuống case bên dưới
//  *thiếu default thì sẽ không có gì xảy ra khi nhập ngoài các case
//  *các case và default có thể đảo vị trí tùy thích

//NÂNG CAO: 
//  Toán tử  ba ngôi

let c; //undefined là falsy//null cũng vại
c ? console.log('có giá trị') : console.log('Không giá trị');//*Không giá trị

//  Logic đại pháp
!c && console.log('c không có giá trị');
//      nhắc lại: && luôn đi tìm false nhưng nếu tìm hoài 
//      k ra thì sẽ dừng lại ở mệnh đề cuối
//      dòng code trên tương đương với đoạn code dưới đây
//      mà thiếu phủ định
 if(!c){ //c không có giá trị là false mà ! nên là true -> true thì chạy command
     console.log('c không có giá trị');
 }





