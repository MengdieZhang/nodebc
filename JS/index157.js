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

const filter_XBOX=games.filter(function(item){
    if (item.console==consoles[1]){
        return item
    }
});

console.log('Games on PS4')
for (var i=0; i<filter_PS4.length;i++){
    filter_PS4[i].showDetail()
    console.log('\n')
};

console.log('Games on XBOX')
for (var i=0; i<filter_XBOX.length;i++){
    filter_XBOX[i].showDetail()
    console.log('\n')
}