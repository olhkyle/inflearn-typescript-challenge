## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일이 JSDoc으로 타입 시스템 입히기 (@ts-check 상단에 적기)
1. 타입스크립트의 기본 환경 구성
    - [x] NPM 초기화 (```npm init -y```)
    - [x]타입스크립트 라이브러리 설치 (```npm install typescript --save-dev```)
    - [x]타입스크립트 설정 파일(tsconfig.json) 생성 및 기본 값 추가
    - [x] 자바스크립트 파일을 타입스크립트 파일로 변환 (```tsc || npm run build```)


2. 타입스크립트 명시적인 any 선언하기
    - `tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가
    - 가능한한 구체적인 타입으로 타입 정의 진행

3. 프로젝트 환경 구성
    - babel, eslint, prettier

4. 외부 라이브러리 모듈화
5. `strict` 옵션 추가 후 타입 정의
