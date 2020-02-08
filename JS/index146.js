const user ={
    username:'batman',
    password:'Alfred1960ROCKS!',
    shouldOpenBatCave:function(name,passwd){
        if(name=='batman'&& passwd=='Alfred1960KPO!') {
            return true;
        }else {return false;}
    }
};

if (user.shouldOpenBatCave()) {
    console.log('Welcome back batman!!')
} else {
    console.log("Sorry, you can't enter the Batcave, try again..")
}