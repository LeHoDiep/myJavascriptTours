//ở bài này mình sẽ áp dụng lại kiến thức iterator /generator để làm phần next
//thay vì tạo biến rồi này nọ mất hay
//ta làm cái data mẫu
//dùng https://randomuser.me/api?format=pretty để lấy 1 vài thông tin

const data = [
    {
        name: "Marijana Lambert",
        age: 30,
        gender: "female",
        location: "Utzenstorf",
        avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
    },
    {
        name: "Dorris Lamme",
        age: 26,
        gender: 'female',
        location: 'Kranenburg',
        avatar: "https://randomuser.me/api/portraits/women/81.jpg",
    },
    {
        name: 'Mem Ribeiro',
        age: 59,
        gender: 'male',
        location: 'Valinhos',
        avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    },
    {
        name: "Lucas Roy",
        age: 60,
        gender: 'male',
        location: 'Fauquier',
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
]
//dùng iterator:demo cái này trước
const profileIterator = data =>{
    let index = 0;
    return {
        next(){
            if(index < data.length){
                return {value:data[index++], done: false}
            }
            return {done: true}
        }
    }
}
const profiles = profileIterator(data)

//---
//dùng generator : gọn hơn
// function *profileGenerator(data){
//     let index = 0;
//     while(index < data.length){
//         yield data[index++]
//     }
// }
// const profiles = profileGenerator(data)

//--
const handleNext = () => {
    newProfile = profiles.next()
    if(newProfile.value){
       let profileElement = document.querySelector('#profile-avatar')
        profileElement.innerHTML = `
        <img src="${newProfile.value.avatar}" style="width:100px;height:100px">
        <ul class="list-group mb-3">
            <li class="list-group-item">
                Name: ${newProfile.value.name}
            </li>
            <li class="list-group-item">
                Age: ${newProfile.value.age}
            </li>
            <li class="list-group-item">
                Gender: ${newProfile.value.gender}
            </li>
            <li class="list-group-item">
                Location: ${newProfile.value.location}
            </li>
        </ul>
        `
    }else{
        location.reload()//hết data thì reload lại hè hè
    }
}
handleNext()
document.querySelector('#btn-next').addEventListener('click', handleNext)
//chỉ cách generator