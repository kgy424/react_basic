# json-server npm install
![image](https://github.com/kgy424/react_basic/assets/129706828/217ccd6c-8cd3-434d-9c03-42a33045f7b9)

### 터미널 열어서 해당 파일 초점맞추고 이거 설치(입력)
      npm i json-server
      
### 이거 db.json 파일 만들어서 넣기 (파일은 project 폴더의 root(들어가자 보이는 곳)에 만듦.)
      
![image](https://github.com/kgy424/react_basic/assets/129706828/a3dac541-44d1-4f56-8713-535318222cb7)
![image](https://github.com/kgy424/react_basic/assets/129706828/c03f354c-0778-49ac-99ab-426e89835c87)

## db.json 실행하기
![image](https://github.com/kgy424/react_basic/assets/129706828/fcdb6eb1-6628-45dc-95ef-82299fb37b45)
    
#### 위와 같이 실핼하면 port 3000을 사용해 react와 중복되어버러림.
#### 그래서 port를 변경해줘야 함.

    이게 원래꺼: json-server --watch db.json 밑에처럼 수정해줘야 함.
    
    json-server --watch db.json -- 3004
