# 프롬프트 라이브러리

> Claude Code로 바이브코딩할 때 자주 사용하는 프롬프트 모음

이 문서는 디자이너가 Claude Code를 사용해 Onboarding site design system 기반 페이지를 만들 때 참고할 수 있는 프롬프트 템플릿 모음입니다.

## 📋 목차

- [기본 템플릿](#기본-템플릿)
- [페이지 유형별](#페이지-유형별)
- [컴포넌트별](#컴포넌트별)
- [수정 요청](#수정-요청)
- [디버깅](#디버깅)

---

## 기본 템플릿

### 새 페이지 만들기 (기본)

```
DESIGN.md를 참고해서 Onboarding site design system으로 [페이지 이름] 페이지를 만들어줘.

구성:
- Top navigation (홈 아이콘 + 로고 + 버전 배지)
- [원하는 섹션들]
- Footer

규칙:
- 색상은 토큰만 사용 (var(--color-primary) 등)
- 클래스 이름은 DESIGN.md 토큰 이름 그대로 (.display, .h2, .body 등)
- 간격은 4px 배수만 (80px, 24px, 16px 등)
```

### 기존 페이지 수정하기

```
[파일명].html 파일을 읽고 DESIGN.md 규칙에 맞게 수정해줘.

수정 사항:
- [구체적인 수정 내용]

주의:
- 색상 토큰 유지
- 클래스 이름 변경 금지
- 4px 배수 간격 유지
```

---

## 페이지 유형별

### 랜딩 페이지

```
DESIGN.md를 참고해서 Onboarding site design system으로 랜딩 페이지를 만들어줘.

구성:
1. Top navigation (sticky)
2. Hero 섹션
   - .hero 클래스 사용한 메인 헤드라인
   - .body 클래스 사용한 부제
   - .button-primary 버튼
3. Feature 섹션 (3컬럼 카드 그리드)
   - .card-medium 컴포넌트 사용
   - 카드 간격 30px
4. Footer

디자인:
- 배경: var(--color-canvas)
- 주요 액션 색상: var(--color-primary)
- 섹션 간격: 80px
```

### 문서 페이지 (Documentation)

```
DESIGN.md를 참고해서 디자인 시스템 문서 페이지를 만들어줘.

구성:
1. Top navigation (88px, sticky)
2. 3단 레이아웃:
   - Left navigation (260px, sticky)
     - 카테고리: Foundation, Components, Guidelines
     - .left-nav-item 사용
   - Main content
     - .page-title: "Box Button"
     - .section-title: "Anatomy", "States" 등
     - 본문은 .body 클래스
   - Right navigation (200px, sticky, 옵션)
3. Footer

스타일:
- 왼쪽 내비게이션 배경: var(--color-canvas-tertiary)
- 활성 항목: var(--color-canvas-selected) + font-weight 700
- 페이지 상단 패딩: 100px
```

### 대시보드 페이지

```
DESIGN.md를 참고해서 대시보드 페이지를 만들어줘.

구성:
1. Top navigation
2. 메인 콘텐츠:
   - .page-title: "Dashboard"
   - KPI 카드 4개 (2x2 그리드)
     - 카드 배경: var(--color-canvas)
     - 테두리: 1px solid var(--color-border-default)
     - 내부 패딩: 24px
     - Border radius: 12px (var(--rounded-md))
   - 차트 섹션 (옵션)

레이아웃:
- 카드 간격: 24px
- 섹션 간격: 80px
- 반응형: 모바일에서 1컬럼 스택
```

### 폼 페이지

```
DESIGN.md를 참고해서 입력 폼 페이지를 만들어줘.

구성:
1. Top navigation
2. 메인 콘텐츠:
   - .page-title: "회원가입"
   - 폼 섹션:
     - 입력 필드 (이름, 이메일, 비밀번호)
     - .label 클래스 사용
     - 입력 필드 스타일:
       * border: 1px solid var(--color-border-default)
       * border-radius: var(--rounded-sm)
       * padding: 12px 16px
       * font: var(--font-body)
     - .button-primary 제출 버튼
3. Footer

주의:
- placeholder 색상: var(--color-body-placeholder)
- focus 시 테두리: var(--color-primary)
```

---

## 컴포넌트별

### Top Navigation 추가

```
현재 페이지에 DESIGN.md의 top-navi 컴포넌트를 추가해줘.

구성:
- 왼쪽: 홈 아이콘 (24x24px) + 로고 "Messenger" + 내비게이션 항목들
- 오른쪽: 버전 배지 + 언어 선택 아이콘 + 검색 아이콘
- 높이: 88px
- 배경: rgba(255, 255, 255, 0.95) + backdrop-filter: blur(10px)
- Position: sticky, top: 0
- z-index: 100

내비게이션 항목:
- "How to Use", "Foundation", "Components", "Guidelines"
- 기본 색상: var(--color-body-tertiary)
- 활성 색상: var(--color-ink)
- 간격: 40px
```

### Card Grid 추가

```
현재 페이지에 3컬럼 카드 그리드를 추가해줘.

카드 스타일 (DESIGN.md card-medium 사용):
- 이미지: 320x220px, border-radius: 0
- 제목: .card-medium-title (20px, weight 800)
- 설명: .card-medium-text (16px, weight 400)
- 이미지와 텍스트 간격: 16px

그리드:
- 3컬럼 (desktop)
- 2컬럼 (tablet, 769-1024px)
- 1컬럼 (mobile, ≤768px)
- 카드 간격: 30px

호버 효과:
- 이미지만 4px 위로 올라감
- 섀도우: 0 6px 12px rgba(0,0,0,0.06)
- 전환: 0.2s ease
```

### Left Navigation 추가

```
현재 페이지에 DESIGN.md의 left-nav를 추가해줘.

구성:
- 너비: 260px (고정)
- 배경: var(--color-canvas)
- 오른쪽 테두리: 1px solid var(--color-border-light)
- 패딩: 33px 34px 40px 38px (좌측이 더 넓음)
- Position: sticky

내용:
- 카테고리 1: "Foundation"
  * Color
  * Typography
  * Layout
- 카테고리 2: "Components"
  * Button
  * Card
  * Tab

스타일:
- 카테고리 제목: .left-nav-category-title
- 항목: .left-nav-item
- 활성 항목: .left-nav-item.active
```

### Button 컴포넌트 추가

```
현재 페이지에 DESIGN.md의 button-primary를 추가해줘.

스타일:
- 배경: var(--color-canvas)
- 텍스트: var(--color-ink)
- 테두리: 1px solid var(--color-border-default)
- Border-radius: 50px (pill 모양)
- 패딩: 0 16px 0 24px (좌우 비대칭)
- 높이: 50px
- 폰트: 15px, weight 500

호버:
- 배경: var(--color-ink)
- 텍스트: var(--color-canvas)
- 테두리: 1px solid var(--color-ink)

텍스트: "시작하기"
아이콘: 오른쪽에 화살표 (옵션)
```

### Tab 컴포넌트 추가

```
현재 페이지에 DESIGN.md의 tab 컴포넌트를 추가해줘.

탭 목록:
- Overview
- Anatomy
- States

스타일:
- 높이: 56px
- 최소 너비: 120px
- 패딩: 0 30px
- Border-radius: 상단만 8px
- 선택 안 됨: 배경 white, 텍스트 var(--color-body-tertiary)
- 선택됨: 배경 var(--color-canvas-selected), 텍스트 var(--color-ink-alt)

탭 콘텐츠:
- 배경: var(--color-canvas-selected) (선택된 탭과 동일)
- 패딩: 24px
- 테두리: 1px solid var(--color-border-default)
```

---

## 수정 요청

### 색상 수정 (토큰으로)

```
[파일명].html에서 Hex 코드를 모두 토큰으로 변경해줘.

변경 규칙:
- #00C73C → var(--color-primary)
- #000000 → var(--color-ink)
- #616161 → var(--color-body-secondary)
- #FFFFFF → var(--color-canvas)
- #EFEFEF → var(--color-canvas-selected)
- #E8E8E8 → var(--color-border-default)

DESIGN.md의 색상 토큰 목록을 참고해서 정확히 매칭해줘.
```

### 간격 수정 (4px 배수로)

```
[파일명].html에서 모든 간격을 4px 배수로 정리해줘.

규칙:
- 75px → 80px (var(--spacing-80))
- 20px → 24px (var(--spacing-24))
- 15px → 16px (var(--spacing-16))
- 10px → 12px (var(--spacing-12))

DESIGN.md의 spacing 토큰 사용.
```

### 타이포그래피 수정

```
[파일명].html에서 모든 텍스트 스타일을 DESIGN.md 클래스로 변경해줘.

변경 규칙:
- 페이지 메인 제목 → <h1 class="display">
- 섹션 제목 → <h2 class="h2">
- 하위 섹션 제목 → <h3 class="h3">
- 본문 텍스트 → <p class="body">
- 작은 텍스트 → <p class="caption">

인라인 스타일이나 커스텀 클래스 제거.
```

### 반응형 추가

```
[파일명].html에 반응형 스타일을 추가해줘.

중단점:
- 모바일 (≤768px):
  * 왼쪽 내비게이션 숨김
  * 메인 패딩: 24px
  * 타이틀 크기: 32px
  * 카드 그리드: 1컬럼

- 태블릿 (769-1024px):
  * 왼쪽 내비게이션: 200px
  * 메인 패딩: 40px
  * 카드 그리드: 2컬럼

- 데스크톱 (1025px+):
  * 전체 레이아웃 유지
```

---

## 디버깅

### 스타일 안 먹힐 때

```
[파일명].html을 읽고 다음을 확인해줘:

1. CSS 파일 import 순서가 올바른지
   - tokens.css → typography.css → components.css
2. CSS 변수가 올바르게 사용되는지
   - var(--color-primary) 형식
3. 클래스 이름이 DESIGN.md와 일치하는지
   - .display, .h2, .body 등
4. 오타나 누락된 부분이 있는지

문제 발견 시 수정해줘.
```

### 레이아웃 깨질 때

```
[파일명].html의 레이아웃을 확인하고 수정해줘.

확인 사항:
1. 컨테이너 max-width 설정 (1440px)
2. Flex/Grid 설정이 올바른지
3. 패딩/마진이 4px 배수인지
4. Position 속성 (sticky, relative 등) 확인
5. Z-index 충돌 확인

DESIGN.md의 레이아웃 규칙 준수.
```

### 색상 문제

```
[파일명].html에서 색상 관련 문제를 찾아서 수정해줘.

확인:
1. Hex 코드 직접 사용 → 토큰으로 변경
2. 잘못된 토큰 사용 → DESIGN.md 확인 후 수정
3. 대비(contrast) 문제 → ink + canvas 조합 사용
4. 호버/활성 상태 색상 누락 → 추가

DESIGN.md 색상 팔레트만 사용.
```

---

## 💡 프롬프트 작성 팁

### 구체적으로 작성하기

❌ **나쁜 예:**
```
페이지 만들어줘
```

✅ **좋은 예:**
```
DESIGN.md를 참고해서 Onboarding site design system으로 
제품 소개 페이지를 만들어줘.

구성:
- Top navigation (sticky)
- Hero 섹션 (.hero 제목 + .body 설명)
- Feature 카드 3개 (card-medium 사용)
- Footer

색상은 토큰만, 간격은 4px 배수.
```

### 파일 참조하기

```
DESIGN.md를 먼저 읽고, test_lds.html의 구조를 참고해서
비슷한 스타일로 [페이지 설명] 페이지를 만들어줘.
```

### 단계별 요청

복잡한 페이지는 단계를 나눠서:

```
1단계: Top navigation만 먼저 만들어줘.
완성되면 2단계: 메인 콘텐츠를 추가할게.
```

---

## 📚 추가 자료

- **DESIGN.md**: 전체 토큰 명세
- **CLAUDE.md**: AI 작업 지침
- **test_lds.html**: 구현 예시
- **md_preview.html**: 디자인 시스템 프리뷰

---

**LDS Prompt Library** | 버전 1.0.0 | 2026
