sap.ui.define([
	"sap/ui/base/Object",
	"sap/ui/model/json/JSONModel"

], function (
	BaseObject,
	JSONModel
) {
	"use strict";
	return BaseObject.extend("consultaprodutos.services.sapGWService", {
		/**
		* 
		* @returns 
		*/

        getFlightList: function (oModel) {
            return new Promise(async (resolve) => {
                let parameters = {
                    url: "http://127.0.0.1:5000",
                    method: "GET",
                    async: false,
                    crossDomain: true
                    
                };

                $.ajax(parameters).done(function (response) {
                    resolve(response)      
                }.bind(this)).fail(function(){
                    resolve(null) 
                })
            })
        }

	});
});