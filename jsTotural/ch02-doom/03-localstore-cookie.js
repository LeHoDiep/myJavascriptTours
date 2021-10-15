// cookie
// cho phép lưu trữ thông tin người dùng web vào máy tính

const date =  new Date(2021, 6, 25).toString();
document.cookie = `username = diep; expires = ${date} ; path =/`  ;
// không truyền expires thì sẽ là session : trong lúc mở trình duyệt
// path: là nơi chứa cookie này
// không truyền path thì mặc định là đường dẫn hiện tại
console.log(document.cookie);

// cookie thì có hạn hết

//không thể truyền cookie từ trang này qua trang khác do tính bảo mật

// thường ngta dung js.cookie để thao tác với cookie
// nhưng ta có thể dùng local Storage để lưu trữ với hiệu lực vĩnh viễn

localStorage.setItem('name','diepdeptrai');
const name =  localStorage.getItem('name');
console.log(name);
//lưu trữ 1 object hay mãng thì k đc
//nhưng ta có thể lưu trữ object và mảng dưới dạng json

const profile = {
    name: 'Điệp PiedTeam',
    age : 22,
}
const profileJson = JSON.stringify(profile);
console.log(profileJson);
console.log(JSON.parse(profileJson));
localStorage.setItem('profile',profileJson);