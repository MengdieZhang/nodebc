const user ={
    username: null,
    password:null,
    greet:function(){
        if(this.username===null){
            console.log("Please assign a username value")
        } else{
            console.log(`Hello, I'm user ${this.username}`)
        }
    },
    updatePassword: function(){this.password="mypassword"},
    updateUsername: function(){this.username="Mandy"}
}

user.greet();

user.updatePassword();
user.updateUsername();

user.greet();