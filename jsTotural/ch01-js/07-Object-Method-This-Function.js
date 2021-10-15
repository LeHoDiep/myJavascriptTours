// 'use strict'
console.log('Bài 7:*Object method, this và function nâng cao');
//*Object method, this và function nâng cao
//*Object : đối tượng
    //  tất cả những gì sờ và đếm được thì gọi là object
    //  trong mỗi object sẽ có những đặc tính mô ta gọi là properties
    //  mỗi thằng vật thể thường có hành động gọi là method(hàm trong object|class)
let promotionBoy1 = {
    nickName: 'Lê Mười Điệp',   //Properties
    age: 22,                     //Properties
    // hành động chào khách hàng được khai báo dưới dạng Function Expression 
    //                              với biến chứa là 1 properties của object
    sayHi:function(){
        console.log('Quẹo lựa quẹo lựa')
    }
    // ta vẫn có thể tạo method bằng function declaration
}
promotionBoy1.sayHi();

// ngoài ra ta còn có thể thêm 1 method hay 1 properties sau khi đã tạo object
promotionBoy1.chuiKhach = function(){
    console.log('Hỏi giá không mua hả mày');
}
promotionBoy1.salary = 1000;
promotionBoy1.chuiKhach();
console.log(promotionBoy1.salary);

// ta có thể viết method phong cách shortHand cho object literal(là object {})
let promotionBoy3 = {
    nickName: 'Lê Mười Điệp', 
    age: 22,                 
    sayHi(){
        console.log('Quẹo lựa quẹo lựa')
    }
}
    //trên thực tế thì 2 cách viết method có khác nhau về 
    //mặt kế thừa nhưng mình chưa tìm hiểu về OOP
    //nên có thể nói rằng nó thật sự không khác biệt nhiều 
    //nhưng lại đem đến hiệu hả rút gọn

//*THIS trong method

let promotionBoy4 = {
    nickName: 'Lê Mười Điệp', 
    age: 22,                 
    showName(){
        console.log(this.nickName); 
    }
}
//  *this chính là Object trước dấu . khi ta sử dụng
//      cụ thể ta có(khái niệm này thuộc về js không giống java...)
promotionBoy4.showName();//* this chính là promotionBoy2

// ?**có thể truy cập object mà không cần this, tại sao ta lại dùng this
let promotionBoy5 = {
    nickName: 'Lê Mười Điệp 5', 
    age: 22,                 
    showName(){
        console.log(promotionBoy5.nickName); //truy cập object k dùng this
    }
}
//  nếu như vậy thì khi ta copy
let promotionBoy6 = promotionBoy5;
promotionBoy5 = null //cần biến này làm gì đó, nên đã ghi đè lên, 
                     //xem như mất vùng nhớ promotionBoy5 cũ
//promotionBoy6.showName();//lúc này nó sẽ tìm về vùng nhớ nickName của promotionBoy5
                    //promotionBoy5 là null nên k có nên *TypeError
                    //còn dùng this thì nó sẽ móc vào vùng nickName đã copy từ trước

//  *This không bị rằng buộc
//      this trong js khác hầu như toàn bộ với this trong các ngôn ngữ khác

function handle1(){
    console.log(this.name);//this lúc này được hiểu là global object (window object)
}
//không khác gì đang log this ở ngoài mà k ở trong hàm vậy
handle1(); //*'' nếu k có use strict vì đc hiểu là window.name
//nhưng nếu có strict mode là nó lỗi liền vì lúc này this là Undefined không có properties

//tóm lại this không bị rằng buộc, nếu
//             không strict mode: thì có thể nó được hiểu là global object(window)
//             có    strict mode: thì có thể nó được hiểu là undefined
// arrow function không dùng this
// this phụ thuộc vào lúc chạy code | không phụ thuộc vào lúc tạo
//             không theo object chứa nó , mà theo object gọi nó(java phụ thuộc theo class)
// ưu điểm của concept this khi run-time như trên là: tạo 1 chức năng có thể dùng cho nhiều object
//                                                    khác nhau
// nhược điểm là : tính linh hoạt cao người code dể mắc sai lầm

