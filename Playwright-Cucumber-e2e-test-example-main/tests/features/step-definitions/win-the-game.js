import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, cheatIfNeeded} from './helpers.js'

Given('I am on the page {string}', async function (url) {
  await this.gotoUrl(url);
  // Sayfanın tamamen yüklendiğini doğrulamak için DOM elemanını bekle
  await this.getByXPathWait('/descendant::*[@class="health"]//*[contains(text(), "50")]', 1000);
  await this.getWait('.choices ul li:nth-child(2)', 1000); // Menü öğesinin yüklenmesini bekleyin
});

Given('I moved to the location {string}', async function (to) {
  await navigateTo(this, to);
  await this.getWait('.location-info', 1000); 
});

Given(' my current location is {string}', async function (position) {
  expect(await getWhereIAm(this)).to.equal(position);
});

When('I wait long enough for the description to contain the text {string}', async function (partOfDescription) {
  while (!await checkIfDescriptionContainsString(this, partOfDescription, true)) {
    await cheatIfNeeded(this); // Eğer sağlık düşükse, testin arıza yapmaması için
    let waitButton = await getMenuChoiceElement(this, 'Wait');
    await waitButton.click();  
    await this.getWait('.description', 1000); 
  }
});

Then('my hipster bag should contain {string}', async function (thing) {
  await this.getWait('.bag-content', 1000);
  let textInBag = await this.getText(await this.get('.bag-content'));
  expect(textInBag).to.contain(thing);
});

Then('click the button {string}', async function(button){
  let jamButton = await getMenuChoiceElement(this, button);
  await jamButton.click();
});

Then('money increases till {float}', async function(expectedMoney){
  let moneyElement = await this.get('.money .val');
  await this.getWait('.money .val', 1000); 
  let moneyText = await moneyElement.textContent();
  let moneyN = parseFloat(moneyText);
  expect(moneyN).to.equal(expectedMoney);
});

//Win the game
When('description to contain the text {string}', async function (b) {
 let text = await checkIfDescriptionContainsString(this, b, true)
});

Then('click repeatedly button {string} until I win', async function (button) {
  // continue to wait until we die
  while (await getWhereIAm(this) !== 'I won') {
    let menuChoiceElement = await getMenuChoiceElement(this, button);
    await menuChoiceElement.click();
  }
});

Then('my current location should be{string}', async function (position) {
  expect(await getWhereIAm(this)).to.equal(position);
});