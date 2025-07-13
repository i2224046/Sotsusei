document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher --- //
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('theme-light');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('theme-light');
        const theme = body.classList.contains('theme-light') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
    });

    // --- Dynamic Navigation Menu --- //
    const navLinks = [
        { href: 'index.html', text: 'プロジェクト概要' },
        { href: 'flow.html', text: '開発フロー' },
        { href: 'memo.html', text: 'メモ' }
    ];

    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        const currentPage = window.location.pathname.split('/').pop();
        const navMenu = document.createElement('div');
        navMenu.className = 'navigation-menu';

        navLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            a.className = 'btn';
            if (link.href === currentPage) {
                a.classList.add('active');
            }
            navMenu.appendChild(a);
        });

        navPlaceholder.appendChild(navMenu);
    }
});
