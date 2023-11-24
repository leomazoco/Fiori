sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("login.controller.LoginApp", {
            onInit: function () {

                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteLoginApp").attachMatched(this._onRouteMatched, this); 

            },

            onLoginUser: function(){
                var username = this.getView().byId('inputEmail');
                var password = this.getView().byId('password');
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                var user = "leo"
                var pass = "1234"

                if (username.getValue() === ''){
                    MessageBox.error("Por favor, digite seu nome de usuário e senha");
                    return;
                } else if (password === ''){
                    MessageBox.error("Por favor, digite sua senha");
                    return;
            }else{
                if (username.getValue() === user && password.getValue() === pass){
                    MessageBox.success("Login efetuado com sucesso!");
                    this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("Routelist")
       
                } else {
                    MessageBox.error("Nome de usário ou senha incorreto!");
                    return;
                }

                
            }

        },
    });
});