let promotionBoy7 = {
    nickName: 'Lê Mười Điệp', 
    age: 22,                 
    showName(){
        let arrow = ()=>{
            console.log(this.nickName); 
        }
        
        arrow();//this nằm trong arrow function nên nó sẽ giống như đang chạy dòng 94 ở showName()
        //mà dòng object bọc showName là promotionBoy7 nên nó sẽ là promotionBoy7.nickName
    }
}
promotionBoy7.showName();//'Lê Mười Điệp'
//nhưng nếu thay function arrow thành 1 function declaration thì nó hiều thich là undefined
//                                          nên lỗi ngay
let promotionBoy8 = {
    nickName: 'Lê Mười Điệp', 
    age: 22,                 
    showName(){
        var arrow = function (){ // thay thử thành function declaration/function Expression
            console.log(this.nickName); 
        }
        arrow();
    }
}
promotionBoy8.showName(); //*typeError nếu có strict mode vì this 
                                        //trong function declaration/function Expression là k có
                          // không strict mode thì undefine vì nó tưởng là this là window
                          //                    window.nickName


//*THIS trên một html event handler nằm đâu trỏ đó(this trong btn onclick thì this là btn đó )
// demo dòng 44 html
// {/* <button onclick="this.style.display='none';">this trong html</button> */}
//                      this này là btn object

// THIS TRONG CALLBACK
//vd1:
let promotionBoy9={
    nickName: 'Lê Mười Điệp', 
    age: 22,                 
    showName(){
        console.log(this) //ra object promotionBoy9
        setTimeout(function (){ // thay thử thành function declaration/function Expression
            console.log(this);  //this trong callback sẽ không là promotionBoy9 mà là window
        },1000);                //nếu muốn truy cập bằng this vào object thì dùng arrow function
    }
}
promotionBoy9.showName();

//dùng arrow function cho call back để truy cập vào object
let promotionBoy10={
    nickName: 'Lê Mười Điệp', 
    age: 22,                 
    showName(){
        console.log(this) 
        setTimeout(() => { 
            console.log(this);
        },1000);           
    }
}
promotionBoy10.showName();//ra được 2 promotionBoy10 object 143/145

// this trong callback không đề cặp đến function chứa nó
//      mà đề cặp đến object gọi function đó
//  vd: tạo 1 callback Function có object 
function handle2 (funct){
    let user = {
        name: 'Điệp đẹp trai quá',
        getfuncti: funct   //function này nằm trong user object, đích thị đây là method
    }
    return user.getfuncti();
}
// xài
handle2(function(){
    console.log(this);
}); //*{name: "Điệp đẹp trai quá", funct: ƒ} (strict or not)
    // vì nó hiểu rằng function này là 1 method của object user 
    //nên this này đại diện  cho user

handle2(()=>{
    console.log(this); //*window                 
});             
//vì this nó là arrow funct nhìn lên thấy handle2 không trong windows object
//tóm lại là this trong method thì đại diện cho object gọi
//           this trong function có strict là undefine| không strict là windows
//           this trong arrow function là sẽ theo ngữ cảnh gọi mà chọn object ôm command gọi


// TÓM LẠI:
//  Method: function được lưu trữ trong object
//  Method cho phép object hành động như là object.doSomeThing()
//  Method có thể dùng this để tham chiếu 
        //(method dùng bằng arrowFunction thì this là undefined nếu 
        //lúc gọi k đc gói trong object nào)
//  Giá Trị This được xác định lúc runtime:
//       function khi khai báo nó có thể dùng this, nhưng this chỉ có khi function đó được gọi
//       một function có thể copy giữa các object
//       khi một function được gọi dưới dạng method: object.method() thì this trong suốt quá trình
//                                                                                      là object
//  ***Arrow function không có this: khi this được truy cập bên trong arrow function
//                                                         nó sẽ được lấy bên ngoài lúc gọi


// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************

// NÂNG CAO: nhưng sẽ có trong phỏng vấn
// Higher Order Function : là function nhận vào parameter là 1 function
                        //    hoặc return về 1 function
//viết hàm nhận vào parater là a, return 1 hàm  có tham chiếu là b
//                                              hàm này return ra kết quả a + b
const sumDemo = (a)=>{
    return (b)=>{
        return a + b;
    };
}
//rút ngắng đoạn code trên như sau
const sum = a => b => a + b;
console.log(sum(1)(2));
// như vậy sum(1) được xem như 1 hàm nên ta cần () để nhận parameter b
// function nhận vào parameter là 1 function
                        //    hoặc return về 1 function => hàm này là HOF

