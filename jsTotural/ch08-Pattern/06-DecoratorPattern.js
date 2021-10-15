// Decorator pattern : sử dụng để mở rộng chức năng của 1 object mà không  cần
//  thay đổi class hay constructor function hiện có

//=>thay đổi tính năng của 1 object mà không thay đổi code sâu bên dưới chúng

//vd:
function Car(name){
    this.name = name
    //default value
    this.color = 'white'
}

//tạo object mới
const tesla = new Car('Tesla Model 3')
//thêm tính năng mới vào object mà không cần phải thay đổi constructor function
tesla.__proto__.setName = function (name){
    this.name = name
}//làm thay đổi code bên trong [[Prototype]] của tất cả những thằng
// có class là Car nếu dùng __proto__

//còn làm cách này thì các object trước và sau không bị thay đổi
tesla.setColor = function (color){
    this.color = color
}
tesla.setPrice = function (price){
    this.price = price
}
console.log(tesla)
const newTesla = new Car('Tesla Model 4')
console.log(newTesla)



//setColor và setPrice nằm trong phần object không phải trong constructor điều này đồng
//nghĩa với việc các object khác được tạo từ tesla sẽ không có 2 method mới này
//=>không làm thay đổi constructor hay code sâu bên trong của object


//ứng dụng thực tế cho việc 
//có nhiều chiếc xe đều là class Car
//nhưng có xe có tính năng này có xe có tính năng kia, nếu kế thừa hay tạo class mới thì
//mất thời gian
//ta có thể thêm method trực tiếp cho riêng object đó như Decorator trên
//vd:
//ta có loại xe là car, nhưng có chiếc có tính năng AC, có chiếc có PowerLock, có chiếc
//có AutoTransmission
// ta không nên tạo 3 class đại diện như vậy, ta dùng Decorator pattern làm như sau
//
class Car1 {
    constructor(){
        //default cost
        this.cost = function(){
            return 20000
        }
    }
}

//decorator function cho AC
function carWithAC(car){
    car.hasAC = true
    const prevCost = car.cost()
    car.cost = function(){
        return prevCost + 500
    }
}
//decorator function cho AutoTransmission
function carWithAutoTransmission(car){
    car.hasAutoTransmission = true
    const prevCost = car.cost()
    car.cost = function(){
        return prevCost + 2000
    }
}
//decorator function cho PowerLocks
function carWithPowerLocks(car){
    car.hasPowerLocks = true
    const prevCost = car.cost()
    car.cost = function(){
        return prevCost + 500
    }
}
//sử dụng
// vậy giờ ta có chiếc xe
let newCar = new Car1()
//mặc định xe có cost là 20000
//giờ ta thêm tính năng mới cho xe
//giả sử thêm AC
carWithAC(newCar)
//Decorator function sẽ áp dụng Decorator Pattern
//thêm property và method mà k thay đổi __proto__
//giúp k ảnh hưởng đến các object khác cùng tạo từ Car1
carWithAutoTransmission(newCar)
carWithAutoTransmission(newCar)//double thì tăng gấp đôi
//                              đó là về mặt logic , ta hoàn toàn có thể fix lại
//                              bằng if else
console.log(newCar)
console.log(newCar.cost())
//như vậy ta đã làm ra nhiều loại xe mà k cần class cũng như thay đổi class gốc

//nếu bạn nào từng code React thì High Order Component chính là Decorator Pattern này