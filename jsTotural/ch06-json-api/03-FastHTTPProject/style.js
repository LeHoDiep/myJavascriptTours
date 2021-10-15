//xây dựng 1 ứng dụng getAPI

//trước tiên mình tìm hiểu về RESTful API
// API(Application Programming interface): là tập hợp các quy tắc cơ chế mà theo đó
//      một ứng dụng(thành phần) tương tác với với ứng dụng(thành phần) khác
//      trả về những dữ liệu mình cần dưới dạng phổ biến như json/XML

// REST :một dạng chuyển đổi cấu trúc dữ liệu,một kiểu kiến trúc để viết API 
//      sử dụng phương thức HTTP đơn giản để tạo giao tiếp giữa các máy, thay vì dùng
//      1 url để xử lý 1 số thông tin người dùng thì "REST gữi 1 yêu cầu HTTP như GET/POST/DELETE
//      đến 1 url để xử lý dữ liệu"

// RESTful API: hoạt động dựa trên giao thức HTTP,các hoạt động CRUD sẽ dùng phương thức http riêng
//      -GET    (SELECT):trả về (danh sách)resource 
//      -POST   (CREATE):tạo mới một resource
//      -PUT    (UPDATE):cập nhật thông tin cho resource
//      -DELETE (DELETE):xóa một resource

// các lập trình viên hiện nay đều xây dựng RESTful API theo các method CRUD
//--CREATE      READ        UPDATE      DELETE

//mình vào mockapi.io để tạo 1 RESTful API
const baseURL = 'https://6114e65daec65d0017e9dbd3.mockapi.io/users'
//tạo 1 constructor function 
//mình sẽ làm 3 phiên bản :callback/promise/async-await
//I.dúng CALLBACK (XMLHttpRequest)
function FastHttp(){
    this.xhr = new XMLHttpRequest()
}
//I.1.tạo method get nhận vào url và 1 cái callback
//nếu như url này kết nối đc thì callback sẽ nhận 2 parameter
//              là trạng thái lỗi(nếu k có thì null) và data từ url(response)
//nếu như url này được nhưng lỗi request thì callback sẽ nhận vào kết quả response lỗi trả về
//mục đích cho việc có callback này là để tùy biến, thích báo lỗi hay làm gì thì tùy
//ở đây mình dùng callback để báo data và lỗi

//cuối cùng là GET response từ url, true: đồng bộ
//sau cùng là send
//nhớ rằng response nếu thành công sẽ là data
//nếu thất bại thì response sẽ là lỗi, mình phải tùy biến truyền vào callback hợp lý
//--"demo ban đầu dùng thằng này, sau khi demo đến send thì tắt"--
// FastHttp.prototype.get = function(url,callback){
//     this.xhr.onreadystatechange = function(){
//         if(this.readyState == 4){//kết nối đc
//             if(this.status == 200 || this.status == 201){//request cũng oke thì
//                                                          //get:200||post:201
//                 callback(null, JSON.parse(this.responseText))
//             }else{
//                 callback(this.responseText,null)
//             }
//         }
//     }
//     this.xhr.open('GET',url,true)
//     this.xhr.send()
// }

//viết xong test ngay
//tạo object từ constructor FastHttp
//--
// const http = new FastHttp()
//dùng method get đã tạo truyền vào 2 parameter là url và 1 hàm callback
//--
// http.get(baseURL,(error,data)=>{
//     if(error){//nếu callback nhận vào có error log ra
//         console.log('ERROR:',console.error)
//     }else{    //nếu không  thì log data ra
//         console.log(data)
//     }
// })


//I.2 method POST
//vì mình dùng prototype nên mình tạo ở dưới này thì thằng http vẫn sẽ có method post
//--"demo ban đầu dùng thằng này, sau khi demo đến send thì tắt"--
//--
// FastHttp.prototype.post = function(url, body, callback){
//     this.xhr.onreadystatechange = function(){
//         if(this.readyState == 4){//kết nối đc
//             if(this.status == 200 || this.status == 201){//request cũng oke thì
//                 callback(null, JSON.parse(this.responseText))
//             }else{
//                 callback(this.responseText,null)
//             }
//         }
//     }
//     this.xhr.open('POST',url,true)//mở ra mới xài đc nha mấy má
//     this.xhr.setRequestHeader('Content-Type','application/json')//dòng này dưới dòng mở mới đc nha
//     this.xhr.send(JSON.stringify(body))
// }

// //xài thử post
// http.post(baseURL,{name:'Điệp đẹp trai',address:'HCM City'},(error,data)=>{
//     if(error){//nếu callback nhận vào có error log ra
//         console.log('ERROR:',console.error)
//     }else{    //nếu không  thì log data ra
//         console.log(data)
//     }
// })


//cất đoạn code trên chỉnh lại code cho đẹp
//đến đây mình sẽ nhìn thấy rằng mình có 1 đoạn code được lập đi lập lại nhiều lần trong
//method get và post/ nên mình sẽ làm lại code cho 2 phiên bản này bằng cách tạo ra 1 method send
//thay thế cho cả get và post
FastHttp.prototype.send = function(method, url, body, callback){
    this.xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200 || this.status == 201){
                callback(null, JSON.parse(this.responseText))
            }else{
                callback(this.responseText,null)
            }
        }
    }
    this.xhr.open(method,url,true)//đổi chỗ này thành method
    this.xhr.setRequestHeader('Content-Type','application/json')//dòng này dưới dòng mở mới đc nha
    this.xhr.send(body?JSON.stringify(body):null)//nếu có thì vô, k có thì hoi
}

//lúc này thằng POST và GET chỉ cần thế này
FastHttp.prototype.get = function(url,callback){
    this.send('GET',url,null,callback)
}
FastHttp.prototype.post = function(url, body, callback){
    this.send('POST',url,body,callback)
}
//sau đó quay lên tắt 2 thằng trên
//xài thử post và get
//--
// const http = new FastHttp()
//get
// http.get(baseURL,(error,data)=>{
//     if(error){
//         console.log('ERROR:',console.error)
//     }else{
//         console.log(data)
//     }
// })
//post
// http.post(baseURL,{name:'Điệp đẹp trai',address:'HCM City'},(error,data)=>{
//     if(error){
//         console.log('ERROR:',console.error)
//     }else{
//         console.log(data)
//     }
// })

//sau khi test xong ta cmt lại ta tiếp tục làm method update
FastHttp.prototype.put = function(url,body,callback){
    this.send('PUT', url, body, callback)
}

// test thử
//--
// const http = new FastHttp()
//phải truyền kèm id mà mình muốn fix
//demo này mình fix thằng 1 đổi tên thành Điệp đẹp trai số 1
//--
// http.put(`${baseURL}/1`,{name:'Điệp đẹp trai số 1'},(error,data)=>{
//         if(error){
//             console.log('ERROR:',console.error)
//         }else{
//             console.log(data)
//         }
// })

//sau khi test xong ta cmt lại ta tiếp tục làm cái cuối là method delete
FastHttp.prototype.delete = function(url,callback){
    this.send('delete', url, null, callback)
}
// test thử
//--
// const http = new FastHttp()
//phải truyền kèm id mà mình muốn fix
//demo này mình fix thằng 1 đổi tên thành Điệp đẹp trai số 1
//--
// http.delete(`${baseURL}/2`,(error,data)=>{
//         if(error){
//             console.log('ERROR:',console.error)
//         }else{
//             console.log(data)
//         }
// })

//ta cùng xem cách dùng PROMISE ở style2.js