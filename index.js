document.getElementById("lengthSlider").addEventListener("input", function() {
    document.getElementById("lengthValue").textContent = this.value;
});

document.getElementById("countSlider").addEventListener("input", function() {
    document.getElementById("countValue").textContent = this.value;
});


function generateNepaliPasswords(charset) {
    const passwordbox = document.getElementById('password');
    let length = document.getElementById("lengthSlider").value;
    let count = document.getElementById("countSlider").value;
    
    let charsets = charset || "";
    if (document.getElementById("nepaliCharsCheckbox").checked) charsets += "अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह";
    if (document.getElementById("nepaliSymbolsCheckbox").checked) charsets += "१२३४५६७८९०";
    if (document.getElementById("englishCharsCheckbox").checked) charsets += "abcdefghijklmnopqrstuvwxyz";
    if (document.getElementById("englishCharsUpperCheckbox").checked) charsets += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (document.getElementById("englishNumbersCheckbox").checked) charsets += "1234567890";
    if (document.getElementById("englishSpecialCharsCheckbox").checked) charsets += "!@#$%^&*()_+";

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charsets.charAt(Math.floor(Math.random() * charsets.length));
    }
    
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