# :blue_book: REACT_TIL 

리액트를 공부하기 위해 사용하는 repository

### :books: 참고 서적 : 리액트를 다루는 기술 ( 19. 11. 01일 부터 개정판으로 공부)
### :date: 공부 기간 : 19. 10. 14 ~ 공부 중

---
### redux-counter (19.10.14)
 - redux의 개념을 익히기 위한 프로젝트
 
### todo-list (19.10.15)

 - Immutable 추가 
 - Duck 파일로 구조 변경
 - redux-actions 기능 추가
 - 프로젝트에 redux 
 
### redux-starter-kit (19.10.16)

 - redux 미들웨어를 연습하기 위한 프로젝트
 - loggerMiddleware를 이용해 로깅 해보기
 - redux-thunk를 이용해 비동기 작업 처리해 보기
 - redux-promise-middleware를 이용해 비동기 작업 처리해 보기 (오류 발생)
 - redux-pender를 이용해 비동기 작업 처리해 보기 (적용중)
 
### redux-router-tutorial (19. 10. 16)
 
 - SPA(Single Page Application) 프로젝트
 - redux-router 라이브러리 사용법 익히기

---
(이후부터 개정판으로 공부) 

### Repository reset (19. 11. 01)

 - Repository 리셋 (개정판으로 복습 및 새로운 내용 공부)
 
### React Component & Props (19. 11. 05)

1. **Component에 대한 공부**
- 함수형 컴포넌트와 클래스형 컴포넌트의 차이 알기
- 모듈 불러오기(import)와 모듈 내보내기(export) 사용해 보기

2. **prop에 대한 내용 공부**
- 부모 컴포넌트에서 props 값 설정 하기
- props의 기본 값 설정하기
- component태그 사이에 내용을 보여주는 children 사용해보기
- 비구조화 할당 문법을 통해 props 내부 값 사용해보기
- propsTypes를 이용해 props 검증하기 (type검사,필수 type 지정)


### React State & EventHandling & ref (19. 11. 06)

1. **state에 대한 공부**
- 클래스형 컴포넌트에서의 State 사용법 (setState)
- 객체 대신 함수 인자를 전달 해보기
- setState를 통한 끝난 후, 특정 작업 처리
- 함수형 컴포넌트에서의 State 사용법 (useState)
- 배열의 비구조화 할당법 사용해보기

2. **이벤트 핸들링에 대한 공부**
- 기본적인 이벤트 사용법 알아보기
- 클래스형 컴포넌트에서 Event 사용법
- 메서드와 this를 바인드 해야하는 이유를 알고, Property Initializer Syntax를 통한 메서드 작성법 알기
- 함수형 컴포넌트에서 Event 사용법
- 여러개의 input을 관리하기 위해 form 객체 사용해 보기

3. **ref 사용법에 대한 공부**
- 클래스형 컴포넌트에서 ref 사용법
- 직접 DOM에 접근해야 하는 경우에만 사용
- ref를 사용하지 않고 쓸 수 있으면, 되도록 쓰지 않고 사용할 것
- ref를 통한 데이터 전송은 React 규칙에 어긋나며, 복잡하게 꼬일경우 유지보수가 어려워 지기 때문에 되도록 지양한다.


### React Iteration & LifeCycle & Hooks (19. 11. 07)
1. **Iteration(반복)에 대한 공부**
- javascript의 map() 메서드를 이용한 데이터 배열을 컴포넌트 배열로 변환하기
- 컴포넌트 배열 사용시 key를 사용해야하는 이유
- React의 성능을 최적화 하기 위해 불변성 유지 방법 알기
- concat() 메서드를 통해 새 항목을 포함한 새로운 컴포넌트 배열 생성하기
- filter() 메서드를 통한 기존 항목을 제외한 새로운 컴포넌트 배열 생성하기

