//*Cú pháp class căn bản
//constructor function giúp ta tạo ra nhiều object cùng loại 
//nay chúng ta học class với nhiều tính năng hơn, tiện hơn

//***cú pháp class
// class MyClass {
//     constructor(...)
//     method1(){}
//     method2(){}
//     method3(){}
//     method4(){}
// }

// sau đó dùng new MyClass() để tạo ra một object mới với tất cả các phương thức được
// liệt kê. phương thức constructor được tự động gọi qua toán tử new như java
// vì thế chúng ta có thể khởi tạo object ngay tại đây.

class User {
    constructor(fullName){
        [this.firstName,this.lastName] = fullName.split(' ');
    }
    show(){
        console.log(`firstName: ${this.firstName}\nlastName: ${this.lastName}`);
    }
}

let diep = new User('Lê Điệp')
diep.show();
console.log(diep)
/*
{firstName: "Lê", lastName: "Điệp"}
firstName: "Lê"
lastName: "Điệp"
[[Prototype]]: Object
constructor: class User
show: ƒ show()
*/

//ta có thể thấy rằng trong [[Prototype]] hay nói khác là __proto__ của object diep
//có constructor là class User và cả method show() của User

//trong js class được định nghĩa là 1 function đặc biệt
console.log(typeof User) //*function
console.log(User === User.prototype.constructor) // true
//vì sao lại là true: vì constructor gọi ngược lại User như bài trước đã nói
//tất cả các phương thức đều sẽ được chứa trong prototype
console.log(User.prototype) //ta sẽ thấy có constructor và cả show() method

//class còn được gọi với 1 cái tên nữa là 'syntactic sugar'
//'syntactic sugar': cú pháp kẹo đường -> ý chỉ sự thay đổi về mặt syntax cho để tiếp cận
//      nhưng không làm thay đổi hay thêm tính năng mới gì cả
// bởi vì ngay từ đầu chúng ta có thể tạo ra class mà không hề dùng đến từ khóa class
//      như các bài trước đã học

//đây là ví dụ về việc tạo ra class mà không dùng từ khóa class như các bài trước
//  1.tạo constructor function
function Student(name){
    this.name = name;
    // show(){
    //     console.log(name)
    // }
    //viết như này không được vì đây không phải trong object hay trong class

    //ta phải viết như này
    // this.show = function(){
    //     console.log(name)
    // }
    //nhưng biết như thế này là rất tệ vì như thế này thì có thể tạo thành nhiều
    //intance của show khác, ta nên bỏ cái này vào prototype của constructor function
    //có vậy thì mới không bị trùng cũng như có thể kế thừa cho các object đã được tạo
    //trước đó
}
//nên là ta sẽ tạo vào trong prototype: điều này ta đã nói trong bài F.prototype
Student.prototype.show = function(){
    console.log(this.name);
}
console.log(Student.prototype)
//nhắc lại: this sẽ phụ thuộc vào object trước dấu .
//sử dụng
let hue = new Student('Nguyễn Huệ') // cách xài giống class vì class là cách viết
                                        //syntactic sugar của nó mà
hue.show();
console.log(hue)
//có show trong [[Prototype]] hay nói cách khác là __proto__



//tóm tắt lại kiến thức đã học
// constructor function sẽ có prototype là thuộc tính  có chứa 
//      constructor function chính nó,method, thuộc tính, và [[Prototype]](__proto__)
// object được tạo ra từ constructor function này sẽ 
//      kế thừa toàn bộ prototype của constructor function và có tên là [[Prototype]]
//          trong object
//      muốn xem [[Prototype]] ta dùng __proto__, nói cách khác __proto__ là getter/setter
//          của [[Prototype]]



//**vậy khác gì giữa object được tạo từ class và tạo bằng constructor function
//1.constructor function có thể tạo object mà k cần toán từ new
    let trung = Student('Quang Trung')
//  let loi = User('Lê Lợi') //thằng User là class nên thiếu new sẽ ăn lỗi ngay

//2.consolog 2 cái User và Student
console.log(User) // nó bắt đầu bằng từ khóa class
console.log(Student) // nó bắt đầu bằng từ khóa f

//3.code bên trong Class luôn luôn trong chế độ use strict
//  tức là k có cho hoisting

//bên cạnh đó còn nhiều tính năng khác mà class mang lại, chúng ta sẽ cùng tìm
// hiểu chuyên sâu tiếp




//Class Expression
//tương tự từ function
//class cũng có nhiều cách khai báo
//như trên thì gọi là class declaration
// ta còn có class expression như (function expression)

let User1 = class {
    show(){
        console.log('hello')
    }
}
trung = new User1().show() //hello

