
console.log('bài 11: Array-method');
//mảng trong array không nhất thiết phải cùng kiểu dữ liệu
var arr1= [1,2,3,{lname: 'huệ', age : 10},[3,5]];
console.log(arr1);//*[1, 2, 3, {…}, Array(2)]

//1.cách lấy các phần tử trong mảng
console.log(arr1[3]);//*{lname: "huệ", age: 10}
arr1[3] = 'diep'
console.log(arr1);//*[1,2,3,'diep',[3,5]];
//2..length() lấy độ dài mảng

//3..isArray() hoặc instanceof để nhận biết 1 biến có phải mảng không
 console.log(arr1 instanceof Array);//true

//4.toString(): biến mảng thành chuỗi kèm ,
var workerList = ['Huệ', 'Lan', 'Trà'];
var str1 = workerList.toString();
console.log(str1);//Huệ,Lan,Trà

//5.join(character) nối các phần tử thành chuỗi kèm ký tự
//demo:
var title = 'xin chào các bạn';
title = title.split(' ');
console.log(title);
title = title.join('-');//["xin", "chào", "các", "bạn"]
console.log(title);//'xin-chào-các-bạn'
//dùng để bỏ lên mấy cái ./xin-chào-các-bạn

// 6.push() thêm phần tử vào cuối mảng return ra độ dài mới
var x = workerList.push('Trà')// return ra độ dài mới của mảng
console.log(x);//4

// 7.pop() xóa phẩn tử cuối cùng return ra phần tử đó
var x = workerList.pop();// return ra 'Trà'
console.log(x);//'Trà'

// 8.unshift() thêm phần tử vào đầu mảng và return độ dài mới
var x = workerList.unshift('Trà'); //
console.log(x);//4

// 9.shift() xóa phần tử đầu mảng và return phần tử đã xóa
var x = workerList.shift();
console.log(x);//'Trà'

// 10.delete array[index] xóa phần tử ở vị trí index nhưng để lại
//                          khoản trống ở vị trí đó
//                          nên nếu truy cập sẽ k có giá trị (undefined)

// 11.splice(index,sl cần xóa,..phần tử thêm) 
//          thêm hoặc xóa nhiều phần tử trong 1 mảng ở vị trí index
//          return về mảng mới
console.log(workerList);//["Huệ", "Lan", "Trà"]
x = workerList.splice(2,0,'Điệp','Cường'); //return về mảng các phần tử
                                                        // vừa được xóa
console.log(x);//nên chỗ này là []
console.log(workerList);//*["Huệ", "Lan", "Điệp", "Cường", "Trà"]
x = workerList.splice(1,2); //x = ["Lan", "Điệp"]
console.log(workerList);//*["Huệ", "Cường", "Trà"]

workerList.push("Lan")
workerList.push("Điệp")
console.log(workerList);//*["Huệ", "Cường", "Trà", "Lan", "Điệp"]
// 12.slice(start,end) slice(start) như chuỗi
//     slice(start,end)  tách từ start đến end - 1
//     slice(start)      tách từ end đến hết

x = workerList.slice(2,4);//return ta có doạn từ 2 đến 3
console.log(x);//["Trà", "Lan"]

x = workerList.slice(3);//return ta có doạn từ 2 đến 3
console.log(x);//["Lan", "Điệp"]

// 13.concat() giống bên string, array có thể dùng thằng này nối chuỗi
var workerGirl = ['Huệ', 'Lan', 'Trà'];
var workerBoy = ['Điệp', 'Cường', 'Hùng'];
workerList = workerBoy.concat(workerGirl,'Hồng',['Trúc','Tâm']);
console.log(workerList);
//["Điệp", "Cường", "Hùng", "Huệ", "Lan", "Trà", "Hồng", "Trúc", "Tâm"]
// y chang string

// 14.spread operator: phân rả mảng thành từng phần nhỏ ...[1,3,5,7] =>1,3,5,7
workerGirl = ['Huệ', 'Lan', 'Trà'];
workerBoy = ['Điệp', 'Cường', 'Hùng'];
workerList = [];

workerList = [...workerGirl,...workerBoy];//phân rã ra từng phần rồi nhét vào
//thế này người ta gọi là shallow copy
console.log(workerList)
//Shallow copy: nhại lại kha khá giống
//Deep copy: là tham chiếu con trỏ 

