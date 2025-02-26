function generateNepaliPasswords(){
    const passwordbox = document.getElementById('password');

    var nepaliPasswords = [];
    var nepaliChars = "अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह";
    var nepalisymbols = "१२३४५६७८९०";
    var englishChars = "abcdefghijklmnopqrstuvwxyz";
    var englishCharsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var englishNumbers = "1234567890";
    var englishSpecialChars = "!@#$%^&*()_+";
    var nepaliVowels = "अआइईउऊऋएऐओऔ";
    var nepaliConsonants = "कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह";
    var nepaliNumbers = "१२३४५६७८९०";
    var nepaliSpecialChars = "।॥";
    var ranjanalipi = "कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह";
    var passwordLength = 8;
    var passwordCount = 10;
    
   //mix this and generate random password with math floor and random
    for (var i = 0; i < passwordCount; i++) {
        var password = '';
        for (var j = 0; j < passwordLength; j++) {
            var random = Math.floor(Math.random() * 4);
            if (random === 0) {
                password += nepaliChars.charAt(Math.floor(Math.random() * nepaliChars.length));
            } else if (random === 1) {
                password += nepalisymbols.charAt(Math.floor(Math.random() * nepalisymbols.length));
            } else if (random === 2) {
                password += englishChars.charAt(Math.floor(Math.random() * englishChars.length));
            } else if (random === 3) {
                password += englishCharsUpper.charAt(Math.floor(Math.random() * englishCharsUpper.length));
            } else if (random === 4) {
                password += englishNumbers.charAt(Math.floor(Math.random() * englishNumbers.length));
            } else if (random === 5) {
                password += englishSpecialChars.charAt(Math.floor(Math.random() * englishSpecialChars.length));
            }
        }
        nepaliPasswords.push(password);
    }

    passwordbox.value = nepaliPasswords[0]; 

}