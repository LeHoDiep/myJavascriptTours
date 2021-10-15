// Bài 9: Number -- Method
console.log('Bài 9: Number -- Method');
// Kiểu số trong js chỉ có number thôi
// số nguyên: độ chính xác là 15 số
var x = 999999999999999 //*15 số  999999999999999
var y = 9999999999999999 //*15 số 10000000000000000

// giới hạn của số thập phân là 17 chữ số
var z = 0.2 + 0.1;//*
console.log(z)//*0.30000000000000004

// fix bằng cách bến nó thành số nguyên
var a = (0.2*10 + 0.1*10)/10;//*
console.log(a)//*0.3

//làm tròn đến hàng thập phân
var b = 0.2 + 0.1;//*
console.log(Number(b.toFixed(1)))//*0.3 làm tròn đến 1 chữ số thập phân thôi

//dùng Math.js
// var b = math.add(math.fraction(0.2) + math.fraction(0.1));//*
// console.log(b)//*0.3

// số + số = số
// số + chuỗi = chuỗi

// Not a Number: NaN type Number check bằng isNaN(x)| NaN == NaN false
// Infinity: Dương vô cực   vd: 2/0(infinity) -2/0(-infinity) typeOf infinity
//                                                                  number

// Hexadecimal: hệ thập lục phân
// var x = 0xff; 255

//toString : để ép số về chuỗi
x = 10;
x.toString();//immutable
console.log(x);

//ép kiểu về số
// Number() | parseInt() | parseFloat()




