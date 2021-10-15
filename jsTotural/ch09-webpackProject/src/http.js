//lần này mình chỉ dùng fetch api thôi
//nếu mình kết hợp fetch api và async await thì sẽ hay hơn
class Http {
    constructor() {
        this.api = 'https://6114e65daec65d0017e9dbd3.mockapi.io/articles'
        this.headers = {
            'Content-type': 'application/json'
        }
    }

    //tạo phương thức read để get data từ api
    readPosts() {
        return fetch(this.api, {
            method: 'GET',
            headers: this.headers
        }).then(res => res.json())
    }
    //tạo phương thức readPost lấy về 1 post theo id có sẵn
    readPost(id) {
        return fetch(`${this.api}/${id}`, {
            method: 'GET',
            headers: this.headers
        }).then(res => res.json())
    }
    //tạo phương thức tạo mới 1 post và truyền lên api
    createPost(body) {
        return fetch(this.api, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        }).then(res => res.json())
    }

    //tạo phương thức updatePost , update dựa trên id
    updatePost(id, body) {
        return fetch(`${this.api}/${id}`, {
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify(body)
        }).then(res => res.json())
    }

    //xóa 1 post dựa trên id
    deletePost(id) {
        return fetch(`${this.api}/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        }).then(res => res.json())
    }
}


//13
//mỗi thằng trong này đều là module nên mình cần phải export cái class này
//cho thằng js sử dụng
export default new Http()
//14
//qua bên  index.js import vào xài