const { $, expect } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    
    get fieldUsername () {
        return $('#user-name');
    }

    get fieldPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }
    get errorLockedOutUser(){
        return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]');
    }

    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout : 2500});
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }
    async validateLockedOutUserError (dynamicMessage) {
        await this.errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorLockedOutUser(dynamicMessage)).toBeDisplayed()
    }
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();