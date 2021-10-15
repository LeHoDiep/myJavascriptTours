const navtabbtnList = document.querySelectorAll('.navtab-btn');
const navtabcontentList = document.querySelectorAll('.tab-content-item');

navtabbtnList.forEach(item =>{
    item.addEventListener('click', event =>{
        navtabbtnList.forEach(_btn=> _btn.classList.remove('active'))
        event.target.classList.add('active')

        navtabcontentList.forEach(contentTab=>{
            contentTab.classList.remove('active');
        })
        document.querySelector(`.tab-content-item[data-content='${event.target.id}']`).classList.add('active');
        
    })
})