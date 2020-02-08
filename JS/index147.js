const user ={
    username:'batman',
    password:'Alfred1960ROCKS!',
    shouldOpenBatCave:function(){
        if(this.username=='batman'&& this.password=='Alfred1960KPO!') {
            return true;
        }else {return false;}
    }
};

if (user.shouldOpenBatCave()) {
    console.log('Welcome back batman!!')
} else {
    console.log("Sorry, you can't enter the Batcave, try again..")
}