// analytics.js
const analytics = {
    module: "AnalyticsService",

    logEvent(eventName, ...args) {
        console.log(`[${this.module}]`, eventName, ...args);
    },

    sendToServer(data) {
        console.log("📡 Sending to server:", data);
    },
};

// --- 1️⃣ CALL: Borrow the logEvent method for another module
const authModule = { module: "AuthModule" };
analytics.logEvent.call(authModule, "LOGIN_SUCCESS", { userId: 101 });
// [AuthModule] LOGIN_SUCCESS { userId: 101 }

// --- 2️⃣ APPLY: Pass an array of arguments dynamically
const paymentData = ["PAYMENT_SUCCESS", { amount: 999, currency: "INR" }];
analytics.logEvent.apply({ module: "PaymentModule" }, paymentData);
// [PaymentModule] PAYMENT_SUCCESS { amount: 999, currency: "INR" }

// --- 3️⃣ BIND: Pre-bind a context for consistent usage
const boundTracker = analytics.logEvent.bind({ module: "UITracker" });

// Later in the app (e.g., React button click)
document.querySelector("#buy-btn")?.addEventListener("click", () => {
    boundTracker("BUTTON_CLICK", { button: "Buy Now" });
});
// [UITracker] BUTTON_CLICK { button: "Buy Now" }

// --- Extra: Use call + apply together
function trackAndSend(eventName, ...args) {
    // use call to log with analytics context
    analytics.logEvent.call(analytics, eventName, ...args);
    // use apply to forward args to sendToServer
    analytics.sendToServer.apply(analytics, [{ eventName, data: args }]);
}

trackAndSend("PAGE_VIEW", { page: "/home" });
// [AnalyticsService] PAGE_VIEW { page: '/home' }
// 📡 Sending to server: { eventName: 'PAGE_VIEW', data: [ { page: '/home' } ] }
