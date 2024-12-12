
import { When, } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';


When('I wait repeatedly until I die', async function () {
  // continue to wait until we die
  while (await getWhereIAm(this) !== 'I died') {
    let menuChoiceElement = await getMenuChoiceElement(this, 'Wait');
    await menuChoiceElement.click();
  }
});