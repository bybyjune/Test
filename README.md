# Onboarding site design system

> LINE의 디자인 언어를 웹으로 구현하기 위한 디자인 시스템

디자이너가 Claude Code와 같은 AI 도구를 사용하여 **일관된 경험**을 가진 온보딩 웹사이트를 빠르게 만들 수 있도록 지원하는 디자인 토큰 시스템입니다.

**Version**: 1.0.0 · **Released**: 2026-05-21

---

## 빠른 시작

### 1. 새 프로젝트 폴더 만들기

원하는 위치에 프로젝트 폴더를 만들고, 그 안에 디자인 시스템 파일들을 배치합니다.

```
my-project/
└── onboarding-design-system/
    ├── README.md
    ├── DESIGN.md
    ├── CLAUDE.md
    ├── tokens.css
    ├── typography.css
    ├── components.css
    ├── components.js
    ├── md_preview.html
    └── images/
```

### 2. 미리보기 페이지 열기

`md_preview.html` 파일을 브라우저에서 열어 디자인 시스템의 컴포넌트와 토큰을 시각적으로 확인할 수 있습니다.

### 3. Claude Code로 페이지 만들기

`my-project/` 폴더에서 Claude Code를 실행하고 요청합니다.

```
onboarding-design-system/DESIGN.md를 참고해서 랜딩 페이지를 만들어줘.

요구사항:
- Top navigation 포함
- 색상은 토큰만 사용
- 클래스 이름은 DESIGN.md 토큰 이름 그대로
```

자세한 프롬프트 예시는 CLAUDE.md를 참조하세요.

---

## 주요 사항

### 디자인 일관성 유지를 위한 규칙

1. **색상은 토큰만 사용** → Hex 코드 직접 입력 금지
2. **토큰 이름을 그대로 클래스 이름으로** → DESIGN.md 토큰 그대로 사용
3. **기존 CSS 파일만 사용** → 외부 라이브러리 추가 금지
4. **폰트와 간격은 시스템 기본값 사용** → 임의 변경 금지

---

## FAQ

**Q. Claude Code가 디자인 시스템을 무시하고 다른 스타일을 만들어요**  
A. 첫 프롬프트에 "onboarding-design-system/DESIGN.md의 토큰만 사용하고, 외부 라이브러리 추가 금지"를 명시하세요. CLAUDE.md에 프롬프트 예시가 있습니다.

**Q. CSS 파일 import 순서가 중요한가요?**  
A. 네. tokens.css → typography.css → components.css 순서로 import해야 토큰이 올바르게 적용됩니다.

**Q. 햄버거 메뉴나 드롭다운이 동작하지 않아요**  
A. `components.js` 파일을 import했는지 확인하세요. `</body>` 직전에 `<script src="onboarding-design-system/components.js"></script>`를 추가하세요.

**Q. DESIGN.md에 없는 컴포넌트가 필요해요**  
A. 기존 컴포넌트를 조합하거나, DESIGN.md의 규칙(토큰, 간격, radius)을 준수해서 새로 만드세요.

**Q. 문제가 있거나 개선 제안이 있으면?**  
A. 디자인 시스템 관리자에게 문의하세요.

---

## 더 알아보기

- **DESIGN.md** - 모든 디자인 토큰, 색상, 타이포그래피, 컴포넌트 스펙
- **CLAUDE.md** - AI 작업 시 구현 디테일, 주의사항, 컴포넌트별 가이드
- **md_preview.html** - 디자인 시스템 시각적 프리뷰
- **Test/complete_test.html** - 전체 컴포넌트 구현 예시

---

**Onboarding site design system** | 버전 1.0.0 | 2026
