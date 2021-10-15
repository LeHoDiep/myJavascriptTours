console.log('Bài 5: Vòng lập - loop');
//Bài 5: Vòng lập - loop
//trước tiên hiểu rỏ 2 khái niệm repeat và reuse
//đã nắm được While/Do-While/for
//biết sự khác nhau giữa 3 loại này
//For-in: thường dùng để lặp các key trong object
var student1 = {name:"Điệp", point: 10, major:'SE'};
//iterable: tính khả duyệt
    //for-in:
    //iterator|generator(dể dành học sau)
var infor = '';
for (let x in student1) {
    infor+= student1[x] + ' ';
}
console.log(infor);//Điệp 10 SE
//demo array thì sao
var array1 =["Điệp","Khoa","Huệ","Lan"];
for (let x in array1) {
    console.log(x +' '+ array1[x]);
}
/* 
x array1[x]
0 Điệp
1 Khoa
2 Huệ
3 Lan
*/

// For-in với set sẽ k thu được gì vì nó k có index
// Set sẽ được học ở mục ES6
for (let prop in new Set(['a', 'b', 'a', 'd'])) 
  console.log(prop);            // undefined (no enumerable properties)
// For-of  dùng để lặp value của các iterale object(khả lập)
let workerList = ["Điệp", "Huệ", "Lan", "Huệ"];
for (let value of workerList) {
    console.log(value);
}
// for-of sẽ không được với plaint object
for (let val of {a: 1, b: 2, c: 3}) 
  console.log(prop);           // TypeError (not iterable)

// For-Each
// bth chỉ cần object
['a', 'b', 'c'].forEach(
    val => console.log(val)     // a, b, c (array values)
);
// vừa cần object vừa dùng index
['a', 'b', 'c'].forEach(
    (val, i) => console.log(i)  // 0, 1, 2 (array indexes)
);

//for-in với key (chỉ thằng này có thể chơi với object)
//for-of với value
//for-each với value,index