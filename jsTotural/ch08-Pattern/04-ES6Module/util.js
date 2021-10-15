//giả sử khai báo biến
//muốn index dùng cái nào thì export cái đó ra
export const greeting = 'Hello World'
const sum = (a,b) =>a+b
const mul = (a,b) =>a*b
const div = (a,b) =>a/b
//sau đó qua file index.js import vào

//ngoài ra ta còn có thể làm như sau
export {sum as handleSum , mul, div}