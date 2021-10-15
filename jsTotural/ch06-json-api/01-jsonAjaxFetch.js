// JSON : js object notation
//          là 1 chuỗi được viết dưới dạng js object
//          dùng để lưu trữ và trao đổi dữ liệu
//                  thường là: string, number, boolean, array, object, null
//          dễ dàng sử dụng ở các ngôn ngử lập trình khác
//          có thể thao tác với json thông qua JSON.parse() và JSON.stringify()

//----
//Chuyển đổi object thành json
//tạo 1 obj để demo
const obj1 = {
    name: 'Điệp đẹp trai',
    age: 22,
    status: 'Hay giận dỗi'
}
//--
//ta dùng JSON.stringify(obj) để biến nó thành string JSON
let myJSON = JSON.stringify(obj1)
console.log(myJSON) //'{"name":"Điệp đẹp trai","age":22,"status":"Hay giận dỗi"}'
//--
//ngược lại ta có thể chuyển từ JSON thành object với JSON.parse(jsonString)
let myObj = JSON.parse(myJSON)
console.log(myObj)//{name: "Điệp đẹp trai", age: 22, status: "Hay giận dỗi"}

//cú pháp json
//  -với object thì data là cặp name:value
//  -data được ngăn cách bởi dấu phẩy(,)
//  -ngoặc nhọn mô tả object
//  -ngoặc vuông mô tả mảng
//  -Json dùng dấu nháy "" để phân với dấu nháy '' ở ngoài cùng string
//  -trường name phải bọc trong nháy kép ""
//value của json phải là 1 trong những kiểu dữ liệu dưới đây
//  -string
//  -number
//  -object
//  -array
//  -boolean
//  -null

//Array và JSON
let arr = ["Cam", "Chuối", "Ổi"]
let json = '["Cam", "Chuối", "Ổi"]' //nháy ' ở ngoài cùng
console.log(json === JSON.stringify(arr))//*false vì có dấu cách trong json
//json như này mới đúng
json = '["Cam","Chuối","Ổi"]' //xóa dấu cách đi
console.log(json === JSON.stringify(arr))//true


//number và json
let result = JSON.stringify(1)
console.log(result === '1') //true

//string và json
result = JSON.stringify('Điệp đẹp trai')
console.log(result === '"Điệp đẹp trai"') //true//có thêm 2 đấu ""

//Boolean và json
result = JSON.stringify(true)
console.log(result === 'true') //true

// ngoài các giá trị được nêu ở trên Function , undefined, NaN, infinity,.. sẽ không được
// chuyển sang json
let obj2 = {
    name: 'Điệp đẹp trai',
    age: 22,
    status: 'Hay giận dỗi',
    showInfo: function(){
        console.log(this.name+' '+this.age+' '+this.status)
    }
}
obj2.showInfo() //chạy bth nha
myJSON = JSON.stringify(obj2)
console.log(myJSON)
//{"name":"Điệp đẹp trai","age":22,"status":"Hay giận dỗi"}
//mất method showinfo
//do nó là function



//AJAX: Asynchronous javaScript and XML
//      không phải ngôn ngữ lập trình (rất nhiều người mới bị lậm)
//      AJAX chỉ là 1 sự kết hợp của 
            // XMLHttpRequest object có sẳn trên trình duyệt
            //          (dùng để gữi và nhận data từ web server)
//          // Js và HTML DOM (để sử dụng hoặc hiển thị data)

/*
        cái tên ajax bị lầm là ứng dụng dùng ajax sẽ sử dụng XML(một kiểu data như json nhưng
        để gữi và nhận dữ liệu                                   (phức tạp hơn)
        nhưng trên thực tế chúng ta dùng text và json để trao đổi dữ liệu
*/

//      AJAX giúp chúng ta đọc dữ liệu từ server trả vể
//                         gữi dữ liệu lên server ở chế độ ngầm
//                         cập nhật trang web mà không cần reload lại trang
//                         là nền tảng phát triển của React, Angular, Vue



//-----
//cách AJAX hoạt động
//xem hình ajax.gif

//
//XMLHttpRequest(XHR): là constructor function: 
//                dùng để giao tiếp với server
//                XHR là 1 webAPIs nên chỉ có trên môi trường trình duyệt
//                không xuất hiện ở Node.js

//tạo 1 XHR object
let xhttp = new XMLHttpRequest();

//XHR object : method và property 
//xem hình methodAndPropXHRObject.png để tham khảo
//ở đây chúng ta sẽ thực hành để dể nhớ hơn
//nhưng ta vẫn nên tham khảo hình ảnh này để tổng hợp lại kiến thức

//-----
//ví dụ về cách dùng XHR để get
//tạo ra 1 xhr
let xhr = new XMLHttpRequest();

