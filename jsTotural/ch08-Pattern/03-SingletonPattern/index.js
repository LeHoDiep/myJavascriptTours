// SingleTon
//      là object chỉ khởi tạo 1 lần duy nhất trong suốt quá trình chạy
//      dù cho bạn có gọi khởi tạo nó bao nhiêu lần đi nữa
// SingleTon Pattern là cách ta khai báo SingleTon
//      nhờ điều này mà giúp chương trình k bị lãng phí bộ nhớ, chiếm ít ram hơn

// SingleTon Pattern dể thấy nhất trong js là object, đây là tính năng mà js xây dựng sẵn
//  nhầm giảm thiểu việc cấp phát bộ nhớ 


//vd:
const car = {
    name:'Audi',
    price: 9000
}

const xeHop = car
//như này thì nó sẽ tạo ra hiện tượng 2 chàng trỏ 1 nàng
//vì car đang chia sẽ thuộc tính với xeHop
//nó đang giảm thiệu việc mất bộ nhớ
xeHop.name = 'BMW'
console.log(car)

//vậy tạo như thế nào để được như vậy

const user = (function(){//module pattern
    //private function
    function init(){
        return {
            name: 'Dư Thanh Được',
            printName: function(){
                console.log(this.name)
            }
        }
    }
    return {
        //public function
        getIntance(){
            return init()
        }
    }
})();

const user1 = user.getIntance()
const user2 = user.getIntance()
console.log(user1 === user2)//*false
//user 1 và user 2 khác hoàn toàn , 
//mỗi lần getIntance sẽ ra 1 cái mới


//----singleTon Pattern
//giờ mình sẽ dùng singleTon Pattern
const userBySingleTon = (function(){
    let instance//tạo biến instance
    function init(){
        return {
            name: 'Dư Thanh Được',
            printName: function(){
                console.log(this.name)
            }
        }
    }
    return {
        //public function
        getIntance(){//nếu chưa có thì tạo
            if(!instance){
                instance = init()
            }
            return instance
        }
    }
})();

const user3 = userBySingleTon.getIntance()
const user4 = userBySingleTon.getIntance()
console.log(user3 === user4)//*true

