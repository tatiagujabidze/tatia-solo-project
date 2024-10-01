import { By } from "selenium-webdriver"; 
import { BasePage } from "./basePage";


export class airBnb extends BasePage {
    iconBtn: By = By.xpath('//div[@class="_3hmsj"]');
    signUp: By = By.xpath('//div[@class="lgh3vnd atm_am_1gtjylf dir dir-ltr"]');
    continueWEmail: By = By.xpath('(//div[@class="_jwti9r"])[4]');
    emailField: By = By.id('email-login-email');
    continue: By = By.xpath('//button[@class="l1ovpqvx atm_1he2i46_1k8pnbi_10saat9 atm_yxpdqi_1pv6nv4_10saat9 atm_1a0hdzc_w1h1e8_10saat9 atm_2bu6ew_929bqk_10saat9 atm_12oyo1u_73u7pn_10saat9 atm_fiaz40_1etamxe_10saat9 b1gx9nk4 atm_9j_tlke0l atm_9s_1o8liyq atm_gi_idpfg4 atm_mk_h2mmj6 atm_r3_1h6ojuz atm_rd_glywfm atm_70_5j5alw atm_tl_1gw4zv3 atm_9j_13gfvf7_1o5j5ji c1p6dday atm_bx_48h72j atm_c8_2x1prs atm_g3_1jbyh58 atm_fr_11a07z3 atm_cs_10d11i2 atm_5j_t09oo2 atm_kd_glywfm atm_l8_srw7uq atm_uc_1lizyuv atm_r2_1j28jx2 atm_jb_1fkumsa atm_3f_glywfm atm_26_1c4m0nl atm_7l_1v2u014 atm_uc_glywfm__1rrf6b5 atm_kd_glywfm_1w3cfyq atm_uc_aaiy6o_1w3cfyq atm_70_1b8lkes_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8_idpfg4_e4a3ld atm_gi_idpfg4_e4a3ld atm_3f_glywfm_1r4qscq atm_kd_glywfm_6y7yyg atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_kd_glywfm_pfnrn2_1oszvuo atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_1b8lkes_pfnrn2_1oszvuo atm_3f_glywfm_1icshfk_1oszvuo atm_l8_idpfg4_1icshfk_1oszvuo atm_gi_idpfg4_1icshfk_1oszvuo atm_3f_glywfm_b5gff8_1oszvuo atm_kd_glywfm_2by9w9_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam atm_tr_18md41p_csw3t1 atm_k4_kb7nvz_1o5j5ji atm_3f_glywfm_1nos8r_uv4tnr atm_26_1c4m0nl_1nos8r_uv4tnr atm_7l_1v2u014_1nos8r_uv4tnr atm_3f_glywfm_4fughm_uv4tnr atm_26_4ccpr2_4fughm_uv4tnr atm_7l_1v2u014_4fughm_uv4tnr atm_26_4ccpr2_xggcrc_uv4tnr atm_3f_glywfm_csw3t1 atm_26_mrkt56_csw3t1 atm_7l_1v2u014_csw3t1 atm_3f_glywfm_1o5j5ji atm_26_4ccpr2_1o5j5ji atm_7l_1v2u014_1o5j5ji atm_26_4ccpr2_1mj13j2 f1ewl0po atm_vy_1osqo2v dir dir-ltr"]');
    firstName: By = By.name('user[first_name]');
    lastName: By = By.name('user[last_name]');
    birthDay: By = By.id('email-signup-date');
    passWord: By = By.xpath('//input[@id="email-signup-password"]');
    show: By = By.xpath('//button[text()="Show"]');
    leftArrow: By = By.xpath('//span[@class="i3tjjh1 atm_mk_h2mmj6 dir dir-ltr"]');
    xBtn: By = By.xpath('//span[@class="i3tjjh1 atm_mk_h2mmj6 dir dir-ltr"]');
    searchDestinations: By = By.xpath('//div[@class="i18libcr atm_mk_h2mmj6 atm_wq_kb7nvz dir dir-ltr"]');
    checkIn: By = By.xpath('//div[text()="Check in"]');
    rightArrow: By = By.xpath('(//span[@class="i3tjjh1 atm_mk_h2mmj6 dir dir-ltr"])[2]');
    may15Th: By = By.xpath('(//div[@class="c1i3jwjb atm_gz_t94yts atm_h0_t94yts c1buxrsh atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_9s_1txwivl atm_h_1h6ojuz atm_fc_1h6ojuz atm_ar_1bp4okc atm_5j_1osqo2v atm_mk_h2mmj6 atm_cs_10d11i2 d1qdcyln atm_7l_dezgoh atm_3f_nneixv n1h9hfmv atm_26_1p8m8iw_1nos8r atm_3f_1vpejwz_1nos8r dir dir-ltr notranslate"])[45]');
    may22Nd: By = By.xpath('(//div[@class="c1i3jwjb atm_gz_t94yts atm_h0_t94yts c1buxrsh atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_9s_1txwivl atm_h_1h6ojuz atm_fc_1h6ojuz atm_ar_1bp4okc atm_5j_1osqo2v atm_mk_h2mmj6 atm_cs_10d11i2 d1qdcyln atm_7l_dezgoh atm_3f_nneixv n1h9hfmv atm_26_1p8m8iw_1nos8r atm_3f_1vpejwz_1nos8r dir dir-ltr notranslate"])[52]');
    addGuests: By = By.xpath('(//div[@class="cz9siyu atm_l8_srw7uq atm_ks_15vqwwr atm_mk_h2mmj6 atm_vv_1q9ccgz atm_vy_1osqo2v atm_wq_kb7nvz dir dir-ltr"])[3]');
    plusBtn: By = By.xpath('(//span[@class="i98ho2o atm_e2_qslrf5 atm_vy_qslrf5 atm_l8_14y27yu dir dir-ltr"])[2]');
    searchBtn: By = By.xpath('//span[@class="t1ng71ne atm_mk_stnw88 atm_tk_idpfg4 atm_fq_idpfg4 atm_n3_idpfg4 atm_6i_idpfg4 atm_vy_1osqo2v atm_e2_1osqo2v atm_ks_15vqwwr atm_ib_1yr6ypa atm_ia_1yr6ypa atm_5j_t09oo2 dir dir-ltr"]');


    //constructor here
    constructor() {
        super({url: 'https://www.airbnb.com/'});
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