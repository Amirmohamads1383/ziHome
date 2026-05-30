const inputs = document.querySelectorAll('.enter-code-sms input');
const loginBtn = document.getElementById('login-btn');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        // اگر فیلد فعلی خالی نیست و فیلد بعدی وجود داره، فوکوس رو ببر به فیلد بعدی
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }

        // وقتی کاربر یه چیزی رو پاک کرد و رفت به فیلد قبلی
        if (input.value.length === 0 && index > 0) {
            inputs[index - 1].focus();
        }

        // چک کردن اینکه آیا همه فیلدها پر شدن یا نه
        const allFilled = [...inputs].every(inp => inp.value.length === 1);
        if (allFilled) {
            loginBtn.disabled = false; // دکمه تایید رو فعال کن
        } else {
            loginBtn.disabled = true; // دکمه تایید رو غیرفعال کن
        }
    });

    // اجازه دادن فقط به اعداد
    input.addEventListener('keypress', (e) => {
        if (e.key.length === 1 && !/\d/.test(e.key)) {
            e.preventDefault();
        }
    });
});

// اولش دکمه تایید باید غیرفعال باشه
loginBtn.disabled = true;