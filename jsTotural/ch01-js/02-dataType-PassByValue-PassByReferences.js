console.log('Bài 2: DataType Tham Chiếu / Tham Trị');
//I DataType
// giống java có 2 dạng
//I.1 primitive dataType
//      number : 1 , 2, 3, 10.3,...
//      String : 'Điệp đẹp trai đến từ piedTeam'
//      Boolean: true(1)/false(0)
//      Null (rỗng//biết kiểu dữ liệu)
//      Undefined (không tồn tại giá trị)
//      Symbol (ES6) (học sau nha)
// sự khác nhau giữa NULL và UNDEFINED
//      bằng nhau về mặt giá trị nhưng khác nhau về kiểu
//    dùng typeof để so sánh kiểu
typeof undefined; //*undefined
typeof null;      //*object dù là object (nhưng vẫn được xếp
                  // vào kiểu nguyên thủy primitive)
//    dùng toán tử ==(so sánh châm chước) 
//          và  ===(so sánh khắc khe) so sánh về mặt giá trị 
null == undefined // true(vì chăm chước ép kiểu)
null === undefined// false(vì nghiêm khác không cho ép kiểu)
//                   nên bị khác kiểu nên false

// UNDEFINED: không có giá trị chưa biết kiểu
//    biến chưa khởi tạo giá trị
//    Các demo
let numb;
console.log(numb); //*undefined

//    thuộc tính chưa khởi tạo trong OBJECT
let obj1 = {name: 'Điệp'}
console.log(obj1.age); //*undefined

//    thiếu parameter khi dùng function
function handle1(a,b){
    return b;//nếu không có return thì 
}            //function này gọi là return undefined function

handle1(2)//truyền như này thì thiếu 1 parameter cho b
          //lúc này a trong function nhận 2 nhưng b thì k có gì
          //không có gì k biết kiểu giá trị nên là undefined
console.log(handle1(2));//*undefined
//      ta sẽ thấy undefined khá giống void có thể nói void là 
//      tập hợp cha của undefined

// *NULL: biết kiểu nhưng hổng biết value
let str1 = ''; //này gọi là chuỗi rỗng
str1 = null;   //này gọi là rỗng(OBJECT) nhưng là primitive
// null và undefined thì sẽ không có thuộc tính nên không
//                      thể truy cập đc những thuộc tính
function getName(objParameter){
    return objParameter.name;
} 

console.log(getName(obj1));//*Điệp
//  console.log(getName(null)); //Lỗi
//  console.log(getName(undefined));//Lỗi

//  ta sẽ bàn sau về Symbol 
//-----------------------------------------------------------------
//I.2 Object dataType 
//  Object dataType là những kiểu dữ liệu khác với primitive
//  Plain Object (dữ liệu phẳng)
var student = {name:'Điệp', point : 10};
//              key+value  
//              properties
//  Array(mảng: mảng là cách khai báo nhiều biến cùng lúc
//              cùng kiểu dữ liệu, liền kề và san sát nhau)
var hoa = ['cúc','lan','huệ','hồng'];

// regular Expression
var regex = /ab+c/; //đây là 1 object phải khai báo bằng dấu /../
                   //cách viết regex chúng ta sẽ có 1 bài riêng
// *Function cũng được coi là 1 object trong js nhưng typeof thì là function
//  ta lấy function getName đã viết làm ví dụ
console.log(typeof getName);
// *Null typeof là Object nhưng không phải object
// *NaN typeof là number nhưng NaN == number => false vì nó k biết là gì để so sánh cả
//-----------------------------------------------------------------
//TẤT CẢ CÁC CÁCH KHAI BÁO KIỂU DỮ LIỆU NGUYÊN THỦY NHƯ
        // TRÊN ĐỀU ĐANG KHAI BÁO DƯỚI DẠNG CONSTRUCTOR
//WRAPPER CLASS: tạo object cho Boolean,String,Number
var str = new String('Điệp đẹp trai');
// str có typeof là object
// log str ta đc object String{'Điệp đẹp trai'}  
//      thay vì chuỗi đơn giản 'Điệp đẹp trai'
console.log(str); //*String {"Điệp đẹp trai"}
console.log(typeof str); //*object
//vậy lúc này ta hiểu rằng str này đang là 1 con trỏ lưu địa chỉ

//     --->nên k thể SO SÁNH CHÍNH XÁC với 1 chuỗi cùng value đc
console.log(str === 'Điệp đẹp trai') //*false
//        địa chỉ          value     //so sánh tào lao, sai là đúng
console.log(str.valueOf() === 'Điệp đẹp trai')//*true
//          ***wrapperObject.valueOf() lấy core của wrapperObject

