
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

## 시작 --> 시작할때만...^^

     터미널 --> npm run db

![image](https://github.com/myunzzhang/react_basic/assets/129017008/1533e38b-7ff2-46ef-9552-4db10ea66a16)


## CreatePage 제작 및 세팅

![image](https://github.com/myunzzhang/react_basic/assets/129017008/25064757-a72f-4130-8d2c-0d5daa1cea31)

    --> app.js 에 연결  

![image](https://github.com/myunzzhang/react_basic/assets/129017008/bf763ac3-3d47-4e6a-ba50-5ee1facb6735)

    --> 경로 연결 (Routes를 이용)

![image](https://github.com/myunzzhang/react_basic/assets/129017008/bdc52e56-20f1-4f54-9638-060571102ddb)

### 여러개 파일 연결되게 만들기!

    hompage, editpage, listpage....

![image](https://github.com/myunzzhang/react_basic/assets/129017008/5f96ed46-ab52-4bb2-bba3-8a89ccc9b91e)


## Route 줄이기

    1️⃣ const routes라고 변수 만들기
    2️⃣ {}에 객체 만들기
    3️⃣ mpa함수를 이용하여 불러오기

![image](https://github.com/myunzzhang/react_basic/assets/129017008/fd6d57dd-3f5d-4ae2-9f4c-4191487bef37)


## 배열을 밖으로 빼기

    src에 routes.js 파일을 만들고 잘라 넣기

![image](https://github.com/myunzzhang/react_basic/assets/129017008/e9f95462-203c-4291-9dcf-38f4a2cdd300)


## 값을 밖으로 뿌려주기

   https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html

![image](https://github.com/myunzzhang/react_basic/assets/129017008/9cff3601-e402-472a-99e5-67391314d7ab)

   사용하려면 GET!!
![image](https://github.com/myunzzhang/react_basic/assets/129017008/223ac329-4e60-443b-8570-3c7ddb40a75b)

   axios.get('http://localhost:3005/posts').then((res)=>{}))를 이용한다.

![image](https://github.com/myunzzhang/react_basic/assets/129017008/373f3b71-abf0-4a0f-bc9b-59da63c0f4b3)

   ⬇

   http://localhost:3005/posts 주소를 검색창에 입력
   
![image](https://github.com/myunzzhang/react_basic/assets/129017008/cedd2aa9-e08b-4cc9-84a7-47f184a8cf66)

   확인했으면 콘솔도 찍혔으면 넘어오세요

## 배열을 만든다.

![image](https://github.com/myunzzhang/react_basic/assets/129017008/d0e93d66-21db-456f-9caa-d1d535f8472d)


## key값 넣어라고 오류뜨는거 해결

![image](https://github.com/myunzzhang/react_basic/assets/129017008/50bae68f-0bd8-4d59-9b54-9074fdf93050)

## 나따라하면 usestate가 없다고 에러뜨는데 그거 해결

   import React, { useState } from "react"; 이걸 위에 적어준다.

![image](https://github.com/myunzzhang/react_basic/assets/129017008/9a650853-78b9-48bd-b82a-3904aa2924d5)


## 추가 설명

usestate는 getpost를 통해 post의 값이 바뀔때마다 다시 실행. --> 지금 이게 무한반복
console이 미친듯이 생성되고 있음...?!!!


## 무한 반복 막기 

   useEffect를 넣으면 자동 생성
   
![image](https://github.com/myunzzhang/react_basic/assets/129017008/78052f76-5100-478f-8356-ec3fc6911e97)

    배열이 비어있으면 컴퍼넌트가 실행될 떄 딱 한번만 실행
    
![image](https://github.com/myunzzhang/react_basic/assets/129017008/c2f12484-27b5-4976-bca7-4f661b7ee56b)

   이렇게 map함수를 사용하면!!

![image](https://github.com/myunzzhang/react_basic/assets/129017008/02479082-7871-472d-b91b-47406bb2d00a)

## 타이틀 뿌리기

   타이틀이 뿌려집니다^^ 나는 김현에러 에러 500번나고 강사님과 함께 고침...^^

![image](https://github.com/myunzzhang/react_basic/assets/129017008/a06afa8c-2b9a-4c0f-8556-19b73d94225a)


![image](https://github.com/kgy424/react_basic/assets/129706828/139d89f3-10ad-47d7-bb97-2778e223e81d)

