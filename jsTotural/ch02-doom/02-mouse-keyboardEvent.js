document.getElementById('btn-add').addEventListener('click',event=>{
    console.log(event);
    console.log(event.clientX, event.clientY);
    //client hệ quy chiếu là viewPort
    console.log(event.offsetX, event.offsetY);
    //offsetX hệ quy chiếu là element
    console.log(event.target);
    //là element vừa click vào thay cho this được vì nó k dùng this trong arrow function

    const value = document.getElementById('name')
    console.log(value.value);
    const newItem = document.createElement('li');
    newItem.className = 'card'
    newItem.textContent = value.value;
    document.querySelector('#list').appendChild(newItem);
})
// ngoài click ra mình còn có dbclick(double click)
// event submit nếu btn là submit 
//          có thể chặn reset trang bằng event.presentDefault();
// event mouseover  //đưa chuột vào
// event mouse   //đưa chuột vào

//keyBoard Event
//keydown: nhận tất cả các phím khi nhấn 1 phím bất kỳ
//keypress: nhận tất cả các phím(trừ alt,esc,shift,ctrl) khi nhấn 1 phím bất kỳ
//keyup: nhận tất cả các phím(trừ alt,esc,shift,ctrl) khi nhả 1 phím bất kỳ
//oninput: sự kiện này giống thằng onchange , thực thi khi value của input(textArea) thay đổi
//          oninput: thực thi ngay khi thay đổi
//          onchange: thực thi sau khi bỏ focus