//     --->có thể thể SO SÁNH CHÂM CHƯỚC với 1 chuỗi cùng value đc 
//                                              vì cơ chế autoBoxing
console.log(str == 'Điệp đẹp trai')  //*true
//       mò tới địa chỉ boxing rồi mở lõi đem đi so sánh với chuỗi này
//       --tương tự vậy với Number và Boolean--

// Dùng WRAPPER CONSTRUCTOR để ép kiều primitive giống String.parseInt(java)
var year = String(1999);//từ số về chuỗi
console.log(typeof year); //*string
year = Number('1999');  //từ chuỗi về số
console.log(typeof year); //*number
// Bàn riêng về Boolean
var isFind = Boolean(1999);//số
console.log(isFind);            // true
isFind = Boolean('0');     //chuỗi
console.log(isFind);            // true
isFind = Boolean({});      //object
console.log(isFind);            // true
isFind = Boolean([]);      //array
console.log(isFind);            // true
// --
isFind = Boolean(null);    //null là rỗng( số 0)
console.log(isFind);            // false
isFind = Boolean(0);       //số 0
console.log(isFind);            // false
isFind = Boolean(10/'D');  //NaN(not a number) k giá trị false
console.log(isFind);            // false
//  false thì là false (k có chuyện false  = false là true)
//  true thì là true, không quan tâm object hay primitive
isFind = Boolean(false);   //false thì là false (k có chuyện false  = false là true)
console.log(isFind);            // false
isFind = Boolean(Boolean(true));
console.log(isFind);

//FALSY : đối với js những gì không chứa giá trị thì đều được coi là false
//  null, undefined , 0 , -0, ""(chuỗi rỗng), false, NaN(not a number)
//TRUTHY: ngược lại cái nào có chứa giá trị thì true hết
//(Nhớ: chuỗi khác rỗng, số khác 0, và các object đều là true)


//PASS BY VALUE / PASS BY REFERENCES
//-(Tham trị và tham chiếu trong js)-
//1.PASS BY VALUE với PRIMITIVE
//vd1:
let a = 1;
let b = a; //b mượn giá trị của a tham kháo
//nên a vẫn là 1 và b = 1
b = 2; //thay đỗi giá trị ở b thành 2/ a không liên quan gì hết
//      nên vẫn là 1 thôi
console.log(a);
console.log(b);

//vd2:
let point = 4;
function updatePoint(pointCurrent){
    pointCurrent = 10;
}
updatePoint(point);//khi mình viết như này có nghĩa là var pointCurrent = point
                   // pointCurrent pass by value của point 
                   // pointCurrent = 10; // thì nó đổi chứ point k đổi nên điểm
                   // không được thay đổi gì
                   // bên C ta đã nói rất nhiều về vấn đề này, nên ta đã dùng con trỏ
console.log(point); //giá trị vẫn là 4

//2.PASS BY REFERENCES với OBJECT
//  gán hoặc sao chép 2 object thì nghĩa là lưu địa chỉ của giá trị trên vùng nhớ
//                                                      không lưu giá trị được gán
// sao chép địa chỉ , không phải giá trị
var array1 = ['Điệp', 'Đẹp Trai'];
var array2 = array1; // cho array2 mượn địa chỉ array1 (2 chàng trỏ 1 nàng)
array2[0] = 'Hoa';   // đổi giá trị trên vùng nhớ chung của 2 chàng array1/array2
console.log(array1);//*(2) ["Hoa", "Đẹp Trai"]
console.log(array2);//*(2) ["Hoa", "Đẹp Trai"]
//cả 2 cùng bị đổi|Pass By REFERENCES
array2 = ['Hoa', 'Đẹp Trai']; //tạo vùng new Mới
//lập tức array1 vẫn trỏ vùng new cũ 
//nhưng array2 đã trỏ vùng new mới, mỗi anh 1 nàng rồi, k còn dính đến nhau nữa
//nên array2 đổi value/ hay array1 đổi value cũng k dính nhau nữa
//vì không còn trỏ về cùng 1 vùng với nhau nữa
array2[0] = 'Huệ'
console.log(array1);//(2) ["Hoa", "Đẹp Trai"]
console.log(array2);//(2) ["Huệ", "Đẹp Trai"]

//ARRAY LÀ OBJECT nên tất cả những thằng object đều sẽ có cơ chế này



