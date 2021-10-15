
//trước khi bắt đầu phần này vui lòng ôn lại Closure

// Interator | iterable | Generator

// 3 khái niệm này có từ rất lâu rồi, nhưng ít dùng ít gặp,
// rất nhiều dev chưa từng nghe tới

//-------        
//Iterator là gì?
//Iterator: 1 object định nghĩa 1 trình tự và giá trị có thể trả về tiếp theo trước khi
//          kết thúc
function makeRangeIterator(start = 0, end = Infinity, step = 1){
    let nextValue = start

    let count = 0

    const rangeIterator ={
        next: function(){
            let result
            if(nextValue <= end){
                result = {value: nextValue, done:false}
                nextValue += step
                count++
                return result
            }
            return result = {value: count, done:true}
        }
    }

    return rangeIterator
}

let obj = makeRangeIterator(1,6,2) 
//*iterator là obj, còn makeRangeIterator là constructor function mà thôi
//lý do vì sao nextValue và count không bị reset giá trị mỗi lần gọi next
//      thì vui lòng xem lại khái niệm Closure ở bài ch01-07
console.log(obj)        //{next: ƒ}
console.log(obj.next()) //{value: 1, done: false}
console.log(obj)
console.log(obj.next()) //{value: 3, done: false}
console.log(obj.next()) //{value: 5, done: false}
console.log(obj.next()) //{value: 3, done: true}
console.log(obj.next()) //{value: 3, done: true}

//đây là 1 hàm bình thường tạo ra 1 object
//nhưng nếu mình để ý method next 
//nó đặc biệt ở chỗ là nó có format return {value:...,done:...}
//                  ngta gọi nó là giao thức iterator
//  *việc duyệt qua iterator chỉ thực hiện 1 lần duy nhất(mình chỉ có đi lên chứ
//                      mình k quay lại giá trị cũ được)

//-------             
//Iterable là gì? tìm hiểu cách thức của for...of
//mô tả cách for...of duyệt 1 object như thế nào
//  Iterable: khả duyệt: tức là khả năng
//            là khả năng có thể lập qua các phần tử bằng for...of
//            một object muốn đc lập bằng for...of phải có method @@iterator:
                            //@@iterator: được cài đặt thông qua thuộc tính tên là Symbol..iterator
                                    //mục đích của nó là rằng buộc các kiểu return trong method
//ví dụ sau đây
let range = {
    from: 1,
    to: 5
}
//for(let num of range)(console.log(num))//k xài đc
//range is not iterable
//vì nó k có iterator
//đây là 1 object bình thường
//giờ ta muốn for...of nó
//ta muốn có kết quả kiểu như for(let num of range)...num = 1,2,3,4,5
//thì ta phải biến range thành iterable object
//+chúng ta cần thêm 1 phương thức là symbol iterator
//  1.khi for...of bắt đầu thì nó gọi phương thức symbol iterator 1 lần(hoặc lỗi nếu k tìm thấy)
//      phương thức này phải return về 1 iterator(1 object với phương thức next)
//  2.sau đó for...of chỉ việc next liên tục theo số lần đi qua các phần tử
//  3.kết quả của next khi return phải có định dạng {value:any, done:boolean}
//          khi done:true thì ngưng lập
////------------
//từ các lý thuyết trên ta thử fix lại để dùng for xem sao
//1.tạo phương thức symbol.Iterator
range[Symbol.iterator] =function(){
    //nó phải trả về 1 iterator
    //tiếp sau đó iterator chỉ làm việc với iterator này
    return {
        current: this.from,
        last: this.to,
        //tạo next để gọi trên mỗi vòng lập
        next :function(){
            if(this.current <= this.last){
                return {done: false, value: this.current++}
            }
            return {done: true}
        }
    }//đây là iterator (for...of chỉ làm việc với thằng này thôi)
}

for(let num of range)(console.log(num)) //được rồi đếy
//vậy là nhờ có iterator chúng ta đã làm cho object range có tính iterable
//  nhờ thế mà for...of chạy ngon lành cành đào
//=> rút ra được hiệu quả của iterator và khái niệm iterable

//đặt câu hỏi: 
//1.ủa anh? vậy thằng String, Array, Map sao nó iterable dùng for..of được
//  có thấy phương thức nào dính tới interator đâu của nó đâu
//trả lời: có  chứ , nó có sẳn trong trong prototype method @@iterator
//      trong khi 1 số kiểu khác không có ví dụ như object
//2.Iterator có iterable không? không, rỏ ràng, nó là object nó k có, mình cũng k tạo, nên nó
//                                                  cũng sẽ k có



