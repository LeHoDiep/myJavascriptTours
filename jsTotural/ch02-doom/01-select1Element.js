// document.getElementById('...');
// document.querySelector('... '); //như selector css nhưng 
                                   //chỉ đc thằng đầu tiên thôi

// document.getElementsByClassName và 
// document.getElementsByClassName sẽ return về 1 HTML colection
//  HTML colection khá giống array nhưng không phải array nên k thể lấy được các method
//  dùng spread để chuyển về array


// document.querySelectorAll('') return về 1 Node List
//                              và có những method mà HTML colection không có
                                // ví dụ như forEach 

// Method hay dùng
var a = document.querySelector('.card') //element

console.log(a);
console.log(a.children);
console.log(a.childNodes);
console.log(a.parentElement); //element cha chứa nó
console.log(a.nextElementSibling); //tìm thằng giống mình tiếp theo vì
                                //querySelector không trả ra 1 mảng chỉ ra 1 element đầu tiên
                                // console.log(a.previousElementSibling); lấy phần tử giống mình
                                //  ở trên
console.log(a.firstChild); //vì có xuống hàng nên chỉ nhận đc là text thôi
console.log(a.lastChild);  //nếu không xuống hàng ở html thì nhận đc phần tử

// tạo mới element
const newCard = document.createElement('div');
newCard.className = 'card p-2 mb-3';
newCard.innerHTML = '<h1>Tui là phần tử được tạo từ doom</h1> <br> <p> xin chào mọi người</p>'
const containerDiv = document.querySelector('.container');
containerDiv.appendChild(newCard);
const newCard2 = document.createElement('div');
newCard2.className = 'card p-2 mb-3';
newCard2.innerHTML = '<h1>Tui là doom 2</h1> <br> <p> xin chào mọi người</p>'

//thay thế
containerDiv.replaceChild(newCard2,containerDiv.children[2])

//.className = '.....' thêm 1 lần
//.classList là mảng các class
//                 có thể dùng method .add(...,...,...,...) để add class thêm vào

//.setAttribute('key','value'); //set hoặc create new attribute cho element
//.removeAttribute('key');
//.getAttribute('key'); return value của key