// 15.forEach(callBack Function): lặp qua từng phần tử trong mảng
//      parameter này là 1 callBack Function có 3 đối số
//      (value, index, array)
//      trong forEach không dùng được break;
console.log(arr1);
arr1.forEach((item,index,array)=>{
    console.log(item,index,array);
})

// 16.map(callback funct): tạo ra mảng mới bằng cách tính toán 
//          callback funct : (value,index,array)=>{}
//          mỗi phần tử với 1 công thức nào đó
//          không làm thay đổi mảng cũ
arr1 = [1,2,3];
var arr2 = arr1.map((value,index,array)=>{
    return value * 3;
})
//thiếu return sẽ trả toàn undefined
console.log(arr2);//*[1,2,3]

// 17.filter()  : trả về mảng các phần tử thỏa điều kiện nào đó
arr2 =  arr2.filter((value)=>{
    return value > 6;
})

console.log(arr2);//*[9]

// 18.find() trả về value phần tử thỏa điều kiện đầu tiên, nếu k thì undefined
//      giống indexOf bên string
arr2 = [1,2,1,7,2]
arr2 =  arr2.find((value)=>{
    return value > 2;
})

console.log(arr2); //7

// 19.findIndex() trả về index phần tử thỏa điều kiện đầu tiên, nếu k thì -1
arr2 = [1,2,1,7,2]
arr2 =  arr2.findIndex((value)=>value > 4)

console.log(arr2); //3

// 20.indexOf() giống bên  string
//      trả ra index đầu tiên tìm thấy
arr2 = [1,2,1,7,2]
arr2 =  arr2.indexOf(2)

console.log(arr2); //1

//  findIndex()// truyền vào hàm điều kiện
//  indexOf() truyền value

// 21.every() giống thằng ALL trong DBI
//      tất cả thỏa điều kiện thì true
//      chỉ cần phần tử cái không thỏa thì false
//      nếu không có return sẽ hiểu là undefined=> false
arr2 = [1,2,5,7,10]
arr2 =  arr2.every((value)=>{
    return value >= 1
})

console.log(arr2); //true

// 21.some() giống thằng IN trong DBI
//      chỉ cần phần tử thỏa thì true
//      không phần tử nào thỏa hết thì false
//      nếu không có return sẽ hiểu là undefined=> false
arr2 = [1,2,5,7,10]
arr2 =  arr2.some((value)=>{
    return value >= 5
})

console.log(arr2); //true

// 22.includes()
//tìm xem value có trong mảng hay không(true/false)
arr2 = [1,2,5,7,10]
var value = 12;
var isFind = arr2.includes(value);
if(!isFind){
    arr2.push(value)
}
//tìm xem value có trong mảng hay không(true/false)
//nếu không có thì nhét vào
//
console.log(arr2)

// 23.reverse() đảo ngược items trong mảng
// 24.sort() sắp xếp
//      1.string
arr1 = ['diep','an','bao'];
arr1.sort();
console.log(arr1); //['an', 'bao', 'diep']
//      2. số
arr1 = [1,3,20,100];
arr1.sort();
console.log(arr1); //[1, 100, 20, 3]
//  vì lúc này nó coi các phần tử là sting sort theo ascii(utf-16)
//  ta phải truyền cho nó 1 comparator dạy nó cách so sánh 2 chuổi số như này

arr1 = [1,3,20,100];
arr1.sort((a,b)=>a - b);
//giống java đổi lại thành b - a để giảm dần
console.log(arr1); //[1, 3, 20, 100]
  
// 25.reduce() 
//  nếu map dùng để thay đổi từng phần tử theo công thức nào đó
//  thì reduce() dùng để xào nấu 1 mảng theo nhiều cách


//  tính tổng các phần tử trong mảng
arr1 = [1,3,20,100];
var sum = arr1.reduce((total,current,currentIndex)=>{
    console.log( total+'-'+current+'-'+currentIndex)
    return total + current;
}, 0) //0 là initalValue

console.log(sum);//*124


//  không có init total value thì total ban đầu là 1 và index củng là 1 bỏ
//      bước khởi tạo
arr1 = [1,3,20,100];
var sum = arr1.reduce((total,current,currentIndex)=>{
    console.log( total+'-'+current+'-'+currentIndex)
    return total + current;
})

console.log(sum);//*124


//  chuyển các phần tử trong mảng thành object
arr1 = ['Điệp', 22, 10];
var newObject = arr1.reduce((total,current,currentIndex)=>{
    total[currentIndex] = current;
    return total;
}, {})

console.log(newObject);//{0: "Điệp", 1: 22, 2: 10}

 





