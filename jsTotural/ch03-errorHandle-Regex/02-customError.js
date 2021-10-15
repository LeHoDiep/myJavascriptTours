// ngoài throw new Error() chúng ta còn có 7 hàm (contructor function) khác phục vụ cho việc
// tường minh lỗi của mình hơn
// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp 
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ   


//có thể truyền nhiều hơn 1 message vào error constructor function bằng cách tạo class kế thừa
//  error và độ lại hàm constructor của Error
class CustomError extends Error{
    constructor(message, student){
        super(message);
        this.student = student
        this.name = 'CustomError'
    }
}

try {
    throw new CustomError('Lỗi do ngu', {name: 'Điệp đẹp trai'})
} catch (error) {
    console.log(error instanceof Error)         //true
    console.log(error instanceof CustomError)   //true
    console.log(error)  //CustomError: Lỗi do ngu
                        //at 02-customError.js:29
}