// nếu class expression có tên thì tên nó chỉ được dùng trong body của nó thôi
let User2 = class MyClass{
    show(){
        console.log(MyClass)
    }
}
// console.log(MyClass)// error
trung = new User2().show()
/*
class MyClass{
    show(){
        console.log(MyClass)
    }
}
*/


//tạo class bằng trò điên trò khùng
//vd: 1 function chuyên tạo ra các class
function makeClass(){
    //tạo class rồi return nó
    return class {
        constructor(name){
            this.name = name
        }
        show(){
            console.log(this.name)
        }
    }
}

User3 = makeClass()
// giờ ta đã có 1 class tên là User3 rồi
// ta tạo object từ User3 rồi dùng method show thôi
diep = new User3('Lê Điệp')
diep.show() //Lê Điệp
//cái này tào lao lắm, khuyến cáo không nên làm theo



// tất nhiên là class ta cũng có thể tạo ra getter và setter 
//                           như bên object literal


//vd: getter và setter thông minh nhưng dùng class
//getter và setter thông minh:
//vd://giả sử muốn cấm người code gán tên người dùng bé hơn 4
class User4{
    constructor(name){
        this.name = name //this chạy lập tức gọi setter ben dưới
    }
    get name(){
        return this._name   //return vể 1 cái name ảo ,mình đặt là _name cho có sự phân biệt
    }
    set name(value){
        if(value.length < 4){
            alert('Name is too short')
            return
        }
        this._name = value
    }
}
hue = new User4('Huệe') //alert('name too short') liền
console.log(hue.name) //undefined liền vì có đủ dài để tạo đâu



//**computed name[...]
class User5{
    firstName = 'Nguyễn'; //**class field
    ['show'+'Infor'](){
        console.log('hello')
    }
}

hue = new User5()
hue.showInfor()
console.log(hue) //User5 {firstName: "Nguyễn"}
//firstName sẽ không nằm trong prototype vì nó là class field giống java

//Cảnh giác với this trong class

class Button {
    constructor(value){
        this.value = value
    }
    click(){
        console.log(this.value)
    }
}

let btn = new Button('Hello')
// setTimeout(btn.click, 1000);
//sẽ vẫn chạy nhưng nó sẽ đi sai cái this vì nó là undefined
//vì lúc này giống như đang gọi this.value ngay ngoài dòng 220
// vd0:sử dụng wrapper function
// setTimeout(() => btn.click(), 1000); //wrapper function

// vd1: hoặc dùng cách bind
class Button1 {
    constructor(value){
        this.value = value
        this.click = this.click.bind(this)
    }
    click(){
        console.log(this.value)
    }
}
btn = new Button1('Hello hé hé hé')
setTimeout(btn.click, 1000);

//  vd2: kỹ thuật class field + function declaration + bind
class Button2 {
    constructor(value){
        this.value = value
    }
    click = function(){
        console.log(this.value)
    }.bind(this)
}
// .bind(this)
btn = new Button2('Hello Button3')
setTimeout(btn.click, 1000);


//  vd3: kỹ thuật đỉnh cao ãi chĩa class field + arrow function(vì dùng arrow sẽ làm command như đang ở ngoài luôn, k bị chặn lại)
class Button3 {
    constructor(value){
        this.value = value
    }
    click = () => {
        console.log(this.value)
    }//nên viết như này vì như thế này this oke nhất, luôn đúng 
    //và cú pháp này dùng rộng rãi trong react
}
// .bind(this)
btn = new Button3('Hello Button4')
setTimeout(btn.click, 1000);


//Class inheritance - kế thừa lớp
// Kế thừa lớp là cách mà một lớp mở rộng một lớp khác.
// Từ khóa "extends"
// ở phần này mọi thứ khá giống java và tất nhiên là được nhìn ở 1 góc độ
// khác
class Animal {
    constructor(name) {
      this.speed = 0
      this.name = name
    }
    run(speed) {
      this.speed = speed
      alert(`${this.name} runs with speed ${this.speed}.`)
    }
    stop() {
      this.speed = 0
      alert(`${this.name} stands still.`)
    }
  }
  
let ani = new Animal('My animal')
// Cùng tạo class Rabbit kế thừa từ Animal:

class Rabbit extends Animal {//dùng extends
  hide() {
    alert(`${this.name} hides!`)
  }
}

let rabbit = new Rabbit('White Rabbit') // tự nhiên có constructor
//hay nói cách khác constructor tự động này là super()

rabbit.run(5) // White Rabbit runs with speed 5.
//rabbit kế thừa các thuộc tính của animal và có method run
rabbit.hide() // White Rabbit hides!
console.log(rabbit)
//nguyên tắc là các class field sẽ được tạo ra trước, cả khi constructor được
//chạy, nên sau khi constructor chạy sẽ gán giá trị vào sau cùng