//xhr.onreadystatechange sẽ chạy khi readystate thay đổi
//readystate: là 1 trạng thái khi mà ta kết nối với server thì trạng thái này thay đổi(0,1,2,3,4)
//0:request chưa khởi tạo
//1:kết nối với server đã được thiết lập
//2:request được server tiếp nhận
//3:đang xử lý request
//4:request kết thúc và response đã sẵn sáng để dùng
//tham khảo ở hình
xhr.onreadystatechange =  function(){
    console.log(this.readyState)//log ra xem trạng thái là gì nhe
}
//ở đây ta sẽ gữi 1 request lên server của mình
//server ở đây mình chưa học nên mình sẽ dùng 1 server giả là https://mockapi.io/
//nhìn gữi phương thức GET(lấy về) lên cho API có sẳn trong https://mockapi.io/
//bằng method của xhr .open('method','api-link',statusOfAsync)
//statusOfAsync:có chạy bất đồng bộ hay không (true/false)
//--
// xhr.open('GET','https://61136be4cba40600170c1a1b.mockapi.io/user',true)//mình lấy data của posts
// //trước khi send ta chỉ có kết quả là 1 mà thôi
// //ta send lên thì sẽ đc nhận, thực hiện và trả ra
// xhr.send()
//--
//nó đã thay đổi 4 lần nên ta có 1,2,3,4
//ta có thể bật Impect và chuyển sang tab netWork/Fetch/XHR để xem Header và Reponse đã nhận đc

//giờ ta thử post lên server
//--
// xhr.open('POST','https://61136be4cba40600170c1a1b.mockapi.io/user',true)
// xhr.setRequestHeader('Content-Type','application/json') //cần tạo header như này
// const body = {name:'Lê Văn Điệp'}//tạo ra 1 user có thông tin là name như này
// xhr.send(JSON.stringify(body))
//--



//---------------
//dùng XMLHttpRequest để xử lý AJAX được coi là cách cổ xưa nhất và rườm rà nhất
//ngày nay chúng ta có rất nhiều lựa chọn mạnh mẽ để xử lý AJAX như:
//  JQUERY: cung cấp hàm gọi Ajax tiện lợi như load,ajax,get,getJSON
//  FetchAPI: Những trình duyệt ngày nay cũng có: FetchAPI với nhiều tính năng nâng cao
//              và cú pháp dể sử dụng hơn XHR
//  Phổ biến nhất là AXIOS: thư viện chuyên dụng cho việc xử lý Ajax cũng như gọi API
//      cung cấp nhiều tính năng hay,dùng cho cả môi trường trình duyệt và Node.js
//                                  (nếu trình duyệt nó sẽ dựa trên XHR| node sẽ là HTTP Interface)

//đối với mình, thì mình k xài jquery :)) nói đúng hơn là nó cùi chết mẹ
//nên mình sẽ dùng fetchAPI và Axios

//--------------------
//FetchAPI
//Fetch là 1 API đơn giản cung cấp cho ta khả năng gửi/nhận request thông qua trình duyệt
//Nếu như XHR dùng function thường để xử lý response thì FetchAPI dùng Promise->tiện lợi
//                                                                    cho thao tác xử lý

//demo 1 setup request đơn giản với fetch
fetch('https://61136be4cba40600170c1a1b.mockapi.io/user')
    .then(response=>{
        return response.json() //fetch có .json giúp chuyển response về json
    })//return trong onfulfilled tạo ra promise mới có resolve là return nên ta có thể then tiếp
    .then(value =>{
        console.log(value)
    })

//*lưu ý: Promise return từ fetch không reject dựa trên http error status ngay cả khi HTTP 404/500
//        thay vào đó nó sẽ resolve bình thường(với ok status là false)
//        chỉ reject khi mạng lỗi hoặc bất kỳ điều gì ngăn request hoàn thành
//vd:
fetch('https://61136be4cba40600170c1a1b.mockapi.io/users') //thêm s để cho server k chạy đc
.then(response=>{
    if(!response.ok){//dang lỗi nên response.ok là false
        throw new Error(response.statusText)
    }
    return response.json() //fetch có .json giúp chuyển response về json
})//return trong onfulfilled tạo ra promise mới có resolve là return nên ta có thể then tiếp
.then(value =>{
    console.log(value)
})
.catch(error =>{
    console.log(error)
})
//lúc này lỗi nhảy vào line 201

//-----
//Đọc một response như trên

//-----
//POST
fetch('https://61136be4cba40600170c1a1b.mockapi.io/user',{
    method:'POST',//mặc định là GET khỏi ghi
    headers:{      //thêm Headers(quan trọng) //thằng này có s :))
        'Content-Type':'application/json'
    },
    body: JSON.stringify({name: 'Điệp giận hờn'})
}).then(response =>{//khúc này mình check xem đã vào chưa
    return response.json()
}).then(value =>{
    console.log(value)
})

