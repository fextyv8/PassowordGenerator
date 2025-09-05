document.getElementById('generateBtn').addEventListener('click', function() {
    // get the inputs from the index.html
    const lengthInput = document.getElementById('passwd');
    const symbolsInput = document.getElementById('symbols');
    const numbersInput = document.getElementById('numbers');
    const lettersInput = document.getElementById('letters');
    const result = document.getElementById('result');

    // get the value from the inputs and convert into a variable
    const passwordLength = lengthInput.value;
    const useSymbols = symbolsInput.checked;
    const useNumbers = numbersInput.checked;
    const useLetters = lettersInput.checked;

    // generate the password
    let passwordCharset = '';
    let password = '';
    if (useSymbols) {
        passwordCharset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    if (useNumbers) {
        passwordCharset += '0123456789';
    }
    if (useLetters) {
        passwordCharset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (!passwordCharset) {
        result.textContent = 'Please select at least one character type.';
        return;
    }
    for (let i = 0; i < passwordLength; i++) {
        password += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
    }
    console.log(password)
    result.textContent = password;
});
