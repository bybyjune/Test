# CLAUDE.md

> 이 파일은 Claude Code가 자동으로 읽을 프로젝트 컨텍스트 문서입니다.

---

## 프로젝트 정체성

이 프로젝트는 **Onboarding site design system**입니다.

- **목적**: 디자이너가 Claude Code로 바이브코딩할 때 일관된 LINE 디자인으로 사이트를 만들 수 있도록 지원
- **작업 모드**: 순수 HTML/CSS + 최소한의 바닐라 JavaScript
- **핵심 원칙**: DESIGN.md가 Single Source of Truth

---

## ⚠️ 작업 시작 전 필수 확인

**작업 시작 전, 프로젝트 루트의 `DESIGN.md`를 먼저 읽으세요.** 색상, 타이포그래피, 컴포넌트, 레이아웃 등 모든 디자인 토큰과 규칙이 정의되어 있습니다.

---

## 🚨 가장 중요한 규칙: HTML 구조 변경 금지

**컴포넌트의 HTML 구조는 절대 마음대로 바꾸지 마세요!**

이 문서의 "컴포넌트별 주의사항" 섹션에 각 컴포넌트의 **정확한 HTML 구조**가 명시되어 있습니다.

❌ **하지 말아야 할 것:**
- "비슷하게" 구현하기
- "내 방식대로" 구조 변경하기
- 클래스 이름 바꾸기
- div wrapper 추가/제거하기

✅ **해야 할 것:**
- 명시된 HTML 구조를 **정확히 그대로** 복사
- 텍스트/이미지/링크만 변경
- 의심스러우면 test_lds.html 또는 complete_test.html 참조

**이유:** components.css와 components.js는 특정 HTML 구조를 기대합니다. 구조를 바꾸면 스타일과 JavaScript가 작동하지 않습니다.

---

## 절대 어기면 안 되는 5가지 규칙

### 1. 색상은 토큰 이름만 사용

Hex 코드(`#00C73C`), 직접 색상 값 입력 금지.

```css
/* ✅ 토큰 사용 */
.button-primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

/* ❌ Hex 직접 입력 */
.button-primary {
  background-color: #00C73C;
  color: #FFFFFF;
}
```

→ **위반 시**: 색상 일관성 깨짐, 디자인 시스템 업데이트 시 전체 코드 수동 수정 필요.

### 2. 토큰 이름을 그대로 클래스 이름으로 사용

DESIGN.md의 토큰 이름을 변경하지 말고 그대로 클래스로 사용.

```html
<!-- ✅ 올바른 사용 -->
<h1 class="display">Box Button</h1>
<h2 class="h2">Anatomy</h2>
<p class="body">본문 텍스트입니다.</p>

<!-- ❌ 토큰 이름 변경 -->
<h1 class="page-title">Box Button</h1>  <!-- display를 page-title로 변경 -->
<h2 class="section-heading">Anatomy</h2>  <!-- h2를 section-heading으로 변경 -->
```

→ **위반 시**: 디자인 시스템 업데이트 시 자동 반영 불가.

### 3. 폰트는 시스템 기본값 사용

LINE Seed Sans와 SF Pro Text는 이미 DESIGN.md에 정의됨. 별도 import 금지.

```css
/* ✅ 시스템 기본값 사용 (별도 설정 불필요) */
h1 { font-family: var(--font-heading); }

/* ❌ 외부 폰트 import */
@import url('https://fonts.googleapis.com/css2?family=Inter');
```

→ **위반 시**: 브랜드 타이포그래피 일관성 붕괴.

### 4. 간격은 4px 배수로

모든 구조적 간격은 4의 배수(4, 8, 12, 16, 24, 32, 40, 80).

```css
/* ✅ 4px 배수 */
.section { margin-bottom: 80px; }
.card { padding: 24px; }

/* ❌ 임의의 값 */
.section { margin-bottom: 75px; }
.card { padding: 20px; }
```

→ **위반 시**: 시각적 리듬 깨짐.

### 5. 이 시스템 파일만 사용, 외부 라이브러리 금지

기존 tokens.css, typography.css, components.css, components.js만 사용.