//HOF: có 3 khái niệm chính CallBack Function | Closue | Currying
//  1. CallBack Function : hàm có parameter là 1 function
//      js là ngôn ngữ hướng sự kiện nên thay vì chờ chạy từ trên xuống
//                                      nó sẽ thực thi các tác vụ khác

//    vd: sự kiến click trong addEvenListener
//      forEach là 1 call back
const array1 = [1,3,4,5];
array1.forEach((item,index) => {
    console.log(index +' '+item);
});

//    vd: đọc file nodeJS
//      hay muốn xử lý bất đồng bộ điển hình như đọc 1 file quá nặng
//      ta muốn đọc file đó xong mới thao tác gì đó
// fs.readFile('./product', (err,data) =>{
//     if(err) throw err;
//     console.log(data);
// })

//  2. Closure: 
//      2.1: lexical scoping: dùng biến được khai báo ở function cha trong function con
//      2.2: nếu function cha return function con(nested funct) thì ta gọi là Closure
//      vd:
const initIdentity = () =>{
    let newId = 0;
    const increase = () => ++newId; //lexical scoping
    return increase; 
}
//      việc return function con(nested funct) như này gọi là Closure
console.log(initIdentity()); // ta được () => ++x; // vì này là return ra hàm mà phải dùng
console.log(initIdentity()()); //*1
console.log(initIdentity()()); //*1 vẫn đc 1 vì mỗi lần là gọi lại initIdentity
                               // mỗi lần gọi là nó giải phóng vùng ram ở newId xong
                               //       tạo lại rồi set về 0
        //  mỗi lần gọi là 1 lần initIdentity mới
//      nhưng nếu ta tạo biến rồi tham chiếu giá trị của function này
let closueDemo = initIdentity();
console.log(closueDemo());//1
console.log(closueDemo());//2
console.log(closueDemo());//3
console.log(closueDemo());//4
        //initIdentity--newId--increase
        //nếu gọi lại initIdentity thì cả đám cùng mất
        // nhưng ta dùng closueDemo để giữ lại newId--increase--closueDemo
        //              nên có gọi lại initIdentity thì newId vẫn k mất
//      thì biến newId sẽ có liên kết với function con đã được closueDemo tham chiếu qua reuturn


//  3.Currying:
        // kỹ thuật chuyển đổi từ 1 function có nhiều tham số thành
                                //   những function liên tiếp có 1 tham số
//      vd: hàm sum|sumDemo đã viết ở trên là 1 hàm đã dùng Currying
//              muốn làm Currying phải áp dùng Closure vì nó phải dùng biến từ function cha nó

let demo = sum();
console.log(demo(1)); //NaN vì 1 + undefined

//      vd: viết 1 hàm xữ lý 3 bài toán sau :
            // tìm các số từ 0 - 10 và là số lẽ
            // tìm các số từ 0 - 20 và là số chẵn
            // tìm các số từ 0 - 30 và là số chia 3 dư 2
//chỉ dùng callback
function handle3(num, funct){
    let result = [];
    for(let i = 0; i<= num ; i++){
        if(funct(i)){
            result.push(i);
        };
    }
    return result;
}
console.log(handle3(10,(number)=>number % 2 == 1))//*[1, 3, 5, 7, 9]
console.log(handle3(20,(number)=>number % 2 == 0))//*[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(handle3(30,(number)=>number % 3 == 2))//*[2, 5, 8, 11, 14, 17, 20, 23, 26, 29]

//kết hợp currying
let handle4 = num => funct =>{
    let result = [];
    for(let i = 0; i<= num ; i++){
        if(funct(i)){
            result.push(i);
        };
    }
    return result;
}
console.log(handle4(10)((number)=>number % 2 == 1))//*[1, 3, 5, 7, 9]
console.log(handle4(20)((number)=>number % 2 == 0))//*[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(handle4(30)((number)=>number % 3 == 2))//*[2, 5, 8, 11, 14, 17, 20, 23, 26, 29]

//xét cho cùng trong trường hợp này dùng currying hay callback thì không khác nhau nhiều
//                      currying còn có vẽ khó đọc hơn
//      nhưng trong react và angular thì currying lại rất hiệu quả

