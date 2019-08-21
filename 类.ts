class Parent{
    public name:string;
    protected age:number;
    private money:number;
    constructor(name:string,age:number,money:number){
        this.name=name;
        this.age=age;
        this.money=money;
    }
    getName(){
        console.log(this.age)
    }
}

class child extends Parent{
    getName(){
        console.log(this.age)
    }
}


let c = new child('wo',12,12)
c.getName()