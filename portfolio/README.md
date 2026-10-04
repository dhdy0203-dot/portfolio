# GitHub Portfolio Starter

사용자가 참고한 `congchu.github.io/portfolio-collection/resume-2-master/`의
레이아웃 감성을 바탕으로 새로 정리한 **정적 GitHub Pages용 포트폴리오 스타터**입니다.

## 가장 먼저 수정할 파일

`site-data.js`

이 파일에서 다음 내용을 바꾸면 됩니다.

- 이름 / 직무
- 자기소개
- 기술 스택
- 학력
- 경력/활동
- 프로젝트
- 이메일 / GitHub 링크
- 이력서 다운로드 링크

이미지를 바꾸고 싶다면 `assets/` 안의 SVG 파일을 본인 사진/프로젝트 이미지로
교체한 뒤 `site-data.js`의 이미지 경로만 수정하세요.

## GitHub Pages 배포

1. GitHub에서 새 Public repository를 만듭니다. 예: `portfolio`
2. 이 폴더의 파일을 repository 최상단에 업로드합니다.
3. Repository → Settings → Pages
4. `Deploy from a branch`
5. Branch: `main`, Folder: `/ (root)`
6. 저장 후 생성되는 Pages 주소를 확인합니다.

계정명이 `dhdy0203-dot`이고 repository 이름이 `portfolio`라면 보통:
`https://dhdy0203-dot.github.io/portfolio/`

## 파일 구조

- `index.html` : 페이지 구조
- `styles.css` : 디자인
- `site-data.js` : **개인정보/포트폴리오 내용**
- `app.js` : 화면 렌더링과 필터/메뉴 동작
- `assets/` : 임시 이미지
- `.nojekyll` : GitHub Pages가 파일을 그대로 배포하도록 설정

## 참고 템플릿 / 출처

참고 사이트:
- https://congchu.github.io/portfolio-collection/resume-2-master/
- 원본 템플릿 저자 표기: HTML Codex

HTML Codex의 현재 템플릿 페이지에는 Resume Website Template이 무료 템플릿으로
소개되어 있으며 라이선스/출처 조건은 배포 전에 원 출처에서 다시 확인하는 것을 권장합니다.

이 스타터의 HTML/CSS/JS는 참고 화면을 바탕으로 새로 작성했습니다.
