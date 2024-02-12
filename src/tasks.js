class project {

    constructor(name, description){
        this.name = name;
        this.description = description
    }

  sayHello() {
 console.log('hello, my name is ' + this.name)
    }
}

let avn = new project('dadas', 'testing project with class')
console.log(avn)
avn.sayHello()