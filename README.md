# 우아마켓 - 11팀

## 팀원 정보

### [김지용](https://github.com/jiyong1)

<br>

### [안준범](https://github.com/junbeomAn)

<hr />

### ``우아 마켓이 뭔가요?``

```

우아 마켓은 자신이 설정한 위치를 기반으로 중고 거래를 할 수 있는 온라인 마켓입니다. 간단한 정보로 사용자 인증을 하고,
내 위치 설정 및 상품을 둘러 볼 수 있습니다. 인증을 거치지 않고도 둘러볼 수는 있으며 부가 기능을 사용하려면 로그인이 필요합니다.

```

### ``어떤 기능이 있나요?``



- 사용자 인증인 로그인과 회원가입을 할 수 있고, 이를 통해 내 위치정보를 등록할 수 있습니다.


- 중고 상품을 등록, 삭제, 수정, 조회 등을 할 수 있습니다.
- 마음에 드는 상품을 찜할 수 있고 마이 페이지에서 목록 확인이 가능합니다.
- 상품의 카테고리별로 조회해서 볼 수도 있고 전체 상품을 둘러볼 수 있습니다.
- 상품의 판매자와 실시간 채팅이 가능합니다.(푸시 알림은 없어요..)
- 마이 페이지에서 내가 올린 상품 목록, 채팅 중인 채팅방 리스트를 확인할 수 있어요
- 채팅은 가능한데 채팅방을 만드는 문의하기 기능은 못 만들었습니다..(하루만 더..)


### ``어디서 볼 수 있나요?``

🏃‍♂️[11팀 우아마켓을 보고싶다 클릭!](http://ec2-3-35-50-169.ap-northeast-2.compute.amazonaws.com/)🏃‍



### ``Directory 구조``

#### client
```

client
├── dist
├── src
│   ├── index.html
│   ├── main.js
│   ├── assets
│   ├── component // 페이지에 해당하는 컴포넌트들
│   │   ├── chat
│   │   ├── detail
│   │   ├── ...
│   │   └── shared // 공용으로 쓰이는 네비게이션바, 버튼 등의 컴포넌트
│   ├── core // 다른 컴포넌트들의 기반이 되는 컴포넌트
│   │   └── Component.js
│   ├── lib // 해시 라우터
│   │   └── router.js
│   ├── scss
│   ├── store // 전역 상태객체
│   │   └── index.js 
│   └── utils.js
└── webpack.config.js

```


#### server
```

server
├── db
├── package-lock.json
├── package.json
├── public
├── app.js
├── routes
│   ├── chat
│   ├── product
│   ├── auth.js
│   ├── index.js
│   ├── location.js
│   ├── query.js
└── └── utils.js

```

### chat server

```

server
├── index.js
├── package-lock.json
└── package.json

```





