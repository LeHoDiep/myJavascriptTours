//Static
//với static ta có thể gọi method hoặc property trực tiếp thông qua class
// mà không cần phải tạo object bằng new

class User{
    static staticMethod(){
        console.log(this === User)
    }
}

User.staticMethod() //true


//code như trên sẽ giống tương tự như code thế này
class User1{}
User1.staticMethod = function (){
    console.log(this === User1)
}
User1.staticMethod()//true

//ngta dùng static cho các method có ý nghĩa thuộc về class, chứ không phải thuộc
//về bất cứ object nào
//giống như cái quạt xài chung của 1 clb thì nó phải static
//đã là hình tròn thì nó có số pi. pi là của hình tròn chứ k phải của riêng từng
//object nào hết

//xét dưới nghĩa rằng static là cái xài chung của tất cả các object tạo ra từ 1 class


class Article {
    constructor(title, date) {
      this.title = title
      this.date = date
    }
  
    static compare(articleA, articleB) {
      return articleA.date - articleB.date
    }
  }
  
  // usage
  let articles = [
    new Article('HTML', new Date(2019, 1, 1)),
    new Article('CSS', new Date(2019, 0, 1)),
    new Article('JavaScript', new Date(2019, 11, 1))
  ]
  
articles.sort(Article.compare)

//demo static property
// tính năng này chỉ mới đc thêm gần đây thôi

class Article1 {
    static publisher = 'Ilya Kantor' //cách này
  }
  Article1.publisher = 'Ilya Kantor' //cách này đều là static
console.log(Article1.publisher) // Ilya Kantor
//   Chúng ta có thể làm điều tương tự bằng cách gán trực tiếp

console.log(new Article()) //khi object được tạo ra sẽ k có static method của khuôn
console.log(new Article1()) //khi object được tạo ra sẽ k có static property của khuôn
//lý giải cho diều này, ta đã nói, static method  hay static property là của class k phải
//  của object đâu

//// kế thừa static
//lấy ví dụ , các con vật đều sống trên trái đất,đều có tính đố kỵ
class Animal {
    static planet = 'Earth' //sống trên trái đất
  
    constructor(name, speed) {
      this.speed = speed
      this.name = name
    }
  
    run(speed = 0) {
      this.speed += speed
      alert(`${this.name} runs with speed ${this.speed}.`)
    }
  
    static compare(animalA, animalB) { //có tính đố kị
      return animalA.speed - animalB.speed
    }
  }
  
  // Rabbit kế thừa Animal
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`)
    }
  }
  
  let rabbits = [new Rabbit('White Rabbit', 10), 
                 new Rabbit('Black Rabbit', 5)]
  
  rabbits.sort(Rabbit.compare)
  
  rabbits[0].run() // Black Rabbit runs with speed 5.
  
  alert(Rabbit.planet) // Earth

  //https://github.com/duthanhduoc/Javascript-K1/blob/master/6.%20OOP%20Javascript/9.%20Thu%E1%BB%99c%20t%C3%ADnh%20v%C3%A0%20ph%C6%B0%C6%A1ng%20th%E1%BB%A9c%20static/Thu%E1%BB%99c%20t%C3%ADnh%20v%C3%A0%20ph%C6%B0%C6%A1ng%20th%E1%BB%A9c%20static.md