class person{
    constructor(public name:string, protected email:string, private pass:string,public address:string,
    public dob: Date, public phone:number,public placelived:string,public colleges:string[],
    public photoUrl:string, public secondAddress ?:string ){
        this.name = name;
        this.email=email;
        this.pass=pass;
        this.address=address;
        this.secondAddress = secondAddress;
        this.dob=dob;
        this.phone=phone;
        this.colleges=colleges;
        this.photoUrl=photoUrl;
        this.placelived=placelived;
    }

    public getAge():string{
        return `25 years old and born on ${this.dob}`
    }

    getEmail=()=>{
        return(`${this.email} is the mail ID to which you contact`)
    }
}

let dateOfBirth = new Date('December 17, 1995');

let rajesh = new person("rajesh","raj.gmail.com","pass","image gardens",dateOfBirth,22222,
"Vijayawada",["ban","hyd"],"image.jpg",)

console.log(`Here is the simple object called Rajesh
     Name: ${rajesh.name}
     Address: ${rajesh.address}
     Phone: ${rajesh.phone}
     Placelived: ${rajesh.placelived}
     College: ${rajesh.colleges} `)

console.log(`Use of functions ${rajesh.getEmail()} and ${rajesh.getAge()}`)


