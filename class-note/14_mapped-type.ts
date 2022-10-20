// Mapped Type
// 맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해주는 문법
// 자바스크립트 map API 함수를 타입에 적용한 것과 같은 효과


type Heros = 'Hulk' | 'Capt' | 'Thor'

// Mapped Type | Hulk : number Capt : number Thor: number => key에 number를 타입으로 지정
type HeroAges = { [P in Heros]: number}

const ages: HeroAges = {
    Hulk : 100,
    Capt : 120,
    Thor: 1000,
}