```html
<!-- ❌ 새 CSS/JS 라이브러리 추가 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/jquery"></script>

<!-- ✅ 기존 이 시스템 파일만 사용 -->
<link href="tokens.css">
<link href="typography.css">
<link href="components.css">
<script src="components.js"></script>
```

→ **위반 시**: 스타일/동작 충돌, 파일 크기 증가.

---

## 색상 토큰 빠른 참조

자주 쓰는 토큰만 추렸습니다. 전체 목록은 `DESIGN.md` 참조.

| 토큰                    | 값       | 용도                              |
| ----------------------- | -------- | --------------------------------- |
| `--color-primary`       | #00C73C  | LINE Green, 모든 주요 액션        |
| `--color-primary-pressed` | #069540 | 버튼 눌림 상태                    |
| `--color-red`           | #FF334B  | 파괴적 액션 (삭제, 경고)          |
| `--color-ink`           | #000000  | 주요 텍스트 (제목, 본문)          |
| `--color-body-secondary` | #616161 | 보조 텍스트 (설명)                |
| `--color-body-tertiary` | #949494  | 비활성 텍스트 (내비게이션)        |
| `--color-canvas`        | #FFFFFF  | 기본 배경 (순수 흰색)             |
| `--color-canvas-selected` | #EFEFEF | 선택/활성 상태 배경               |
| `--color-border-default` | #E8E8E8 | 표준 테두리 (카드, 버튼)          |

---

## 타이포그래피 토큰 빠른 참조

| 클래스        | 크기 | Weight | 용도                   |
| ------------- | ---- | ------ | ---------------------- |
| `.hero`       | 60px | 700    | 히어로 헤드라인        |
| `.display`    | 48px | 700    | 페이지 메인 타이틀     |
| `.h1`         | 40px | 700    | 주요 섹션 제목         |
| `.h2`         | 32px | 700    | 섹션 제목              |
| `.h3`         | 28px | 700    | 하위 섹션 제목         |
| `.h4`         | 20px | 700    | 카드 제목, 하위 섹션   |
| `.body-l`     | 18px | 400    | 큰 본문 (카드 텍스트)  |
| `.body-m` / `.body` | 16px | 400 | 기본 본문 텍스트  |
| `.body-s` / `.body-sm` | 15px | 400 | 작은 본문, 내비게이션 |
| `.label`      | 14px | 700    | 레이블                 |
| `.caption`    | 13px | 500    | 캡션, 푸터             |

---

## 컴포넌트 우선순위

새로운 UI가 필요할 때 다음 순서로 판단:

1. **DESIGN.md의 components 섹션에 이미 정의되어 있는지 확인**
   - top-navi, left-nav, button-primary, card 등
   - 있으면 그대로 사용

2. **기존 컴포넌트 조합**
   - 여러 컴포넌트를 묶어서 합성 (예: card + button)

3. **최후 수단: 새 컴포넌트 정의**
   - 1~2단계로 해결 안 될 때만
   - 반드시 DESIGN.md 규칙(색상 토큰, 간격, radius 등) 준수
   - 사용자에게 먼저 확인

---

## 자주 발생하는 실수 패턴

| ❌ 실수                                    | ✅ 대신                                        |
| ------------------------------------------ | ---------------------------------------------- |
| `background: #00C73C`                      | `background: var(--color-primary)`             |
| `<h1 class="page-title">`                  | `<h1 class="display">`                         |
| `font-family: 'Inter'`                     | `font-family: var(--font-heading)` (이미 정의됨) |
| `margin: 75px`                             | `margin: 80px` (4의 배수)                      |
| `border-radius: 10px`                      | `border-radius: var(--rounded-md)` (12px)      |
| `<link href="bootstrap.css">`              | 기존 이 시스템 CSS만 사용                            |
| `box-shadow: 0 4px 8px rgba(0,0,0,0.2)`   | 그림자 사용 금지 (이 시스템는 평면 디자인)           |

---

## 컴포넌트별 주의사항

### top-navi
- 높이: 88px 고정
- 배경: `rgba(255, 255, 255, 0.95)` + `backdrop-filter: blur(10px)`
- 패딩: 0 40px (데스크톱/모바일 모두 동일)
- 내비게이션 항목 간 간격: 40px
- top-navi-right 간격: 26px, 순서: **버전 배지 → 언어 → 검색**
- 내비게이션 항목 기본 색상: #B7B7B7

