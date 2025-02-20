function generatePassword(length,includeLowerCase, includeUpperCase,includeNumbers,includeSymbols){
       const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
       const uppercaseChars = lowercaseChars.toLocaleUpperCase();
       const numberChars = "0123456789";
       const symbolChars = "!§$%&/()=*'_':;";
       let allowedChars = "";
       let password = "";

       allowedChars += includeLowerCase ? lowercaseChars : "";
       allowedChars += includeUpperCase ? uppercaseChars : "";
       allowedChars += numberChars ? numberChars : "";
       allowedChars += symbolChars ? symbolChars : "";

       if(length <= 0){
              return `(password length must be at least 1)`
       }
       if(allowedChars.length === 0){
              return `(At least of set of character needs to be selected)`;
       }

       for(let i = 0; i < length; i++){
              const randomIndex = Math.floor(Math.random()* allowedChars.length);
              password += allowedChars[randomIndex];
       }
       
 return password;      
}

const passwordLength = 20;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = false;
const includeSymbols = true;


const password = generatePassword(passwordLength,includeLowerCase, includeUpperCase,includeNumbers,includeSymbols);

console.log(`Generated password: ${password}`);