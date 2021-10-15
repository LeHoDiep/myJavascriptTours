// Observer Pattern là 1 design pattern nơi mà một object(thường gọi là subject)
//  có nhiệm vụ duy trì một danh sách các object dựa vào nó
//  tự động thông báo đến các object đó nếu có bất kỳ sự thay đổi nào về trạng thái

//  Observer Pattern giống như lắng nghe sự kiện (trigger hay addEventListener)
//  giờ ta sẽ mô phổng 1 observer Pattern

class Subject {
    constructor(){
        this.observers = []
    }
    //đăng ký
    subcribe(func){
        this.observers.push(func)
    }
    //hủy đăng ký
    unsubcribe(func){
        this.observers = this.observers.filter(observer =>observer !== func)
        //loại thằng function ra
    }
    //thông báo đến các function
    fire(data){
        this.observers.forEach(observer=>observer(data))
    }
}

//cách dùng như nào?
const newSubject = new Subject()
//tạo 2 function làm mẫu
function handle1(value){
    console.log('handle1', value)
}
function handle2(value){
    console.log('handle2', value)
}
//đăng ký cho 2 function này
newSubject.subcribe(handle1)
newSubject.subcribe(handle2)
newSubject.fire('Hello')
newSubject.unsubcribe(handle1)//hủy đăng ký handle1
newSubject.fire('xin chào')
//nó nghĩa là handle1 và handle2  khi có thông báo sẽ chạy