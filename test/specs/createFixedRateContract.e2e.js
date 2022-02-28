const LoginData = require('../../test_data/loginData');
const FixRateContractData = require('../../test_data/createFixRateContractData');
const ElementUtils = require('../utilities/elementUtils');
const LoginPage = require('../pages/login.page');
const BasePage = require('../pages/base.page');
const CreateContract = require('../pages/create_contract_page/createAContract.page');
const FixedRate = require('../pages/create_contract_page/fixedRate.page');

describe('User should be able to create Fixed Rate Contract', () => {
    it('user enters valid credentials and has access to application', async () => {
        //open login page
        await LoginPage.open();
        //login with valid credentials
        await LoginPage.login(LoginData.usermail, LoginData.password);
        //verify user is logged in and accessed to system
        await BasePage.verifyLogin(LoginData.usermail);
    });

    it('user clicks contracts menu', async () => {
        //click create a contract menu
        await BasePage.clickMenu('Create A Contract');
        //verify user is on correct menu
        await BasePage.verifyMenu('Create A Contract');
    });

    it('user selects fixed rate contract option', async () => {
        //click one contract type on the page
        await CreateContract.selectContractType(FixRateContractData.contractType);
        //verify user has correct contract form
        await CreateContract.verifyContractTypePage(FixRateContractData.contractType);
    });

    it('user fills General Info form', async () => {
        //enter text to Contract name input box        
        await ElementUtils.sendTextToInputs('Contract name', FixRateContractData.contractName);
        //choose option from Contractor's tax residence dropdown box
        await ElementUtils.chooseDropdownOptionsByText('Contractor\'s tax residence', FixRateContractData.taxResidence);
        //enter text to Job title input box
        await ElementUtils.sendTextToInputs('Job title', FixRateContractData.jobTitle);
        //choose option from Seniority level dropdown box
        await ElementUtils.chooseDropdownOptionsByText('Seniority level', FixRateContractData.seniorityLevel);
        //enter text to Scope of work textarea
        await $('<textarea>').addValue(FixRateContractData.scopeOfWork);
        //select the contract day (today minus 1)
        await FixedRate.selectContractDay();
        //click next button and nagivate to new form
        await FixedRate.nextButton.click();
    });

    it('user fills Payment Details form', async () => {
        //verify that user is on correct form page
        await FixedRate.verifyFormTitle('Define payment rate');
        //choose option from Currency dropdown box
        await ElementUtils.chooseDropdownOptionsByText('Currency', FixRateContractData.currency);
        //enter text to Payment rate input box
        await ElementUtils.sendTextToInputs('Payment rate', FixRateContractData.paymentRate);
        //choose option from Payment frequency dropdown box
        await ElementUtils.chooseDropdownOptionsByText('Payment frequency', FixRateContractData.paymentFreq);
        //click next button and nagivate to new form
        await FixedRate.nextButton.click();
    });

    it('user fills Define Dates form', async () => {
        //verify that user is on correct form page
        await FixedRate.verifyFormTitle('Define first payment date');
        //click next button and nagivate to new form
        await FixedRate.nextButton.click();
    });

    it('user fills Benefits and Extras form', async () => {
        //verify that user is on correct form page
        await expect(FixedRate.specialClausesButton).toBeDisplayed();
        //click Add A Special Clause button
        await FixedRate.specialClausesButton.click();
        //enter text to textarea
        await FixedRate.textArea.addValue(FixRateContractData.specialClause);
        //click next button and nagivate to new form
        await FixedRate.nextButton.click();
    });

    it('user creates contract with Compliance form', async () => {
        //verify that user is on correct form page
        await FixedRate.verifyFormTitle('Contract compliance');
        //click Create Contract button
        await FixedRate.createContractButton.click();
        //verify that user created a fixed rate contract and is on correct page
        await expect($('p=Waiting For Client Sign')).toBeDisplayed();
    });

});