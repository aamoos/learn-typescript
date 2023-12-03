// function logMessage(value: any){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number){
    if(typeof value == 'number'){
        value.toLocaleString();
    }
    if(typeof value == 'string'){
        value.toString();
    }

    throw new TypeError('value must be string or number')
}

logMessage('hello');
logMessage(100);

interface Developer{
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age: number;
}

//공통된 타입만 접근가능 유니온타입
function askSomeone(someone: Developer | Person){
    someone.name;
    someone.skill
    someone.age
}