const faker = require('faker');
const first_name = faker.name.firstName();
const last_name = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password();
const { I } = inject();
// Add in your custom step files

Given('I navigate to the application', () => {
  I.amOnPage('/');
  I.click('Silakan daftar.');
});

Given('I fill form register', () => {
  I.fillField('#firstName', first_name);
  I.fillField('#lastName', last_name);
  I.fillField('#email', email);
  I.fillField('#password', password);
  I.click('reCAPTCHA');
});

When('I click register button', () => {
  I.click('Daftar');

});

Then('I should see page count down', () => {
  I.see('Periksa Email untuk Verifikasi Akun');
});