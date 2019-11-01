# REACT_TIL 

리액트 사용법을 공부하기 위해 사용하는 repository

### :books: 참고 서적 : 리액트를 다루는 기술


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
 
### Repository reset (19. 11. 01)

 - Repository 리셋 (개정판으로 복습 및 새로운 내용 공부)
 


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

