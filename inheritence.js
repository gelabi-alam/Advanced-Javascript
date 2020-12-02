class Parent{
    constructor(){
        this.fatherName = "Touhidurjaman";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    // create Function insie a Class
    
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Gelabi Alam");
const baby2 = new Child("Tahsan Foysal");
console.log(baby.getFullName(), baby2);