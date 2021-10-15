//------------------------------------------------------------------------------------------
//cả môi trường trình duyệt hay nodeJS thì js luôn là ngôn ngữ chạy đơn luồng
//PHP và Java là ngôn ngữ chạy đa luồng

//trong trường hợp đồng bộ: ta có dòng 2 dòng code theo thứ từ L1 L2
//thì L1 chạy xong rồi thì L2 mới được chạy

//trong những chương trình bất đồng bộ thì L1 chưa chạy xong thì L2 cũng chạy

//CALL Stack: là một cấu trúc dữ liệu dạng ngăn xếp (stack) dùng dể chứa thông tin về
//hoạt động của chương trình trong lúc thực thi. Call stack hoạt động theo kiểu LIFO
//LIFO: Last in fisrt out: vào sau ra trước, thằng vào sau cùng sẽ được thực hiện và thoát
//      ra khỏi ngăn xếp trước

//hình dung như này
function a(x){
    console.log(x)
}

function b(y){
    a(y + 2)
}

function c(z){
    b(z + 1)
}
//  khi gọi đoạn code này ta sẽ có callstack như sau
// c() được gọi C vào callstack
// trong c gọi b() b vào callstack
// trong c gọi a() a vào callstack cuối cùng
// tức là callstack sẽ có thứ tự lần lượt như sau callstack: c b a
// a là đứa vào cuối cùng, theo nguyên tác LIFO, như vậy thì a sẽ chạy trước và giải phóng trước
// tiếp đó đến b và cuối cùng là c
// đến khi callstack thực hiện xong thì code hoàn tất

//------------------------------------------------------------------------------------------

//EVENT LOOP và CALLBACK QUEUE(Kiu)
//trong một js runtime(môi trường chạy js) còn 1 thứ quan trọng khác không kém gì callstack
// vd: web APIs,  EVENT LOOP và CALLBACK QUEUE(Kiu)

// *Tổng thể là js có :
// -về vùng nhớ:  memory heap           call stack

// -event loop :  liên tục lập đi lập lại chờ đợi 1 sự kiện"click,load,onDone,submit..."
//               EVENT LOOP                        sự kiện này là CALLBACK QUEUE(Kiu)

// -webAPIs    :  DOM|AJAX(XMLhttpRequest)|timeOut(setTimeout)

// ta có thề nhìn hình ./eventLoop-CallbackQueue.png (đây là 1 bức tranh tổng thể về môi trường
//                                                    chạy của js)

//một ví dụ trực quan về cách hoạt động của Event Loop và CallBack Queue
function main(){
    console.log('command1')

    setTimeout(function timeout(){
        console.log('command2')
    }, 3000);

    console.log('command3')
    // setTimeout(function timeout(){
    //     console.log('command4')
    // }, 1000);
}
main()
//thứ tự xuất ra màn hình như sau
//command1|command3|sau 3 giây thì có command2
// như vậy ta có thể thấy được rằng command3 không đợi 3 giây cho command2 chạy trước
// như kịch bản(command1 ra, chờ 3 giây command2, rồi command3)

//giải thích đoạn code  trên như sau
//đoạn console.log command1 được chạy
//đoạn setTimeOut được gọi => đẩy async callback là timeout vào WebAPIs, cho timeout đợi 3s
//                  vậy đoạn code đó có thời gian thực thi là 3s
//đoạn console.log command3 được chạy trong quá trình 3 giây đó
//sau 3s thì đoạn code command2 được chạy
//http://latentflip.com/loupe/
//trang này giúp mình hình dung được điều gì xảy ra trong call stack
//webAPIs và Callback queue
//phải để ý rằng thằng main chạy xong thì thằng timeout mới vào stack mới hiển thị dòng command2


//tóm lại js có callstack , js runtime còn có thểm webAPIs và CallQueue,eventLoop
//những thứ này hoạt động trên 1 luồng riêng biệt và được đảm bảo về tính thống nhất

//thực sự thì tất cả code ở js đều thực hiện đồng bộ.event loop cho phép chúng vào hàng đợi
//và thực hiện các đoạn code tiếp theo (code vẫn từ trên xuống theo thứ tự)
//js thì hoạt động đơn luồng nhưng, js runtime thì chạy đa luồng (do có event loop có hàng đợi)
//EVENT LOOP là chủ đề nâng cao của js, mình sẽ bàn sâu hơn về nó ở 1 bài khác
//còn mình chỉ cần hiểu đến đây để hiểu về bất đồng bộ là đủ mình sẽ quay lại nó sau
//https://www.youtube.com/watch?v=8aGhZQkoFbQ


//ASYNC CALLBACK - bất đồng bộ callback:    //CallBack Function : hàm có parameter là 1 function
//xảy ra rất nhiều ở js
// ưu điểm      : dể hiểu(vì chỉ là 1 callback function đơn giản)
// nhược điểm   : khó khăn trong việc xử lý lỗi, code bị lồng vào nhau quá nhiều callback hell

//lắng nghe sự kiện click khi được click thì mới chạy callback function
//giả sử ta có 2 sự kiện click lần lượt là L1,L2
//vd1:nếu k có bất đồng bộ: L1 sẽ đợi ta click để chạy hàm sau đó mới
//                      xuống L2 đợi tiếp, như vậy không hay
//ta muốn các nút đều lắng nghe sự kiện mà
//vậy nên bất đồng bộ sẽ giúp các nút cùng nhau lắng nghe sự kiện, mà không cần thứ tự
//=> bất đồng bộ rất quan trọng

//vd2:đọc file trong nodeJs
// fs.readFile('demo.txt', (err, data) => {
//     console.log(data)
// })
//đọc file xong mới log data bằng callback

//nhưng cẩn thận callback hello


//CALLBACK Gây khó khăn trong việc xử lý lỗi
//ví dụ
try {
    setTimeout(() => {
      throw new Error('Lỗi rồi')
    }, 1000)
} catch (error) {
    // Dòng này sẽ không bao giờ được chạy
    console.log(error)
}

//viết như này thì trycatch k bắt đc lỗi nào, vì nó chạy xong rồi, thì mới có dòng throw new Error
//được ném ra, lúc này k có ai bắt lỗi cả, vì trycatch đã xong từ lâu
//Uncaught Error: Lỗi rồi :: không bắt đc lỗi

//chúng ta sẽ học Promise ES6 để thay thế cho callback này nhé
//tham khảo hình ./Promise.png để nhìn tổng quan phần lưu ý này


//ví dụ vui
for(var i = 0; i <= 3 ;i++){
    setTimeout(()=>{
        console.log(i)
    },1)
}

for(let i = 0; i <= 3 ;i++){
    setTimeout(()=>{
        console.log(i)
    },1)
}

