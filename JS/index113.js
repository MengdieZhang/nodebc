function getShapePerimeter(base,height){
    var peri = (base+height)*2;
    console.log(`${peri} is the shape perimeter`)
    if (peri > 100) {
        console.log("The perimiter is to big")
    } else{
        console.log("The perimiter is fine")
    }
}

getShapePerimeter(2,3)
getShapePerimeter(10,10)
getShapePerimeter(20,99)