class CreateContractPage {
// get contractNameField() {
//     return $('input[class="deel-ui__input-component__input deel-ui__input-component__input_placeholder"]');
// }
get contractName() {
    return $('label=Contract name').nextElement();
}

async sendContractName(contractName){
    const element = await this.contractName;
     return await element.addValue(contractName);   
}
get contractorTaxResidence() {
    return $('label=Contractor\'s tax residence');
}
async selectContractorTaxResidence(taxResidence){
    const dropdown = await this.contractorTaxResidence.nextElement();
    const dropdownArrow = await dropdown.$$('div')[2];
    dropdownArrow.click();
    return await $('div='+taxResidence).click();   
}

// async selectJobTitle(jobTitle){
//     const dropdown = await $('label=Job title').nextElement();
//     const dropdownJobs = await dropdown.$$('div')[2];
//     dropdownJobs.click();
//     return await $('div='+jobTitle).click();
// }

async selectState(state){
    const dropdown = await $('label=Choose a state').nextElement();
    const dropdownStates = await dropdown.$$('div')[2];
    dropdownStates.click();
    return await $('div='+state).click();
}


async sendJobTitle(jobTitle){
    return await $('label=Job title').nextElement().addValue(jobTitle);
}

// async sendSeniorLevel(seniorLevel){
//     return await $('label=Seniority level').nextElement().addValue(seniorLevel);
// }

async selectSeniorLevel(seniorLevel){
    const dropdown = await $('label=Seniority level').nextElement();
    const dropdownOptions = dropdown.$$('div')[2];
    dropdownOptions.click();
    return await $('div='+seniorLevel).click();
}

get chooseState(){
    return $('label=Choose a state');
}

get jobTitle(){
    return $('label=Job title');
}

get seniorityLevel(){
    return $('label=Seniority level');
}

get scopeOfWork() {
    return $('label=Scope of work').nextElement();
}

async sendText(element,text){
    return await element.addValue(text);
}

async selectContractDate(){
    const date = new Date();
    await $('.deel-ui__calendar-input-container__input_content_value').click();
    return await $(`abbr=${date.getDate()-1}`).click();
}

get contractorStartDate(){
    return$('label=Contractor\'s start date');
}

get nextButton(){
    return $('div=next');
}

async clickNext(element){
    return await element.click();
}

// locators on "Market rate insights"

get marketRateInsights(){
    return $('h4=Market rate insights');
}

async verifyHeading(element) {
    return expect(element).toBeDisplayed();
}

get currency(){
    return $('label=Currency').nextElement();
}

async dropdownSelect(element, option){
    // const currencyDropdown = await $('label=Currency').nextElement();
    const dropdownOptions = element.$$('div')[2];
    dropdownOptions.click();
    return await $('div='+option).click();
}

get paymentRate(){
    return $('label=Payment rate').nextElement();
}

get paymentFrequency(){
    return $('label=Payment frequency').nextElement();
}

//locators on First payment
get defineFirstPayment(){
    return $('h4=Define first payment date');
}

// locators on benefits and extras
get terminationDate(){
    return $('p=Termination date');
}

get specialClause(){
    return $('div=add a special clause');
}
get specialClauseTextArea(){
    return $('.textarea-container textarea');
}

//locators on Compliance
get contractCompliance_h4(){
    return $('h4=Contract compliance');
}

get createContractButton() {
    return $('div=create contract');
}

get signatures_h4(){
    return $('h4=Signatures');
}



}
module.exports = new CreateContractPage();