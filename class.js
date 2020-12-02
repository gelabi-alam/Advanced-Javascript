class Student{
    constructor(stuId, StuName){
        this.id = stuId;
        this.name = StuName;
        this.university = "DUET";
    }
}
const student1 = new Student(22, "Gelabi Alam"); 
const student2 = new Student( 24, "Foysal");
console.log(student1, student2);
console.log(student1.name, student2.university);