import {describe, expect, test} from '@jest/globals';
import {validateUsername} from './scripts';
import {validateEmail} from './scripts';
import {validatePassword} from './scripts';


describe('Test username validation', () => {
  test('4 letter username should be valid', () => {
    expect(validateUsername('aaaa')).toBeTruthy();
  });
  
  test('Short username should be invalid', () => {
    expect(validateUsername('a')).toBeFalsy();
  });

  test('Username with 50 characters should be valid', () => {
    expect(validateUsername('laksirjtkgjfDmkAslPrkLerJklPlOvJkLjQWasdPOIJLAKJsa')).toBeTruthy();
  });

  test('Username with 51 characters should be invalid', () => {
    expect(validateUsername('aksirjtkgjfDmkAslPrJkLerJklPlOvJkLjQWasdPOIJLAKJsak')).toBeFalsy();
  });

  test('Username that contains digits should be invalid', () => {
    expect(validateUsername('login125')).toBeFalsy();
  });

  test('Username that contains special characters should be invalid', () => {
    expect(validateUsername('login!@#$')).toBeFalsy();
  });
});

describe('Test user email validation', () => {
  
  test('Email in normal pattern should be valid', () => {
    expect(validateEmail('asdgas@as.lv')).toBeTruthy();
  });
  
  test('Email without first part should be invalid', () => {
    expect(validateEmail('@ads.com')).toBeFalsy();
  });

  test('Email without @ should be invalid', () => {
    expect(validateEmail('ads.com')).toBeFalsy();
  });

  test('Email without second part should be invalid', () => {
    expect(validateEmail('ads@.com')).toBeFalsy();
  });

  test('Email without last part should be invalid', () => {
    expect(validateEmail('ads@com')).toBeFalsy();
  });

  test('Email with space should be invalid', () => {
    expect(validateEmail('ads afas@asf.com')).toBeFalsy();
  });

});

describe('Test user password validation', () => {
  test('Password with 8 characters 1 digit and special character should be valid', () => {
    expect(validatePassword('asdfghJ2!')).toBeTruthy();
  });

  test('Password with < 8 characters 1 digit and special character should be invalid', () => {
    expect(validatePassword('asJ2!')).toBeFalsy();
  });

  test('Password without 1 digit should be invalid', () => {
    expect(validatePassword('afksffafsJ!')).toBeFalsy();
  });
  
  test('Password without 1 special character should be invalid', () => {
    expect(validatePassword('asdfgmkdsng1')).toBeFalsy();
  });
});

