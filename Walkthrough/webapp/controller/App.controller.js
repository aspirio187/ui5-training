sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "user strict";

    return Controller.extend(
        "sap.ui.demo.Walkthrough.controller.App", {
        onShowHello: function () {
            // show a native JavaScript alert
            alert("Hello World!");
        }
    });
})