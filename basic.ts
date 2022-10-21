const a: string = 'hello';
console.log(a);

const b: number = 10;
const isLoggedIn: boolean = true;
console.log(b, isLoggedIn);


let arr:number[] = [1,3,4];
let arr2:Array<number> = [1,3,4];
console.log(arr === arr2);

// Tuple - 배열의 길이가 고정되고, 각 요소의 타입이 지정되어 있는 배열 형식
let arr3: [string?, number?] = ['1', 1];
console.log(arr3)

let unuseful: void = undefined;
function notUse(): void{
    // return undefined;
    console.log('hello');
}
notUse();


function sum (a:number, b:string):string {
    return String(a) + b;
}
console.log(sum(1,'3'));

// ?를 사용해서 매개변수의 갯수만큼 인자를 넘기지 않도록 만들수도 있다.
// function subtract (a:number, b?: number):number{
//     return a - b;
// }

// console.log(subtract(4,undefined)); // NaN
// console.log(subtract(4,null)); // 4
// console.log(subtract(4,null,3)); // Expected 1-2 arguments, but got 3.

function newSum (a: number, ...nums: Array<number>):number{
    let totalOfNums = 0;
    for(let key of nums){
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}

console.log(newSum(1, 2)); // NaN



interface CraftBeer {
    readonly name: string;
    [propName: string] : any;
}

const beer: CraftBeer = {
    name: 'cass'
}

function brewBeer(beer: CraftBeer):void {
    console.log(beer);
}

let myBeer = { brandon: 'what'};


// 제네릭 - 재사용성이 높은 컴포넌트를 만들 때 활용되는 특징 - 한 가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용
// 타입을 마치 함수의 파라미터처럼 사용하는 것

function getText<T>(text: T):T {
    return text;
}

const text1 = getText<string>('hello');
const text2 = getText('hell');

// function getTextLength<T>(text: T):T {
//     console.log(text.length);
//     return text;
// }
// 컴파일 시 에러를 발생시킨다.
// text에 .length가 있다는 단서는 어디에도 없다.
// 제네릭 코드의 의미를 보면, 함수의 인자와 반환 값에 대한 타입을 지정하지 않았다. 
// 단, 입력값으로 어떤 값이 들어왔고, 반환 값을 어떤 값이 들어왔는지 판단이 가능할 뿐
// 마치 any와 같이 동작하지만, 인자와 반환 값에 타입을 직접적으로 지정한 것은 아니다.
// 문자열이나 배열이 들어와도, 컴파일러 입장에서는 아직 .length를 허용할 수 없다.

function getTextLengthArray<T>(text: T[]): T[]{
    console.log(text.length);
    return text.length;
}
const tesla = getTextLengthArray<string>(['t','e','s','l','a'])
console.log(tesla);
// 제네릭 인터페이스
