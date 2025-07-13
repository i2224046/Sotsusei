document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // 1. ローカルストレージからテーマを読み込む
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('theme-light');
    }

    // 2. ボタンクリックでテーマを切り替え
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('theme-light');

        // 3. 切り替えたテーマをローカルストレージに保存
        if (body.classList.contains('theme-light')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
});
