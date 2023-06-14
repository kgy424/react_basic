
# Router 접목 2

[https://www.npmjs.com/package/json-server]

    npx json-server --watch db.json --port 3005

![image](https://github.com/myunzzhang/react_basic/assets/129017008/902ed13d-ddd3-4175-8468-25876d9054d0)

    # 다른 터미널을 열어서 "npm start"

## Route 연결하기

    새로운 터미널 열기
    npm i react-router-dom

![image](https://github.com/myunzzhang/react_basic/assets/129017008/2deeaec9-f442-4aa3-ade4-861c68f3f8e4)


## index.js에 설정하기

    <BrowserRouter>를 적으면 자동완성으로 import { BrowserRouter } from "react-router-dom";이 생성

![image](https://github.com/myunzzhang/react_basic/assets/129017008/7eb7b571-0ca7-4a5a-b0a2-c16bc52c9c0a)


## Component 파일 만들기

    src에 components 파일을 만들고 안에 Nav.js를 만든다.
    rafce를 친다.
    bootstrap에서 navbar를 가저온다
    복붙 & className을 바꾼다.

![image](https://github.com/myunzzhang/react_basic/assets/129017008/415263bc-fc1a-4526-991c-f3974021bace)

    *추가 nav.js 정리 -- #navbarNav에 있는 className들 삭제


## 파일 정리

![image](https://github.com/myunzzhang/react_basic/assets/129017008/17442f88-3bd1-4c9e-8dcb-31e1cc753dbd)

## BlogForm.js 파일

    파일을 만들고 app.js에 있는 내용을 BlogForm.js에 잘라 넣는다.

![image](https://github.com/myunzzhang/react_basic/assets/129017008/b87dd862-a751-459b-90f6-f467be7d38ee)


## 추가 정리

    Nav.js 에 <nav className="navbar bg-dark"> 추가
    nav-link에 active 삭제
    app.css에 .navbar a { color: #fff; }를 추가

