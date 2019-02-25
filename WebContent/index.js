sap.ui.require([ "sap/m/Text", "sap/ui/model/json/JSONModel",
		"sap/ui/core/mvc/XMLView",

], function(Text, JSONModel, XMLView) {
	"use strict";
	sap.ui.getCore().attachInit(function() {

		var oModel = new JSONModel({
			expression : "expression",
			// answerText: "answer",
			panelHeaderText : "Calculator "
		});

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);
		new Text({
			text : "{/answerText}"
		}).placeAt("content");
		new XMLView({
			viewName : "com.sap.calc.calculatorui.view.CalculatorUI"
		}).placeAt("content");

	});
});
