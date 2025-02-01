class Shape{
    
    #name;

    constructor(name){
        this. name = name;
    }

    set name(newName){
        this. #name = newName;
    }

    get name(){
        return this.name;
    }

}

class Rectangle extends Shape{

    constructor(name,side1, side2){
        super(name)
        this.side1 = side1;
        this.side2 = side2;
    }

    getArea = ()=>{
        return this.side1 * this.side2;
    }

    isSquare = ()=>{
        if(this.side1 == this.side2) return true; 
        else return false;
    }

}

let newRectangleObject = new Rectangle("rectangle", 4, 5);

console.log(newRectangleObject.getArea());