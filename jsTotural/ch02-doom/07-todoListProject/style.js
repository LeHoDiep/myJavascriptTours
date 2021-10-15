document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault()
    const name = document.getElementById('name').value 
    const item = {
        id : new Date().toISOString(),
        name: name.trim()
    }
    addItemToUI(item);
    addItemToLS(item);
    document.getElementById('name').value = ''
})

const addItemToLS = item =>{
    const list = getList();
    list.push(item)
    localStorage.setItem('list', JSON.stringify(list))
}

const addItemToUI = item =>{
    const card = document.createElement('div')
    card.className = 'card p-2 d-flex flex-row justify-content-between align-items-center'
    card.innerHTML = `
    <span>${item.name}</span>
    <button type="button" class="btn btn-sm btn-danger btn-remove" data-id="${item.id}">REMOVE</button>
    `
    document.querySelector('.list').appendChild(card)
}

const getList = ()=> JSON.parse(localStorage.getItem('list')) || []

const init = () =>{
    const itemList = getList()
    itemList.forEach(item => {
        addItemToUI(item);
    });
}
init()

const removeItemFromLS = id =>{
    const list = getList();
    const index = list.findIndex(item => item.id === id)
    list.splice(index,1);
    localStorage.setItem('list', JSON.stringify(list))
}

document.querySelector('.list').addEventListener('click', event =>{
    if(event.target.classList.contains('btn-remove')){
        const name =event.target.previousElementSibling.innerHTML;
        const isConfirmed = confirm(`bạn có muốn xóa item '${name}'`)
        if(isConfirmed){
            const card = event.target.parentElement
            card.remove()
            removeItemFromLS(event.target.dataset.id)
        }
    }
})

document.querySelector('#btn-remove-all').addEventListener('click', event =>{
    const isConfirmed = confirm(`bạn có muốn tất cả item`)
    if(isConfirmed){
        localStorage.removeItem('list')
        document.querySelector('.list').innerHTML = ''
    }
})

document.querySelector('#filter').addEventListener('keyup', event =>{
    const value = event.target.value
    console.log(value)
    const list = getList()
    const filteredList = list.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    document.querySelector('.list').innerHTML = ''
    filteredList.forEach(item =>{
        addItemToUI(item)
    })
})