console.log('./14-windowObject.js');
//WindowObject là đại diện cho cửa số trình duyệt
//tất cả các Global js Object, function, biền khai báo bằng var
//(không phải let/const)

//đều tự động trở thành thuộc tính hoặc phương thức của window
//ngay cả DOM cũng là thuộc tính của window

//1.Property và Method 
//  1.1 window.innerHeight : chiều cao bên trong của cửa sổ trình duyệt(px)
console.log(window.innerHeight);

//  1.2 window.innerWidth : chiều rộng bên trong của cửa sổ trình duyệt(px)
console.log(window.innerWidth);

//  1.3 window.open('url','target','fieldter') : mở 1 tab mới
// window.open('https://www.facebook.com/nomadic.lodestar/'
//                 ,'_blank','width = 500,height = 500')  

//  1.4 window.close() : đóng tab
//  1.5 window.resizeTo(300,500) : đóng tab
// varr myNewTab = window.open('https://www.facebook.com/nomadic.lodestar/'
//                 ,'_blank','width = 500,height = 500') 
// myNewTab.resizeTo(500,300)

//2.Window Location
// 2.1 location.href    : trả ra url hiện tại
console.log(location.href)
// 2.2         .hostname: trả về domain
console.log(location.hostname)
// 2.3         .pathname: trả về pathname google.com/search
console.log(location.pathname) //*/search
// 2.4         .protocol: trả về giao thức
console.log(location.protocol) //*vd: http
// 2.5         .assign('url'): truyển hường về trang mới
// location.assign('https://www.facebook.com/nomadic.lodestar/') //*vd: http
// location.href = 'https://www.facebook.com/nomadic.lodestar/'

//navigator thuộc tính của người dùng trình duyệt
console.log(navigator);

//history chứa lịch sử của trình duyệt
console.log(history);
history.back() //lùi về 1 trang
history.forward() // tiến lên 1 trang


//Trình duyệt cung cấp 3 loại Popup

//alert
//không có rì để nói
//confirm:người dùng xác nhận điều gì đó không (true/false)
if(confirm('Nhấn oke để oke')){
    txt = 'pressed oke';
}else{
    txt = 'pressed cancel';
}
//prompt: giống confirm nhưng cho thêm input để nhập vào
//  return ra chuỗi đã nhập trong input
prompt('nhập tên của bạn vào đây','Điệp đẹp trai');


