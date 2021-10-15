console.log('Bài 1: try-catch')
// Bài 1: try-catch

//ta có thể xử lý lỗi của người dùng bằng try catch để ngăn ứng dụng crash trong quá trình runtime

//nhớ rằng trycatch chỉ hoạt động với runtime Error , không với syntax error

//trycatch chỉ hoạt động đồng bộ thôi
//  sẽ không bắt đc lỗi trong setTimeout
// try{
//     setTimeout(() => {
//        diepPiedTeam //lỗi chưa khai báo
//     }, 1000);
// }catch(e){
//     alert('lỗi rồi nè')
// }


//phải viết đoạn code trên thành thế này nếu muốn dùng tryCatch
// setTimeout(() => {
//     try{
//        diepPiedTeam //lỗi chưa khai báo
//     }catch(e){
//         alert('lỗi rồi nè')
// }}, 1000);


//Khi xảy ra lỗi, js tạo thành 1 Object chứa thông tin về lỗi, gồm 3 propertie
//name   :  tên
//message:  thông báo lỗi
//stack  :  thông tin chi tiết về lỗi, tại vị trí nào

try {
    diepPiedTeam
} catch (error) {
    console.log(error.name)     //ReferenceError
    console.log(error.message)  //diepPiedTeam is not defined
    console.log(error.stack)    //ReferenceError: diepPiedTeam is not defined
                                //at 01-tryCatch.js:34
    console.log(error)          //ReferenceError: diepPiedTeam is not defined
                                //at 01-tryCatch.js:34
}

//chủ động ném lỗi từ try về catch với THROW
//  throw 'Lỗi'
//  throw new Error('Lỗi')
//  throw new SyntaxError('Lỗi')
//  throw new ReferenceError('Lỗi')

// muốn sau khi catch lỗi hay không luôn thực thi đoạn code nào đó , ta dùng finally

// loading = false;
// try {
//     loading = true;
//     get();
//     loading = false;
// } catch (error) {
//     loading = false;
// }

// 
// loading = false;
// try {
//     loading = true;
//     get();
//     loading = false;
// } catch (error) {

// }finally{
//     loading = false;
// }

loading = false;
try {
    loading = true;
    get();
    loading = false;
}finally{
    loading = false;
}

//dùng try có return thì finally vẫn sẽ chạy
//các biến trong 3 phần try catch finally sẽ không xài chung nếu dùng let. const
