//Set là tập đặc biệt
// nơi tập hợp value mà k có key
//  mỗi value chỉ xuất hiện 1 lần
let setCl = new Set()
let john = {name: 'john'}
let peter = {name: 'peter'}
let merry = {name: 'merry'}

setCl.add(john).add(peter).add(merry).add(john)//.add({name:'merry'})
//merry là 2 object khác nhau, add chung 1 cái john thì giống nhau
/*
0:
value: {name: "john"}
1:
value: {name: "peter"}
2:
value: {name: "merry"}
3:
value: {name: "merry"}
*/
console.log(setCl)

setCl.delete(peter) //xóa

console.log(setCl)
console.log(setCl.has(john))//true
setCl.clear()//xóa hết
console.log(setCl.size)//0


//Set thường dùng để remove duplicate item trong array

//Set to Array bằng Array.form
let arr = [1,2,3,4,5,6,4,3]
console.log(new Set(arr))//*{1, 2, 3, 4, 5, …} 1 iterable
//ta chuyển set về thành array bằng Array.form(iterable)
let newArr = Array.from(new Set(arr))
console.log(newArr)//*[1, 2, 3, 4, 5, 6]

//hoặc dùng spread operator
arr = [1,2,3,4,5,6,4,3]

newArr = [...new Set(arr)]
console.log(newArr)//*[1, 2, 3, 4, 5, 6]


//---
//Set Loop
//set có value và là iterable nên mình dùng for...of để lặp
setCl = new Set()
setCl.add(john).add(peter).add(merry).add(john)
for (const item of setCl) {
    console.log(item)//{name: "john"} || {name: "peter"} || {name: "merry"}
}

//Set và for each
setCl.forEach((value,key,setCl)=>{
    console.log(value,key)
})
/* 
vì key === value nên ta có kết quả
{name: "john"} {name: "john"}
{name: "peter"} {name: "peter"}
{name: "merry"} {name: "merry"}
*/

//ngoài ra set giống map
//cũng có các method lập như        .keys .values .entries
//return các iterable của lần lượt là key, value, entry

console.log(setCl.keys())
console.log(setCl.values())
console.log(setCl.entries())

/*lưu ý cho cả set và map
Map và Set luôn được lặp theo thứ tự, không thể nói nó không được sắp xếp như java được
chúng ta không thể get phần tử bằng index được => không sắp xếp được
 */