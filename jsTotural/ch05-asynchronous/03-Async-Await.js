//Async/Await ES7
//nếu như ES6 cung cấp promise để xử lý callback hell chưa hiệu quả
//thì ở phiên bản này chúng ta có Async Await chúng ta có thể xử lý bất đồng bộ
//một cách dể nhìn và dể đọc hơn rất nhiều

//Chú ý: async/Await không thay thế cho Promise mà nó kết hợp với nhau để tạo nên cú pháp dể
//nhìn hơn,vì thế để học được async/await bạn cần học Promise trước tiên


//-------
//Async function: luôn luôn return 1 promise
//                rút ngắn cách viết hàm return promise
async function handle(){
    return 1
}
//viết như vậy tương tự đoạn code dưới đây
// function handle(){
//     return Promise.resolve(1)
// }
handle().then(value=>console.log(value))

//Await : chỉ hoạt động bên trong async function
//dùng arrow function nhưng muốn async thì làm như sau
//đây là đoạn code k xử lý bất đồng bộ
//nên value bị undefined

//ta xữ lý nó thành đồng bộ bằng async await
let getAPI = () => new Promise(resolve => {
    setTimeout(()=>{
        resolve(100)
    },1000)
})
let handle2 = async ()=>{
    value = await getAPI() //demo thì k có await, thêm await để xử lý thành đồng bộ
    console.log('hello')
    console.log(value)
    return value
}


handle2()

//lưu ý: await chỉ hoạt động trong async function
//       await chỉ tác dụng với Promise mà thôi, dùng với các function bình thường sẽ k được

//----
//--Xử lý lỗi
//xử lý lỗi với Promise mình dùng then.catch
//xử lý lỗi với async/await mình dùng try catch
//vd
getAPI = () => new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject(new Error('lỗi rồi đó'))
    },1000)
})

let getUser = async () => {
    try{
        const value = await getAPI()
        return value
    }catch(error){
        console.log(error)
        //return null thì value của then là null
    }
}
getUser().then(value=>{
    console.log(value)
})
//Error: lỗi rồi đó //nó lỗi rồi, mà nó k quay lại nên nó k có value để return
// undefined        //value k có nên undefined

//-----------
//**ĐỪNG BAO GIỜ kết hợp các toán tử đồng bộ với async/await */
//ví dụ
let x = 0;
let handle3 = async()=>{
    x+=1
    console.log(x)
    return 5
}

(async()=>{
    x+= await handle3()//đoạn code này sẽ k được vì lúc này nó k chơi với toán tử
    console.log(x) //kết quả ở đây sẽ là 5 mà thôi
})();

//fix nó thành thế này
//lúc này x đang bằng 5 nha
(async()=>{
    let tmp = await handle3()//chỉ gán vào 1 biến tạm
    x += tmp
    console.log(x) //kết quả ở đây sẽ là 10 như bình thường
})();



//----------
// Gọi tuần tự với async/await
const getBooks = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(['sách 1','sách 9','sách 7'])
        },2000);
    })
}
getUser = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(['An','Bình','Cường'])
        },3000);
    })
}

// getAPI = async() => {
//     const books = await getBooks()
//     const users = await getUser()
//     return {
//         books,
//         users
//     }
// }

// getAPI().then(value=>{
//     console.log(value)
// })
//đoạn code này hoàn toàn đúng k sai, nhưng lại không hay
//vì như vậy tổng thời gian hoàn thành việc này là 5s
// trong khi đó ta có thể làm cho việc chờ đợi này nhanh hơn còn 3s thôi

getAPI = async () => {
   //không xữ lý bất đồng bộ mà cho chúng nó tùm lum luôn, nhưng bỏ vào 1 mảng đặc biệt
    // const arr = await Promise.all([getBooks(),getUser()]) //có thể dùng destructuring
    const [books,users] = await Promise.all([getBooks(),getUser()]) //có thể dùng destructuring
    return {
        books,
        users
    }
}

getAPI().then(value => {
    console.log(value)
})


