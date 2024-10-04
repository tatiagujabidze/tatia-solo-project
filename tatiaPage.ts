import { By } from "selenium-webdriver"; 
import { BasePage } from "./basePage";


export class pinterest extends BasePage {
    logIn: By = By.xpath('(//div[@class="wc1 zI7 iyn Hsu"])[1]');
    eMail: By = By.id('email');
    passWord: By = By.id('password');
    logInToAccount: By = By.xpath('//button[@class="RCK Hsu USg adn gn8 L4E kVc iyn S9z Vxj aZc Zr3 hA- Il7 hNT BG7"]');
    explore: By = By.xpath('(//div[@class="Eqh fev zI7 iyn Hsu"])[2]');
    exploreMore: By = By.xpath('(//div[@class="MIw QLY Rym ojN p6V sLG zI7 iyn Hsu"])[4]');
    firstPhoto: By = By.xpath('(//div[@class="XiG zI7 iyn Hsu"])[9]');
    leftArrow: By = By.xpath('(//button[@class="yfm adn yQo lnZ wsz"])[2]');
    secondPhoto: By = By.xpath('(//div[@class="XiG zI7 iyn Hsu"])[26]');
    thirdPhoto: By = By.xpath('(//div[@class="XiG zI7 iyn Hsu"])[14]');
    react: By = By.xpath('(//div[@class="FNs zI7 iyn Hsu"])[2]');
    xItOut: By = By.xpath('(//div[@class="KuF kVc adn yQo S9z ncU BG7"])[6]');
    home: By = By.xpath('(//div[@class="Eqh fev zI7 iyn Hsu"])[1]');
    search: By = By.name('searchBoxInput');
    filter: By = By.xpath('(//div[@class="XiG zI7 iyn Hsu"])[8]');
    products: By = By.xpath('(//div[@class="S9z eEj CCY Tbt L4E e8F BG7"])[6]');
    apply: By = By.xpath('//button[@class="RCK Hsu USg adn NTm KhY CCY S9z Vxj aZc Zr3 hA- Il7 hNT BG7"]');
    livingRoom: By = By.xpath('(//div[@class="Yl- MIw Hb7"])[3]');
    save: By = By.xpath('(//button[@class="akY KI_ Hsu USg jKZ CCY xuZ lnZ wsz adn jKZ"])[1]');
    fallDecorIdeas: By = By.xpath('(//div[@class="MIw QLY Rym ojN p6V sLG zI7 iyn Hsu"])[2]');
    ideaOne: By = By.xpath('(//img[@class="hCL kVc L4E MIw"])[3]');
    ideaTwo: By = By.xpath('(//img[@class="hCL kVc L4E MIw"])[4]');
    ideaThree: By = By.xpath('(//img[@class="hCL kVc L4E MIw"])[5]');
    reaction: By = By.xpath('(//div[@class="FNs zI7 iyn Hsu"])[1]');
    backArrow: By = By.xpath('//div[@class="x8f _O1 KS5 mQ8 uwe NSs"]');
    moreArrow: By = By.xpath('(//button[@class="yfm adn yQo lnZ wsz"])[1]');
    settings: By = By.xpath('//span[text()="Settings"]');
    accountManagement:  By = By.xpath('//div[text()="Account management"]');
    homeFeed: By = By.xpath('//div[text()="Tune your home feed"]');
    notifications: By = By.xpath('//div[text()="Notifications"]');
    brandContent: By = By.xpath('//div[text()="Branded Content"]');
    beABetaTester: By = By.xpath('//span[text()="Be a beta tester"]');
    logOut: By = By.xpath('//span[text()="Log out"]');


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