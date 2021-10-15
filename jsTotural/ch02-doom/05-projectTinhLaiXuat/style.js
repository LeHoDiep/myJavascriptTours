const handlePeriod = (period, dateString, month) => {
    if(month === 0){
        const currentDate = new Date(dateString)
        period.push(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
    }else{
        const pre = new Date(dateString)
        let month = pre.getMonth() + 2,
            year = pre.getFullYear(),
            date = pre.getDate()
        if(month > 12){
            month = 1;
            year += 1;
        }
        const currentDate = new Date(`${year}-${month}-${date}`)
        console.log(currentDate)
        period.push(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
    }
    return period[month]
}
document.querySelector('form').addEventListener('submit', event=>{
    event.preventDefault() //chặn submit
    //clear table
    document.querySelector('table tbody').innerHTML = ''
    //góc vay
    const loan = Number(document.querySelector('#loan').value)
    //thời hạn vay
    const month = Number(document.querySelector('#month').value)
    //lãi suất
    const rate = Number(document.querySelector('#rate').value)
    //số tiền giải ngân
    const disbursementDate = document.querySelector('#disbursement-date').value

    //lãi phải trả
    const interest = Math.round((loan*month*rate) / 1200)
    //tổng lãi và góc phải trả
    const originalAndInterest = loan+interest

    document.querySelector('#interest').value = interest.toLocaleString()
    document.querySelector('#originalAndInterest').value = originalAndInterest.toLocaleString()
    //.toLocaleString() để thêm dấu , cho số
    console.log(month);
    const period = [];
    for(let i = 0; i<= month; i++){
        let html;
        if(i === 0){
            html = `
            <td>${i}</td>
            <td>${handlePeriod(period, disbursementDate, i)}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>`
        }else if(i === month){
            //gốc hằng tháng
            const originalPerMonth = loan - Math.round(loan / month) * (month - 1)
            //lãi hằng tháng
            const interestPerMonth = interest - Math.round((loan*rate)/ 1200) * (month - 1)
            //gốc và lãi hằng tháng
            const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
            html = `
            <td>${i}</td>
            <td>${handlePeriod(period, period[i - 1], i)}</td>
            <td>${originalPerMonth.toLocaleString()}</td>
            <td>${interestPerMonth.toLocaleString()}</td>
            <td>${originalAndInterestPerMonth.toLocaleString()}</td>
            <td>0</td>
            `
        }else{
            const originalPerMonth = Math.round(loan / month)
            const interestPerMonth = Math.round((loan*rate)/ 1200)
            const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
            const remainingOriginal = loan - originalPerMonth*i
            html = `
            <td>${i}</td>
            <td>${handlePeriod(period, period[i - 1], i)}</td>
            <td>${originalPerMonth.toLocaleString()}</td>
            <td>${interestPerMonth.toLocaleString()}</td>
            <td>${originalAndInterestPerMonth.toLocaleString()}</td>
            <td>${remainingOriginal.toLocaleString()}</td>
            `
        }
        const tr = document.createElement('tr')
        tr.innerHTML = html
        document.querySelector('table tbody').appendChild(tr)
    }
})