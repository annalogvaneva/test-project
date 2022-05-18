Feature('Price');

Scenario('Price', async ({ I }) => {
    I.amOnPage('https://www.reg.ru/web-sites/website-builder/'); // open site
    I.see('REG.RU'); // control action 
    I.see('Бесконечный'); // control action
    let cost = await I.grabTextFrom('.b-plans-pillar__price_style_single'); // get price of rate
    console.log(`I catched cost - ${cost}`); // output of what we got on the previous step
    I.click({xpath: '//*[@id="content"]/div[2]/form/div/div[3]/div/div[3]/div'}); // go to the new page
    I.see('Конструктор сайтов'); //control action
    I.seeElement({xpath: '//div[@class="base-footer"]'}); // searching of footer
    let url = await I.grabCurrentUrl(); // assigning a variable, control action
    console.log(`Current URL is [${url}]`); // output of previous action
    let footer_cost = await I.grabTextFrom('.order-footer-price__price'); // assigning a variable
    console.log(`I catched footer_cost - ${footer_cost}`); // output of previous step
    if (cost.replace(/\s/g, '') === footer_cost.replace(/\s/g, '')) {//  comparison of the received data 
      console.log('true') // output of result of comparison
    }

    });