**간격 규칙:**
- home icon → logo: 12px (margin-right)
- logo → menu: 40px (margin-right)
- 홈 아이콘: 24×24px

**모바일 동작 (≤768px):**
- hamburger 메뉴 표시 (24px × 12px, 2개 수평선)
- home icon 숨김 → hamburger가 그 자리 대체
- hamburger → logo: 12px 간격 유지
- logo → menu: 40px 간격 유지

### language-dropdown (언어 변경 버튼)
**중요: 반드시 이 HTML 구조 그대로 사용**
```html
<div class="language-wrapper">
  <img src="../images/lds_earth_regular.png" alt="Language" class="header-icon" data-dropdown="language">
  <div class="language-dropdown">
    <div class="language-item">EN</div>
    <div class="language-item active">KR</div>
    <div class="language-item">JP</div>
  </div>
</div>
```
**필수 속성:**
- 언어 아이콘에 `data-dropdown="language"` 속성 필수
- `language-wrapper`: relative 포지션 컨테이너
- `language-dropdown`: 클릭 시 `.active` 클래스로 표시/숨김
- components.js의 `initLanguageDropdown()` 함수가 자동으로 동작 처리

### search-bar (검색 바)
**중요: 반드시 이 HTML 구조 그대로 사용**
```html
<!-- Top Navigation 바로 다음에 위치 -->
<div class="search-bar">
  <div class="search-bar-left">
    <img src="../images/lds_home_solid.png" alt="Home" class="top-navi-home-icon">
    <div class="top-navi-logo">사이트 이름</div>
  </div>
  <div class="search-bar-right">
    <img src="../images/lds_search_regular.png" alt="Search" class="search-icon">
    <input type="text" class="search-input" placeholder="Search">
    <img src="../images/lds_times_regular.png" alt="Close" class="search-close-icon">
  </div>
</div>

<!-- Top Navigation에서 검색 버튼에 data-action 속성 필수 -->
<img src="../images/lds_search_regular.png" alt="Search" class="header-icon" data-action="search">
```
**구조 설명:**
- `search-bar-left`: 홈 아이콘 (좌측에 로고 유지)
- `search-bar-right`: 검색 아이콘 + 입력 필드(450px) + 닫기 버튼
- 기본 `display: none`, `.visible` 클래스로 표시
- components.js의 `initSearchBar()` 함수가 자동으로 동작 처리
- `data-action="search"` 속성이 있어야 클릭 시 검색 바 열림

### hamburger-menu (모바일 전용)
**중요: left-nav가 있는 페이지에서만 사용**

- 768px 이하에서만 표시
- 크기: 24px × 12px (2개 수평선)
- 클릭 시 X로 변환 (45도 회전)
- home icon이 있으면 그 자리를 대체, 없으면 logo 앞에 표시

**HTML 구조:**
```html
<!-- 케이스 1: home icon 있음 -->
<div class="top-navi-left">
  <button class="hamburger-menu">
    <span></span>
    <span></span>
  </button>
  <a href="#">
    <img src="../images/lds_home_solid.png" alt="Home" class="top-navi-home-icon">
  </a>
  <div class="top-navi-logo">사이트 이름</div>
  <div>
    <a href="#" class="top-navi-item">메뉴1</a>
    <a href="#" class="top-navi-item">메뉴2</a>
  </div>
</div>

<!-- 케이스 2: home icon 없음 -->
<div class="top-navi-left">
  <button class="hamburger-menu">
    <span></span>
    <span></span>
  </button>
  <div class="top-navi-logo">사이트 이름</div>
  <div>
    <a href="#" class="top-navi-item">메뉴1</a>
    <a href="#" class="top-navi-item">메뉴2</a>
  </div>
</div>

<!-- Mobile Overlay (필수) -->
<div class="mobile-overlay"></div>
```

**동작:**
- 데스크톱: hamburger 숨김 (display: none)
- 모바일: hamburger 표시 (display: flex), home icon 숨김 (있는 경우)
- hamburger 클릭: X로 변환 + left-nav 슬라이드 인 + overlay 표시
- components.js가 자동으로 처리

