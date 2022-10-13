var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicCalc = /** @class */ (function () {
    // creating constructors for following operations: add. subtract, divide, mult
    function BasicCalc(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    BasicCalc.prototype.sum = function () {
        return this.val1 + this.val2;
    };
    BasicCalc.prototype.sub = function () {
        return this.val2 - this.val1;
    };
    BasicCalc.prototype.divide = function () {
        console.log("Dividing the 2 numbers gets us: ");
        return this.val2 / this.val1;
    };
    BasicCalc.prototype.mult = function () {
        console.log("The product of the two numbers are: ");
        return this.val1 * this.val2;
    };
    BasicCalc.prototype.multAccess = function () {
        return this.mult();
    };
    return BasicCalc;
}());
var SCIcalc = /** @class */ (function (_super) {
    __extends(SCIcalc, _super);
    function SCIcalc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SCIcalc.prototype.sqrt = function (val1) {
        return Math.sqrt(val1);
    };
    SCIcalc.prototype.log = function (val1) {
        return Math.log(val1);
    };
    SCIcalc.prototype.sin = function (val1) {
        return Math.sin(val1);
    };
    SCIcalc.prototype.tan = function (val1) {
        return Math.tan(val1);
    };
    return SCIcalc;
}(BasicCalc));
var s = new SCIcalc(40, 30);
console.log(("The sum of 2 numbers are: ") + s.sum());
console.log("The difference of two numbers are: " + s.sub());
console.log("The division of two numbers are: " + s.divide());
console.log("The product of 2 numbers are: " + s.multAccess());
console.log("The square root of this number is: " + s.sqrt(16));
console.log("The logarithimic value of this numebr is: " + s.log(23));
console.log("The sin of this number is: " + s.sin(44));
console.log("The tangent of this number is: " + s.tan(50));
