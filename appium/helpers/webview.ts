export const CONTEXT_REF = {
    NATIVE: 'native',
    WEBVIEW: 'webview'
};

export function waitForWebViewContextLoaded() {
    browser.waitUntil(
        () => {
            const currentContexts = getCurrentContexts();
            currentContexts.includes(CONTEXT_REF.WEBVIEW);
            return currentContexts.length > 1 && currentContexts.includes(CONTEXT_REF.WEBVIEW);
        },
        10000,
        'Webview context not loaded',
        100
    );
}

export function switchToContext(context) {
    browser.switchContext(getCurrentContexts()[context === CONTEXT_REF.WEBVIEW ? 1 : 0]);
}

export function getCurrentContexts() {
    return browser.getContexts();
}
