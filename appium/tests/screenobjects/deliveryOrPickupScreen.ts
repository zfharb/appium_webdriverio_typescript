import Screen from './screen';

const SELECTORS = {
    DELIVERY_BUTTON: '',

    PICKUP_BUTTON: "//*[text() = 'Pick Up']"
};

class DeliveryOrPickupScreen extends Screen {
    constructor() {
        super(SELECTORS);
    }

    get deliveryButton() {
        $(SELECTORS.DELIVERY_BUTTON).waitForDisplayed(10000);
        return $(SELECTORS.DELIVERY_BUTTON);
    }

    get pickupButton() {
        $(SELECTORS.PICKUP_BUTTON).waitForDisplayed(10000);
        return $(SELECTORS.PICKUP_BUTTON);
    }
}

export default new DeliveryOrPickupScreen();
