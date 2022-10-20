// 유틸리티 타입은 이미 정의해놓은 타입을 변환할 때 사용하기 좋은 타입 문법
// 꼭 유틸리티 타입을 쓰지 않더라도 인터페이스, 제네릭 등의 기본문법으로 타입을 변환할 수 있지만, 더 간결하게 타입을 정의 가능



// omit : 특정 타입에서 지정된 속성만 제거한 타입을 정의해준다.
function displayProductDetailWithoutStock(shoppingItem: Omit<Product, 'stock'>){
    return shoppingItem;
}


// partial : 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있다.
interface Address{
    email: string;
    address: string;
}

type MayHaveEmail = Partial<Address>
const me : MayHaveEmail = {};
const you : MayHaveEmail = {email : 'abc.com'};
const all : MayHaveEmail = {email : 'hero.com', address : 'naver.com'};



interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]>{

}

// interface ProductDetail{
//     id: number;
//     name: string;
//     price: number;
// }

// 2. 특정 상품의 상세정보를 그려내는 함수
// 인터페이스에 담겨 있는 데이터가 쓰이는 경우도 있고, 안쓰이는 경우도 있고, 추가되는 경우도 있다.
// 아래와 같이 일부만 사용해야 하는 경우가 생김

// Pick 유틸리티 타입(제네릭 타입) -> 장점: 불필요하게 다시 타입을 지정하지 않아도 됨.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>){

}

// 불필요하게 사용되는 현상 발생 -> 이 때 부분적으로 업데이트 되는 것을 반영하기 위해 Partial 유틸리티 타입을 사용
interface UpdateProduct {
    id?: number;
    name? : string;
    price? : number;
    brand? : string;
    stock? : number;
}

// 3. 특정 상품 정보를 업데이트 하는 함수
function updateProductItem(productItem: Partial<Product>) {

}


// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile{
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate{
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// #1 타입 별칭
// type UserProfileUpdate = {
//     username?: UserProfile['username']
//     email?: UserProfile['email']
//     profilePhotoUrl?: UserProfile['profilePhotoUrl']
// }


// #2 축약형 -> 맵드 타입(Mapped Type)

// 일종의 UserProfile 내부의 key들을 map을 돌려 지정 (js의 for in 처럼 작동)

// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?:UserProfile[p]
// }

// UserProfile의 key들만 반환
type UserProfileKeys = keyof UserProfile

// #3
type UserProfileUpdate = {
    [p in keyof UserProfile]?:UserProfile[p]
}

// #4 제네릭 활용 -> 결국 Partial의 구현체와 같다. 
type Subset<T> = {
    [p in keyof T]?:T[p]
}