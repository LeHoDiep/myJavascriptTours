//khá giống với fetch api nhưng dùng async await
//nên từ bài cũ ta fix lại 1 tý xíu
//*lưu ý: Promise return từ fetch không reject dựa trên http error status ngay cả khi HTTP 404/500
//        thay vào đó nó sẽ resolve bình thường(với ok status là false)
//        chỉ reject khi mạng lỗi hoặc bất kỳ điều gì ngăn request hoàn thành
class FastHttp{
    async send(method,url,body){//fix lại send thí xíu
        const data = await fetch(url,{
            method: method,
            headers:{'Content-Type':'application/json'},
            body: body?JSON.stringify(body):undefined //chổ này lưu ý không phải null
        })
        if(!data.ok){
            throw new Error('Lỗi chết mẹ rồi')
        }
        return data.json()
    }
    get(url){
        return this.send('GET',url,null)
    }
    post(url,body){
        return this.send('POST',url,body)
    }
    put(url,body){
        return this.send('PUT',url,body)
    }
    delete(url){
        return this.send('DELETE',url)
    }
}
const baseURL = 'https://6114e65daec65d0017e9dbd3.mockapi.io/users'
const http = new FastHttp()
//nếu mà muốn dùng asyn await cho đoạn này ta có thể làm như sau
//dùng document
////nhớ là promise dùng then catch
//  async await dùng try catch
// document.addEventListener('DOMContentLoaded',async()=>{
//     try{
//         const data = await http.get(baseURL)
//         console.log(data)
//     }catch(error){
//         console.log('error nè: ',error)
//     }
// })

//hoặc có thể dùng IIFE
;(async()=>{
    try{
        const data = await http.get(baseURL)
        console.log(data)
    }catch(error){
        console.log('error nè: ',error)
    }
})()




//test GET : nhớ test trường hợp lỗi
// http.get(baseURL)
//         .then(value=>{
//             console.log(value)
//         }).catch(error=>{
//             console.log('Error:',error)
//         })

//test POST :
// http.post(baseURL,{name:'Anh Điệp nghèo khổ',city:'HCM City'})
//         .then(value=>{
//             console.log(value)
//         }).catch(error=>{
//             console.log('Error:',error)
//         })

//test PUT :
// http.put(`${baseURL}/1`,{name:'Anh Điệp gà',city:'HCM City'})
//         .then(value=>{
//             console.log(value)
//         }).catch(error=>{
//             console.log('Error:',error)
//         })

//test DELETE :
// http.delete(`${baseURL}/10`)
//         .then(value=>{
//             console.log(value)
//         }).catch(error=>{
//             console.log('Error:',error)
//         })