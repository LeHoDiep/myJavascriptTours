console.log('dateTime');

//kiểu giờ trong js là object dựa trên milisecond
//tính từ ngày 1/1/1970 tính theo UTC
//có 4 cách khởi tạo
var a = new Date();
var b = new Date(1626407814596); //*https://currentmillis.com/
var c = new Date('2021-7-16');   // không nên, vì nhiều trình duyệt có 
                                 // kiểu dataString đặt biệt
var d = new Date(2021,6,16,10,70,32,1);
                                 //y/m/d/h/m/s/ms
                                 //tháng trong js bắt đầu từ 0 nên 
                                 //muốn truyền vào 7 thì phải giảm xuống 1
                                 // => 6 

// getdate()        : lấy ngày trong tháng
// getday()         : lấy ngày trong tuần (0: chủ nhật - 6:thứ 7);
// getFullYear()    : lấy năm
// getHours()       : lấy giờ 0-23
// getMilliseconds(): lấy mili giây (0-999)
// getMinutes()     : lấy về phút (0-59)
// getMonth()       : lấy về tháng (0 -11)
// getSeconds()     : lấy về giây (0-59)
// toISOString()    : lấy định dạng thời gian chuẩn
                      //dùng để bỏ vào DBI/ vì các ngôn ngữ trình duyệt khác
                      //đểu có thể chuyển từ ISO này về dạng bth được

console.log(d);//*Fri Jul 16 2021 10:55:56 GMT+0700 (Indochina Time)
