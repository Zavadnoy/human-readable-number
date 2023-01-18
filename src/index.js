module.exports = function toReadable (n) {
    let arrDigitL = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let arrDigitM = ['ten','eleven','twelve','thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen','eighteen','nineteen'];
    let arrDigitH = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let textNum = '';
    let num = 0;

    num =(n-n%100)/100 ;
    if (num > 0 ){
        textNum = arrDigitL[num] + ' hundred';
    };
    num = n % 100 ;
    if (19 < num && num < 100 ){
        if (n > 100) {
            textNum = textNum + ' ';
        }
        textNum = textNum + arrDigitH[(num - num%10)/10];
        if (num%10 > 0) {
            textNum = textNum + ' ' + arrDigitL[num%10];
        }
    };
    if (9 < num && num < 20 ){
        if (n > 20) {
            textNum = textNum + ' ';
        }
        textNum = textNum + arrDigitM[num%10];
    };
    if (num < 10 ){
        if (n > 10 && num > 0){
            textNum = textNum + ' ' + arrDigitL[num%10];    
        };
        if (n < 10 ){
            textNum = arrDigitL[num%10];   
        };
    };
    return textNum;
}