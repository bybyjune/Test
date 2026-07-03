---
version: 1.0.0
name: Onboarding Site Design System MD
description: Onboarding site design system 안내 site의 룩앤필을 MD로 제공하여 정보를 전달하는 웹페이지를 바이브코딩으로 제작 시, 작성 시간을 단축시키고 스타일을 일원화한다.

colors:
  primary: "#00C73C"
  primary-pressed: "#069540"
  red: "#FF334B"
  link: "#4D73FF"
  ink: "#000000"
  ink-alt: "#111111"
  body: "#000000"
  body-secondary: "#616161"
  body-tertiary: "#949494"
  body-disabled: "#CCCCCC"
  body-placeholder: "#999999"
  canvas: "#FFFFFF"
  canvas-secondary: "#F0F0F0"
  canvas-tertiary: "#FBFBFB"
  canvas-selected: "#EFEFEF"
  border-light: "#EFEFEF"
  border-default: "#E8E8E8"
  border-medium: "#B7B7B7"
  inactive-bg: "#DDDDDD"
  inactive-text: "#949494"
  on-primary: "#FFFFFF"

typography:
  hero: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  display: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  h1: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  h2: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  h3: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0px
  h4: # SF Pro Text
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0px
  h5: # SF Pro Text
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0px
  h6: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  body-l: # SF Pro Text (Large)
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-m: # SF Pro Text (Medium)
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-s: # SF Pro Text (Small)
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body: # 호환성 유지 (body-m과 동일)
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-sm: # 호환성 유지 (body-s와 동일)
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  label: # SF Pro Text
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0px
  caption: # SF Pro Text
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
  brand-logo: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0px

rounded:
  none: 0px
  sm: 8px
  md: 12px
  pill: 20px

spacing:
  0: 0px
  4: 4px
  8: 8px
  12: 12px
  16: 16px
  20: 20px
  24: 24px
  28: 28px
  32: 32px
  40: 40px
  48: 48px
  60: 60px
  80: 80px
  100: 100px
  120: 120px

global:
  body:
    overscrollBehavior: none
    overflowX: hidden

components:
  top-navi:
    backgroundColor: "rgba(255, 255, 255, 0.95)"
    backdropFilter: "blur(10px)"
    textColor: "{colors.ink}"
    borderBottom: "1px solid {colors.border-light}"
    height: 88px
    padding: 0 40px
  top-navi-left:
    display: flex
    alignItems: center
    gap: 15px
  top-navi-nav:
    display: flex
    gap: 40px
    marginLeft: 25px
  top-navi-right:
    display: flex
    gap: 26px
    alignItems: center
  top-navi-home-icon:
    width: 24px
    height: 24px
  top-navi-logo:
    typography: "{typography.brand-logo}"
    textColor: "{colors.ink}"
  top-navi-item:
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
    textColor: "#B7B7B7"
    textColorHover: "{colors.ink}"
    textColorActive: "{colors.ink}"
  version-badge:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
    border: "1px solid {colors.border-default}"
    rounded: "{rounded.pill}"
    padding: 6px 12px
    height: 28px
  header-icon:
    width: 24px
    height: 24px
    fill: "{colors.ink}"
    cursor: pointer
  language-wrapper:
    position: relative
    display: flex
    alignItems: center
  language-dropdown:
    position: absolute
    top: calc(100% + 14px)
    left: 50%
    transform: translateX(-50%)
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.ink}"
    padding: 10px 0
    width: 80px
    zIndex: 1000
  language-item:
    height: 36px
    width: 80px
    display: flex
    alignItems: center
    justifyContent: center
    typography: "{typography.body}"
    fontWeight: 500
    textColor: "{colors.body-tertiary}"
    textColorActive: "{colors.ink}"
    textColorHover: "{colors.ink}"
    cursor: pointer
  search-bar:
    backgroundColor: "rgba(255, 255, 255, 0.95)"
    backdropFilter: "blur(10px)"
    borderBottom: "1px solid {colors.border-light}"
    height: 88px
    padding: 0 40px
    display: flex
    justifyContent: space-between
    alignItems: center
  search-bar-left:
    display: flex
    alignItems: center
    gap: 15px
    content: "홈 아이콘 + 로고 텍스트"
  search-bar-right:
    display: flex
    alignItems: center
    gap: 20px
  search-icon:
    width: 24px
    height: 24px
  search-input:
    typography: "{typography.body}"
    textColor: "{colors.ink}"
    textColorPlaceholder: "#949494"
    placeholder: "Search"
    width: 450px
    height: 24px
  search-close-icon:
    width: 24px
    height: 24px
  left-nav:
    backgroundColor: "{colors.canvas}"
    borderRight: "1px solid {colors.border-light}"
    width: 272px
    padding: 33px 34px 40px 38px
  left-nav-category-title:
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
    textColor: "{colors.ink}"
    padding: 12px 0
  left-nav-item:
    height: 42px
    padding: 0
    textColor: "{colors.body-tertiary}"
    typography: "{typography.body-sm}"
    fontWeight: 500
    textColorHover: "{colors.ink}"
    fontWeightHover: 700
  left-nav-item-active:
    textColor: "{colors.ink}"
    fontWeight: 700
  nav-submenu:
    maxHeight: 0
    overflow: hidden
    transition: "max-height 0.3s ease"
  nav-submenu-open:
    maxHeight: 500px
  nav-parent-interaction:
    behavior: "클릭 시 서브메뉴 펼침/접힘 (accordion)"
    cursor: pointer
  left-nav-item-interaction:
    behavior: "클릭 시 active 상태 이동"
  right-nav:
    width: 200px
    padding: 60px 24px 80px 0
  right-nav-item:
    typography: "{typography.label}"
    textColor: "{colors.body-disabled}"
    textColorActive: "{colors.ink}"
  button-primary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    fontSize: 15px
    fontWeight: 500
    rounded: 50px
    border: "1px solid {colors.border-default}"
    padding: 0 16px 0 24px
    height: 50px
    gap: 8px
    icon: "lucide arrow-up-right (16×16px)"
    iconSVG: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>'
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    border: "1px solid {colors.ink}"
    iconFilter: "brightness(0) invert(1)"
  radio:
    size: 20px
    border: "1px solid {colors.border-medium}"
    rounded: 50%
  radio-selected:
    border: "1px solid {colors.primary}"
    innerSize: 10px
    innerColor: "{colors.primary}"
  tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-tertiary}"
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
    border: "1px solid {colors.border-default}"
    borderBottom: none
    rounded: 8px 8px 0 0
    height: 56px
    minWidth: 120px
    padding: 0 30px
  tab-selected:
    backgroundColor: "{colors.canvas-selected}"
    textColor: "{colors.ink-alt}"
    fontWeight: 600
  card-image:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.border-default}"
    rounded: "{rounded.none}"
    width: 408px
    height: 272px
    marginBottom: 22px
  card-title:
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0px
    textColor: "{colors.ink}"
    marginBottom: 16px
  card-text:
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    textColor: "{colors.body-secondary}"
  page-title:
    typography: "{typography.display}"
    textColor: "{colors.ink}"
    padding: 100px 0 20px 0
  section-title:
    typography: "{typography.h2}"
    textColor: "{colors.ink}"
    padding: 0 0 24px 0
  main-content:
    flex: 1
    padding: 0 80px
    marginLeft: 272px
    marginBottom: 120px
    note: "max-width 없음 - 브라우저 너비에 상관없이 좌우 패딩 80px 유지"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderTop: "1px solid {colors.border-light}"
    padding: 40px 40px
  footer-copyright:
    typography: "{typography.caption}"
    textColor: "{colors.ink}"
  footer-link:
    typography: "{typography.caption}"
    textColor: "{colors.ink}"
    textDecoration: none
    transition: "color 0.2s"
    hover:
      allLinks: "color #B7B7B7 (나머지 링크들)"
      currentLink: "color {colors.ink} (호버된 링크만)"
