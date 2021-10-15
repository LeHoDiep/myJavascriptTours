//Factory Pattern là pattern sử dụng phương thức Factory để tạo object 
//      mà không cần chỉ định chính xác class hoặc constructor function

//==>tạo object mà không làm lộ logic khởi tạo => che giấu logic khởi tạo
//==>tạo object khác dựa vào điều kiện được chỉ rỏ từ trước
//options dưới đây là 1 object gồm vehicleType,door,state,color
class Car {
    constructor(options){
        this.door = options.door || 4
        this.state = options.state || 'Brand new'
        this.color = options.color || 'white'
    }
}

class Truck {
    constructor(options){
        this.door = options.door || 4
        this.state = options.state || 'Used'
        this.color = options.color || 'black'
    }
}

class VehicleFactory{
    createVehicle(options){
        if(options.vehicleType === 'car') return new Car(options)
        if(options.vehicleType === 'truck') return new Truck(options)
    }
}

//cách dùng
let factory = new VehicleFactory()//giống như cổ máy chuyển khởi tạo theo option
let newCar = factory.createVehicle({
    vehicleType:'car',
    door : 2,
    color:'red'
})
console.log(newCar)
let newTruck = factory.createVehicle({
    vehicleType:'truck',
    door : 2,
    color:'blue'
})
console.log(newTruck)