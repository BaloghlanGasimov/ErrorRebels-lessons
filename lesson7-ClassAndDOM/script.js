/*

class Student{

    names
    surname
    age
    point=0

    constructor(names,surname,age,point){

        this.names=names;
        this.surname=surname;
        if(point>0){
            this.point=point;
        }
        
        this.age=age;

    }

    display(){

        console.log(this.names," bu telebenin qiymeti ",this.point);
        
    }



}


let student1 = new Student("Rustem","Behbudov",20,-86);

student1.display();

let student2 = new Student("Ehmed","Recebov",21,74);
student2.display();


*/



const mercedes = document.querySelector(".mercedes")
const bmw = document.querySelector(".bmw")
const audi = document.querySelector(".audi")
const toyota = document.querySelector(".toyota")



const toyotaFunc = ()=>{

    // toyota.className="toyota green";

    toyota.classList.add("green")

    mercedes.className="mercedes"
    bmw.className="bmw"
    audi.className="audi"

    console.log("isleyir");
}

const mercedesFunc =()=>{

    mercedes.classList.add("green")

    toyota.className="toyota"
    bmw.className="bmw"
    audi.className="audi"
    
}



toyota.onclick = toyotaFunc;
mercedes.onclick = mercedesFunc;




