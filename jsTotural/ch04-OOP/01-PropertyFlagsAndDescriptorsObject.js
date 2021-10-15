//ngoài các property, trong object còn các các thuộc tính cờ
// Khái niệm: Property flag
// writable     : nếu true thì value có thể thay đổi, false thì read-only
// enumerable   : nếu true thì property được liệt kê khi lặp, false thì không được liệt kê
// configurable : nếu true thì property có thể bị xóa writable và enumerable có thể bị thay đổi,
                    //false thì không thể 

// 1 thuộc tính có đủ 3 cờ và value(tính là 1),bộ 4 cờ này người ta gọi đó 
//                                              là bộ mô tả thuộc tính (property descriptor)

//1.Phương thức Object.getOwnPropertyDescriptor(obj,propertyName) 
//                  cho phép lấy đầy đủ thông tin về thuộc tính
let profile = {
    name: 'Điệp', //property = key : value
    age : 18 
}

console.log(Object.getOwnPropertyDescriptor(profile, 'name'))//*{value:'Điệp', writable: true, enumerable: true, configurable: true}

//2.Thay đổi cờ Object.defineProperty(obj,propretyName,descriptor)
//  non-writable
Object.defineProperty(profile,'name',{
    writable : false
})
console.log(Object.getOwnPropertyDescriptor(profile, 'name'))//*{value:'Điệp', writable: false, enumerable: true, configurable: true}
//lúc này mình không thể gán giá trị lại cho thằng property name của profile đc
profile.name = 'Huệ' // nếu không use strict thì k báo lỗi, nhưng cũng k thực thi đc

profile = {}

Object.defineProperty(profile,'name',{
    value: "Điệp",
    enumerable: true,
    configurable: true
})
//nếu khởi tạo như thế này thì writable sẽ là false
//  non - enumerable
let obj2 = {
    name : 'Điệp',
    showInfor(){
        console.log('Hello');
    }
}
console.log(obj2)
Object.defineProperty(obj2,'showInfor',{
    enumerable: false
})
//cả 2 cách show kết quả dưới đây đều sẽ k liệt kê được shoInfor
console.log(obj2)

for (const key in obj2) {
    console.log(key)
}

// Non-configurable: không thể cấu hình 
// configurable:false nghĩa là không cho ta set giá trị của các cờ ngoại trừ value nữa
// ngta thường dùng nó cho các giá trị đặc biệt như Math.PI không cho người dùng cấu hình
// các method mặt định

console.log(Object.getOwnPropertyDescriptor(Math,'PI'))
//*configurable: false
// enumerable: false
// value: 3.141592653589793
// writable: false
//không cho ghi đè, k cho hiển thị khi gọi object Math, và không cho cấu hình lại 2 cờ trên

//* một khi đã set configurable: false thì k thể dùng defineProperty để set lại thành true
// configurable: false thì sẽ có những hạn chế sau
// 1. không thể thay đổi configurable
// 2. không thể thay đổi enumerable
// 3. không thể thay đổi writable: false -> true(nhưng ngược lại true -> false thì đc)
// 4. không thể thay đổi getter/setter


//Object.defineProperties(obj,{
        // key : {value:' ',descriptor}
        // key : {value:' ',descriptor}
// })
// giúp định nghĩa nhiều thuộc tính cùng lúc

// Object.getOwnPropertyDescriptors(obj,'PI')
// giúp return nhiều thuộc tính cùng lúc
// nếu kết hợp definesProperties có thể clone một object có full bộ cờ

obj2 = {
    name : 'Điệp',
}
Object.defineProperty(obj2, 'name',{
    writable: false,
})
//clone bằng spread
objClone = {...obj2};
console.log(Object.getOwnPropertyDescriptor(objClone,'name'))
//{value: "Điệp", writable: true, enumerable: true, configurable: true}
//clone thế này thì writable vẫn là true k phải false
//do nó chỉ copy cái bề nỗi của PropertyObject(value)

objClone =Object.defineProperties({},Object.getOwnPropertyDescriptors(obj2))
console.log(Object.getOwnPropertyDescriptor(objClone,'name'))
////{value: "Điệp", writable: false, enumerable: true, configurable: true}


//Sealing an object globally - niêm phong toàn bộ 1 object
//      những thằng này rất ít dùng trong dự án nhưng cũng rất là nhanh tiện
// Object.preventExtensions(obj)
//      Ngăn cấm thêm thuộc tính mới vào object
//      muốn biết 1 object có đang preventExtensions không  ta dùng Object.isExtensible(object)

// Object.seal(obj) 
//      Ngăn cấm thêm mới/xóa thuộc tính object
//      set configurable : false cho tất cả các pro
//      muốn biết 1 object có đang seal không  ta dùng Object.isSealed(object)

// Object.freeze(obj) 
//      Ngăn cấm thêm mới/xóa/thay đổi thuộc tính object
//      set configurable : false và writable: false cho tất cả các pro
//      muốn biết 1 object có đang freeze không  ta dùng Object.isFrozen(object)
