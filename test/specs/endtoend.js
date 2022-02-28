const loginPage = require('../pages/LoginPage');
const properties = require('../../test_data/properties');
// const { QUESTIONNAIRE } = require('@wdio/cli/build/constants');
const basePage = require('../pages/BasePage');

describe('User can create a fixed rate contract', ()=> {
    it('should login with valid credentials and verify the login', async ()=> {
       await loginPage.open();
        await loginPage.login(properties.email1, properties.password1);
        await loginPage.verifyLogin(properties.email1);
    })
        
    it('verify logged in', async()=> {
            
        })
      
    it('navigates to create contract', async ()=>{

        basePage.clickCreateContract('Create A Contract');
        basePage.verifyContractMenu('qqqqq');
    } )
      
    

})