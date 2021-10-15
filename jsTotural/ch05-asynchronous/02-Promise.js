//Promise: lời hứa rằng trong tương lai có thể sẽ làm hoặc không làm 1 hành động nào đó (thất hứa)
//chỉ có ở ES6
//một Promise sẽ có 3 trạng thái:
//Pending  : đang chờ kết quả
//fulfilled: đã có kết quả
//reject   : lỗi xảy ra

//để tạo 1 Promise ta có cú pháp new Promise
//new Promise(function(resolve,reject){

//})
//new Promise((resolve,reject)=>{

//})
//vậy param của Promise là 1 function và resolve|reject cũng là 2 function luôn

// const p = new Promise(function(resolve,reject){
//     resolve(1)
//     reject(new Error('lỗi rồi'))
// })//p là 1 Object

//xử lý Promise bằng then()
//
// p.then(value =>{
//     console.log(value)
// })//kết quả câu lệnh này ta được 1

//mình check thử reject xem sao
//muốn check thì phải tắt resolve đi
//cách 1 truyền thêm 1 function nữa
//
// p.then(value =>{
//     console.log(value)
// }, error=>{
//     console.log(error)
// })

//cách 2 dùng catch bắt lỗi của reject và log ra
//
// p.then(value =>{
//     console.log(value)
// }).catch(error=>{
//     console.log(error)
// })



//ta sẽ chuyển thử 1 async callback thành Promise
//ví dụ in ra hello sau 1s

// setTimeout(()=>{
//     console.log('hello')
// },1000)

//chuyển đoạn code này thành Promise
let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('hello')
    },1000)
})
p.then(value =>{
    console.log(value)
})

//giai đoạn từ 0 - 1s ngta gọi là pending
//giai đoạn log ra kết quả là fulfilled



//Lưu Ý

//Lưu ý: Promise are eager not lazy: Promise sẽ thực hiện lúc được khai báo luôn
//không phải lúc ta gọi then() mới thực hiện, then() chỉ giúp ta lấy được kết quả mà thôi
//vd:
let a = 1;
p = new Promise((resolve,reject)=>{
    a++;
})
console.log(a)//2
//chứng tỏ là chưa gọi p.then() thì đoạn code trong promise đã chạy
//ta có thể khắc phục điều nay bằng cách bọc promise vào hàm

a = 1;
// function runPromise(){
//     p = new Promise((resolve,reject)=>{
//         a++;
//     })
//     return p
// }
p = ()=>{
    new Promise((resolve,reject)=>{
        a++;
    })
}
console.log(a)//1
p()
console.log(a)//2


//1 promise sẽ chỉ có thể rơi vào 1 trong 3 trạng thái (pending|fulfilled|reject)
//không thể đã fulfilled xong reject được
//sau khi thực hiện resolve hay reject nếu có code phía dưới thì code đó vẫn được chạy
//vd:
p = new Promise((resolve,reject)=>{
    /*return*/resolve('hello') //ta có thể thêm return ở đây nếu muốn đoạn code dưới k chạy nữa
    reject(new Error('lỗi'))//nó vẫn chạy nhưng không rejected nữa
    console.log('vẫn chạy nha mọi người')
})
p.then(value=>{
    console.log(value)
}).catch(value=>{
    console.log(value)
})
//ta nhận đc hello không nhận được lỗi
//vì gặp resolve là nó đã oke rồi, nhưng nó sẽ k rejected nữa
//1.*Then/catch luôn return về 1 Promise
p = new Promise((resolve,reject)=>{
    reject('Lỗi rồi đó')
})
//     onFulfilled  onRejected
p.then(value=>{},error=>{
    console.log(error)
    return 1 //nếu không r
}).then(value =>{
    console.log(value)//1
})
//2.*như vậy nếu bắt đầu bằng catch return ra kết quả cho then
//thì ta thấy rằng return giá trị trong onFulfilled hay onRejected sẽ đưa giá trị đó
//về trạng thái onFulfilled ở promise tiếp theo

//3.*Throw giá trị trong executor/ onFulfilled / onReject sẽ đưa giá trị đó về trạng thái onRejected
//ở Promise tiếp theo
p = new Promise((resolve,reject)=>{
    resolve('Lỗi rồi đó')
})
//     onFulfilled  onRejected
p.then(value=>{
    console.log(value)
    throw value+' bạn ơi' //như vậy ta đã có 1 reject mới, vậy phải hứng bằng then(,..) hoặc catch
}).then(value =>{},error=>{
    console.log(error)
})
//tóm lại: throw sẽ giống như reject

//tạo 1 cái promise nhanh
// p = Promise.reject(1)

//một số pattern cần tránh với Promise
// thực hiện cho code chạy tuần tự gây nên callback hell
const getProfile = ()=> Promise.resolve({name:'Điệp đẹp trai',age:22})

const getArticle = ()=> Promise.resolve(['sách văn học','tiểu thuyết'])

//như vậy sẽ bị callback hell
// getProfile().then(profile=>{
//     console.log(profile)
//     getArticle().then(articles =>{
//         console.log(articles)
//     })
// })

//ta nên dùng như này để tránh callback hell
getProfile().then(profile => {
    console.log(profile)
    return getArticle() //khi return trong onfulfilled nó sẽ thành promise nên tiếp đó mình then
}).then(articles =>{
    console.log(articles)
})

//Hiện tượng dư thừa khai báo Promise

let getToken = () => Promise.resolve('abcdef')
//cách này
let getApi = ()=>{
    return new Promise((resolve,reject)=>{
        getToken().then(token=>{
            resolve(token)
        }).catch(error=>{
            reject(error)
        })
    })
}

getApi().then(value=>{console.log(value)})
//cách này cũng được luôn
getApi = ()=>{
    return getToken()
}
getApi().then(value=>{console.log(value)})
