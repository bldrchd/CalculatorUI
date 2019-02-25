sap.ui.define([ "sap/ui/core/mvc/Controller", 
                "sap/m/MessageToast", 
                "sap/ui/model/json/JSONModel",
                "sap/ui/model/resource/ResourceModel"
                ], function(Controller,	MessageToast, JSONModel, ResourceModel) {
				"use strict";
				
			return Controller.extend("com.sap.calc.calculatorui.controller.HistoryList", {
			onGetHistory : function() {
				var myModel = new ResourceModel({
						bundleName: "com.sap.calc.calculatorui.calc"
					});
					this.getView().setModel(myModel, "calc");
					var view = this.getView();
					
					var responsedata;
					 responsedata = $.ajax({ 
						type: "GET",   
						url: "/com.sap.calcacademy.calculator/history",   
						async: false,
						dataType: "json",
						success: function (ndata) {
							var jresult = ndata.result;
							var oModel2 = new JSONModel({
								history : ndata								
							});
							view.setModel(this.oModel2, "HistoryPanel");
						}
                    	}).responseText;
					 alert(responsedata);
				}
			});
});