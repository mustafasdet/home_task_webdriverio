class BasePage {

    get createContract () {
        return $('p=Create A Contract');
    }

    clickCreateContract (heading1) {
        const headingLocator = 'p='+heading1;
        console.log($(headingLocator).getText());
        return  $(headingLocator).click;
    }

    // get contractTypeHeader(){
    //     return $('p='+heading1);
    // }
    verifyContractMenu(heading1){
        return expect(this.contractTypeHeader).toHaveText(heading1);
    }
    // clickMenu(menuName){
    //     const locator = 'p='+menuName;        
    //     return $(locator).click();
    // }

    verifyMenu(menuName){
        let menuArray = menuName.split(' ');
        return expect(browser).toHaveUrlContaining(menuArray[0].toLowerCase());
    }

}

module.exports = new BasePage();
