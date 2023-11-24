/*global QUnit*/

sap.ui.define([
	"login/controller/LoginApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LoginApp Controller");

	QUnit.test("I should test the LoginApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