### left-nav
- 너비: 272px 고정 (position: fixed, left: 0)
- 패딩: 33px 34px 40px 38px (좌측이 더 넓음)
- 항목 높이: 42px, padding: 0
- Hover: 배경색 변화 없음, 색상 + font-weight만 변경 (500 → 700)
- 활성 항목: 색상 `--color-ink`, weight 700, 배경 없음
- 서브메뉴: `.nav-parent` (부모 항목) + `.nav-submenu` (하위 항목 20px 들여쓰기)
- 스크롤바: hover 시에만 표시 (8px, 반투명)
- 모바일(≤1024px): 왼쪽 밖에 숨김, `.open` 클래스로 슬라이드 표시

### button-primary
- 높이: 50px
- Border-radius: 50px (pill 모양)
- 패딩: 0 16px 0 24px (좌우 비대칭)
- 아이콘: lucide arrow-up-right (16×16px)
- Hover: 배경/텍스트 색상 반전, 아이콘도 자동 반전 (stroke="currentColor")

**HTML 구조:**
```html
<button class="button-primary">
  Button Text
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 7h10v10"/>
    <path d="M7 17 17 7"/>
  </svg>
</button>
```
**중요:** 
- 아이콘은 항상 16×16px SVG 사용 (PNG 이미지 아님)
- `stroke="currentColor"` 덕분에 hover 시 자동으로 색상 반전됨

### card (카드 큰 크기)
- card-image: width 100%, aspect-ratio 408/272 (비율 유지)
- 그리드 안에서 유동적으로 크기 조절
- 텍스트: 이미지 아래 별도 요소 (컨테이너로 감싸지 않음)
- Hover: 이미지만 4px 위로 올라감, 텍스트는 고정

### card-medium (카드 중간 크기)
**중요: 반드시 이 HTML 구조와 클래스 그대로 사용**
```html
<a href="#" class="card-medium" style="text-decoration: none; display: block; cursor: pointer;">
  <div class="card-medium-image">
    <!-- 이미지 또는 아이콘 -->
  </div>
  <h3 class="card-medium-title">카드 제목</h3>
  <p class="card-medium-text">카드 설명 텍스트</p>
</a>
```
**스타일:**
- card-medium-image: width 100%, aspect-ratio 320/220 (비율 유지)
- 그리드 안에서 유동적으로 크기 조절
- Hover: 이미지만 4px 위로 올라감

**그리드 사용:**
```html
<div class="card-grid-3">  <!-- 3컬럼 그리드 -->
  <!-- card-medium 반복 -->
</div>

<div class="card-grid-4">  <!-- 4컬럼 그리드 -->
  <!-- card-medium 반복 -->
</div>
```
**반응형:**
- 데스크톱: card-grid-3는 3컬럼, card-grid-4는 4컬럼 (30px gap)
- 태블릿 (≤1024px): 모두 2컬럼 (24px gap)
- 모바일 (≤768px): 모두 1컬럼 (24px gap)

### footer
**중요: 반드시 이 HTML 구조 그대로 사용**
```html
<footer class="footer">
  <div class="footer-copyright">© LY Corporation</div>
  <div class="footer-links">
    <a href="#" class="footer-link">Terms of Use</a>
    <a href="#" class="footer-link">FAQ</a>
    <a href="#" class="footer-link">Contact Us</a>
    <a href="#" class="footer-link">Github</a>
  </div>
</footer>
```
**Hover 동작:**
- 푸터 링크 영역에 마우스 올리면: 모든 링크가 #B7B7B7로 흐려짐
- 특정 링크에 마우스 올리면: 해당 링크만 #000000 (검정)으로 진하게 표시
- 언더라인 없음 (text-decoration: none)

---

## 레이아웃 가이드

### 페이지 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>이 시스템 사이트</title>
  <link rel="stylesheet" href="tokens.css">
  <link rel="stylesheet" href="typography.css">
  <link rel="stylesheet" href="components.css">
