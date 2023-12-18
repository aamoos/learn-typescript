//인터페이스
interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    skill: string;
}

var developer: Developer;
var person: Person;
// developer = person;
developer = new Person();