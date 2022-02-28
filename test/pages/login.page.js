class LoginPage {
        
    //page locators
    get inputUsername() {
        return $('input[name="email"]');
    }

    get inputPassword() {
        return $('input[name="password"]');
    }

    get btnSubmit() {
        return $('button[type="submit"] div');
    }
    
    //page actions
    
    /**
     * enter email and password to login form
     * check whether user is able to access to the system
     * @param {*} email 
     * @param {*} password 
     */
    async login (email, password) {
        await this.inputUsername.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * nagivates to login page of application
     * @returns 
     */
    open() {
        return browser.url('https://app.deel.training/login');
    }
}

module.exports = new LoginPage();
