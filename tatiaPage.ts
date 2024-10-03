import { By } from "selenium-webdriver"; 
import { BasePage } from "./basePage";


export class pinterest extends BasePage {
    logIn: By = By.xpath('(//div[@class="wc1 zI7 iyn Hsu"])[1]');
    eMail: By = By.id('email');
    passWord: By = By.id('password');
    logInToAccount: By = By.xpath('//button[@class="RCK Hsu USg adn gn8 L4E kVc iyn S9z Vxj aZc Zr3 hA- Il7 hNT BG7"]');
    explore: By = By.xpath('(//div[@class="Eqh fev zI7 iyn Hsu"])[2]');
    exploreMore: By = By.xpath('(//div[@class="MIw QLY Rym ojN p6V sLG zI7 iyn Hsu"])[1]');
    firstPhoto: By = By.xpath('(//div[@class="XiG zI7 iyn Hsu"])[9]');
    leftArrow: By = By.xpath('(//button[@class="yfm adn yQo lnZ wsz"])[2]');
    secondPhoto: By = By.xpath('(//div[@class="XiG zI7 iyn Hsu"])[26]');
    thirdPhoto: By = By.xpath('(//div[@class="XiG zI7 iyn Hsu"])[14]');
    react: By = By.xpath('(//div[@class="FNs zI7 iyn Hsu"])[2]');
    xItOut: By = By.xpath('(//div[@class="KuF kVc adn yQo S9z ncU BG7"])[6]');
    home: By = By.xpath('(//div[@class="Eqh fev zI7 iyn Hsu"])[1]');
    search: By = By.name('searchBoxInput');
    filter: By = By.xpath('(//div[@class="XiG zI7 iyn Hsu"])[8]');
    products: By = By.xpath('(//div[@class="KS5 hs0 un8 C9i TB_"])[11]');
    apply: By = By.xpath('//button[@class="RCK Hsu USg adn NTm KhY CCY S9z Vxj aZc Zr3 hA- Il7 hNT BG7"]');
    livingRoom: By = By.xpath('(//div[@class="XiG zI7 iyn Hsu"])[53]');
    save: By = By.xpath('//div[@class="Eqh Jea jx- zI7 iyn Hsu"]');




    //constructor here
    constructor() {
        super ({url: 'https://www.pinterest.com/'});
    };

    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1000);
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };

    async scrollToElement(elementBy: By) {
        const scrollThing = await this.getElement(elementBy);
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform()};
};