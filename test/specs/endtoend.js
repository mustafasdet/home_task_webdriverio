const loginPage = require('../pages/LoginPage');
const properties = require('../../test_data/properties');
const basePage = require('../pages/BasePage');
const createContractPage = require('../pages/CreateContractPage');

describe('User can create a fixed rate contract', ()=> {
    it('should login with valid credentials and verify the login', async ()=> {
       await loginPage.open();
        await loginPage.login(properties.email1, properties.password1);
        await loginPage.verifyLogin(properties.email1);
    })
        
    it('verify logged in', async()=> {
            
        })
      
    it('navigates to create contract',  async ()=>{
        await basePage.clickCreateContract('Create A Contract');
        await basePage.verifyContractMenu('Create A Contract');
    } )

    it('navigates to fixed rate and verifies the contract type', async () => {
        await basePage.clickContractType(properties.contractType);
        await basePage.verifyContractType();
    })

    it('sends valid data to fill in general info', async ()=>{
        await createContractPage.sendContractName(properties.contractName);
    
        await createContractPage.selectContractorTaxResidence(properties.taxResidence);
        
        // await createContractPage.selectJobTitle('QA Engineer');

        await createContractPage.selectState(properties.taxState);
        await createContractPage.sendJobTitle(properties.jobTitle);
       // await createContractPage.sendSeniorLevel('Head of Department');
        await createContractPage.selectSeniorLevel(properties.seniorityLevel);
        await createContractPage.sendText(createContractPage.scopeOfWork, properties.scopeOfWork);

        await createContractPage.selectContractDate();
        
        await createContractPage.clickNext(createContractPage.nextButton);
        
    })
      
    it('verify the page and fills in payment details', async ()=>{
        await createContractPage.verifyHeading(createContractPage.marketRateInsights);
        await createContractPage.dropdownSelect(createContractPage.currency, properties.currency);
        
        await createContractPage.sendText(createContractPage.paymentRate, properties.paymentRate);
        
        await createContractPage.dropdownSelect(createContractPage.paymentFrequency, properties.paymentFrequency);
       
        await createContractPage.clickNext(createContractPage.nextButton);
       
    })
    
    it('verifies the page and fills in Define dates form', async () => {

        await createContractPage.verifyHeading(createContractPage.defineFirstPayment);
        await createContractPage.clickNext(createContractPage.nextButton);;
    })

    it('verifies the page and fills in Benefits and extras', async()=>{

        await createContractPage.verifyHeading(createContractPage.terminationDate);
        await createContractPage.specialClause.click();
        await createContractPage.sendText(createContractPage.specialClauseTextArea, 'I like testing');
        await createContractPage.clickNext(createContractPage.nextButton);

    })

    it('creates the contract', async()=>{

        await createContractPage.verifyHeading(createContractPage.contractCompliance_h4);
        await createContractPage.clickNext(createContractPage.createContractButton);

        await createContractPage.verifyHeading(createContractPage.signatures_h4);
    })



})