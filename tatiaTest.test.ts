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
    await pin.driver.sleep(2000);
});


test('React on a picture', async () => {
    await pin.click(pin.explore);
    await pin.driver.sleep(2000);
    await pin.click(pin.fallDecorIdeas);
    await pin.driver.sleep(4000);
    await pin.click(pin.ideaOne);
    await pin.driver.sleep(4000);
    await pin.click(pin.reaction);
    await pin.driver.sleep(4000);
    await pin.click(pin.backArrow);
    await pin.driver.sleep(4000);
    await pin.click(pin.ideaTwo);
    await pin.driver.sleep(4000);
    await pin.click(pin.reaction);
    await pin.driver.sleep(4000);
    await pin.click(pin.backArrow);
    await pin.driver.sleep(4000);
    await pin.click(pin.ideaThree);
    await pin.driver.sleep(4000);
    await pin.click(pin.reaction);
    await pin.driver.sleep(4000);
    await pin.click(pin.backArrow);
    await pin.driver.sleep(4000);
    await pin.click(pin.home);
    await pin.driver.sleep(4000);
});


test('Search for a theme', async () => {
    await pin.setInput(pin.search, 'Interior Design\n');
    await pin.driver.sleep(5000);
    await pin.click(pin.filter);
    await pin.driver.sleep(3000);
    await pin.click(pin.products);
    await pin.driver.sleep(3000);
    await pin.click(pin.apply);
    await pin.driver.sleep(3000);
    await pin.click(pin.livingRoom);
    await pin.driver.sleep(3000);
    await pin.click(pin.save);
    await pin.driver.sleep(3000);
    await pin.click(pin.home);
    await pin.driver.sleep(3000);
});


test('Click the buttons', async () => {
    await pin.click(pin.moreArrow);
    await pin.driver.sleep(2000);
    await pin.click(pin.settings);    
    await pin.driver.sleep(2000);
    await pin.click(pin.accountManagement);
    await pin.driver.sleep(2000);
    await pin.click(pin.homeFeed);
    await pin.driver.sleep(2000);
    await pin.click(pin.notifications);
    await pin.driver.sleep(2000);
    await pin.click(pin.brandContent);
    await pin.driver.sleep(2000);
    await pin.click(pin.home); 
});


test('Be a Beta tester', async () => {
    await pin.click(pin.moreArrow);
    await pin.driver.sleep(1000);
    await pin.click(pin.beABetaTester);
});


test('Log out', async () => {
    await pin.click(pin.moreArrow);
    await pin.driver.sleep(2000);
    await pin.click(pin.logOut);
    await pin.driver.quit();
});