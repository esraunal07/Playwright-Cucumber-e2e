
import { Given, When, Then, world } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, cheatIfNeeded} from './helpers.js'


Then('click repeatedly button {string}', async function ( button) {
 
 // press wait repeatedly until the description contains a certain text
    /* while (await getMenuChoiceElement(this, 'Buy an espresso', false)) {
    
    
    let exButton = await getMenuChoiceElement(this, button);
    await exButton.click();
  }*/
    let menuChoiceElement = await getMenuChoiceElement(this, button);
    await menuChoiceElement.click();
    await menuChoiceElement.click();
});


Then('money decreses till {float}', async function(expectedMoney){
  const moneyElement = await this.get('.money .val');
  
  // Get the text content of the element
  let moneyText = await moneyElement.textContent();

  // Parse the text content to a float
  let moneyN = parseFloat(moneyText);

  // Now check that the parsed value matches the expected value
  expect(moneyN).to.equal(expectedMoney);
  console.log(moneyN, expectedMoney)
  
});