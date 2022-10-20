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
function subtract (a:number, b?: number):number{
    return a - b;
}

console.log(subtract(4,undefined)); // NaN
console.log(subtract(4,null)); // 4
// console.log(subtract(4,null,3)); // Expected 1-2 arguments, but got 3.

function newSum (a: number, ...nums: Array<number>):number{
    let totalOfNums = 0;
    for(let key of nums){
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}

console.log(newSum(1, 2)); // NaN

