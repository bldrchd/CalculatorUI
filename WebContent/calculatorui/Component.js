sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   
   return UIComponent.extend("com.sap.calc.calculatorui.Component", {
	   
	   metadata : {
		   rootView: {
			   "viewName":"com.sap.calc.calculatorui.view.CalculatorUI",
			   "type":"XML",
			   "async":"true",
			   "id":"app"
		   }, 
		   metadata: {
			   manifest: "json"
		   }
     },
	      
	   init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         var oCalculationModel = new sap.ui.model.json.JSONModel({
        	 	id : "",
				expression : "",
				answer : ""
			});
			this.setModel(oCalculationModel, "CalculatorUIPanel");	
			
			var oHistoryModel = new sap.ui.model.json.JSONModel({
				id : "",
				expression : "",
				answer : ""
			});
			this.setModel(oHistoryModel, "History");	
		//the rest is not needed	

	   }
  });
});
