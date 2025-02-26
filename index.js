document.getElementById("lengthSlider").addEventListener("input", function () {
    document.getElementById("lengthValue").textContent = this.value;
});

document.getElementById("countSlider").addEventListener("input", function () {
    document.getElementById("countValue").textContent = this.value;
});

document.addEventListener("DOMContentLoaded", function () {
    const charset = "अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह";
    generateNepaliPasswords(charset);
});

function generateNepaliPasswords(charset = null) {
    const passwordbox = document.getElementById('password');
    let length = Math.max(12, document.getElementById("lengthSlider").value);
    let count = document.getElementById("countSlider").value;

    let charsets = charset || "";
    if (document.getElementById("nepaliCharsCheckbox").checked) charsets += "अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह";
    if (document.getElementById("nepaliSymbolsCheckbox").checked) charsets += "१२३४५६७८९०";
    if (document.getElementById("englishCharsCheckbox").checked) charsets += "abcdefghijklmnopqrstuvwxyz";
    if (document.getElementById("englishCharsUpperCheckbox").checked) charsets += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (document.getElementById("englishNumbersCheckbox").checked) charsets += "1234567890";
    if (document.getElementById("englishSpecialCharsCheckbox").checked) charsets += "!@#$%^&*()_+";

    let password = '';
    let hasUpper = false, hasLower = false, hasSpecial = false;
    while (password.length < length) {
        let char = charsets.charAt(crypto.getRandomValues(new Uint32Array(1))[0] % charsets.length);
        password += char;
        if (/[A-Z]/.test(char)) hasUpper = true;
        if (/[a-z]/.test(char)) hasLower = true;
        if (/[!@#$%^&*()_+]/.test(char)) hasSpecial = true;
    }

    if (!hasUpper) password += 'A';
    if (!hasLower) password += 'a';
    if (!hasSpecial) password += '!';
    passwordbox.value = password;
}

function copyToClipboard() {
    var passwordField = document.getElementById("password");
    navigator.clipboard.writeText(passwordField.value).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'Password copied to clipboard!',
            timer: 2000,
            showConfirmButton: false
        });
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

generateNepaliPasswords();