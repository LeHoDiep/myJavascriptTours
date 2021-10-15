console.log('Bài 12: Object - Method')

//Object
//  entry của object là cặp key: value tương ứng
//  key thì luôn luôn là string hoặc number
//  value có thể là bất cứ kiểu giá trị nào , kể cả function
var worker1 =  {
    lname: 'Điệp đẹp trai',
    age: '22',
    showInfor(){
        console.log(this.lname+' '+ age);
    }

}

//thêm thuộc tính
worker1.point = 10;
// sữa thuộc tính
worker1.lname = 'Điệp piedTeam';
//xóa thuộc tính
delete worker1.age;

console.log(worker1); //{lname: "Điệp piedTeam", point: 10, showInfor: ƒ}

// 1.Object.assign()
//      merge object
    //có rồi thì ghi đè, chưa có thì thêm vào
var person1 = {
    lname: 'Điệp',
    age: 22,
    job: ['yangho', 'coder'],
}
var person2 = {
    lname: 'Lan',
    age: 22,
    company: 'PiedTeam'
}
var person3 = Object.assign(person1,person2);
console.log(person3)
console.log(person3 == person1);
//vì nó từ con trỏ object person1 thêm vào để ra person3
//{
//     lname: 'Lan',
//     age: 22,
//     job: ['yangho', 'coder'],
//     company: 'PiedTeam'
// }


// Spread operater cho shallow copy or merge object

person3 = null;
person3 = {...person1, ...person2};
console.log(person3);
//{
//     lname: 'Lan',
//     age: 22,
//     job: ['yangho', 'coder'],
//     company: 'PiedTeam'
// }
// shalow copy nhưng mình phải nhớ rằng job là 1 mảng
// tức là job ở person3 tham chiếu của person1 nên là job mà thay đổi thì cả
// person1 và person3 cùng thay đổi
// copy 1 cấp mà thôi
person1.job[0] = 'Nhân viên văn phòng';
console.log(person3);
//{
//     lname: 'Lan',
//     age: 22,
//     job: ['Nhân viên văn phòng', 'coder'],
//     company: 'PiedTeam'
// }

// dù dùng Object.assign() hay spread operator thì đều bị

//khắc phục bằng cách ăn sâu vào trong các cấp
person3 = null;
person3 = {...person1, ...person2};
person3.job = [...person3.job]//phân rả mảng tham chiếu person1 thành mảng khác
console.log(person3);
person1.job[0] = 'Diệp chó điên';
console.log(person3);
console.log(person3 == person1);
//vì mình phân rã các phần tử tạo thành object mới

//Object.key() // trả về 1 mảng các key của object

//Object.values() // trả về 1 mảng các values của object

//For In lập object
for (const properties in person3) {
    console.log(`${properties} : ${person3[properties]}`)
}