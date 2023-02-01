
// var jsdom = require('jsdom');
// const $ = require('jquery')(new jsdom.JSDOM().window);


const imgUsername = $("[data-user-green-check-box]");
const username = $("[data-input-username]");
const usernameMassage = $("[data-username-massage]");
const usernameErrorMassage = $("[data-username-error-massage]");

const imgUserEmail = $("[data-email-green-check-box]");
const userEmail = $("[data-input-email]");
const userEmailMassage = $("[data-email-massage]");
const userEmailErrorMassage = $("[data-email-error-massage]");

const imgUserPassword = $("[data-password-green-check-box]");
const userPassword = $("[data-input-password]");
const userPasswordMassage = $("[data-password-massage]");
const userPasswordErrorMassage = $("[data-password-error-massage]");

const submitButton = $("[data-submit-btn]");

submitButton.on("click", function () {
  const usernameInput = String(username.val());
  const emailInput = String(userEmail.val());
  const passwordInput: string = String(userPassword.val());

  if (validateUsername(usernameInput)) {
    username.addClass("green-border");
    imgUsername.removeClass("js-hide-user-cBox");
    usernameErrorMassage.addClass("js-hide-error-username");
  } else {
    username.removeClass("green-border");
    imgUsername.addClass("js-hide-user-cBox");
    usernameErrorMassage.removeClass("js-hide-error-username");
  }
  //------------------------------------------------------------------
  if (validateEmail(emailInput)) {
    userEmail.addClass("green-border");
    imgUserEmail.removeClass("js-hide-email-cBox");
    userEmailErrorMassage.addClass("js-hide-error-email");
  } else {
    userEmail.removeClass("green-border");
    imgUserEmail.addClass("js-hide-email-cBox");
    userEmailErrorMassage.removeClass("js-hide-error-email");
  }
  //--------------------------------------------------------------------
  if (validatePassword(passwordInput)) {
    userPassword.addClass("green-border");
    imgUserPassword.removeClass("js-hide-pass-cBox");
    userPasswordErrorMassage.addClass("js-hide-error-password");
  } else {
    userPassword.removeClass("green-border");
    imgUserPassword.addClass("js-hide-pass-cBox");
    userPasswordErrorMassage.removeClass("js-hide-error-password");
  }
});

const validateUsername = (info: string) => {
  const validRegex = /^[a-zA-Z]{2,50}$/;
  const regex = new RegExp(validRegex);
  return regex.test(info);
};
const validateEmail = (info: string) => {
  const validRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const regex = new RegExp(validRegex);
  return regex.test(info);
};
const validatePassword = (info: string): any => {
  const validRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/;
  const regex = new RegExp(validRegex);
  return regex.test(info);
};

// module.exports = validateUsername;
// export default validateUsername;

export {validateUsername, validateEmail, validatePassword};