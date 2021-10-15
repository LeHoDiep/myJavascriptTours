//Axios: 1 HTTP client hoạt động trong Nodejs và trình duyệt
//       1 thư viện giúp tương tác với API như get post push
// https://axios-http.com/docs/intro trang chủ
// cài đặt hoặc dùng cdn
// cách dùng axios get
// axios({
//     method: 'get',
//     url:'https://61136be4cba40600170c1a1b.mockapi.io/user'
// }).then(response =>{
//     console.log("thành công", response)
// }).catch(error =>{
//     console.log("Thất bại",error)
// })


//cách dùng axios post
// axios({
//     method: 'post',
//     url:'https://61136be4cba40600170c1a1b.mockapi.io/user',
//     data: {
//         name:'Điệp khó tính'
//     }

// }).then(response =>{
//     console.log("thành công", response)
// }).catch(error =>{
//     console.log("Thất bại",error)
// })

//dùng Request method aliases
// axios.post('https://61136be4cba40600170c1a1b.mockapi.io/user',{
//     name:'Điệp khó tính 2'
// }).then(response =>{
//     console.log("thành công", response)
// }).catch(error =>{
//     console.log("Thất bại",error)
// })



//config lại headers
// axios.post('https://61136be4cba40600170c1a1b.mockapi.io/user',{
//     name:'Điệp khó tính 3'
// },{
//     headers:{
//         'Content-Type':'application/json',
//         token:'123123123123'
//     }
// }).then(response =>{
//     console.log("thành công", response)
// }).catch(error =>{
//     console.log("Thất bại",error)
// })

//nhưng nếu lúc nào dùng mình cũng làm như vậy thì nó quá dài và tốn sức, ta cần một instance
// https://axios-http.com/docs/instance
// let instance = axios.create({
//     baseURL:"https://61136be4cba40600170c1a1b.mockapi.io",
//     timeout: 10000,//sau 10 giây mà k xử lý đc thì hủy
//     headers:{
//         'Content-Type':'application/json',
//     }
// })

// //tạo instance xong viết rất gọn và đẹp, đọc dể hiểu
// instance.post('user',{
//     name:'Điệp khó tính 4'
//  }).then(response =>{
//         console.log("thành công", response)
// }).catch(error =>{
//         console.log("Thất bại",error)
// })


//cách người ta dùng thực tế nhiều nhất
//ngta thích dùng class để quản lý instance này hơn
// class Http {
//     constructor(){
//        this.instance = axios.create({
//             baseURL:"https://61136be4cba40600170c1a1b.mockapi.io",
//             timeout: 10000,//sau 10 giây mà k xử lý đc thì hủy
//             headers:{
//                 'Content-Type':'application/json',
//             }
//         })
//     }
// }

// let http = new Http().instance

// http.post('user',{
//     name:'Điệp khó tính 4'
// }).then(response =>{
//     console.log("thành công", response)
// }).catch(error =>{
//     console.log("Thất bại",error)
// })


//--
//Interceptors:
//đơn giản là dùng để config request trước khi gữi lên server và config response trước khi
//được xử lý bởi then và catch
//https://axios-http.com/docs/interceptors
//ở đây mình lấy đoạn code trên để ví dụ

class Http {
    constructor(){
        this.instance = axios.create({
            baseURL:"https://61136be4cba40600170c1a1b.mockapi.io",
            timeout: 10000,
            headers:{
                'Content-Type':'application/json',
            }
        })
        //cấu hình response nhận về
        this.instance.interceptors.response.use(response=>{
            const result = {
                data: response.data,
                status: response.status           
            }
            return result
        },({response})=>{
            const result = {
                data: response.data,
                status: response.status           
            }
            return Promise.reject(result)
        })

        //cấu hình request truyền lên
        this.instance.interceptors.request.use(config=>{
            const accessToken = localStorage.getItem('accessToken')
            if(accessToken){
                config.headers.authorization = accessToken
            }
            return config
        },error=>{
            return Promise.reject(error.response)
        })
    }
}

let http = new Http().instance

http.post('user',{
    name:'Điệp khó tính 4'
}).then(response =>{
    console.log("thành công", response)
}).catch(error =>{
    console.log("Thất bại",error)
})