</head>
<body>
  <!-- Top Navigation (88px) -->
  <header class="top-navi">
    <div class="top-navi-left">
      <!-- 햄버거 메뉴 (모바일 전용) -->
      <button class="hamburger-menu">
        <span></span>
        <span></span>
      </button>
      <!-- 홈 아이콘 + 로고 -->
    </div>
    <!-- 오른쪽: 버전 배지 등 -->
  </header>

  <!-- 모바일 오버레이 -->
  <div class="mobile-overlay"></div>

  <div class="page-container">
    <!-- Left Navigation (260px) -->
    <nav class="left-nav">
      <!-- 카테고리별 내비게이션 -->
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <h1 class="page-title">페이지 제목</h1>
      <!-- 콘텐츠 -->
    </main>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <!-- 저작권 + 링크 -->
  </footer>

  <!-- JavaScript (인터랙션 필요 시) -->
  <script src="components.js"></script>
</body>
</html>
```

**중요**: `components.js`는 햄버거 메뉴, 드롭다운, 탭 등 인터랙션이 필요한 페이지에만 추가하세요.

### 간격 규칙

- **페이지 상단 패딩**: 80px
- **섹션 간격**: 80px
- **main-content 좌우 패딩**: 80px (브라우저 너비와 상관없이 항상 고정)
- **main-content 하단 마진**: 120px
- **카드 내부 패딩**: 24px
- **요소 간 갭**: 16px (기본)

---

## 반응형 중단점

| 이름     | 너비        | 주요 변경                              |
| -------- | ----------- | -------------------------------------- |
| 모바일   | ≤ 768px     | 왼쪽 내비게이션 숨김, 패딩 24px로 감소, 카드 그리드 1컬럼 |
| 태블릿   | 769–1024px  | 카드 그리드 2컬럼           |
| 데스크톱 | ≥ 1025px | 카드 그리드 3~4컬럼 (card-grid-3/card-grid-4), 좌우 패딩 80px 유지       |

---

## DESIGN.md 참조 인덱스

특정 주제는 다음 섹션에서 자세히 다룹니다:

| 주제                          | DESIGN.md 섹션 |
| ----------------------------- | -------------- |
| 색상 전체 목록 / 철학         | ## 색상        |
| 타이포그래피 계층 / 원칙      | ## 타이포그래피 |
| 간격 시스템 / 페이지 구조     | ## 레이아웃    |
| Border radius / 컴포넌트 형태 | ## 형태        |
| 컴포넌트 상세 스펙            | ## 컴포넌트    |
| 해야 할 것 / 하지 말아야 할 것 | ## Do's and Don'ts |
| 반응형 동작                   | ## 반응형 동작 |

---

## 작업 시작 권장 흐름

사용자가 새로운 페이지/컴포넌트를 요청하면:

1. **`DESIGN.md` 읽기** (최우선) → 본 CLAUDE.md는 요약, 디테일은 DESIGN.md에 있음
2. **사용자 요구사항 확인** → 페이지 구성, 컴포넌트 목록, 인터랙션 범위 구체화
3. **참조 자료 확인**:
   - DESIGN.md의 components 섹션에서 사용할 컴포넌트 찾기
   - md_preview.html 프리뷰 참고
4. **구현** → 색상 토큰만, 토큰 이름 그대로 클래스로, 4px 배수 간격
5. **검증** → 모바일/태블릿/데스크톱 반응형 확인

---

## 의심스러울 때

- 5가지 규칙이나 `DESIGN.md` 규칙을 어겨야 할 상황이라면 **사용자에게 먼저 확인**하세요. 임의로 결정하지 마세요.
- `DESIGN.md`에 답이 없는 경우(예: 새로운 토큰이 필요한 경우)는 **사용자에게 문의**하세요.

---

## 참고: 폴더 구조

```
Onboarding_DesignSystem/
├── CLAUDE.md             ← 이 파일 (AI 작업 지침)
├── DESIGN.md             ← 디자인 토큰 명세 (반드시 참조)
├── README.md             ← 디자이너용 시작 가이드
├── tokens.css            ← CSS 변수 (색상, 간격 등)
├── typography.css        ← 타이포그래피 클래스
├── components.css        ← 컴포넌트 스타일
├── components.js         ← 인터랙션 로직 (햄버거 메뉴 등)
├── md_preview.html       ← DESIGN.md 시각적 프리뷰
└── images/               ← 아이콘, 이미지 파일
    ├── lds_home_solid.png
    ├── lds_earth_regular.png
    └── ...
```
