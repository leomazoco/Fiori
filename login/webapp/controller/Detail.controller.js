sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("login.controller.Detail", {
        onInit() {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.getRoute("Routedetail").attachMatched(this._onRouteMatched, this);
          
        },

      });
    }
  );
  