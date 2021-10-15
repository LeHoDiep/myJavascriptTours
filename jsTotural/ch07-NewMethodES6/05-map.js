//ôn lại iterable|iterator(object có khả năng lập do iterator trong Symbol)
// ta biết rằng object được sử dụng để lưu trữ value và định danh bằng key 
//              array  được sử dụng để lưu các value mà được sắp xếp theo thứ tự

//Map và Set ra đời để có thêm nhiều lựa chọn cho dev lưu trữ

//--MAP
//Map là gì?
    // là tập hợp các value được định danh bằng key như object 
    //                      nhưng cho phép key được định danh bằng bất cứ kiểu dữ liệu nào
    //method Map
    //  new Map()               tạo mới 1 Map
    //  map.set(key,value)      lưu trữ value bằng key,set sẽ return về map ban đầu đã được set
    //  map.get(key)            return 1 value bởi 1 key, undefined nếu key k tồn tại trong map
    //  map.has(key)            return true/false, xem key có tồn tại không
    //  map.delete(key)         xóa key chỉ định
    //  map.clear()             xóa mọi thứ trong map
    //  map.size                return số lượng phần tử hiện tại

//vd:
let mapCl = new Map()//khởi tạo
mapCl.set('1', 'str')//key nhiều kiểu dữ liệu
mapCl.set(1, 'num')
mapCl.set(true, 'boolean')
//=>map lưu 1 cặp key value có khả năng tùy biến cao
// vì map return về map ban đầu đã được set nên ta có thể chấm .set liên tục
// mapCl.set('1', 'str').set(1, 'num').set(true, 'boolean')

console.log(mapCl)          //*Map(3) {"1" => "str", 1 => "num", true => "boolean"}
console.log(mapCl.size)     //3
console.log(mapCl.has(1))   //str
console.log(mapCl.get(true))//boolean
mapCl.delete(1)
console.log(mapCl)          //*Map(2) {"1" => "str", true => "boolean"}
mapCl.clear()
console.log(mapCl)          //*Map(0) {}


//--
//Map có thể được xử dụng như Object, nhưng đó là điều không nên
//vd:
mapCl.set('1', 'str').set(1, 'num').set(true, 'boolean')
console.log(mapCl)
//khởi tạo thêm property cho map như object
mapCl.name = 'hello'//viết thế này
mapCl['Fname'] = 'hello'
mapCl[{}] = 'hello'
mapCl[{name: 'hello'}] = 'xin chào'
//name và Fname không đè lên nhau
//nhưng 2 object thì có
//nó đè lên nhau và không liệt kê property name của object
//làm mất tín đầy đủ thông tin của dữ liệu
console.log(mapCl)

//ta có thể khởi tạo map như thế này
// *map có thể được khởi tạo dưới dạng
//          1 mảng các entry
mapCl = new Map([//mảng nè
    ['1','str'],//entry nè
    [1,'num'],
    [true,'boolean'],
])
console.log(mapCl) //*Map(3) {"1" => "str", 1 => "num", true => "boolean"}



//---MAP LOOP
//MAP LOOP: lặp qua Map
//      ta có 3 method để lặp với map:
//      map.keys()      return 1 iterable cho các key
//      map.values()    return 1 iterable cho các value
//      map.entries()   return 1 iterable cho các entry(['key','value']), nó được
//                          sử dụng mặc định trong for...of

// iterable không phải array
console.log(mapCl.keys())//*{"1", 1, true} iterable key: 1 object có iterator
//vậy muốn duyệt value của iterable này ta sẽ làm như sau với for of(for of chỉ chơi với iterable)
//for of cho iterable keys
for (const item of mapCl.keys()) {
    console.log(item) //'1'|1|true
}


//for of cho iterable values
for (const item of mapCl.values()) {
    console.log(item) //str|num|boolean
}


//for of cho iterable entry (entry là 1 cặp 'key':'value')
for (const item of mapCl.entries()) {
    console.log(item) //["1", "str"] | [1, "num"] | [true, "boolean"]
}

//như vậy cũng đc vì bản thân map đã iterable rồi 
for (const item of mapCl) {
    console.log(item)  //["1", "str"] | [1, "num"] | [true, "boolean"]
}

//ngoài ra còn có thể dùng for each nữa
mapCl.forEach((value,key,mapCl)=>{//mapCl là truyền vào 1 iterable
    console.log(value,key)  //str 1 | num 1 | boolean true
})


//-----chuyển đổi map <=> object
//---Tạo map từ object
//Tạo map từ Oject.entries(obj)
//   nhớ rằng map có thể được khởi tạo dưới dạng
//                              1 mảng các entry
const user = {
    name: 'Điệp đẹp trai',
    age: 22
}
console.log(Object.entries(user))//nó return cho ta 1 mảng các entry
//dùng nó cho khởi tạo map          
mapCl = new Map(Object.entries(user))
console.log(mapCl)//{"name" => "Điệp đẹp trai", "age" => 22}

//---Tạo map từ object
//Tạo map từ Oject.entries(obj)
mapCl = new Map([
    ['1','str'],
    [1,'num'],
    [true,'boolean'],
])
//mình có 1 method Object là Object.formEntries()
//nhận vào 1 mảng entries|iterable và return thành object
let objFromMap = Object.fromEntries(mapCl)//hay mapCl.entries() đều được
//vì array hay iterable đều đc mà
console.log(objFromMap)