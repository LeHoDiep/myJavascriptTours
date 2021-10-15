// function map(){
//     const toaDo = [15.00090998,105.12312312]
//     function layToaDo() {
//         return toaDo
//     }
//     return {
//         inToaDo: function() {
//             console.log(layToaDo())
//         }
//     }
// }

//sau khi đem đoạn code này qua đây thì code vẫn sẽ chạy ngon lành rồi
//nhưng nó phát sinh ra 1 vấn đề đó là
//giờ người dùng đã bị giới hạn đặt tên
//cụ thể là người dùng không thể tạo biến tên map được
//có thể kiểm tra bên file còn lại


//chúng ta có thể vào tận thư viện để fix lại tên cho function khác đi
//nhưng cách này rỏ ràng là không hay


//ta có thể chuyển đoạn code trên thành module pattern
//cmt đoạn code trên đã

//IIFE
// const map = (function (){
//     // private Variable 
//     const toaDo = [15.00090998,105.12312312]
//     // private function 
//     function layToaDo() {
//         return toaDo
//     }
//     return {
//         //Public function
//         inToaDo: function() {
//             console.log(layToaDo())
//         }
//     }
// })();
//đây gọi là 1 module pattern
//ta có thể test lại bên kia
//qua kia test rồi về


//cái module pattern này có 1 khuyết điểm
//là return ra 1 object nếu object đó quá nhiều Public function thì lại trông k đẹp


//ta có thể khắc phục việc này bằng
//Revealing Module Pattern
//cmt thằng trên lại
const map = (function () {
    // private Variable 
    const toaDo = [15.00090998, 105.12312312]
    // private function 
    function layToaDo() {
        return toaDo
    }
    function inToaDo() {
        console.log(layToaDo())
    }
    //chuyển lên thế này gọi là revealing 
    return {//giúp cho object return gọn gàng hơn
        //Public function
        inToaDo//revealing 
    }
})();