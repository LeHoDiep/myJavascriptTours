// nên test code regex trên trang này https://regexr.com/
// hoặc tham khảo trang sau: https://developer.mozilla.org/vi/docs/Web/JavaScript/Guide/Regular_Expressions
//I.Regex là gì?
    // regex hay regular expression|(pattern)|Biểu thức chính quy nghĩa là các mẫu
    // thay vì các chuỗi cụ thể để tìm và thay thế
    // vd: kiểm tra email hợp lệ 
    // giống như toán tử like trong DBI SQL 
    // regex là 1 object
    // mình dùng kèm method .test() | thay vì .matches()

    let regex1 = /name/
    console.log(regex1.test('Điệp is my name')) 
        //true
    //i: ignoreCase
    regex1 = /name/i            
    console.log(regex1.test('Điệp is my Name')) 

    //một số phương thức áp dụng với regex

    //1.exec() return vế array hoặc null
    regex1 = /name/
    console.log(regex1.exec('Diep is my name')) //["name", index: 11, input: "Diep is my name", groups: undefined]

    //2.test() true | false

    //3 String.match() : array | null giống exec()
    regex1 = /name/
    console.log('Diep is my name'.match(regex1)) //["name", index: 11, input: "Diep is my name", groups: undefined]

    //4 String.search() : index tìm được | -1
    regex1 = /name/
    console.log('Diep is my name'.search(regex1)) //11

    //5 String.replace(regex,newString)
    regex1 = /Điệp/i //regex như này thì sẽ thay thế 1 thằng tìm đc đầu tiên
    console.log('Điệp là 1 người đẹp, nên Điệp chảnh'.replace(regex1, 'Oanh'))  //Oanh là 1 người đẹp, nên Điệp chảnh
    regex1 = /Điệp/gi//regex thế này sẽ thay thế toàn bộ những thằng tìm đc
    console.log('Điệp là 1 người đẹp, nên Điệp chảnh'.replace(regex1, 'Oanh'))  //Oanh là 1 người đẹp, nên Oanh chảnh


//II.Regex Metcharacter Symbols : // nên test code regex trên trang này https://regexr.com/
    //bắt đầu bằng: vd: /^hello/i chuỗi bắt đầu bằng hello

    //kết thúc bằng:                 vd: /hello$/i  chuỗi bắt đầu bằng hello
    //kết thúc cũng là bắt đầu bằng: vd: /^hello$/i chuỗi chỉ có hello
    //khớp với 1 ký tự bất kỳ:       vd: /m.y/i     .đại diện 1 ký tự bất kỳ 
    //                                              m y|may|mey true
    //                                              my          false
    //cho phép ký tự trước lập lại nhiều lần hoặc không :
    //                               vd: /m*y/i     my|mmmy|ey true
    //khớp ký tự tùy chọn: ký tự phía trước dấu ? có hoặc không cũng đc
                                    //  vd: /ma?y?h?o?r?n?y/i 
    //escape character bằng \ phía trước ký tự cần escape 

//III.Regex character sets and Quantifiers
//      chuỗi ký tự và giới hạn ký tự
//  [...] set các ký tự                  vd: /m[an]/i        ma|mn true
//  [^..] set các ký tự phải khác        vd: /m[^an]/i       ma|mn false
                                                           //me|mo true
//  khớp tất cả các chữ cái
    // [a-z]                             vd:/[a-z]hello/    zhello true |hello false
    // [A-Z]
    // [a-zA-Z]

//  khớp số
    // [0-9]

//  giới hạn số lượng ký tự {}          vd:/me{2}t/     met|meeet false    || meet true
                                        // /me{2,5}t/   met false   meet|meeet|meeeet|meeeeet true
//                                         /me{2,}t/    từ 2 ký tự trở lên
//  gom nhóm ()
//                                         /(me){2,}t/  memememememet true

// hoặc |                               vd:/(Hồ|Lê) Điệp/  Hồ Điệp| Lê Điệp true


// Regex ShortHand Character classes
//  khớp 1 chữ cái hoặc số              vd: /Die\w/  Diet|Diee|Diev true
//                                                   Diett false
//  khớp nhiều chữ cái hoặc số \w+/     vd: /Die\w/  Dietttt|Dieeeee|Dievvvvvv true
//                                                   Die false                       
//  khớp không phải chữ cái hoặc số \W/
//  khớp 1 số \d | khớp nhiều số \d+ | khớp không phải số \D
//  khớp với dấu cách \s | khớp không phải là dấu cách \S
//  khớp nếu b theo ngay sau a          vd: /a(?=b)/   ac false  |  ab true
//          lưu ý kết quả của cái này là a không phải ab
//  khớp nếu b không theo ngay sau a    vd: /a(?!b)/   ac true  |  ab false
//          lưu ý kết quả của cái này là a không phải ac


// khớp nếu chuỗi là ký tự biên:
    //ký tự biên là ký tự nắm giữa ký tự từ + ký tự biên + không phải ký tự từ
    //           hoặc   không phải ký tự từ + ký tự biên + không phải ký tự từ
    //vd:/an\b/        'an'|'an '|ban tot|toi an com true
    //                 'anh trai'|Oanh false

