const correctPassword = "kusabira1978"; // パスワードを設定

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('password-overlay');
    const input = document.getElementById('password-input');
    const submit = document.getElementById('password-submit');

    submit.addEventListener('click', checkPassword);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    function checkPassword() {
        if (input.value === correctPassword) {
            overlay.classList.add('hidden');
            document.body.style.visibility = 'visible';
            localStorage.setItem('passwordEntered', 'true');
        } else {
            alert('パスワードが間違っています。');
        }
    }

    // 以前にパスワードを入力済みかチェック
    if (localStorage.getItem('passwordEntered') === 'true') {
        overlay.classList.add('hidden');
        document.body.style.visibility = 'visible';
    }
});