---

## 개요

Onboarding site design system Site는 (https://designsystem.linecorp.com/) **LINE Green** (#00C73C)을 단일 주요 액션 색상으로 사용하는 문서 중심 인터페이스입니다.
여유로운 여백, 고정된 왼쪽 내비게이션(272px), 깔끔한 헤더(88px), 모듈식 콘텐츠 섹션을 통해 명확성과 사용성을 우선합니다.
타이포그래피는 모든 제목에 **LINE Seed Sans**(Bold, 700 weight)를 사용하고 본문에는 **SF Pro Text**(400 weight)를 사용하여 자신감 있으면서도 친근한 읽기 경험을 제공합니다.

이 시스템은 디자인 시스템 문서 사이트(컴포넌트 페이지, 파운데이션 페이지, 가이드라인)를 위해 만들어졌으며, 콘텐츠와 예제가 숨쉴 수 있도록 하는 것이 목표입니다.
모든 페이지는 일관된 3단 레이아웃을 따릅니다: 구조를 위한 왼쪽 내비게이션, 문서를 위한 메인 콘텐츠, 앵커 링크를 위한 선택적 오른쪽 내비게이션.
상호작용은 최소화되고 의도적입니다: 모든 주요 액션, 활성 상태, 인터랙티브 요소에 LINE Green을 사용하고, 호버 상태와 깔끔한 테두리로 분리합니다.

**주요 특징:**

- 단일 강조색: 모든 주요 액션, 활성 상태, 인터랙티브 요소에 LINE Green (#00C73C) 사용
- 고정된 왼쪽 내비게이션(272px): 카테고리 그룹화 및 선택 상태 강조
- 깔끔한 헤더(88px): 로고, 가로 내비게이션, 버전 배지
- 여유로운 간격: 페이지 패딩 80px, 섹션 간격 40px, 카드 패딩 24px
- 타이포그래피 계층: 제목은 LINE Seed Sans(bold, 700), 본문은 SF Pro Text(regular, 400)
- 최소한의 테두리: 카드와 구분선에 1px #E8E8E8, 미묘한 분리에 #EFEFEF
- Radius 스케일: 버튼/작은 요소 8px, 카드 12px, 배지 20px
- 화이트 중심 색상 시스템: #FFFFFF 기본, 내비게이션 #FBFBFB, 선택 상태 #EFEFEF

## 색상

> **출처:** Onboarding site design system 문서 사이트와 Pencil 디자인 파일에서 분석. 색상 시스템은 컴포넌트 페이지, 파운데이션 페이지, 가이드라인 전반에 걸쳐 일관됩니다.

### 브랜드 & 강조

- **LINE Green** (`{colors.primary}` — #00C73C): LINE 시그니처 브랜드 색상. 모든 주요 버튼, 활성 상태, 선택된 라디오 버튼, 인터랙티브 요소에 사용. 전체 시스템에서 단일 강조색입니다.
- **Pressed State** (`{colors.primary-pressed}` — #069540): LINE Green의 어두운 변형, 버튼 눌림/활성 상태에 사용. 색조 변경 없이 촉각 피드백을 제공합니다.
- **LINE Red** (`{colors.red}` — #FF334B): 파괴적 액션과 오류 상태. 삭제, 제거, 중요 경고 버튼에 드물게 사용.
- **Link** (`{colors.link}` — #4D73FF): 본문 내 하이퍼링크와 텍스트 링크. 주요 액션 색상과 구별하여 내비게이션과 콘텐츠 내 참조를 구분합니다.

### 텍스트

- **Primary Ink** (`{colors.ink}` — #000000): 제목, 본문 단락, 내비게이션 레이블의 고강조 텍스트. 최대 명확성을 위한 순수 검정.
- **Ink Alt** (`{colors.ink-alt}` — #111111): 선택된 탭 텍스트와 강조된 UI 요소에 사용되는 검정에 가까운 색상. 순수 검정이 너무 거칠게 느껴질 때 사용.
- **Body** (`{colors.body}` — #000000): 기본 본문 텍스트 색상, primary ink와 동일.
- **Body Secondary** (`{colors.body-secondary}` — #616161): 설명, 보조 콘텐츠, 부제의 중간 강조 텍스트.
- **Body Tertiary** (`{colors.body-tertiary}` — #949494): 비활성 내비게이션 항목, 힌트, 3차 콘텐츠의 낮은 강조 텍스트.
- **Body Disabled** (`{colors.body-disabled}` — #CCCCCC): 비활성 버튼과 폼 요소의 비활성 상태 텍스트.
- **Body Placeholder** (`{colors.body-placeholder}` — #999999): 입력 필드와 빈 상태의 플레이스홀더 텍스트.

### 표면

- **Pure White** (`{colors.canvas}` — #FFFFFF): 모든 페이지, 카드, 버튼, 콘텐츠 영역의 주요 배경.
- **Canvas Secondary** (`{colors.canvas-secondary}` — #F0F0F0): 데모 컨테이너와 대체 표면의 보조 배경.
- **Canvas Tertiary** (`{colors.canvas-tertiary}` — #FBFBFB): 왼쪽 내비게이션 배경과 미묘한 표면 차별화에 사용.
- **Selected State** (`{colors.canvas-selected}` — #EFEFEF): 활성 내비게이션 항목과 선택된 탭의 배경.

### 테두리

- **Border Light** (`{colors.border-light}` — #EFEFEF): 헤더 하단 테두리와 왼쪽 내비게이션 오른쪽 테두리의 미묘한 구분선.
- **Border Default** (`{colors.border-default}` — #E8E8E8): 카드, 버전 배지, 컴포넌트 컨테이너의 표준 테두리.
- **Border Medium** (`{colors.border-medium}` — #B7B7B7): 선택되지 않은 라디오 버튼과 폼 입력의 강조된 테두리.

### 인터랙티브

- **Inactive Background** (`{colors.inactive-bg}` — #DDDDDD): 비활성/비활성화 버튼의 배경.
- **Inactive Text** (`{colors.inactive-text}` — #949494): 비활성/비활성화 버튼의 텍스트 색상.
- **On Primary** (`{colors.on-primary}` — #FFFFFF): LINE Green 배경(버튼, 활성 상태)의 텍스트 색상.

### 색상 철학

Onboarding site design system은 **단일 강조 접근 방식**을 사용합니다: LINE Green이 모든 주요 액션을 담당합니다. 보조 브랜드 색상은 없습니다.
강조는 색상 다양성이 아닌 타이포그래피 weight(제목 700, 레이블 700, 본문 400)와 표면 변화(white → #FBFBFB → #EFEFEF)에서 나옵니다.
테두리는 속삭이듯 부드럽고(#E8E8E8, #EFEFEF) 콘텐츠와 경쟁하지 않습니다.

## 타이포그래피

### 폰트 패밀리

- **제목**: `LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif` — LINE의 독점 브랜드 서체. 모든 제목, 내비게이션 카테고리 제목, 로고에 사용. Bold(700)로 설정.
- **본문**: `SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif` — UI와 본문 텍스트에 최적화된 Apple 시스템 폰트. 단락, 설명, 내비게이션 항목, 버튼, 레이블에 사용. 본문은 weight 400, 강조는 600–700.

### 계층

| 토큰                      | 크기 | Weight | Line Height | Letter Spacing | 용도                                         |
| ------------------------- | ---- | ------ | ----------- | -------------- | -------------------------------------------- |
| `{typography.hero}`       | 60px | 700    | 1.2         | 0              | 랜딩 페이지의 히어로 헤드라인                |
| `{typography.display}`    | 48px | 700    | 1.2         | 0              | 페이지 메인 타이틀 (Box Button, Radio 등)    |
| `{typography.h1}`         | 40px | 700    | 1.2         | 0              | 주요 섹션 제목                               |
| `{typography.h2}`         | 32px | 700    | 1.2         | 0              | 섹션 제목 (Anatomy, States, Types)           |
| `{typography.h3}`         | 28px | 700    | 1.3         | 0              | 하위 섹션 제목                               |
| `{typography.h4}`         | 20px | 700    | 1.3         | 0              | 카드 제목, 하위 섹션 레이블                  |
| `{typography.h5}`         | 18px | 700    | 1.3         | 0              | 설명 제목, 강조된 레이블                     |
| `{typography.h6}`         | 17px | 700    | 1.2         | 0              | 내비게이션 카테고리 제목, 상단 내비게이션    |
| `{typography.body}`       | 16px | 400    | 1.6         | 0              | 기본 본문 텍스트, 버튼 레이블                |
| `{typography.body-sm}`    | 15px | 400    | 1.5         | 0              | 작은 본문 텍스트, 내비게이션 항목, 탭 레이블 |
| `{typography.label}`      | 14px | 700    | 1.5         | 0              | 레이블, 상태 레이블, 버전 배지               |
| `{typography.caption}`    | 13px | 500    | 1.5         | 0              | 캡션, 푸터 텍스트, 작은 글씨                 |
| `{typography.brand-logo}` | 19px | 700    | 1.0         | 0              | 헤더 로고 ("Messenger")                      |

### 원칙

- **모든 제목에 LINE Seed Sans weight 700(Bold) 사용.** 각 섹션을 프레임화하는 대담하고 자신감 있는 목소리를 만듭니다. SF Pro Text 제목(h4)과 레이블(h5, label)도 weight 700을 사용합니다.
- **모든 본문에 SF Pro Text weight 400 사용.** 깨끗하고 읽기 쉬우며 중립적입니다. Weight 600–700은 인라인 강조와 레이블을 위해 예약됩니다.
- **16px 본문 텍스트, 14px나 15px가 아닌.** Onboarding site design system은 문서 규모에서 편안한 읽기를 위해 본문을 16px로 실행합니다.
- **본문 텍스트에 1.6 line-height.** 여유로운 leading은 읽기 우선 경험을 만듭니다. 제목은 임팩트를 위해 1.2–1.3으로 타이트합니다.
- **모든 타이포그래피 레벨에서 Letter-spacing은 0px.** 웹 브라우저는 디자인 도구와 다르게 letter-spacing을 렌더링하므로 실제 구현에서는 마이너스 트래킹이 적용되지 않습니다.
- **Weight 사다리: 400 / 500 / 600 / 700 / 800 / 900.** 본문은 400. 레이블과 제목은 700(Bold).

### 폰트 대체

LINE Seed Sans는 LINE의 독점 서체입니다. 오프브랜드 빌드 시:

- 폴백 스택으로 `system-ui, -apple-system, BlinkMacSystemFont` 사용 — macOS/iOS에서 SF Pro로 해결됩니다.
- 비Apple 플랫폼의 경우, **Inter** (Google Fonts, variable) weight 700과 `font-feature-settings: "ss03"`이 LINE Seed Sans의 특성을 근사합니다.
- SF Pro Text 본문의 경우, Inter weight 400이 가까운 대체입니다.

## 레이아웃

### 간격 시스템

- **기본 단위:** 4px. 모든 구조적 간격은 4의 배수로 스냅합니다: 8px, 12px, 16px, 24px, 32px, 40px, 80px.
- **토큰:** `{spacing.4}` 4px · `{spacing.8}` 8px · `{spacing.12}` 12px · `{spacing.16}` 16px · `{spacing.20}` 20px · `{spacing.24}` 24px · `{spacing.28}` 28px · `{spacing.32}` 32px · `{spacing.40}` 40px · `{spacing.48}` 48px · `{spacing.60}` 60px · `{spacing.80}` 80px · `{spacing.100}` 100px · `{spacing.120}` 120px.
- **페이지 패딩:** `{spacing.80}` (80px) 가로 메인 콘텐츠 패딩.
- **섹션 간격:** `{spacing.80}` (80px) 주요 섹션 간.
- **카드 패딩:** `{spacing.24}` (24px) 카드 컴포넌트 내부.
- **컴포넌트 갭:** `{spacing.16}` (16px) 인라인 요소 간 기본 갭.

### 페이지 구조

- **최대 너비:** 전체 페이지 1440px, 메인 콘텐츠 영역 1180px.
- **왼쪽 내비게이션:** `{component.left-nav}` — 272px 고정 너비, sticky, 전체 뷰포트 높이.
- **오른쪽 내비게이션:** `{component.right-nav}` — 200px 고정 너비, sticky, 선택적 앵커 링크.
- **메인 콘텐츠:** `{component.main-content}` — Flex 1, 패딩 `0 80px` (좌우 고정), 하단 마진 `120px`, 왼쪽 마진 `272px` (left-nav 너비). max-width 없음 - 브라우저 너비에 상관없이 좌우 패딩 80px 항상 유지.
- **헤더:** `{component.header}` — 88px 높이, 전체 너비, sticky top.

### 그리드 & 컨테이너

- **최대 콘텐츠 너비:** 메인 문서 섹션 1180px, 전체 너비 페이지 1440px.
- **컬럼 패턴:** 문서 콘텐츠는 단일 컬럼 스택; 카드 갤러리나 컴포넌트 쇼케이스는 2–3 컬럼 그리드.
- **Gutters:** 다중 컬럼 레이아웃에서 카드 간 24px.

### 여백 철학

Onboarding site design system은 문서가 숨쉴 수 있도록 여유로운 여백을 사용합니다. 페이지 제목은 80px 상단 패딩으로 시작합니다. 섹션은 80px로 분리됩니다. 카드는 24px 내부 패딩을 가집니다. 왼쪽 내비게이션은 카테고리 제목과 내비게이션 항목이 답답하지 않도록 32px 측면 패딩을 가집니다. 목표는 계층이 명확하고 콘텐츠가 절대 붐비지 않는 읽기 우선 경험입니다.

## 고도 & 깊이

| 레벨            | 처리                                    | 용도                                     |
| --------------- | --------------------------------------- | ---------------------------------------- |
| 평면            | 그림자 없음, 테두리 없음                | 전체 너비 섹션, 페이지 배경              |
| 부드러운 테두리 | 1px `{colors.border-light}` (#EFEFEF)   | 헤더 하단, 왼쪽 내비게이션 오른쪽 테두리 |
| 기본 테두리     | 1px `{colors.border-default}` (#E8E8E8) | 카드, 버전 배지, 탭                      |
| 중간 테두리     | 1px `{colors.border-medium}` (#B7B7B7)  | 선택되지 않은 라디오 버튼, 폼 입력       |

**그림자 철학.** Onboarding site design system은 정적 상태에서 **드롭 섀도우를 사용하지 않습니다**. 고도는 전적으로 (a) 표면 색상 변화(white → #FBFBFB → #EFEFEF)와 (b) 1px 테두리에서 나옵니다. 이 시스템은 의도적으로 평면적입니다 — 강조는 레이어드 섀도우가 아닌 타이포그래피 weight, 색상, 간격을 통해 달성됩니다.

**예외:** 링크가 있는 인터랙티브 카드는 미묘한 호버 효과를 사용합니다 — 카드가 8px 위로 올라가고(`transform: translateY(-8px)`) 호버 시 부드러운 드롭 섀도우(`0 8px 16px rgba(0,0,0,0.08)`)가 나타나며, 0.2s ease 전환이 있습니다.

### 장식적 깊이

- **표면 교대**는 그림자 없이 시각적 리듬을 만듭니다 — #FBFBFB 내비게이션의 흰색 콘텐츠, 선택 상태의 #EFEFEF.
- **테두리 계층**은 깊이를 추가하지 않고 세 가지 테두리 색상(#EFEFEF, #E8E8E8, #B7B7B7)을 사용하여 다양한 분리 수준을 나타냅니다.

## 형태

### Border Radius 스케일

| 토큰             | 값   | 용도                                     |
| ---------------- | ---- | ---------------------------------------- |
| `{rounded.none}` | 0px  | 전체 블리드 섹션, 라운딩 없음            |
| `{rounded.sm}`   | 8px  | 버튼, 내비게이션 항목, 탭(상단 모서리만) |
| `{rounded.md}`   | 12px | 카드, 데모 컨테이너                      |
| `{rounded.pill}` | 20px | 버전 배지, 알약 모양 요소                |

### 컴포넌트 기하학

- **버튼:** 52px 높이, 8px radius, 16px × 24px 패딩 — 약간 둥근 모서리의 직사각형.
- **라디오 버튼:** 20px 외부 원, 선택 시 10px 내부 점, 50% border-radius (완벽한 원).
- **탭:** 56px 높이, 95px 최소 너비, 상단 모서리만 8px radius (하단은 콘텐츠 영역과 평평).
- **카드:** 12px radius, 1px #E8E8E8 테두리, 24px 내부 패딩.
- **내비게이션 항목:** 8px radius, 12px × 16px 패딩, 호버/활성 상태는 배경을 #EFEFEF로 변경.

### 이미지 & 미디어

- **컴포넌트 스크린샷:** 전체 너비 또는 콘텐츠 너비로 제한, 1px 테두리(#E8E8E8), 8px radius.
- **데모 컨테이너:** 12px radius, #F0F0F0 배경, 40px 패딩.
- **히어로 섹션에 둥근 이미지 없음** — 이미지는 직사각형입니다. 라운딩은 인라인 컴포넌트 예제와 카드에만 나타납니다.

## 컴포넌트

### 상단 내비게이션 (Top Navigation)

`**top-navigation**` — 모든 페이지의 고정 상단 바. 배경 `{colors.canvas}` (white), 높이 88px, 하단 1px solid `{colors.border-light}` 테두리, 좌우 패딩 40px (데스크톱/모바일 동일). 

**간격 규칙:**
- home icon → logo: 12px (margin-right)
- logo → menu: 40px (margin-right)
- 내비게이션 항목 간: 40px (gap)

**모바일 동작 (≤768px):**
- hamburger 메뉴 표시 (24px × 12px)
- home icon 숨김 → hamburger가 그 자리 대체
- 간격 유지: hamburger → logo 12px, logo → menu 40px

`**home-icon**` — 24x24px 단순 집 모양 아이콘, 검정 fill (#000000). 문이 있는 집 실루엣을 형성하는 단일 경로. 모바일에서는 숨김 처리되고 hamburger가 대체.

`**logo**` — `{typography.brand-logo}` (LINE Seed Sans 19px / 700)의 "Messenger", 색상 `{colors.ink}`.

`**nav-item**` — 가로 내비게이션 링크. 폰트 패밀리: LINE Seed Sans, 크기: 17px, weight: 700, letter-spacing: 0px. 기본 색상 `{colors.body-tertiary}` (#B7B7B7), 활성 상태 색상 `{colors.ink}` (#000000). 호버 전환: 색상 0.2s. 항목 간 갭: 40px.

`**version-badge**` — 알약 모양 버전 표시기. 테두리 `1px solid {colors.border-default}`, rounded `{rounded.pill}` (20px), 패딩 `8px 16px`, 폰트 크기 14px, weight 500, 색상 `{colors.ink}`.

`**hamburger-menu**` — 모바일 내비게이션 토글 버튼. **768px 이하에서만 표시**. left-nav가 있는 페이지에만 사용. 너비 24px, 높이 12px, 2개의 수평선(각 2px 높이), 색상 `{colors.ink}`. 클릭 시 2개 라인이 중앙으로 모여 45도/-45도 회전하여 X 모양 형성. 애니메이션: 0.3s ease 전환. 버튼 스타일: 배경 투명, 테두리 없음, cursor pointer. home icon이 있으면 그 자리를 대체, 없으면 logo 앞에 표시.

`**mobile-overlay**` — 모바일 메뉴 열릴 때 배경 오버레이. 전체 화면, 배경 `rgba(0, 0, 0, 0.5)`, z-index 90, position fixed. 메뉴 닫힐 때 opacity 0 → 1 페이드 인, 0.2s 전환. 클릭 시 메뉴 닫힘.

### 왼쪽 내비게이션 (Left Navigation)

`**left-nav**` — 모든 문서 페이지의 고정 왼쪽 사이드바. 너비 272px, 배경 `{colors.canvas}` (#FFFFFF), border-right `1px solid {colors.border-light}`, 패딩 `33px 34px 40px 38px` (좌측이 더 넓음), position fixed, left 0, top 88px, 헤더 빼고 전체 뷰포트 높이, z-index 50. overflow-y auto로 스크롤 가능.

**커스텀 스크롤바:** 기본은 투명, hover 시 `rgba(0,0,0,0.2)` 표시, 너비 8px, border-radius 4px.

**모바일 동작 (≤ 1024px):** 초기 left -272px(화면 밖), z-index 100. `.open` 클래스 추가 시 left 0으로 슬라이드 (0.2s ease 전환). box-shadow `2px 0 8px rgba(0,0,0,0.1)` 추가.

`**left-nav-category-title**` — 카테고리 제목("Common Component"). 폰트 패밀리: SF Pro Text, 크기: 17px, weight: 700, letter-spacing: 0px, 색상 `{colors.ink}`, 패딩 `12px 0`, margin-bottom 0.

`**left-nav-item**` — 내비게이션 링크. display flex, align-items center, height 42px, padding 0, 폰트 패밀리: SF Pro Text, 크기: 15px, weight: 500, 색상 `{colors.body-tertiary}` (#949494), text-decoration none, border-radius 0. 호버: 색상 `{colors.ink}`, weight 700. 배경색 변화 없음.

`**left-nav-item.active**` — 선택된 내비게이션 항목. 색상 `{colors.ink}`, weight 700. 배경색 없음.

`**left-nav-item.nav-parent**` — 서브메뉴가 있는 부모 항목 ("Buttons"). weight 700, 색상 `{colors.ink}`, cursor default.

`**nav-submenu**` — 서브메뉴 컨테이너. padding-left 0. 내부 `.left-nav-item`은 padding-left 20px로 들여쓰기.

### 버튼 (Buttons)

`**button-primary**` — 기본 액션 버튼. 배경 `{colors.canvas}` (#FFFFFF), 텍스트 `{colors.ink}` (#000000), typography `{typography.body-sm}` (15px / 500), border `1px solid {colors.border-default}`, rounded 50px (pill 모양), 패딩 `0 16px 0 24px` (좌우 비대칭), 높이 50px, 갭 8px. 호버: 배경 `{colors.ink}`, 텍스트 `{colors.canvas}`, 테두리 `{colors.ink}`, 아이콘 흰색 반전 (filter: brightness(0) invert(1)).

`**button-primary-pressed**` — 눌림 상태. 배경 `{colors.primary-pressed}` (#069540), 텍스트 `{colors.on-primary}`. primary와 동일한 치수.

`**button-inactive**` — 비활성화 버튼. 배경 `{colors.inactive-bg}` (#DDDDDD), 텍스트 `{colors.inactive-text}` (#949494), primary와 동일한 치수. 호버 상태 없음, cursor: not-allowed.

`**button-red**` — 파괴적 액션 버튼(드물게). 배경 `{colors.red}` (#FF334B), 텍스트 `{colors.on-primary}`, primary와 동일한 치수. 삭제, 제거, 중요 액션에 사용.

### 라디오 버튼 (Radio Button)

`**radio**` — 선택되지 않은 상태. 20px × 20px 외부 원, 테두리 `1px solid {colors.border-medium}` (#B7B7B7), rounded 50%, 배경 투명, cursor pointer.

`**radio-selected**` — 선택된 상태. 테두리 `1px solid {colors.primary}` (#00C73C), 내부 점 10px × 10px, 배경 `{colors.primary}`, 외부 원 내부 중앙, border-radius 50%.

사용법: `{typography.body-sm}`의 레이블 텍스트와 쌍, 라디오와 레이블 사이 12px 갭.

### 탭 (Tabs)

`**tabs-row**` — 전체 너비를 가로지르는 border-bottom `1px solid {colors.border-default}` (#E8E8E8)가 있는 탭 컨테이너, 모든 탭과 빈 공간 아래에 기준선을 만듭니다.

`**tab**` — 탭 버튼. 선택되지 않은 경우 배경 `{colors.canvas}` (white), 선택된 경우 `{colors.canvas-selected}` (#EFEFEF). 선택되지 않은 경우 텍스트 `{colors.body-tertiary}` (#949494), 선택된 경우 `{colors.ink-alt}` (#111111). 폰트 패밀리: SF Pro Text, 크기: 15px, weight: 500, 테두리 `1px solid {colors.border-default}`, 높이 56px, 최소 너비 120px, 패딩 `0 30px`. Cursor pointer.

선택된 탭은 배경과 동일한 색상의 border-bottom (#EFEFEF)을 가져 아래 기준선 테두리를 시각적으로 숨겨 콘텐츠 영역과 매끄러운 연결을 만듭니다.

Border-radius 규칙: 모든 탭은 첫 번째 탭의 왼쪽 상단 모서리(8px)와 마지막 탭의 오른쪽 상단 모서리(8px)를 제외하고 직각(0px radius)입니다. 탭이 만나는 모든 내부 모서리는 인접한 탭 사이에 연속 라인을 만들기 위해 날카롭게(0px) 유지됩니다.

`**tab-content**` — 탭 아래 콘텐츠 영역. 선택된 탭 배경과 일치하는 배경 `{colors.canvas-selected}` (#EFEFEF), 테두리 `1px solid {colors.border-default}`, border-top 없음, border-radius 0(모든 모서리 직각), 패딩 24px. 선택된 탭과 콘텐츠 영역은 동일한 배경 색상을 공유하며 사이에 테두리가 없어 하나의 통합된 직사각형 표면으로 나타납니다.

### 카드 (Card)

**Card Large (기본)**

`**card-image**` — 이미지 컨테이너. 배경 `{colors.canvas}` (#FFFFFF), 테두리 `1px solid {colors.border-default}` (#E8E8E8), border-radius 0px(평면, 라운딩 없음), 너비 `100%`, aspect-ratio `408/272` (비율 유지), margin-bottom 22px. 그리드 안에서 유동적으로 크기 조절됨. 컴포넌트 일러스트레이션, 다이어그램, 미리보기 이미지 표시에 사용.

`**card-title**` — 이미지 아래 카드 제목. 폰트 패밀리: SF Pro Text, 크기: 28px, weight: 700, line-height: 1.3, letter-spacing: 0px, 색상 `{colors.ink}` (#000000), margin-bottom 16px.

`**card-text**` — 제목 아래 카드 설명. 폰트 패밀리: SF Pro Text, 크기: 18px, weight: 400, line-height: 1.6, 색상 `{colors.body-secondary}` (#616161).

구조: 이미지 박스(408×272px, 1px #E8E8E8 테두리, 평면) → 22px 갭 → 텍스트 컨테이너(5px 상단 패딩) → 제목(28px / 700) → 16px 갭 → 설명(18px). 이미지, 제목, 설명은 **컨테이너로 감싸지지 않습니다** — 정의된 간격으로 수직으로 쌓인 별도 요소입니다. 텍스트 컨테이너는 시각적 정렬을 위해 5px 상단 패딩을 가집니다.

**인터랙티브 상태(카드가 링크일 때):** 호버 시 **이미지만** `transform: translateY(-4px)`로 4px 위로 올라가고 미묘한 섀도우 `0 6px 12px rgba(0,0,0,0.06)`를 얻습니다. 텍스트(제목과 설명)는 제자리에 유지됩니다. 전환: `all 0.2s ease`. 전체 카드에 Cursor: pointer.

**반응형 그리드 레이아웃:**

- 데스크톱 (≥ 1025px): 3컬럼 그리드, 30px 갭
- 태블릿 (769–1024px): 2컬럼 그리드, 24px 갭
- 모바일 (≤ 768px): 1컬럼 스택, 24px 갭

그리드 구현: `grid-template-columns: repeat(3, 1fr)` 미디어 쿼리로 태블릿 중단점에서 `repeat(2, 1fr)`로, 모바일 중단점에서 `1fr`로 조정.

**Card Medium**

`**card-medium-image**` — 그리드 레이아웃용 중간 크기 이미지 컨테이너. 배경 `{colors.canvas}` (#FFFFFF), 테두리 `1px solid {colors.border-default}` (#E8E8E8), border-radius 0px(평면), 너비 `100%`, aspect-ratio `320/220` (비율 유지), margin-bottom 16px. 그리드 안에서 유동적으로 크기 조절됨.

`**card-medium-title**` — 중간 카드 제목. 폰트 패밀리: SF Pro Text, 크기: 20px, weight: 700, line-height: 1.3, letter-spacing: 0px, 색상 `{colors.ink}` (#000000), margin-bottom 14px.

`**card-medium-text**` — 중간 카드 설명. 폰트 패밀리: SF Pro Text, 크기: 16px, weight: 400, line-height: 1.6, 색상 `{colors.body-secondary}` (#616161).

구조: 이미지 박스(최대 320×220px, 비율 유지) → 16px 갭 → 텍스트 컨테이너(5px 상단 패딩) → 제목(20px / 700) → 14px 갭 → 설명(16px). Card Large와 동일한 수직 스태킹 패턴, 30px 갭의 3~4컬럼 그리드 레이아웃에 최적화. 텍스트 컨테이너는 시각적 정렬을 위해 5px 상단 패딩을 가집니다.

**인터랙티브 상태(카드가 링크일 때):** 호버 시 **이미지만** `transform: translateY(-4px)`로 4px 위로 올라가고 미묘한 섀도우 `0 6px 12px rgba(0,0,0,0.06)`를 얻습니다. 텍스트(제목과 설명)는 제자리에 유지됩니다. 전환: `all 0.2s ease`. 전체 카드에 Cursor: pointer.

**반응형 그리드 레이아웃:**

카드 그리드 클래스:
- `card-grid-3` — 3컬럼 그리드 (기본)
- `card-grid-4` — 4컬럼 그리드

반응형 동작:
- 데스크톱 (≥ 1025px): card-grid-3는 3컬럼, card-grid-4는 4컬럼, 30px 갭
- 태블릿 (769–1024px): 모두 2컬럼, 24px 갭
- 모바일 (≤ 768px): 모두 1컬럼, 24px 갭

그리드 구현: `.card-grid-3` 또는 `.card-grid-4` 클래스 사용, components.css에 미디어 쿼리로 자동 반응형 적용.

### 타이포그래피 컴포넌트

`**page-title**` — 메인 페이지 제목. Typography `{typography.display}` (48px / 700), 색상 `{colors.ink}`, 패딩 `80px 0 20px 0`(숨쉴 공간을 위한 80px 상단).

`**section-title**` — 섹션 제목("Anatomy", "States", "Types"). Typography `{typography.h2}` (32px / 700), 색상 `{colors.ink}`, 패딩 `0 0 24px 0`.

### 푸터 (Footer)

`**footer**` — 페이지 푸터. 배경 `{colors.canvas}` (white), border-top `1px solid {colors.border-light}`, 패딩 `40px 80px`. 왼쪽: 저작권 텍스트("© LY Corporation"). 오른쪽: 푸터 링크("Terms of Use", "FAQ", "Slack", "Contact Us", "Wiki", "Github") `{typography.caption}` (13px / 500), 색상 `{colors.ink}`, 갭 32px.

## 해야 할 것과 하지 말아야 할 것

### 해야 할 것

- **정확한 토큰 이름을 클래스 이름으로 사용.** DESIGN.md에 정의된 스타일을 적용할 때 수정 없이 토큰 이름을 직접 CSS 클래스 이름으로 사용합니다. 예: Display 타이포그래피(48px/700/1.2)는 `<h1 class="display">`, H2 타이포그래피(32px/700/1.2)는 `<h2 class="h2">`.
- **토큰 이름을 변경하지 마세요.** DESIGN.md에서 `display`를 정의하면 `class="display"`를 사용 — `class="page-title"`, `class="main-heading"` 또는 다른 이름이 아닙니다. 토큰 이름은 제안이 아니라 HTML/CSS에서 사용할 정확한 클래스 이름입니다.
- 모든 주요 액션에 `{colors.primary}` (LINE Green #00C73C) 사용 — 버튼, 활성 상태, 선택된 라디오 버튼, 포커스 표시기.
- 모든 제목을 LINE Seed Sans weight 700(Bold)으로 설정. 이것이 브랜드 목소리입니다.
- 모든 본문 텍스트를 SF Pro Text weight 400, 16px 크기, 1.6 line-height로 설정. 이것이 읽기 목소리입니다.
- 카드와 컴포넌트 컨테이너에 `{colors.border-default}` (#E8E8E8)의 1px 테두리 사용. 테두리를 미묘하게 유지.
- 메인 콘텐츠 영역에 80px 가로 패딩, 카드 내부에 24px, 내비게이션에 32px 적용.
- 버튼과 작은 인터랙티브 요소에 `{rounded.sm}` (8px), 카드에 `{rounded.md}` (12px) 사용.
- 표면 변화를 위해 `{colors.canvas}` (white)와 `{colors.canvas-tertiary}` (#FBFBFB) 사이를 교대.
- 왼쪽 내비게이션을 272px 너비로 유지, #FBFBFB 배경과 1px #EFEFEF 오른쪽 테두리.
- 내비게이션과 탭의 활성/선택 상태에 `{colors.canvas-selected}` (#EFEFEF) 사용.
- 4px 기본 간격 단위 유지 — 모든 구조적 간격은 4의 배수여야 합니다.

### 하지 말아야 할 것

- **구현 시 토큰 이름을 변경하지 마세요.** AI 도구는 종종 DESIGN.md 토큰을 구현할 때 `page-title`이나 `section-heading` 같은 "시맨틱" 클래스 이름을 만들려고 시도합니다. 이것은 시스템을 깨뜨립니다. 항상 정확한 토큰 이름 사용: `display`, `h2`, `body` 등.
- **토큰 값을 수정하지 마세요.** `display`가 48px/700/1.2이면 CSS에서 정확히 그 값을 사용합니다. "더 보기 좋게" 만들려고 46px로 조정하거나 line-height를 1.3으로 변경하지 마세요 — 그것은 시스템을 깨뜨립니다.
- 여러 강조색을 사용하지 마세요 — LINE Green이 전체 시스템의 단일 액션 색상입니다.
- 제목을 SF Pro Text로 설정하거나 본문 텍스트를 LINE Seed Sans로 설정하지 마세요 — 폰트 페어링은 의도적이고 엄격합니다.
- 본문 텍스트에 weight 500이나 weight 600을 사용하지 마세요 — 본문은 항상 400입니다. 강조된 본문은 700(레이블) 사용.
- 어떤 UI 요소에도 섀도우를 적용하지 마세요 — Onboarding site design system은 의도적으로 평면적입니다.
- 그라데이션이나 장식적 fill을 사용하지 마세요 — 모든 표면은 단색입니다.
- 4px 기본 단위 아래로 간격을 줄이지 마세요 — 구조적 리듬은 8/12/16/24 배수에 의존합니다.
- 탭의 네 모서리를 모두 둥글게 하지 마세요 — 탭은 콘텐츠와 연결하기 위해 `8px 8px 0 0`(상단 모서리만) 사용.
- 순수 검정 테두리를 사용하지 마세요 — 테두리는 항상 부드러운 느낌을 위해 #E8E8E8, #EFEFEF, #B7B7B7입니다.
- 내비게이션 항목이나 탭에 extrabold(800)를 사용하지 마세요 — 제목과 UI 레이블은 Bold(700)입니다.
- 본문 텍스트의 line-height를 1.6 이하로 줄이지 마세요 — 여유로운 leading은 읽기 경험의 일부입니다.

## 반응형 동작

### 중단점

| 이름     | 너비        | 주요 변경사항                                                                                           |
| -------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| 모바일   | ≤ 768px     | 왼쪽 내비게이션이 햄버거 메뉴로 축소; 헤더 패딩 16px로 감소; 콘텐츠 패딩 24px로 감소; 타이포그래피 축소 |
| 태블릿   | 769–1024px  | 왼쪽 내비게이션 유지 (272px); 오른쪽 내비게이션 숨김                                                      |
| 데스크톱 | 1025–1440px | 왼쪽 내비게이션(272px), 메인 콘텐츠(최대 1180px), 선택적 오른쪽 내비게이션(200px)의 전체 레이아웃       |
| 와이드   | ≥ 1441px    | 콘텐츠가 1440px에 고정, 추가 너비는 마진으로 흡수                                                       |

### 터치 타겟

- 모바일에서 모든 인터랙티브 요소에 최소 44 × 44px.
- `{component.button-primary}`는 52px 높이로 최소값 초과.
- 15px 텍스트 + 12px 패딩 × 2 = 39px 높이의 내비게이션 항목 — 총 47px를 위해 모바일에서 16px 패딩으로 증가.
- 20px 크기의 라디오 버튼은 최소값 미만 — 투명 패딩 또는 더 큰 히트 영역으로 터치 타겟을 44px로 증가.

### 축소 전략

- **상단 내비게이션**: 모바일(≤ 768px)에서 로고 + 햄버거; 769px에서 전체 가로 내비게이션 복귀.
- **왼쪽 내비게이션**: 모바일(≤ 768px)에서 오프캔버스 드로어; 769px 이상에서 고정 사이드바.
- **오른쪽 내비게이션**: 모바일과 태블릿(≤ 1024px)에서 숨김; 데스크톱(1025px+)에서 표시.
- **콘텐츠 패딩**: 모바일에서 80px → 24px; 태블릿에서 80px → 40px.
- **타이포그래피 축소**: 모바일에서 Display(48px) → 32px; Body(16px) 동일 유지; Hero(60px) → 40px.

### 이미지 동작

- 컴포넌트 스크린샷은 컨테이너 내에서 크기를 조정하기 위해 반응형 `max-width: 100%` 사용.
- 데모 컨테이너는 데스크톱에서 40px 패딩 유지, 모바일에서 24px로 감소.
- 카드는 모바일 중단점(≤ 768px)에서 다중 컬럼에서 단일 컬럼으로 스택.

## 반복 가이드

1. 어디서나 `{token.refs}`를 사용하여 토큰 참조 — hex 코드나 픽셀 값을 직접 입력하지 마세요.
2. 새 컴포넌트를 추가할 때 먼저 `components:` YAML 프론트매터에 모든 상태(`-active`, `-pressed`, `-selected`)와 함께 정의한 다음 사용 컨텍스트와 함께 Components 섹션에 문서화합니다.
3. 제목은 항상 LINE Seed Sans weight 700(Bold) 사용. 본문은 항상 SF Pro Text weight 400 사용. 이것은 협상 불가능합니다.
4. 단일 강조색은 LINE Green (#00C73C)입니다. 보조 브랜드 색상은 존재하지 않습니다. LINE Red (#FF334B)와 Link (#4D73FF)는 기능적 색상이지 브랜드 강조색이 아닙니다.
5. #E8E8E8 또는 #EFEFEF의 1px 테두리 사용. 섀도우나 그라데이션을 사용하지 마세요.
6. 간격에 대해 확신이 없을 때: 페이지/섹션 패딩에 80px, 카드 패딩에 24px, 컴포넌트 갭에 16px, 마이크로 간격에 4px 사용.
7. Border radius: 버튼/작은 UI에 8px, 카드에 12px, 알약에 20px. 중간 값 없음.

## 알려진 공백

- 폼 검증과 오류 상태는 최소한으로 문서화됨 — 비활성 버튼과 빨간 버튼만 정의됨.
- 입력 필드(텍스트 입력, 드롭다운, 체크박스)는 아직 토큰화되지 않음.
- 모바일 특정 컴포넌트 변형(햄버거 메뉴, 오프캔버스 드로어)은 아직 완전히 지정되지 않음.
- 다크 모드는 정의되지 않음 — 이것은 라이트 전용 시스템입니다.
- 버튼의 로딩 상태(스피너 아이콘, 로드 중 비활성화)는 개념적으로 언급되었지만 토큰화되지 않음.
- 특정 애니메이션 타이밍과 이징 함수는 문서화되지 않음 — 전환은 기본적으로 0.2s ease.
- 사양 시트와 비교 표의 테이블 컴포넌트는 정의되지 않음.
- 툴팁과 팝오버 패턴은 문서화되지 않음.
