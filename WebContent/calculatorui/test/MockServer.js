sap.ui.define([
	"sap/ui/core/util/MockServer",
], function (MockServer) {
	"use strict";

	return {
		init: function () {
			// create
			var onCalculate = {
					method: "POST", 
					path: '/com.sap.calcacademy.calculator/expression',
					response: function(oXhr, sUrlParams) {
						oXhr.respondJSON(200, {"Location": "com.sap.calcacademy.calculator/result"}, JSON.stringify(
								{
									"expression": "(19.1-5.2*(20-0.1)-1)/2",
								    "resultID": 2
								}
						));
						return true;
					}
			}
			
			var oMockServer = new sap.ui.core.util.MockServer({
				requests: [
				           onCalculate
				           ]
			});
			// start
			oMockServer.start();
	}
	};
});