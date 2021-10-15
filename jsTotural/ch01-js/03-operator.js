console.log('Bài 3: OPERATOR Toán tử');
// OPERATOR Toán tử
//trong js có 10 loại toán tử
/*
1  Assignment            gán
2  Comparison            so sánh
3  Arithmetic            toán hạng
4  bitwase               bitwase
5  logical               logic
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy
9  Unary                 một ngôi
10 Relational            Quan hệ
*/
// 
// Arithmetic Operator toán tử toán hạng
//  + | - | * | ** | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
// 

// Comparison Operator toán tử so sánh
//  == bằng giá trị là được (không quan tâm kiểu)


console.log(2 == '2'); //*true  (2 = '2'  đúng nếu không so về kiểu dữ liệu)
console.log(2 != '2'); //*false (2 != '2' sai  nếu không so về kiểu dữ liệu)


//  === bằng giá trị và cùng kiểu dữ liệu
console.log(2 === '2'); //*false(2 === '2' sai nếu so về kiểu dữ liệu)
console.log(2 !== '2'); //*true (2 khác'2'đúng nếu so về kiểu dữ liệu)

//  > | < | >= | <= | 

// Conditional Operator ? (Toán tử ba ngôi)
var diep = 'đẹp trai'
var diepdeptrai; //boolean
if(diep == 'đẹp trai'){
    diepdeptrai = true;
}else{
    diepdeptrai = false;
}
console.log('Điệp đẹp trai' +' '+ diepdeptrai); //*Điệp đẹp trai true
console.log('Điệp đẹp trai' + +diepdeptrai);    //*Điệp đẹp trai1
                                                //vì thêm dấu +ở trước biến nó 
                                                //hiếu true là số là 1
console.log("b"+"a"+ +"a"+"a"); //baNaNa //vì ' +"a"' là not a number (NaN)

// ta có thể dùng toán tử 3 ngôi để rút ngắn đoạn code này
diepdeptrai = diep == 'đẹp trai' ? true : false;
console.log('Điệp đẹp trai' +' '+ diepdeptrai);

//logic AND(&&) OR(||) !(phủ định kết quả của cả mệnh đề condition)
//  true && false false
//  true && true  true
//  false&& false false
//  true || false true
//  true || true  true
//  false|| false false
//  AND(&&) luôn đi tìm mệnh đề false thấy false là dừng trả ra false 
//                                    thấy 0 là đừng trả ra 0
//  OR(||) luôn đi tìm mệnh đề true thấy true là dừng trả ra true 
//                                    thấy 1 là đừng trả ra 1
console.log(0 && 1);       //*(0 not false)
console.log( 0 || 0 || 4); //*(0 not false)**
console.log(0);            //0
console.log(!0)            //true(not 1)
console.log('')            //*''
console.log(!'')           //*true
console.log(!'' && 0 && 1) //*0 dừng lại ở điều kiện loại cuối cùng**
//  các số khác đều là true vì nó có value, chỉ có 0 và 1 là đại diện cho true/false
//  nếu tìm kiếm true hoài k đc thì nó sẽ return về vế cuối cùng(ở đâu là 4)
















