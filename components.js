/**
 * Onboarding Site Design System - Components JavaScript
 *
 * 순수 바닐라 JavaScript로 작성된 인터랙션 로직입니다.
 * 프레임워크 없이 어디서나 사용 가능합니다.
 */

(function () {
  'use strict';

  // ========================================
  // Hamburger Menu (모바일 내비게이션)
  // ========================================

  function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const leftNav = document.querySelector('.left-nav');
    const overlay = document.querySelector('.mobile-overlay');

    if (!hamburger || !leftNav) return;

    // 햄버거 버튼 클릭 → 메뉴 열기/닫기
    hamburger.addEventListener('click', function () {
      const isOpen = leftNav.classList.toggle('open');
      hamburger.classList.toggle('open');

      // 오버레이 표시
      if (overlay) {
        if (isOpen) {
          overlay.classList.add('visible');
        } else {
          overlay.classList.remove('visible');
        }
      }

      // 접근성: aria-expanded 속성 업데이트
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // 오버레이 클릭 → 메뉴 닫기
    if (overlay) {
      overlay.addEventListener('click', function () {
        leftNav.classList.remove('open');
        hamburger.classList.remove('open');
        overlay.classList.remove('visible');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    }

    // ESC 키 → 메뉴 닫기
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && leftNav.classList.contains('open')) {
        leftNav.classList.remove('open');
        hamburger.classList.remove('open');
        if (overlay) overlay.classList.remove('visible');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ========================================
  // Language Dropdown (언어 선택)
  // ========================================

  function initLanguageDropdown() {
    const languageIcon = document.querySelector('.header-icon[data-dropdown="language"]');
    const dropdown = document.querySelector('.language-dropdown');

    if (!languageIcon || !dropdown) return;

    languageIcon.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    // 언어 선택
    const languageItems = dropdown.querySelectorAll('.language-item');
    languageItems.forEach(function (item) {
      item.addEventListener('click', function () {
        // 기존 active 제거
        languageItems.forEach(function (i) {
          i.classList.remove('active');
        });
        // 선택된 항목에 active 추가
        item.classList.add('active');
        // 드롭다운 닫기
        dropdown.classList.remove('active');
      });
    });

    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener('click', function () {
      dropdown.classList.remove('active');
    });
  }

  // ========================================
  // Search Bar (검색 바)
  // ========================================

  function initSearchBar() {
    const searchIcon = document.querySelector('.header-icon[data-action="search"]');
    const searchBar = document.querySelector('.search-bar');
    const searchClose = document.querySelector('.search-close-icon');
    const searchInput = document.querySelector('.search-input');

    if (!searchIcon || !searchBar) return;

    // 검색 아이콘 클릭 → 검색 바 열기
    searchIcon.addEventListener('click', function () {
      searchBar.classList.add('visible');
      // 입력 필드에 포커스
      if (searchInput) {
        setTimeout(function () {
          searchInput.focus();
        }, 100);
      }
    });

    // 닫기 버튼 클릭 → 검색 바 닫기
    if (searchClose) {
      searchClose.addEventListener('click', function () {
        searchBar.classList.remove('visible');
        if (searchInput) {
          searchInput.value = '';
        }
      });
    }

    // ESC 키 → 검색 바 닫기
    if (searchInput) {
      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          searchBar.classList.remove('visible');
          searchInput.value = '';
        }
      });
    }
  }

  // ========================================
  // Tab Component (탭)
  // ========================================

  function initTabs() {
    const tabGroups = document.querySelectorAll('[data-tabs]');

    tabGroups.forEach(function (tabGroup) {
      const tabs = tabGroup.querySelectorAll('.tab');
      const panels = tabGroup.querySelectorAll('.tab-panel');

      tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
          // 모든 탭 비활성화
          tabs.forEach(function (t) {
            t.classList.remove('selected');
          });
          // 모든 패널 숨김
          panels.forEach(function (p) {
            p.classList.remove('active');
          });

          // 클릭한 탭 활성화
          tab.classList.add('selected');
          // 해당 패널 표시
          if (panels[index]) {
            panels[index].classList.add('active');
          }
        });
      });
    });
  }

  // ========================================
  // Radio Button (라디오 버튼)
  // ========================================

  function initRadioButtons() {
    const radioGroups = document.querySelectorAll('[data-radio-group]');

    radioGroups.forEach(function (group) {
      const radios = group.querySelectorAll('.radio');

      radios.forEach(function (radio) {
        radio.addEventListener('click', function () {
          // 같은 그룹 내 모든 라디오 비활성화
          radios.forEach(function (r) {
            r.classList.remove('selected');
          });
          // 클릭한 라디오 활성화
          radio.classList.add('selected');
        });
      });
    });
  }

  // ========================================
  // Smooth Scroll (부드러운 스크롤)
  // ========================================

  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        const href = link.getAttribute('href');
        // 빈 # 또는 #top은 페이지 최상단으로
        if (href === '#' || href === '#top') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const topNavHeight = document.querySelector('.top-navi')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - topNavHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  // ========================================
  // Active Navigation Item (현재 페이지 표시)
  // ========================================

  function initActiveNavigation() {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.left-nav-item, .top-navi-item');

    navItems.forEach(function (item) {
      const href = item.getAttribute('href');
      if (href && currentPath.endsWith(href)) {
        item.classList.add('active');
      }
    });
  }

  // ========================================
  // Left Navigation - Active State & Submenu
  // ========================================

  function initLeftNavigation() {
    const navItems = document.querySelectorAll('.left-nav-item:not(.nav-parent)');
    const navParents = document.querySelectorAll('.left-nav-item.nav-parent');
    const allSubmenus = document.querySelectorAll('.nav-submenu');

    // 일반 메뉴 항목 클릭 - active 상태 변경
    navItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        // 현재 active 제거
        navItems.forEach(function (navItem) {
          navItem.classList.remove('active');
        });

        // 클릭한 항목에 active 추가
        item.classList.add('active');

        // 다른 1depth 메뉴 클릭 시 모든 서브메뉴 닫기
        if (!item.closest('.nav-submenu')) {
          allSubmenus.forEach(function (submenu) {
            submenu.classList.remove('open');
          });
          navParents.forEach(function (parent) {
            parent.classList.remove('open');
          });
        }
      });
    });

    // 부모 메뉴(Buttons 등) 클릭 - 서브메뉴 펼침/접힘
    navParents.forEach(function (parent) {
      parent.addEventListener('click', function () {
        const submenu = parent.nextElementSibling;

        if (submenu && submenu.classList.contains('nav-submenu')) {
          const isCurrentlyOpen = submenu.classList.contains('open');

          // 모든 서브메뉴 닫기
          allSubmenus.forEach(function (sub) {
            sub.classList.remove('open');
          });
          navParents.forEach(function (p) {
            p.classList.remove('open');
          });

          // 현재 클릭한 서브메뉴만 토글
          if (!isCurrentlyOpen) {
            submenu.classList.add('open');
            parent.classList.add('open');
          }
        }
      });
    });
  }

  // ========================================
  // 초기화 (DOMContentLoaded)
  // ========================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initHamburgerMenu();
    initLanguageDropdown();
    initSearchBar();
    initTabs();
    initRadioButtons();
    initSmoothScroll();
    initActiveNavigation();
    initLeftNavigation();
  }
})();
