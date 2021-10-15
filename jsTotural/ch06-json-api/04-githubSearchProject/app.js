//project này mình sẽ thao tác với api của github
//tạo 1  tài khoản https://github.com/settings/applications/new
//tạo 3 file js khác nhau lần lượt là ui/app/api để dể quản lý
//mình làm api trước, miếng trầu là đầu câu chuyện :))


//--test để làm ui
// const http = new API()
// http.getInfor('LeHoDiep').then(value=>{
//     console.log(value)
// }).catch(error=>{
//     console.log('error: ',error)
// })

//sau khi làm xong ui thì tắt và bắt đầu viết sự kiện onclick và tìm
window.addEventListener('DOMContentLoaded', ()=>{
document.querySelector('#form-search').addEventListener('submit',async event =>{
    event.preventDefault();
    const username = document.querySelector('#username').value

    //có username rồi thì lấy api ra dợt nó
    //lưu ý: async await bắt lỗi bằng try catch vì thằng fetch nó k có reject
    let ui = new Ui()
    try{
        const {profile,repos} = await new API().getInfor(username)
        ui.render(profile,repos)
        ui.alert('Thành công Vãi lon','success')
    }catch(error){
        ui.alert(error)
    }

})
})

