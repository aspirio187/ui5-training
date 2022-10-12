sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "user strict";

    return Controller.extend(
        "sap.ui.demo.Walkthrough.controller.App", {
        onShowHello: function () {
            MessageToast.show("Hello World!");
        }
    });
})