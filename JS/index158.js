const consoles = ["PS4", "XBOX"];

const games=[{
    name: 'Crash Bandicoot N. Sane Trilogy',
    price: 1060,
    sold: 20,
    console: 'PS4',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Lego Marvel Super Heroes',
    price: 700,
    sold: 25,
    console: 'XBOX',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Gta V',
    price: 11449,
    sold: 30,
    console: 'PS4',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Mortal Kombat Xl',
    price: 1190,
    sold: 34,
    console: 'PS4',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Gta V',
    price: 1250,
    sold: 60,
    console: 'XBOX',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Fifa 2017',
    price: 890,
    sold: 15,
    console: 'PS4',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Uncharted 4',
    price: 950,
    sold: 30,
    console: 'PS4',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Mortal Kombat Xl',
    price: 940,
    sold: 30,
    console: 'XBOX',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Need For Speed',
    price: 790,
    sold: 10,
    console: 'PS4',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Lego Batman',
    price: 1000,
    sold: 18,
    console: 'PS4',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Fifa 17',
    price: 1290,
    sold: 12,
    console: 'PS4',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{
    name: 'Resident Evil 7',
    price: 1390,
    sold: 10,
    console: 'PS4 ',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
},
{

    name: 'Dragon Ball XX',
    price: 1390,
    sold: 25,
    console: 'XBOX',
    showDetail:function(){
        console.log('name:', this.name)
        console.log('price:', this.price)
        console.log('sold:', this.sold)
        console.log('console:', this.console)
    }
}];

const filter_PS4=games.filter(function(item){
    if (item.console==consoles[0]){
        return item
    }
});


const budgets = filter_PS4.map(function(current) {
    return current.price
})

budget = budgets.reduce(function(a,b){return a+b})

console.log(`I need ${budget} CAD to get all this PS4 great games!!`);


/* Solution 2
Array.prototype.budget = function(item){
    var sum = 0;
    for (var i =0;i<this.length;i++){
        sum +=this[i][item]
    }
    return sum;
}

console.log(`I need ${filter_PS4.budget("price")} CAD to get all this PS4 great games!!`);
*/

const gameNames = games.map(function(current) {
    return current.name
});

console.log(" all the games names (all strings):", gameNames);

const gamePrices = games.map(function(current) {
    return current.price
});

console.log(" all the games prices (all numbers):", gamePrices);