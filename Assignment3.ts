class BasicCalc {

    // creating constructors for following operations: add. subtract, divide, mult

        constructor(public val1: number, private val2: number){

        }
        public sum():number{

            return this.val1 + this.val2;
        }
        
        
        public sub():number{
        
            return this.val2 - this.val1;
        }
        
        public divide():number{
        
            console.log("Dividing the 2 numbers gets us: ");
            return this.val2/this.val1;
        }
        
        private mult():number{
        
            console.log("The product of the two numbers are: ");
            return this.val1 * this.val2;
         }

    multAccess()
    {
        return this.mult();
    }
}

class SCIcalc extends BasicCalc{

    public sqrt(val1:number):number{
        
        return Math.sqrt(val1);
    }

    public log(val1:number):number{

        return Math.log(val1);
    }

    public sin(val1:number):number{
        return Math.sin(val1);
    }

    public tan(val1:number):number{
        return Math.tan(val1);
    }
}


let s = new SCIcalc(40, 30);

console.log(("The sum of 2 numbers are: ") + s.sum());
console.log("The difference of two numbers are: " + s.sub());
console.log("The division of two numbers are: " + s.divide());
console.log("The product of 2 numbers are: " + s.multAccess());
console.log("The square root of this number is: " + s.sqrt(16));
console.log("The logarithimic value of this numebr is: " + s.log(23));
console.log("The sin of this number is: " + s.sin(44));
console.log("The tangent of this number is: " + s.tan(50));

