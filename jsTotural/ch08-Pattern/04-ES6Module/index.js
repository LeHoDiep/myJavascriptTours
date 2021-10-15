//vài này nên mở bằng live server vì nó cần kết nối với ES6 để hiểu module nhó
//trước khi có ES6 Module
// js không có tính năng module hóa
// mọi người phải dựa vào các thư viện ngoài như webpack
//  hoặc nodeJs phiên bản 13.2.0 trở lên
//   hoặc tự tạo module pattern như các bài trước

// giờ đây ta đã có thể es6 module trong chương trình trình duyệt thông thường
//                                          webpack| nodejs 13.2.0

//ES6 module    lưu trữ trên từng file, 
//              mỗi file là 1 module
//              mọi thứ trong module mặc định là private
//              hàm, biến xuất ra ngoài bằng từ khóa export
//              code bên trong module luôn chạy ở chế độ 'use strict' mode

//tạo thêm 1 file util.js để demo

//khi import index.js đừng quên thuộc tính type = 'Module'
import {greeting, handleSum, div, mul} from './util.js'
//dùng thử
console.log(greeting)
console.log(handleSum(1,2))
console.log(div(4,2))
console.log(mul(1,2))

