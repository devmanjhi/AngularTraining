let obj = {
    x:12,
    y:30,
    func : function() {
        console.log(this);
        console.log(this.x);
    },
    abc : () => {
        console.log(this)
    }
};

obj.func();
obj.abc();