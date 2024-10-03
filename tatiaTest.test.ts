import { pinterest } from "./tatiaPage";
const fs = require('fs');
const pin = new pinterest();


test('Log in to account', async () => {
    await pin.navigate();
    await pin.click(pin.logIn)
    await pin.driver.sleep(1000);
    await pin.setInput(pin.eMail, 'lilu@lilulilu.com');
    await pin.driver.sleep(1000);
    await pin.setInput(pin.passWord, 'testdevmountain');
    await pin.driver.sleep(1000);
    await pin.click(pin.logInToAccount);
    await pin.driver.sleep(7000);
    await fs.writeFile(`${__dirname}//SignedIn.png`,
        await pin.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Welcome to Pinterest!');
        });
});

test('explore', async () => {
    await pin.click(pin.explore);
    await pin.driver.sleep(2000);
    await pin.click(pin.exploreMore);
    await pin.driver.sleep(2000);
    await pin.click(pin.firstPhoto);
    await pin.driver.sleep(2000);
    await pin.click(pin.leftArrow);
    await pin.driver.sleep(2000);
    await pin.click(pin.secondPhoto);
    await pin.driver.sleep(2000);
    await pin.click(pin.leftArrow);
    await pin.driver.sleep(2000);
    await pin.click(pin.thirdPhoto);
    await pin.driver.sleep(2000);
    await pin.click(pin.react);
    await pin.driver.sleep(2000);
    await pin.click(pin.xItOut);
    await pin.driver.sleep(2000);
    await pin.click(pin.home);
});

test('Search for a theme', async () => {
    await pin.setInput(pin.search, 'Interior Design');
    await pin.driver.sleep(2000);
    await pin.click(pin.filter);
    await pin.driver.sleep(2000);
    await pin.click(pin.products);
    await pin.driver.sleep(2000);
    await pin.click(pin.apply);
    await pin.driver.sleep(2000);
    await pin.click(pin.livingRoom);
    await pin.driver.sleep(2000);
    await pin.click(pin.save);
    await pin.driver.sleep(2000);
    await pin.click(pin.home);
    await pin.driver.quit();

});