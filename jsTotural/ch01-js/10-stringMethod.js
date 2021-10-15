console.log("Bài 10: chuỗi-method");

// chuỗi trong js ' " đều được nên ''
// method của String
// 1.length() //ra độ dài chuỗi
// 2.indexOf()//vị trí đầu tiên của từ hoặc chuỗi trong chuỗi, k có thì -1
// Tách chuỗi
// I.ta có 3 method tách chuỗi
//  1.slice(start,end) cắt đoạn từ start đến end - 1
var x = 'xin chào PiedTeam, mình là Điệp';
x = x.slice(9,17); //immutable
console.log(x);//PiedTeam
//      cắt ngược
x = x.slice(-8,-4);
console.log(x);//Pied
//
x = 'xin chào PiedTeam, mình là Điệp';
x = x.slice(9);//
console.log(x);//PiedTeam, mình là Điệp
x = x.slice(-12);//
console.log(x);//mình là Điệp

// 2.subString(start,end) //giống slice nhưng parameter k đc là số âm
// 3.substr(start,length) //giống như slice nhưng parameter thứ 2 là độ dài
                        //    chuỗi muốn cắt tính từ vị trí start
x = 'xin chào PiedTeam, mình là Điệp';
x = x.substr(9,8);
console.log(x);//PiedTeam

//II.các method phổ biến
//  1.replace: thay thế chuỗi
var str1 = 'PiedTeam có giá học phí rẻ và chất lượng, rẻ nhưng tốt';
var str2 = str1.replace('rẻ','thấp');
console.log(str2); //PiedTeam có giá học phí thấp và chất lượng, rẻ nhưng tốt
                   // replace thằng rẻ đầu tiên
    str2 = str1.replace(/cao/g,'thấp');
console.log(str2);//PiedTeam có giá học phí cao và chất lượng, cao nhưng tốt
                  //replace tất cả nhờ /../g

// 2.chuyển đổi hoa thường .toUpperCase   .toLowerCase
// 3.concat() nối chuỗi
str1 = 'xin chào'
str2 = 'PiedTeam'
var str3 = str1.concat(' ','mừng các bạn đã đến',' ',str2);
console.log(str3); //xin chào mừng các bạn đã đến PiedTeam
// 4.trim() : xóa khoản cách 2 bên
str1 = '  xin   chào       cả   nhà   piedTeam   ';
str1 = str1.trim();
console.log(str1);//'xin   chào       cả   nhà   piedTeam'
//--áp dụng
str1 = '     xin    chào    piedTeam    '
// str1 = str1.replace(/\s+/g,' ')
// console.log(`"${str1}"`)
// console.log(str1)
str1 = str1.split(' ')
str1 = str1.filter(item=>item != '')
str1 = str1.join(' ')
console.log(`kết quả của tui là "${str1}"`)//template string

// 5.so sánh chuỗi bằng == | ===


// 6.charAt(index) hoặc [] lấy ký tự nhờ 1 vị trí trong chuỗi
str1 = 'điệp đẹp trai';

console.log(str1.charAt(0));//đ
console.log(str1[2]);//ệ
str1[2] = 'e'//k lỗi,nhưng không chạy đâu

// 7.charCodeAt() : return về utf-16(ascii) của thằng ký tự tìm đc

// 8.split() : chuyển từ chuỗi sang mảng
str1 = 'xin chào mọi người đến từ PiedTeam'
str2 = str1.split(' ');
console.log(str2);//["xin", "chào", "mọi", "người", "đến", "từ", "PiedTeam"]
str3 = str1.split('');
console.log(str3);//["x", "i", "n", " ", "c", "h", "à",
                  //  "o", " ", "m", "ọ", "i", " ", "n", "g", "ư", "ờ",
                  //   "i", " ", "đ", "ế", "n", " ", "t", "ừ", " ", "P",
                  //    "i", "e", "d", "T", "e", "a", "m"]
var str4 = '';
str3 = str4.concat(str3);
console.log(str3)//*x,i,n, ,c,h,à,o, ,m,ọ,i, ,n,g,ư,ờ,i, ,đ,ế,n, ,t,ừ, ,P,i,e,d,T,e,a,m

