function sortNumber(number1, number2) {
    return number1-number2
}
var arr=[10,8,25, 22, 11];
arr.sort(sortNumber);
console.log(arr);

function des_sortNumber(number1, number2) {
    return number2-number1
}

var arr=[10,8, 11,25,true];
arr.sort(des_sortNumber);
console.log(arr);

/*====solution 2=====*/
function sortNumber2(number1, number2, number3) {
    var myarr = [number1,number2,number3]
    for (i=1;i<3;i++){
        for (var j=0;j<i;j++){
            if (myarr[j]>myarr[i]){
                var x = myarr[i];
                myarr[i]=myarr[j];
                myarr[j]=x; 
        }
        }
    }
    return myarr
}
console.log(sortNumber2(10,8,25))

function sortNumber3(number1, number2, number3,myboolen) {
    var myarr = [number1,number2,number3]
    if (myboolen == true){
        for (i=1;i<3;i++){
            for (var j=0;j<i;j++){
                if (myarr[j]<myarr[i]){
                    var x = myarr[i];
                    myarr[i]=myarr[j];
                    myarr[j]=x; 
            }
            }
        }
    } else {
        for (i=1;i<3;i++){
            for (var j=0;j<i;j++){
                if (myarr[j]>myarr[i]){
                    var x = myarr[i];
                    myarr[i]=myarr[j];
                    myarr[j]=x; 
            }
            }
    }
}
    
    return myarr
}
console.log(sortNumber2(10,8,25))
console.log(sortNumber3(10,8,25,true))