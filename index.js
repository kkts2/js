const { Pattern, Matcher } = require('java.util.regex');

const PHONE_REGEX = /^(?:\+?38)?\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

const validPhoneNumbers = [
    "380505923502", "+380505923502", "+38 050 592 35 02", "+38 (050) 592 35 02", "+38 (050) 592-35-02",
    "+38 (050) 592-3-502", "(050) 592-35-02", "050 592 35 02", "050 592 35 02", "050 592 3502",
    "050 592 3 502", "050-592-3-502", "+80 (50) 592 35 02", "380 (50) 592 35 02", "+380 (50) 592 35 02",
    "+380 (50) 592-35-02", "+380 50 592-35-02"
];

validPhoneNumbers.forEach(phoneNumber => {
    const pattern = Pattern.compile(PHONE_REGEX);
    const matcher = pattern.matcher(phoneNumber);
    const isValid = matcher.matches();
    console.log(`${phoneNumber} is valid: ${isValid}`);
});
