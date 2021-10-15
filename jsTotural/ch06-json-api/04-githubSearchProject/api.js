//tham khảo api của git tại : https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps

//Fetch Profile: https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}

//Fetch Repo: https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}
class API {
  constructor() {
    //mình cần id này cho request api của git
    this.client_id = "b6b33595823f51c137f1"; //trên git có code này
    this.client_secrets = "8d447278fbdf41af04fa90c08786c032e2de844f"; //trên git có code này
  }
  async getInfor(username) {
    const [profile, repos] = await Promise.all([
      fetch(
        `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
      ).then((res) =>
        res.json().then((json) => {
          if (res.ok) {
            return json;
          }
          throw json.message;
        })
      ),

      fetch(
        `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
      ).then((res) =>
        res.json().then((json) => {
          if (res.ok) {
            return json;
          }
          throw json.message;
        })
      ),
    ]);
    return {
      profile,
      repos,
    };
  }
}
//test thử
// const http = new API()
// http.getInfor('LeHoDiep').then(value=>{
//     console.log(value)
// }).catch(error=>{
//     console.log('error: ',error)
// })
//mình sẽ để phần test này bên app để tiện code cho hợp lý
//test thử xong ta thấy mình đã có được data thì ta qua phần ui để cập nhật giao diện