2. **LifeCycle에 대한 공부**
- LifeCycle 전체 흐름 파악하기
- Mount, Update, UnMount의 특징을 알고 각각 사용되는 메서드 알아보기
```
- Mount(DOM 생성후, 웹 브라우저 상으로 나타낼때)
 1. constructor(생성자)
 2. getDerivedStateFromProps(Props -> State)
 3. render(랜더링 하는 메서드, 필수)
 4. componentDidMount(컴포넌트가 웹 브라우저 상에 나타난 이후 호출)
 
- Update (DOM에 변화가 생겼을 때)
 1. getDerivedStateFromProps(Props -> state)
 2. shouldComponentUpdate(true면 리렌더링, false면 작업 중지)
 3. render (렌더링 하는 메서드, 필수)
 4. getSnapshotBeforeUpdate (컴포넌트 변화를 DOM에 반영하기 바로 직전 작업)
 5. componentDidUpdate(컴포넌트 업데이트 작업 이후 호출)
 
 - UnMount(컴포넌트를 DOM에서 제거할 때)
 1. componentWillUnmount (컴포넌트가 웹 브라우저 상에 사라지기 전에 호출)
 
```
- 에러 발생시, componentDidCatch() 메서드를 이용해 에러 페이지 나타내기

3. **Hooks에 대한 공부 (useState, useEffect)**

- 함수형 컴포넌트 사용에 있어 다양한 작업을 도와주는 Hook
- useState를 통해 함수형 컴포넌트에서도 상태 관리를 할 수 있게 되었다.
- useEffect를 통해 컴포넌트 렌더링시 다양한 작업을 할 수 있게 되었다.

### React Hooks (19. 11. 09)

1. **Hooks에 대한 공부(useReducer, useMemo, useCallback, useRef, 커스텀 Hooks)**

- useReducer를 통해 useState와 useEffect의 기능을 더 효과적으로 작업할수 있게 되었다.
- useReducer는 추후 더 자세하게 공부를 해봐야 할 필요성을 느꼈다.
- useMemo를 통해 숫자, 문자열, 객체값의 재소용성을 높일 수 있게 되었다.
- useCallback을 통해 함수의 재사용성을 높일 수 있게 되었다.
- useRef를 통해 함수형 컴포넌트에서 ref를 사용할 수 있게 되었으며, 로컬변수를 활용할 수 있게 되었다.
- 로직을 새로 만들고 Hook을 작성하여 개인적인 Hook을 이용할 수 있게 되었다.


### React CSS Styling (19. 11. 10)

2. **CSS Styling에 대한 공부(Sass, CSS Module, styled-component)

- Sass를 이용하여 CSS의 복잡한 작업을 쉽게 하고, 스타일 코드의 재활용성, 가독성을 높여 줄 수 있게 되었다.
- CSS Module을 통해 CSS의 className을 좀 더 쉽게 다룰수 있게 되었다.
- styled-component를 통해 CSS파일을 생성하지 않고도 js파일에 스타일을 적용할 수 있게 되었다.


---
## 개념 익히기 

### :page_facing_up: SPA(Single Page Application)

- 말 그대로 페이지가 하나인 어플리케이션을 뜻함.
- 뷰 렌더링을 유저의 웹 브라우저가 담당하게 하고, 애플리케이션을 우선 웹 브라우저에 로드시킨 후 필요한 데이터만 전달받아 보여 준다.
- 앱 규모가 커지면 자바스크립트 파일 크기도 커지기 때문에 코드 스플리팅(code splitting)을 통해 라우트별로 파일을 나누어 트래픽과 로딩 속도를 개선 해야 한다.

### 코드 스플리팅(Code Splitting)

- 말 그대로 코드를 분할 한다는 의미
- SPA 적용시 페이지 로딩 속도가 지연되는 단점을 보완해줌
- webpack에서 프로젝트를 번들링할 때 파일 하나가 아니라 파일 여러개를 분리시켜 결과물을 만들 수 있다.
- 페이지 로딩 할 때 한꺼번에 불러오는 것이 아니라 필요한 시점에 불러올 수 있다.

