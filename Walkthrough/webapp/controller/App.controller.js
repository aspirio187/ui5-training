sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "user strict";

    return Controller.extend("sap.ui.demo.Walkthrough.controller.App", {

        onInit: function () {
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello: function () {
            MessageToast.show("Hello World!");
        }
    });
})