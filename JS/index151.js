const groot={
    greet: function(){
        return "I'm Groot!!";
    },
    speak:function(){
        return "I'm Groot!!";
    }
};
console.log(Object.keys(groot)[0],': ',groot.greet());
console.log(Object.keys(groot)[1],': ',groot.speak());