//Generator là gì?
//Generator: là 1 object return bởi Generator function
//                  ->Generator chỉ được tạo ra từ Generator function
//           Generator thì iterable
//           Generator là 1 itertor
//cú pháp:
//Generator: máy phát, máy tạo ra
//yield: lợi tức, lợi nhuận phát sinh, sinh lời
function* makeGenerator(i){
    yield i + 1
    console.log('next() lần 2 sẽ log ra')
    yield i + 3
    console.log('next() lần 3 sẽ log')
    yield i + 3
    return i + 5
    console.log('next() lần 3 sẽ log') //dòng này tất nhiên là k rồi

}
let gt = makeGenerator(1)
//console.log(makeGenerator(1).next())//{value: 2, done: false}
//console.log(makeGenerator(1).next())//{value: 2, done: false} //sao vẫn như cũ???
//*nhớ về Closure đi nha :))
console.log(gt.next())//{value: 2, done: false}
console.log(gt.next())//next() lần 2 sẽ log ra|{value: 4, done: false}
console.log(gt.next())//next() lần 3 sẽ log   |{value: 4, done: false}
console.log(gt.next())//{value: 6, done: true}              //để ý 2 value này
console.log(gt.next())//{value: undefined, done: false}     //để ý 2 value này

//*Hàm return về Generator sẽ có 2 lệnh
//hàm sẽ dừng lại khi yield và return 
//next() để đi tiếp chỗ đã dừng
//không return nghĩa là return undefined

//method của Generator
//  next() sẽ chạy code đến yield hoặc return.return object {value: any, done: boolean}
//  return(value): kết thức Generator và return object{value: value, done: true}
//  throw(): quăng 1 lỗi vào trong Generator function và đồng thời kết thúc generator
//                                                          (trừ khi được catch lại)
//                                              return object{value: any, done: false}


// ví dụ về return
function* gen(){
    yield 1
    yield 2
    yield 3
}

const gt2 = gen()
console.log(gt2.next())//{value: 1, done: false}
console.log(gt2.return(7))//{value: 7, done: true}
console.log(gt2.next())//{value: undefined, done: true}

function* gen2(){
    while(true){//test đoạn code này nếu không có while để hiểu cách nó thực thi
        try{
            yield 1
            yield 2
            yield 3
        }catch(e){
            console.log(e)
        }
    }
}

const gt3 = gen2()
console.log(gt3.next())//{value: 1, done: false}
console.log(gt3.throw(new Error('Lỗi rồi má ơi')))//error {value: undefined, done: true}
console.log(gt3.next())//{value: undefined, done: true}



//Các trường hợp dùng Generator

//Generator áp dụng trong Redux-Saga(REACT)
//      redux-saga

//các trường hợp cần ghi nhớ
//ví dụ như xem video , mình nhấn pause, nó đừng lại rồi mình nhấn next() nó đi tiếp chỗ đó
// nó đã ghi nhớ chỗ mình dừng lại

//ta thử với 1 bài toán fibonacci thông thường
// viết hàm xuất ra số fibonacci thứ n
const fibonacci = n => {
    if(n === 1 || n === 2){
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(1))//1
console.log(fibonacci(2))//1
console.log(fibonacci(3))//2
console.log(fibonacci(4))//3
console.log(fibonacci(5))//5

//nếu mình viết theo cách này thì khi mình tính fibonacci thứ 3 mình phải đệ quy tính lại
//fibonacci thứ 1 và 2 như vậy sẽ tốn hiệu năng máy tính ở các số lớn hơn về sau

//ta áp dụng Generator cho bài toán này
function* fibonacci2(){
    let prev = 0
    let curr = 1
    while(true){ //hỏi: tại sao cần while
        yield curr
        let next = prev + curr
        prev = curr
        curr = next
    }
}
const fb = fibonacci2()
console.log(fb.next().value)//1
console.log(fb.next().value)//1
console.log(fb.next().value)//2
console.log(fb.next().value)//3
console.log(fb.next().value)//5

//tạo id 
function* makeID(){
    let curr = 1
    while(true) yield curr++
}
let initId = makeID()
console.log(initId.next())
console.log(initId.next())
console.log(initId.next())
console.log(initId.next())