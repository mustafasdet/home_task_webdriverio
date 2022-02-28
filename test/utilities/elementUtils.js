class ElementUtil{
    //actions

    /**
     * locate input box with given placeholder name
     * then send given text to the input box
     * @param {*} inputName 
     * @param {*} text 
     * @returns 
     */
    async sendTextToInputs(inputName,text){
        const labelElement = await $('label='+inputName);
        const element = await labelElement.nextElement();
        return await element.addValue(text);
    }

    /**
     * locate dropdown box with given placeholder name
     * then select the given option
     * @param {*} dropdownName 
     * @param {*} option 
     * @returns 
     */
    async chooseDropdownOptionsByText(dropdownName,option){
        const dropdown = await $('label='+dropdownName).nextElement();
        const dropdownIcon = await dropdown.$$('div')[2];
        await dropdownIcon.click();
        return await $('div='+option).click();
    }

}
module.exports = new ElementUtil();