class BasePage {
    //page locator
    get clientMail() {
        return $('.full-width-ellipsis-content');
    }

    //page actions
    
    /**
     * verify that user has access to the system
     * by checking user's email display at the bottom left corner of the menu bar
     * @param {*} mailAddress 
     * @returns 
     */
    verifyLogin(mailAddress){
        return expect(this.clientMail).toHaveText(mailAddress);
    }

    /**
     * click the menu based on given menu name
     * @param {*} menuName 
     * @returns 
     */
    clickMenu(menuName){
        const locator = 'p='+menuName;        
        return $(locator).click();
    }

    /**
     * verify that clicked menu is displayed correctly
     * by checking current url
     * @param {*} menuName 
     * @returns 
     */
    verifyMenu(menuName){
        let menuArray = menuName.split(' ');
        return expect(browser).toHaveUrlContaining(menuArray[0].toLowerCase());
    }
}

module.exports = new BasePage();
