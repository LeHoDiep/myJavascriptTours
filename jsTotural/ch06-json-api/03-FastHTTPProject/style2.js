//*lưu ý: Promise return từ fetch không reject dựa trên http error status ngay cả khi HTTP 404/500
//        thay vào đó nó sẽ resolve bình thường(với ok status là false)
//        chỉ reject khi mạng lỗi hoặc bất kỳ điều gì ngăn request hoàn thành
class FastHttp{
    send(method,url,body){
        return fetch(url,{
            method: method,
            headers:{'Content-Type':'application/json'},
            body: body?JSON.stringify(body):undefined //chổ này lưu ý không phải null
        }).then(res=>{
            if(!res.ok){
                throw new Error('Lỗi chết mẹ rồi')
            }
            return res.json()
        })
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


//cuối cùng mình cùng test thử cách viết bằng async await ở style3.js