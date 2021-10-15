console.log('Bài 8: Call-Apply-Bind');
// chỉ có cách function mới có 3 hàm này
// => 3 hàm này chỉ chơi với function mà thôi
const people = {
    print(age, location){
        console.log(this.name + ' ' +age + ' ' +location);
    }
}
people.print(10,'TP HCM');
//this lúc này là people nhưng trong people lại k có name nên là //*undefined 10 TP HCM
// mình có thể chuyển hướng this về 1 object khác có name bằng call-apply-bind
// tạo 1 object mới có properties là name
var diep = {name:'Điệp đẹp trai'}
//1.call 
people.print.call(diep,10,'TP HCM');      //Điệp đẹp trai 10 TP HCM
//2.apply:phần sau phải là mảng
people.print.apply(diep,[10,'TP HCM']);   //Điệp đẹp trai 10 TP HCM
//3.bind : sẽ trả ra 1 function mới có this là object được truyền vào kèm parameter cũ
 
people.print.bind(diep,10,'TP HCM')();    //Điệp đẹp trai 10 TP HCM
//  hoặc
var handle1 = people.print.bind(diep,10,'TP HCM'); 
handle1();                                //Điệp đẹp trai 10 TP HCM
//  hoặc
var handle1 = people.print.bind(diep);    //Điệp đẹp trai 10 TP HCM
handle1(10,'TP HCM');


//ỨNG DỤNG
//
var people2 = {
    lname : 'Điệp quá đẹp trai',
    printInfor(){
        setTimeout(function(){
            console.log(this.lname);
        })//vì đây là funtion declaration nên this này hiểu là windows
    },
}
people2.printInfor();//*undefined

//nhưng nếu ta áp dụng bind thì sao
var people2 = {
    lname : 'Điệp quá đẹp trai',
    printInfor(){             //method này có this
        setTimeout(function(){//function declaration trong method thì không
            console.log(this.lname);
        }.bind(this), 0)//ta bind this vào trong function declaration
    },
}
people2.printInfor();//*'Điệp quá đẹp trai'

//check doan code sau
const handle = {
    name:'Diep',
    age: '25',
    show(){
        let func = function () {
            console.log(this)
        }
        let newFunc = func.bind(this)
        setTimeout(newFunc, 1000);
    }
}
handle.show()