class FixedRate {

    //page locators
    get nextButton() {
        return $('div=next');
    }

    get createContractButton(){
        return $('div=create contract')
    }

    get specialClausesButton(){
        return $('div=add a special clause')
    }

    get textArea(){
        return $('.textarea-container textarea')
    }

    //page actions   
    
    /**
     * select the day before current day from calendar
     * @returns 
     */
    async selectContractDay(){
        const date = new Date();
        await $('.deel-ui__calendar-input-container__input_content_value').click();
        return await $(`abbr=${date.getDate()-1}`).click();
    }

    /**
     * verify that user is on correct form 
     * by checking form title
     * @param {*} formTitle 
     * @returns 
     */
    async verifyFormTitle(formTitle){
        const title = await $('h4='+formTitle);
        return await expect(title).toBeDisplayed();
    }

}

module.exports = new FixedRate();