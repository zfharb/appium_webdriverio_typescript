const brandToken = {
    plk: "",
    bk: "",
    th: ""
};

export function appLoginWithDeepLink() {
    console.log("fak'n the login ;)");

    browser.execute("mobile: deepLink", {
        url: brandToken.plk,
        package: ""
    });
}
