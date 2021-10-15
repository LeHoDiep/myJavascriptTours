
// Rule validate
//     Email: required, email
//     Tên: required, là tên người (tiếng anh hoặc tiếng việt không chứa số), max 50 ký tự
//     Giới tính: required
//     Quốc gia: required
//     Mật khẩu: required, min 8, max 20
//     Nhập lại mật khẩu: required, min 8, max 20, giống mật khẩu
//     Đồng ý: required
// Gợi ý
//     Email: lehodiep+01@gmail-vn.com Tên email thì gồm chữ, sốDomain email từ 1-63 ký tự bao gồm chữ cái, số, . và -, tên miền thì từ 1-5 ký tự
//     Bao gồm chữ tiếng Việt thì: [A-Za-z\u00C0-\u024F\u1E00-\u1EFF]
const REG_EMAIL = /^[a-zA-z\d\.\-\_]+(\+\d+)?@[a-zA-z\d\.\-]{1,65}\.[a-zA-z]{1,5}$/
const REG_NAME = /^[a-zA-z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-z\u00C0-\u024F\u1E00-\u1EFF]+)?)+$/
const isRequired = value => value.trim() !== '' ? '' : 'That field is required'
const isEmail = value => REG_EMAIL.test(value) ? '' : 'Email not validate'
const isName = value => REG_NAME.test(value) ? '' : 'Name not validate'
const min = num => value => value.length >= num ? '' : `Độ dài tối thiểu là ${num}`
const max = num => value => value.length <= num ? '' : `Độ dài tối đa là ${num}`

//cần dùng quá nhiều param nên mình sẽ gom tụi nó thành object cho dể quản lý
// const isValid = (value, funcs) => {
//     for (const func of funcs) {
//         const msg = func(value)
//         if(msg){
//             return msg
//         }
//     }
//     return ''
// }
const isValid = (param) => {
    const { value, funcs, parentNode, controlNodes } = param // cú pháp destructuring : phân rã object
    for (const func of funcs) {
        const msg = func(value)
        if (msg) {
            createMsg(parentNode, controlNodes, msg)
            return msg
        }
    }
    return ''
}
const isSame = (name1, name2) => (value1, value2) => value1 === value2 ? '' : `${name1} không khớp ${name2}`

const compare = (param) => {
    const {value1, value2, funcs, parentNode, controlNodes} = param
    for (const func of funcs) {
        const msg = func(value1, value2)
        if (msg) {
            createMsg(parentNode, controlNodes, msg)
            return msg
        }
    }
    return ''
}
//một hàm thông báo từng lỗi với từng input 
//mình cần nhận vào 1 parentNode để appendChild nội dung lỗi
//                  1 danh sách các input vì mình có radio(nhiều input) (controlNodes)
const createMsg = (parentNode, controlNodes, msg) => {
    const invalidDiv = document.createElement('div')
    invalidDiv.className = 'invalid-feedback'
    invalidDiv.textContent = msg
    parentNode.appendChild(invalidDiv)
    controlNodes.forEach(item => {
        item.classList.add('is-invalid')
    });
}
const clearMsg = () =>{
    document.querySelectorAll('.is-invalid').forEach(item =>{
        item.classList.remove('is-invalid');
    })
    document.querySelectorAll('.invalid-feedback').forEach(item =>{
        item.remove();
    })
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    clearMsg()
    const emailNode = document.querySelector('#email')
    const nameNode = document.querySelector('#name')
    const genderNode = document.querySelector('#gender')
    //thằng này là checked nên phải móc vào input có checked nhá
    const countryNode = document.querySelector('input[name="country"]:checked')
    const passwordNode = document.querySelector('#password')
    const confirmedPasswordNode = document.querySelector('#confirmedPassword')
    const agreeNode = document.querySelector('input#agree:checked')
    const errorForm = [
        isValid({ 
            value: emailNode.value, 
            funcs: [isRequired, isEmail],
            parentNode:  emailNode.parentElement,
            controlNodes: [emailNode]
        }),
        isValid({ 
            value: nameNode.value, 
            funcs: [isRequired, isName, max(50)], //ứng dụng currying ở max
            parentNode:  nameNode.parentElement,
            controlNodes: [nameNode]
        }), 
        isValid({ 
            value: genderNode.value, 
            funcs: [isRequired],
            parentNode:  genderNode.parentElement,
            controlNodes: [genderNode]
        }),
        isValid({ 
            value: countryNode ? countryNode.value : '', 
            funcs: [isRequired],
            parentNode:  document.querySelector('.form-check-country:last-child').parentElement,
            controlNodes: document.querySelectorAll('input[name="country"]')
        }),
        isValid({ 
            value: passwordNode.value, 
            funcs: [isRequired, min(8), max(20)],
            parentNode:  passwordNode.parentElement,
            controlNodes: [passwordNode]
        }),
        isValid({ 
            value: confirmedPasswordNode.value, 
            funcs: [isRequired, min(8), max(20)],
            parentNode:  confirmedPasswordNode.parentElement,
            controlNodes: [confirmedPasswordNode]
        }),
        compare({
            value1: passwordNode.value, 
            value2: confirmedPasswordNode.value, 
            funcs : [isSame('Mật Khẩu', 'Nhập lại mật khẩu')],
            parentNode:  confirmedPasswordNode.parentElement,
            controlNodes: [confirmedPasswordNode]
        }),
        isValid({ 
            value: agreeNode ? agreeNode.value : '', 
            funcs: [isRequired],
            parentNode:  document.getElementById('agree').parentElement,
            controlNodes: [document.getElementById('agree')]
        }),
    ]
    const isValidForm = errorForm.every(item => !item)
    if(isValidForm){
        clearMsg()
        alert('Form is valid') 
    }
    
})