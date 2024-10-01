import { airBnb } from "./tatiaPage";
const fs = require('fs');
const bnb = new airBnb();

test('log in to account', async () => {
await bnb.navigate();
await bnb.click(bnb.iconBtn);
await bnb.click(bnb.signUp);
await bnb.click(bnb.continueWEmail);
await bnb.driver.sleep(1000);
await bnb.setInput(bnb.emailField, 'test@devmountain.com');
await bnb.driver.sleep(1000);
await bnb.click(bnb.continue);
await bnb.driver.sleep(1000);
await bnb.setInput(bnb.firstName, 'Dev');
await bnb.driver.sleep(1000);
await bnb.setInput(bnb.lastName, 'Mountain');
await bnb.driver.sleep(1000);
await bnb.setInput(bnb.birthDay, '07/15/2000');
await bnb.driver.sleep(1000);
await bnb.click(bnb.show);
await bnb.setInput(bnb.passWord, 'ScreenShotTime!');
await fs.writeFile(`${__dirname}//SignUpPage.png`,
    await bnb.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('This is how to sign up!');
    });
await bnb.driver.quit();
});