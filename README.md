# 📚 Study Time Tracker

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=Tailwind-CSS&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
</div>

<br>

<div align="center">
  <h3>🎯 공부 시간을 효율적으로 관리하고 추적하는 웹 애플리케이션</h3>
  <a href="https://study-time-tracker-three.vercel.app">👉 Live Demo</a>
</div>

<br>

## ✨ 주요 기능

### 📌 과목 관리
- 과목 추가/삭제 기능
- 직관적인 과목 선택 인터페이스
- 선택된 과목 하이라이트 표시

### ⏱️ 타이머 기능
- 시작/일시정지/초기화 기능
- 실시간 시간 표시
- 공부 시간 저장

### 🎯 목표 설정
- 시간/분 단위 목표 설정
- 목표 달성 시 알람 기능
- 브라우저 알림 지원

### 📊 공부 현황
- 일일 공부 시간 통계
- 과목별 시간 표시
- 데이터 내보내기 기능 (JSON)
- 로컬 스토리지 사용량 표시

## 🛠 기술 스택

### Frontend
- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **Lucide React** - 아이콘

### 상태 관리 & 저장
- **React Hooks** - useState, useEffect, useRef
- **Custom Hooks** - useLocalStorage, useTimer
- **Local Storage** - 데이터 영구 저장

### 배포
- **Vercel** - 호스팅 플랫폼

## 🚀 시작하기

### 필수 요구사항
- Node.js 16.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 레포지토리 클론
git clone https://github.com/sseulnim/study-time-tracker.git

# 프로젝트 디렉토리로 이동
cd study-time-tracker

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

빌드
bash# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
📁 프로젝트 구조
study-time-tracker/
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── SubjectManager/  # 과목 관리
│   │   ├── Timer/          # 타이머
│   │   ├── GoalSetting/    # 목표 설정
│   │   └── StudyStatus/     # 공부 현황
│   ├── hooks/              # 커스텀 훅
│   │   ├── useLocalStorage.js
│   │   └── useTimer.js
│   ├── utils/              # 유틸리티 함수
│   │   ├── timeUtils.js
│   │   └── alarmUtils.js
│   ├── App.jsx             # 메인 컴포넌트
│   ├── main.jsx            # 엔트리 포인트
│   └── index.css           # 글로벌 스타일
├── public/                 # 정적 파일
├── index.html              # HTML 템플릿
├── package.json            # 프로젝트 설정
├── vite.config.js          # Vite 설정
├── tailwind.config.js      # Tailwind 설정
└── postcss.config.js       # PostCSS 설정
💡 주요 구현 사항
커스텀 훅

useLocalStorage: 로컬 스토리지와 React 상태 동기화
useTimer: 타이머 로직 캡슐화

알람 기능

Web Audio API를 사용한 사운드 알람
Notification API를 사용한 브라우저 알림

반응형 디자인

모바일, 태블릿, 데스크톱 대응
Tailwind CSS의 반응형 유틸리티 활용

🔍 트러블슈팅
Tailwind CSS 스타일 미적용 문제

원인: @tailwindcss/postcss 잘못된 패키지 설치
해결: tailwindcss 정식 패키지로 재설치

localStorage 보안 경고

원인: hasOwnProperty 직접 호출
해결: Object.prototype.hasOwnProperty.call() 사용

🌟 향후 개선 사항

 주간/월간 통계 기능
 다크 모드 지원
 PWA 지원
 데이터 시각화 (차트)
 백엔드 연동 (사용자 인증)

📄 라이선스
MIT License
👨‍💻 개발자
sseulnim

GitHub: @sseulnim


<div align="center">
  <sub>Built with ❤️ using React and Tailwind CSS</sub>
</div>
```
