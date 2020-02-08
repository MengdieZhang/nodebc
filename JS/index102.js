function showName() {
    let name = "Mandy"
    let star='';
    for (let i = 0; i<name.length+4; i++){
        star += '='};
    console.log(star);
    console.log(`= ${name} =`);
    console.log(star);
}

showName()