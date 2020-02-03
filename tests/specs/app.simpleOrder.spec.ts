import LandingScreen from '../screenobjects/landingScreen';
import deliveryOrPickupScreen from '../screenobjects/deliveryOrPickupScreen';

import { appLoginWithDeepLink } from '../../helpers';
import { switchToContext, CONTEXT_REF } from '../../helpers/webview';

describe('WebdriverIO and Appium', () => {
    it('should be able to place an order successfully', () => {
        console.log('starting.........................');
        appLoginWithDeepLink();

        switchToContext(CONTEXT_REF.WEBVIEW);

        LandingScreen.orderNowButton.click();
        deliveryOrPickupScreen.pickupButton.click();

        console.log('ending.........................');
    });
});
