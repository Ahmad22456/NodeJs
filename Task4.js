const generator = require('generate-password');

const passwords = generator.generateMultiple(5, {
	length: 8,
    numbers: true,
	uppercase: true
});

console.log(passwords);