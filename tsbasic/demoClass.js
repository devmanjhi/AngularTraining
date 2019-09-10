var Car = (function () {
    function Car(a, b) {
        var _this = this;
        this.information = function () {
            console.log(_this.name);
            console.log(_this.age);
        };
        this.name = a;
        this.age = b;
    }
    return Car;
})();
exports.Car = Car;
