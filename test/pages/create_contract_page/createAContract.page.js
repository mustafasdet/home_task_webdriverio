class CreateContract {

    //page actions
    
    /**
     * click given contract type option on the page
     * @param {*} contractTypeName 
     * @returns 
     */

    selectContractType(contractTypeName){
        const contractTypeElement = 'h4='+contractTypeName;
        return $(contractTypeElement).click();
    }

    /**
     * verify that clicked contract type is displayed correctly
     * by checking current url
     * @param {*} contractTypeName 
     * @returns 
     */
    verifyContractTypePage(contractTypeName){
        let contractNameArray = contractTypeName.split(' ');
        return expect(browser).toHaveUrlContaining(contractNameArray[0].toLowerCase());
    }

}

module.exports = new CreateContract();