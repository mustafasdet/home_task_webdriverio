class LoginPage {
    
    open() {
        return browser.url('https://app.deel.training/login');
    }
   
    get loginEmail () {
        return $('#mui-1');
    }

    get loginPassword () {
        return $('#mui-2');
    }

    get submitButton (){
        return $('button[type="submit"] div');
    }

    async login (email, password) {
        await this.loginEmail.setValue(email);
        await this.loginPassword.setValue(password);
        await this.submitButton.click();
    }
    get accountEmail() {
        return $('.full-width-ellipsis-content');
    }

    verifyLogin(email){
        console.log(this.accountEmail.getText());
        return expect(this.accountEmail).toHaveText(email);
    }

}
module.exports = new LoginPage();