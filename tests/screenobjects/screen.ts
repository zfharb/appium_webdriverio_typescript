import {} from '@wdio/sync';

export default class Screen {
    private selector: string[];
    constructor(selector) {
        this.selector = selector;
    }

    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
}
