function showNumbers(start, end) {
    var myarr = [0,100,300,1000] 
    if (myarr.includes(start) && myarr.includes(end)){
        var list = [];
        if (start > end ){
            for (var i = myarr.indexOf(start);i>=myarr.indexOf(end);i--){
                list.push(myarr[i]);}
            console.log(list)
        } else if (start < end) {
            for (var i = myarr.indexOf(start);i<=myarr.indexOf(end);i++){
                list.push(myarr[i]);
            }
            console.log(list)
        } else {
            console.log(start)
        }

    } else {
        console.log("Parameter is not in the array")
    }
   
}

showNumbers(100,1000)
showNumbers(1000,100)
showNumbers("100",1000)