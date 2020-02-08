function fibonacci(){
    let f=0;
    let f1=-1;
    let f2=1;
    for (let i=1; i<=10;i++) {
        f = f1 +f2;
        f1=f2;
        f2 =f;
    console.log(f)
    } 
}

fibonacci();
fibonacci();
fibonacci();

