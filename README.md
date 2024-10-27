<div align="center">
      <img src='readmeImg/Cover.png' width="100%">

</div>
<br>
<hr>
</hr>

## 목차

- [목차](#목차)
- [프로젝트 개요](#프로젝트-개요)
- [주요 변경 사항](#주요-변경-사항)
- [주요 기능](#주요-기능)
- [프로젝트 구조](#프로젝트-구조)
- [기술 스택](#기술-스택)
- [서비스 화면](#서비스-화면)
- [팀원 소개](#팀원-소개)

## 프로젝트 개요

### 서비스 개발 배경
- 대부분의 여행 관련 플랫폼은 개인 사용자를 대상으로 설계되어 있으며, 여러 사용자가 동시에 협업하여 일정을 계획할 수 있는 기능은 제한적입니다.
- ‘TRIPEER’는 실시간 여행 일정 공유 및 계획 플랫폼으로 소통 가능한 맞춤형 여행 계획을 세울 수 있습니다.
- 여행 전 계획 단계부터 여행 중 실시간 조정에 이르기까지 다양한 기능을 제공함으로써 여행의 효율성과 만족도를 높일 수 있습니다.

### 서비스 설명
- 친구, 가족 또는 동료와 같은 여러 참여자가 함께 여행 계획을 수립, 공유, 수정 및 최적화할 수 있는 서비스를 제공합니다.
- 이 플랫폼은 여행 전 계획 단계부터 여행 중 실시간 조정에 이르기까지 다양한 기능을 제공함으로써 여행의 효율성과 만족도를 높일 수 있습니다.
- 주요 기능으로는 협업툴(실시간 채팅 및 마우스 커서 공유) 형태의 일정 공유, Tour API 기반의 여행지 정보 조회, 사용자 성향 기반의 여행지 추천, 네이버 지도를 활용한 지도 제공, 여행기록을 보관할 다이어리를 제공합니다.

### 프로젝트 Version 1 둘러보기
- https://github.com/SSAFY-3rdPJT-Tripeer/Tripeer

## 주요 변경 사항

### 1. 사용자 피드백 반영
#### (1) 모바일 버전 추가 및 반응형 웹 구현
- 여행 계획 앱 특성상 모바일에서의 접근이 필수적이라는 피드백을 반영해 모바일 및 반응형 페이지를 구현했습니다. 특히 모바일에서도 채팅 기능을 원활하게 사용할 수 있도록 모바일 채팅방 UI를 최적화했습니다.
#### (2) 여행지 정보 확장
- 사용자가 다른 포털 사이트와 병행 사용해야 하는 번거로움을 개선하기 위해, 여행지 상세 페이지에 별점, 리뷰, 블로그 포스팅 등 추가 정보를 제공했습니다. 또한, 여러 여행지를 비교할 수 있는 찜 목록 페이지를 추가하여 편리한 계획 수립을 돕고자 했습니다.
#### (3) 알림 기능 개선
- 초대 알림의 가시성을 높이기 위해 기존의 이메일 알림을 대체하여, FCM(푸시 알림)을 통해 앱 외부와 내부 모두에서 알림 기능을 지원하도록 개선했습니다.
#### (4) 사진 앨범 기능 조정
- 사진 앨범의 오용 가능성을 줄이기 위해 단체 앨범 기능을 삭제하고, 대신 여행지 리뷰 작성 시 사진 첨부가 가능하도록 수정했습니다.
<br>

### 2. 코드 구조 및 성능 최적화
#### (1) TypeScript 도입
- 명시적 타입을 사용해 코드의 가독성을 높이고 팀원 간 협업의 안정성을 강화했습니다.
#### (2) Next.js에서 React로 전환
- SSR의 장점을 활용하기 어려운 프로젝트 특성상, SPA 특성을 살리기 위해 React로 전환하여 클라이언트 환경에 최적화된 앱을 구현했습니다.
#### (3) Tanstack Query 도입
- 서버 데이터를 캐싱하여 반복적인 비동기 호출을 줄이고 서버 부하를 경감했습니다.
#### (4) 코드 리뷰 강화
- 협업 중 코드 리뷰를 적극 활용해 코드 품질을 높이고 최적화를 지속했습니다.

  <br>
## 주요 기능

<table>
<tr>
  <th>분류</th>
  <th>기능</th>
  <th>내용</th>
</tr>
<tr>
  <td> 로그인 및
        랜딩페이지 </td>
  <td>랜딩페이지</td>
  <td>- 트리피어 서비스에 대한 소개 및 로그인 페이지를 보여줍니다.</td>
</tr>
<tr>
  <td></td>
  <td>로그인</td>
  <td>- 소셜 및 트리피어 자체 로그인을 제공합니다.</td>
</tr>
<tr> 
  <td> 홈</td>
  <td> 여행지 검색 </td>
  <td> - 가고싶은 여행지를 검색하거나 추천 여행지 정보를 제공합니다. </td>
</tr>
<tr> 
  <td> </td>
  <td> 여행지 상세 페이지 </td>
  <td> - 특정 여행지에 관한 사진, 리뷰, 지도, 블로그 포스팅을 제공합니다. </td>
</tr>
<tr> 
  <td> </td>
  <td> 지역 필터링 </td>
  <td> - 지역별 및 카테고리별 검색 필터링 기능을 제공합니다. </td>
</tr>
<tr>
  <td> 일정계획 </td>
  <td> 일정 계획 생성</td>
  <td>- 여러 사용자들과 여행 계획을 세우기 위한 플랜을 생성합니다.</td>
</tr>
<tr>
  <td></td>
  <td>채팅 기능</td>
  <td>- 실시간 채팅 및 실시간 멤버별 온라인 여부 조회가 가능합니다.<br>
  - 데스크탑의 경우, 백틱(``)을 이용해 마우스 커서 공유 및 채팅이 가능합니다.
  </td>
</tr>
<tr>
  <td></td>
  <td>지도 기능</td>
  <td> - 지역별 및 카테고리별 검색 필터링 기능을 제공합니다.<br>
  - AI기반 실시간 여행지 추천 기능을 제공합니다.<br>
  - 기상청 API를 활용한 선택 지역의 날씨 정보를 제공합니다.
  - 유저별 상호작용 가능한 여행지 목록 추가기능을 제공합니다.
  - 여행지 선택 시 세부정보 및 지도정보를 제공합니다. 
  </td>
</tr>
<tr> 
  <td> </td>
  <td> 일정 기능</td>
  <td> - 추가된 여행지 목록, 카테고리별, 검색어별 필터링 기능을 제공합니다.<br>
  - 유저간의 상호작용 가능한 일차별 여행지 드래그 앤 드랍 기능을 제공합니다.<br>
  - 여행지 간 소요 시간 계산, 교통수단별 최단거리 계산 기능을 제공합니다.
  - 여행지 상세 경로 및 교통 수단에 따른 상세정보를 제공합니다.
  </td>
</tr>
<tr> 
  <td>지난여행 </td>
  <td> 지난 여행 조회</td>
  <td> -다녀온 여행 정보에 대한 열람 기능을 제공합니다.</td>
</tr>
<tr> 
  <td> </td>
  <td> 지난 여행 상세 조회</td>
  <td> -일차별 여행 경로, 지도, 리뷰작성기능을 제공합니다.</td>
</tr>

<tr> 
  <td> 찜 목록</td>
  <td> 찜 몰록 조회 </td>
  <td> -즐겨찾기한 여행지 기반 지역별 및 카테고리별 필터링을 제공합니다.</td>
</tr>
<tr> 
  <td> 마이페이지</td>
  <td> 내 정보 수정 </td>
  <td> -닉네임, 프로필 사진, 여행 스타일 변경이 가능합니다.<br>
  - 공지사항 열람, 초대 링크, 알림 설정, 로그아웃 설정이 가능합니다.
  </td>
</tr>
<tr> 
  <td> 알림</td>
  <td> 외부 알림 </td>
  <td> -브라우저 알림(데스크탑), 어플리케이션 알림(모바일)을 제공합니다.<br>
  - 단체 그룹방 초대, 일정 시작, 종료 시 알림 기능을 제공합니다.
  </td>

</tr><tr>
    <td> </td>
  <td> 내부 알림 </td>
  <td> 
  - 단체 그룹방 초대, 일정 시작, 종료 시 알림 기능을 제공합니다.
  </td>
</tr>
</table>


## 프로젝트 구조

```
 📦src
 ┣ 📂assets
 ┃ ┣ 📂airplane
 ┃ ┣ 📂auth
 ┃ ┣ 📂banner
 ┃ ┣ 📂button
 ┃ ┣ 📂category
 ┃ ┣ 📂error
 ┃ ┣ 📂logo
 ┃ ┣ 📂nav
 ┃ ┣ 📂rating
 ┃ ┣ 📂region
 ┃ ┣ 📂styleChip
 ┃ ┣ 📂toggle
 ┃ ┣ 📂trip
 ┃ ┗ 📂weather
 ┣ 📂components
 ┃ ┣ 📂admin
 ┃ ┣ 📂alarm
 ┃ ┣ 📂Card
 ┃ ┣ 📂controller
 ┃ ┣ 📂empty
 ┃ ┣ 📂error
 ┃ ┣ 📂loading
 ┃ ┣ 📂nav
 ┃ ┣ 📂search
 ┃ ┗ 📂slider
 ┣ 📂data
 ┣ 📂features
 ┃ ┣ 📂about
 ┃ ┣ 📂admin
 ┃ ┣ 📂auth
 ┃ ┣ 📂cart
 ┃ ┣ 📂contact
 ┃ ┣ 📂diary
 ┃ ┣ 📂diaryDetail
 ┃ ┣ 📂img
 ┃ ┣ 📂landing
 ┃ ┣ 📂mypage
 ┃ ┣ 📂plan
 ┃ ┣ 📂planDetail
 ┃ ┣ 📂privacy
 ┃ ┣ 📂redirect
 ┃ ┣ 📂register
 ┃ ┗ 📂spot
 ┣ 📂fonts
 ┣ 📂hooks
 ┣ 📂layout
 ┣ 📂store
 ┣ 📂types
 ┣ 📂utils
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

## 기술 스택

<div align="middle">

**| FrontEnd |**

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
<img src="https://img.shields.io/badge/zustand-1F4ECF?style=for-the-badge&logo=zustand&logoColor=white">
<img src="https://img.shields.io/badge/Yjs-30BCED?style=for-the-badge&logo=Yjs&logoColor=white">
<img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white">

<br>

**Language |** HTML5, CSS3, TypeScript, node.js(v20.15.1), JavaScripte(ES6+)

**Library |** React.js(v18.3.1), Zustand(v4.5.4), ReactQuery(v5.51.23), vite(v5.3.4), eslint(v8.57.0), Yjs(v13.6.18), prettier(v3.3.3), Axios(v1.7.4), swiper(v11.1.9), react-router-dom(v6.26.0)

</div>

## 서비스 화면

- 실제 서비스 접근 링크
  - 웹사이트: [트리피어 사이트 링크](https://tripeer.co.kr/)
  - 앱 스토어 링크:
    - iOS 앱: [App Store 링크](https://apps.apple.com/kr/app/%ED%8A%B8%EB%A6%AC%ED%94%BC%EC%96%B4/id6736443613)
    - 안드로이드 앱: Google Play 링크
- 주요 화면 스크린샷 또는 서비스의 주요 UI 소개

## 팀원 소개

<table>
    <tr>
        <td>역할
        <td > 이름
        <td > 역할

  </tr><tr>
    <td rowspan="3"> FrontEnd </td>
    <td>
    부수환</td>
    <td> 컨텐츠 내용9-1 </td>
  </tr><tr>
      <td> 현지혜</td>
    <td> 
        - UI/UX 설계 및 로고제작<br>
        - 페이지 구현(랜딩 페이지, 일정계획 맵, 다이어리 페이지 등)<br>
        - 프로젝트 기획 및 일정 관리
     </td>
  </tr><tr>
      <td> 이해건 </td>
    <td> 
        - 실시간 동기화 데이터 관리<br>
        - 페이지 구현(홈, 회원등록, 플랜스케쥴 페이지 등)<br>
        - 모바일 앱 제작 밑 배포(구글 플레이스토어, 애플 앱스토어)<br>
        - 모바일 FCM 알림 기능<br>
     </td>
  </tr><tr>
      <td rowspan="3">BackEnd</td>
      <td> 양건우 </td>
    <td> 컨텐츠 내용9-1 </td>
  </tr><tr>
      <td> 손동천</td>
    <td> 컨텐츠 내용9-1 </td>
  </tr><tr>
        <td> 김회창 </td>
    <td> 컨텐츠 내용9-1 </td>
  </tr><tr>
  </tr>
</table>