//Rabbit {speed: 5, name: "White Rabbit"}
// name: "White Rabbit"
// speed: 5
// [[Prototype]]: Animal
    // constructor: class Rabbit
    // hide: ƒ hide()
        // [[Prototype]]: Object
        // constructor: class Animal
        // run: ƒ run(speed)
        // stop: ƒ stop()
            // [[Prototype]]: Object
//từ kết quả console.log ta có thể thấy rằng 
// rabbit không có run(), prototype của nó rabbit.prototype cũng k có run
//run nằm trong [[Prototype]](__proto__) kế thừa từ prototype của animal

//cú pháp hack não như phần trên
function f(phrase) {//tạo hàm tạo class
    return class {
      sayHi() {
        alert(phrase)
      }
    }
  }
  
class User6 extends f('Hello') {}
  
new User6().sayHi() // Hello
//tất nhiên ta cũng có thể viết hàm stop() cho class Rabbit vì tính đa hình
//Polymorphism / override/ nhưng ở đây sẽ k có annotation
//tất nhiên super cũng đc dùng để độ hàm constructor hay các method super.method()
//tương tự java.super cũng phải là dòng lệnh đều tiên trong constructor của con
//có cha trước mới có con


//nhớ rằng Arrow function không có this và super, điều này giúp ta trị được các 
//callback vd như setTimeout   ở trong method
//vd
class Rabbit1 extends Animal {
    //sơ mẫu
    // stop() {
    //     super.stop() // Gọi stop từ Animal
    // }

    //mẩu 2 muốn dùng nhưng k đc, do function bị giới hạn this
    // stop() {
    //     setTimeout(function(){super.stop()}, 1000) 
    //     // Gọi stop từ Animal sau 1 giây
    //     //viết vậy không được vì super không đại diện cho function này
    // }

    stop() {
      setTimeout(() => super.stop(), 1000) // Gọi stop từ Animal sau 1 giây
    }
    //dùng arrow sẽ làm cho đoạn code callback này giống sơ mẫu
}

let r1 = new Rabbit1('Thỏ ngọc')
r1.stop();

// class Rabbit extends Animal {
//   // Tạo ra từ những class mà không có constructor của nó
//   constructor(...args) { //rest parameter
//     super(...args)
//   }
// }




// ***Ghi đè các class field
// Chúng ta không chỉ có thể ghi đè các phương thức mà còn có thể ghi đè các class field
// Mặc dầu sẽ có một số phức tạp, ví dụ
class Animal {
    name = 'animal'
  
    constructor() {
      alert(this.name) // (*)
    }
  }
  
  class Rabbit extends Animal {
    name = 'rabbit'
  }
  
  new Animal() // animal
  new Rabbit() // animal

// Ở đây, class Rabbit kế thừa từ Animal và ghi đè trường name.
// Rabbit không có constructor của nó, vì thế Animal constructor được gọi.
// Điều thú vị trong cả 2 trường hợp: new Animal() và new Rabbit(), alert ở dòng * hiển thị animal.
// Nói cách khác, constructor cha luôn sử dụng giá trị trường (field) của nó, không phải từ kế thừa
// Điều này chỉ xảy ra với class fields, không có ở các phương thức.

  class Animal {
    showName() {
      // instead of this.name = 'animal'
      alert('animal')
    }
  
    constructor() {
      this.showName() // instead of alert(this.name);
    }
  }
  
  class Rabbit extends Animal {
    showName() {
      alert('rabbit')
    }
  }
  
  new Animal() // animal
  new Rabbit() // rabbit
// Lưu ý rằng output bây giờ khác nhau.

// Và đó là những gì chúng ta mong muốn một cách tự nhiên. Khi constructor cha được gọi trong class kế thừa, nó sử dụng phương thức đã bị ghi đè.

// Nhưng với class field thì không. Đó là bởi vì thứ tự khởi tạo field. Class field được khởi tạo:

// Trước constructor cho class cơ bản (mà không kế thừa bất cứ thứ gì)
// Ngay lập tức sau khi super() được gọi ở class kế thừa.
// Trong trường hợp chúng ta, Rabbit là class kế thừa. Không có constructor() bên trong nó. Như đã nói từ trước, điều này giống như thể tạo một constructor rỗng với chỉ super(...args) bên trong.

// Vì thế, new Rabbit() gọi super(), constructor cha được gọi, và ngay sau đó thì class field được khởi tạo. Tại thời điểm constructor cha thực thi, chưa có class field Rabbit, đó là lý do tại sao Animal field được sử dụng.

// Đây là sự khác biết giữa field và method trong javascript.

// Nếu đó là vấn đề, chúng ta có thể fix nó bằng cách sử dụng các phương thức (method) hoặc getter/setter thay vì trường (field)