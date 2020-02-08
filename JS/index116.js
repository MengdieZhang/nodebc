function getHexaColor(color){
    var res = '';
    switch(color){
        case 'white': res = '#FFFFFF';
            break;
        case 'black': res = '#000000';
            break;
        case 'blue': res = '#0b24fb';
            break;
        case 'green': res = '#0e7e12';
            break;
        case 'yellow': res = '#fffd38';
            break;
        case 'pink': res = '#fec1cc';
            break;
    }
    console.log(res)
}

getHexaColor('white');
getHexaColor('black');
getHexaColor('blue');
getHexaColor('green');
getHexaColor('yellow');
getHexaColor('pink');


