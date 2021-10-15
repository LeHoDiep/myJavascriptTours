// DESTRUCTURING 
let user = {
    lastName:'Điệp đẹp trai',
    age: 22,
    nation:'HCM City'
}
//giờ muốn lấy thông tin của từng thằng 
//ra lưu trữ riêng ta sẽ làm thế này
    // const lastName = user.name
    // const age = user.age
    // const nation = user.location
//cũng oke thôi nhưng không hay

const {lastName, age, nation, gender = 'male'} = user 
//gender mình có thể gán giá trị mặc định nếu user k có
console.log(lastName, age, nation, gender)

//--
//      *sử dụng ở function 
//giả xử function này nhận vào 1 object là 1 parameter, 
//ta cần tính tổng các value của object
//          nếu b không có thì set b = 0
//ta sẽ có hàm như sau
let handle = param =>{
    const {a,b = 0,c} =  param
    return a+b+c
}
console.log(handle({a:23,c:5}))//28
//kỹ thuật này viết hơi dài mất chất
//--
//ta có thể viết nó thành thế này
handle = ({a,b = 0,c})=>{
    return a+b+c
}
console.log(handle({a:23,c:5}))//28 bình thường




//SPREAD Syntax
//trước tiên ta ôn 2 khái niệm sau
//shallow copy : copy còn dính rây mơ rể má
//deep copy:copy cắt sâu vào dây mơ rể má
user = {
    lastName:'Điệp đẹp trai',
    age: 22,
    nation:'HCM City',
    major : ['Toán', 'Hóa', 'Sinh']
}

//như này là shallow copy
let cloneUser = user//thì sẽ làm cho 2 chàng trỏ 1 nàng, 1 người thay đổi cả đám đổi thay
//không hay
//ta có thể dùng spread để clone object

//như này vẫn là shallow copy: nhưng đã deep copy lv1
//  vì major vẫn còn dây mơ rể má
cloneUser = {...user}
console.log(cloneUser) //*{lastName: "Điệp đẹp trai", age: 22, nation: "HCM City"}
//nhưng ta phải cẩn thận 1 trường hợp đó là object lồng trong object
//để k bị shallow copy ta phải vào major phân ra tiếp
cloneUser.major = [...user.major] //như vậy thì ta thay đổi giá trị của mảng này 
                                    //mới k bị ăn theo


//marge object
user2 = {
    age: 23,
    email: 'lehodiep.1999@gmail.com'
}
cloneUser = {...user,...user2, ability:['Sing']} // thêm thuộc tính mới nếu chưa có , hoặc ghi đè
console.log(cloneUser) //*{lastName: "Điệp đẹp trai", age: 23, 
//                      nation: "HCM City", email: "lehodiep.1999@gmail.com",ability:['Sing']}
//tương tự điều này với array sẽ thêm phần tử mới vào cuối
let arr = [1,2,3,4]
//vẫn là shallow copy
let cloneArr = [...arr,5]
console.log(cloneArr)//*1,2,3,4,5

console.log(1,2,3,4)//sẽ không hề có sự khác biệt
console.log(...arr) //... phá vở các gói bọc, phân rã phần tử




//REST PARAMETER
handle = (a,b,...c)=>{
    console.log(c)
}

handle(1,2,3,4,5,6)//*[3,4,5,6]
//[a là 1 và b là 2]

//dùng restParameter và Destructuring
handle = ({a,b, ...c})=>{
    console.log(a)
    console.log(b)
    console.log(c)
}
handle({g:1,b:2,c:3,d:4,e:5})//
/* kết quả thu về ta có
    a : undefined
    b : 2
    c : {g:1,c:3,d:4,e:5}
*/

//áp dụng được với array
handle = ([a,b, ...c])=>{
    console.log(a)
    console.log(b)
    console.log(c)
}

handle([1,2,3,4,5,6])
/*kết quả, so sánh và rút ra được sự khác nhau của destructuring trên object và array
    a: 1
    b: 2
    c: [3,4,5,6]
*/

//=>destructuring với object thì nó tìm key trùng để nhét, k có thì undefined
//                                          rest thì lấy các key k trùng bỏ vào
//                với array thì nó theo thứ tự, nhét đều hết
//                                          rest vẫn lấy phần còn lại