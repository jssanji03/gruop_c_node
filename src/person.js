class Person {
    // 建構函式
    constructor(name='noname', age=20) {
        this.name = name;
        this.age = age;
    }

    toJSON(){
        console.log('--- toJSON()');
        return JSON.stringify({
            name: this.name,
            age: this.age,
        })
    }
    toString(){
        console.log('--- toString()');
        return this.toJSON();
    }
}

console.log('---1');

module.exports = {
    Person,
    f1: a=>a*a,
};

