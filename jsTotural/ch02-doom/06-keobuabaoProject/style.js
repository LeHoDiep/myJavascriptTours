const VALUES = [
    {id: 'scissors', value:'✌🏻'},
    {id: 'rock', value:'✊🏻'},
    {id: 'paper', value:'✋🏻'}
]   
let i = 0;
const handleChange = ()=>{
    const computer = document.querySelector('#computer')
    computer.textContent = VALUES[i].value
    computer.dataset.id = VALUES[i].id
        
    if(i === VALUES.length - 1){
        i = 0;
    }else{
        i++
    }
}
let interval = setInterval(handleChange, 100);

const compare = (valuePlayer,valueComputer) =>{
    const indexUser = VALUES.findIndex(item=> item.id === valuePlayer)
    const indexComputer = VALUES.findIndex(item=> item.id === valueComputer)
    check = indexUser -  indexComputer
    if([1, -2].includes(check)){
        return 1
    }else if(indexUser === indexComputer){
        return 0
    }else{
        return -1
    }
}

const playerItem = document.querySelectorAll('.user')
playerItem.forEach(item =>{
    item.addEventListener('click', event =>{
        clearInterval(interval)
        const valueComputer = document.querySelector('#computer').dataset.id
        playerItem.forEach(_item =>{
            _item.classList.remove('active')
            _item.style.pointerEvents = 'none'
        })
        event.target.classList.add('active')
        const valuePlayer = event.target.id
        result = compare(valuePlayer, valueComputer);
        const alert = document.createElement(`div`);
        alert.classList.add('alert')
        let msg = ''
        if(result === 1){
            msg = 'Bạn Thắng'
            alert.classList.add('alert-success')
        }else if(result === -1){
            msg = 'Bạn Ngu'
            alert.classList.add('alert-dark')

        }else{
            msg = 'Bạn Thua'
            alert.classList.add('alert-warning')
        }
        alert.textContent = msg
        document.querySelector('.notification').appendChild(alert)
        document.querySelector('#play-again').classList.remove('d-none')
    })
})

document.querySelector('.btn-play-again').addEventListener('click',event=>{
    interval = setInterval(handleChange, 100);
    playerItem.forEach(_item =>{
        _item.classList.remove('active')
        _item.style.pointerEvents = ''
    })
    document.querySelector('.notification').innerHTML = ''
})