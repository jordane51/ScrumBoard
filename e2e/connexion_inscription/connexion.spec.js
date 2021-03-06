describe('Connextion test suit', function() {

  beforeEach(function() {
    browser.driver.get('about:blank')
    browser.get('/');
  });

  it('should connect using the default user', function() {

    // Filling the mail field
    var mailField = element(by.id('mail_field_login'));
    mailField.clear();
    mailField.sendKeys('test@test.com');

    // Filling the password field
    var passField = element(by.id('password_field_login'));
    passField.clear();
    passField.sendKeys('test');

    // Clicking 'connexion'
    element(by.id('next_button')).click();

    browser.sleep(3000);

    // Expecting to be authentified on the home page
    expect(element.all(by.id('user_name')).getInnerHtml()).toContain('test@test');
  });

  it('should fail to connect with a wrong mail address', function() {

    // Filling the mail field
    element(by.id('mail_field_login')).sendKeys('fail');

    // Clicking 'connexion'
    element(by.id('next_button')).click();

    // Expect an error message
    expect(element(by.id('invalid_mail_login')).isDisplayed()).toBeTruthy();
  });

  it('should fail to connect with a wrong password', function() {

    // Filling the mail field
    var mailField = element(by.id('mail_field_login'));
    mailField.clear();
    mailField.sendKeys('test@test.com');

    // Filling the password field
    element(by.id('password_field_login')).sendKeys('raté');

    // Clicking 'connexion'
    element(by.id('next_button')).click();

    // Expect an error message
    expect(element(by.id('invalid_password_login')).isDisplayed()).toBeTruthy();
  });
});