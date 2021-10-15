
//Access modifier : đây là đại diện của tính đóng gói trong OOP ở js

//trong js chỉ chia ra 2 là Interal và External interface
// Internal interface - phương thức và thuộc tính chỉ có thể được truy cập bên trong các phương thức trong class, không phải từ bên ngoài.
// External interface - phương thức và thuộc tính có thể truy cập được từ ngoài và trong class.
// Trong Javascript, có 2 loại thuộc tính và phương thức:

// Public: có thể truy cập từ bất kỳ đâu. Nghĩa là external interface. Cho đến bây giờ thì chúng ta chỉ sử dụng thuộc tính public
// Private: có thể truy cập bên trong class. Nghĩa là internal interface
// Trong nhiều ngôn ngữ khác thì còn tồn tại trường "protected": chỉ có thể truy cập bên trong class và những class kế thừa.

// Trường Protected không được quy định trong Javascript ở cấp độ ngôn ngữ, những trong thực tế để cho tiện lợi thì chúng ta có thể giả lập để quy ước với nhau.


//ReadOnly
    //nếu khai báo get mà k có set, thì nó sẽ thành readOnly, không đổi giá trị đc
    //nếu không có set/get thì nó tự tạo , sẽ gán bt
    //các dev quy ước tên _ ở trước là private chỉ dùng trong class, nên truy cập bằng get/set
    //không nên . tới
    //việc quy ước này không đảm bảo được ngôn ngữ, chỉ là quy ước
class CoffeeMachine {  
    constructor(power) {
      this._power = power
    }
  
    get power() { 
      return this._power
    }
  }
  
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100)
  
console.log(`Power is: ${coffeeMachine.power}W`) // Power is: 100W
  
coffeeMachine.power = 25 // Error (no setter)
console.log(`Power is: ${coffeeMachine.power}W`) // Power is: 100W

coffeeMachine._power = 25 //lúc này truy cập thẳng rồi, phá vỡ quy tắc private đã quy ước
                           //không nên như thế này
                           //vậy nên ta mới nói nó k đảm bảo về mặt ngôn ngữ
console.log(`Power is: ${coffeeMachine.power}W`) // Power is: 25W


//mọi người thích dùng getter setter như bên java (function) hơn là get set như js
// vì khả năng đa năng, nhận đc nhiều tham số cả setter và getter

//private được đảm bảo về mặt ngôn ngữ so với readOnly và protected
//thuộc tính private thường dùng dấu # đầu tên để quy ước
class CoffeeMachine {
    #waterLimit = 200
  
    #fixWaterAmount(value) {
      if (value < 0) return 0
      if (value > this.#waterLimit) return this.#waterLimit
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value)
    }
  }
  
  let coffeeMachine = new CoffeeMachine()
  
  // can't access privates from outside of the class
  coffeeMachine.#fixWaterAmount(123) // Error
  coffeeMachine.#waterLimit = 1000 // Error 
  CoffeeMachine.#waterLimit // Error 



//instanceof: giúp kiểm tra 1 object có thuộc class hay function nào hay không
//              tính luôn cả kế thừa
//instanceof dựa trên [[Prototype]]

//typeOf kiểm tra dữ liệu return String
//instanceOf kiểm tra object thuộc về instance nào . return true/false
