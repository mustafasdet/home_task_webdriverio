class BasePage {
// I havent used the following. Instead I have used the next one. 
    get createContract () {
        return $('p=Create A Contract');
    }

    clickCreateContract (heading1) {
        const headingLocator = 'p='+heading1;
        return  $(headingLocator).click();
    }

    // get contractTypeHeader(){
    //     return $('p='+heading1);
    // }
    verifyContractMenu(heading1){
        const ContractType_H1 = 'p='+heading1;
        return expect($(ContractType_H1)).toHaveText(heading1);
    }
    // clickMenu(menuName){
    //     const locator = 'p='+menuName;        
    //     return $(locator).click();
    // }

    // verifyMenu(menuName){
    //     let menuArray = menuName.split(' ');
    //     return expect(browser).toHaveUrlContaining(menuArray[0].toLowerCase());
    // }

    clickContractType(contractType) {
        const contractTypeLocator = 'h4='+contractType;
        return $(contractTypeLocator).click();
    }
    get contractTypeFixedRate() {
        return $('h2=Creating a fixed contract');
    }
    verifyContractType() {
        return expect(this.contractTypeFixedRate).toHaveTextContaining('fixed contract');
    }



}

module.exports = new BasePage();
