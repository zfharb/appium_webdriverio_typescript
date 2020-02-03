import Screen from './screen';

const SELECTORS = {
    EMAIL_BOX: 'android=new UiSelector().textContains("Email Address")',
    NAME_BOX: 'android=new UiSelector().textContains("Name")',
    PHONE_BOX: 'android=new UiSelector().textContains("Phone Number")',
    AGREE_CHECK_BOX:
        '//android.widget.CheckBox[@content-desc="I agree to the PopeyesPrivacy PolicyandTerms Of Service."]',
    SIGN_UP_BUTTON: '(//android.widget.Button[@content-desc="SIGN UP"])[2]'
};

class SignupScreen extends Screen {
    constructor() {
        super(SELECTORS);
    }

    get emailTextBox() {
        return $(SELECTORS.EMAIL_BOX);
    }

    get nameBox() {
        return $(SELECTORS.NAME_BOX);
    }

    get phoneBox() {
        return $(SELECTORS.PHONE_BOX);
    }

    get agreeCheckBox() {
        return $(SELECTORS.AGREE_CHECK_BOX);
    }

    get signUpButton() {
        return $(SELECTORS.SIGN_UP_BUTTON);
    }
}

export default new SignupScreen();
