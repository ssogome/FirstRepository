 <script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-ui.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/knockout-3.3.0.js"></script>
<script  type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery.SPServices-2014.02.min.js"></script>

<script type="text/javascript"> 
      				
		var itemArr = [];
		var gbuArr = [];
		var buArr = [];
		var subbuArr = [];
		var CategoryArr = [];
		var totalArr = [];
		var fTypeArr = [];
		var pTypeArr = [];
		var centerArr = [];
		var buAppArr = [];
		var approverArr = [];
		
		var optionArr = [];
		var FTypeObj = [];
		var gbu = "";
		var bu  = "";
		var subbu = "";
		var pType = "";
		var fType = "";
		var iCateory = "";
	
			
    $(function(){
		$("select[title='GBU Required Field']").change(function(){  	     	    		  
								gbu = $(this).val();		
		});
		
		$("select[title='Business Unit Required Field']").change(function(){						
								bu = $(this).val();	            		 
		});
		$("select[title='SubGroup Required Field']").change(function(){			
								subbu = $(this).val();	
										buAppArr.push({
														gbu:   gbu,
														bu:     bu,
														subbu:  subbu,
										}); 
			//	findBUApprover();
		});					
		$("select[title='Purchase Type Required Field']").change(function(){
									pType =   $(this).val();	
        }); 												
		$("select[title$='Impact Category Required Field']").change(function(){									
										iCateory = $(this).val();
		});						
		$("input[title='Tie-Off']").click(function(){			    	
									  FTypeObj = {0:"Capital", 1:"Expense", 2:"Embedded Lease"};
									for(var optn in FTypeObj){				 			  
										$(":radio").each(function(){
												if($(this).is(':checked') && $(this).val() == FTypeObj[optn]){
													if($(this).val() == 'Expense')fType = "OpEx (less than 5000 USD for R&D and 500 USD for SaaS)";
													if($(this).val() == 'Capital')fType = "CapEx  (more than 5000 USD for R&D and 500 USD for SaaS)";
													if($(this).val() == 'Embedded Lease') fType = $(this).val();
												}  
										});										
									}									
																									
										itemArr.push({
										    gbu:	    gbu,
										    bu:			bu,
											subbu:      subbu,
										    pType:		pType,
											fType:		fType,
											iCategory: 	iCateory,	
										});									
								//	for(var i=0; i< itemArr.length; i++)alert(itemArr[i].pType);
								//	alert(gbu + '\n' + bu + '\n' +  subbu +'\n' + pType + '\n' + fType + '\n' + iCateory);
							findBudgetId();
				//	OpenPopUpPageWithTitle('https://hpenterprise.sharepoint.com/teams/HPESS-Equipment/SitePages/Budget%20Options.aspx?PageView=Shared&InitialTabId=Ribbon.WebPartPage&VisibilityContext=WSSWebPartPage', SP.SOD.executeFunc('sp.js', 'SP.ClientContext', doSomething()), null, null, 'Budget ID Options');					    
		});		
	});				
		
		
	
findBudgetId = function(){	
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext',function doLoad(){});
			var  clientContext = SP.ClientContext.get_current();			 
			var  list = clientContext.get_web().get_lists().getByTitle('FY16 HPSW_Bottom UP');
			
			  var query = new SP.CamlQuery();
			    query.set_viewXml("<View>"
									+ "<Query>"
									+ "  <OrderBy>"
									+ "   <FieldRef Name='ID' />"
									+ "  </OrderBy>"																	
									+ "</Query>"
									+ "<ViewFields>"
									+ "      <FieldRef Name='ID' />"
									+ "     <FieldRef Name='Title' />"								
									+ "     <FieldRef Name='Funding_x0020_Type' />"	
									+ "     <FieldRef Name='Type1' />"
									+ "		<FieldRef Name='FY16_x0020_Total_x0020__x0028_US' />"
									+ "     <FieldRef Name='Category' />"
									+ "     <FieldRef Name='Data_x0020_Center' />"	
									+ "</ViewFields>"
									+ "<RowLimit>10000</RowLimit>"
									+ "</View>");
									
				this.pendingItems = list.getItems(query);
				clientContext.load(this.pendingItems);		
				
				clientContext.executeQueryAsync(Function.createDelegate(this, this.onLoadListSucceeded), Function.createDelegate(this, this.onLoadListFailed)); 
}				
onLoadListSucceeded = function(){ //alert('suc  and the length is '  + itemArr.length);
	
	 var listEnumerator = this.pendingItems.getEnumerator();
	while(listEnumerator.moveNext()){
				  var item = listEnumerator.get_current().get_fieldValues();
				
			for(var i=0; i< itemArr.length; i++){  
			  //  if(item.Category == 'Linear Growth') alert(item.Title + ' == ' + itemArr[i].bu + '\n' + item.Funding_x0020_Type + ' == ' + itemArr[i].fType + '\n' + item.Category + ' == ' + itemArr[i].iCategory + '\n' + item.Type1 +' == ' + itemArr[i].pType);
				 if(item.Title == itemArr[i].bu && item.Funding_x0020_Type == itemArr[i].fType && "Cust Facing: "+item.Category == itemArr[i].iCategory && item.Type1 == itemArr[i].pType){ //alert(i);
					   optionArr.push({
							gbu:     itemArr[i].gbu,
							bu:		 itemArr[i].bu,
							subbu:   itemArr[i].subbu,
							pType:   itemArr[i].pType,
							fType:   itemArr[i].fType,
							iCategory:  itemArr[i].iCategory,	
					   });
					   gbuArr.push(itemArr[i].gbu);
					   buArr.push(itemArr[i].bu);
					   subbuArr.push(itemArr[i].subbu);
					   CategoryArr.push(itemArr[i].iCategory);
					   totalArr.push(item.FY16_x0020_Total_x0020__x0028_US);
					   fTypeArr.push(item.Funding_x0020_Type);
					   pTypeArr.push(itemArr[i].pType);
					   centerArr.push(item.Data_x0020_Center);
					   
				//	 alert('Total Available(USD) = ' +  item.FY16_x0020_Total_x0020__x0028_US + '\n Impact Category = Cust Facing: ' + item.Category + ' = ' +itemArr[i].iCategory + '\n Funding Type = ' + item.Funding_x0020_Type+ ' = ' + itemArr[i].fType +  '\n Business Unit = ' + item.Title + ' = ' + itemArr[i].bu + '\n Purchase Type = ' + itemArr[i].pType + ' = ' + item.Type1);				   
				 }
			}
	}
	
	   sendData();
	
}			
onLoadListFailed = function(){	
	 alert('From   OfficeShowBudgetOptions.js: Unable to load Budget list. ' + args.get_message() + '\n' + args.get_stackTrace());
}

function sendData(){ // alert('sending data back to form......');
   // Initialize packed or we get the word 'undefined'
    var packed = "";
  
   for ( var i = 0; (i < optionArr.length); i++) {
     if (i > 0) {
       packed += ",";	  
     }
    // alert('1' + packed   + '\n' + optionArr[i].gbu + '\n' + optionArr[i].bu + '\n' + optionArr[i].pType + '\n' + optionArr[i].fType + '\n' + optionArr[i].iCategory);
     packed += escape(gbuArr[i]);
	
   }
	for(var i= optionArr.length; i< 2*optionArr.length; i++){
		var  j = i-optionArr.length;
		packed += ",";
		packed += escape(buArr[j]);
	}
	for(var i= 2*optionArr.length; i< 3*optionArr.length; i++){
		var  k = i-2*optionArr.length;
		packed += ",";
		packed += escape(subbuArr[k]);
	}
	for(var i= 3*optionArr.length; i< 4*optionArr.length; i++){
		var  l = i-3*optionArr.length;
		packed += ",";
		packed += escape(CategoryArr[l]);
	}
	for(var i= 4*optionArr.length; i< 5*optionArr.length; i++){
		var  m = i-4*optionArr.length;
		packed += ",";
		packed += escape(totalArr[m]);
	}
	for(var i= 5*optionArr.length; i< 6*optionArr.length; i++){
		var  n = i-5*optionArr.length;
		packed += ",";
		packed += escape(fTypeArr[n]);
	}
	for(var i= 6*optionArr.length; i< 7*optionArr.length; i++){
		var  r = i-6*optionArr.length;		
		packed += ",";				 
		packed += escape(pTypeArr[r]);
	}
	for(var i= 7*optionArr.length; i< 8*optionArr.length; i++){
		var  r = i-7*optionArr.length;		
		packed += ",";				 
		packed += escape(centerArr[r]);
	}
	//Pass in the length of the data
	  packed += ",";
	  packed += 8*optionArr.length;
	  //Empty the itemArr for future use
	      itemArr.splice(0, itemArr.length);// alert(packed); 
   
   var options ={
	   url: "https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/dev/SitePages/Budget%20Options%20Page.aspx?PageView=Shared&InitialTabId=Ribbon.WebPartPage&VisibilityContext=WSSWebPartPage",	
	   args:    packed,		  
	   dialogReturnValueCallback: function(dialogResult, returnValue){
									if(dialogResult == SP.UI.DialogResult.ok){
											var bgt = "";
										SP.UI.Notify.addNotification("The user clicked the OK button  " , true);	
										for(var j=0; j< returnValue.length; j++){
											alert('The number of chosen  budget is ' +returnValue.length + '\n and values are ' + returnValue[j].amount);
											   bgt += returnValue[j].center+  '($'+ returnValue[j].amount + ');';
										}
										 $("input[title='Tie-Off']").val(bgt);
									}	
									else SP.UI.Notify.addNotification("The user clicked the cancel button  " , false);
								//Where you can do additional JS function base on the dialogResult.
								SP.UI.ModalDialog.RefreshPage(dialogResult);
						}
   };

    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);

	}
//********************************************************************************************************************************************************************************************************//
findBUApprover = function(){	
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext',function doLoad(){});
			var  clientContext = SP.ClientContext.get_current();			 
			  var  list = clientContext.get_web().get_lists().getByTitle('SubGroups');
			
			  var query = new SP.CamlQuery();
			    query.set_viewXml("<View>"
									+ "<Query>"
									+ "  <OrderBy>"
									+ "   <FieldRef Name='ID' />"
									+ "  </OrderBy>"																	
									+ "</Query>"
									+ "<ViewFields>"
									+ "      <FieldRef Name='ID' />"
									+ "     <FieldRef Name='Title' />"								
									+ "     <FieldRef Name='GBU' />"	
									+ "     <FieldRef Name='subbu' />"
									+ "		<FieldRef Name='approver' />"									
									+ "</ViewFields>"
									+ "<RowLimit>5000</RowLimit>"
									+ "</View>");
									
				this.pendingItems = list.getItems(query);
				clientContext.load(this.pendingItems);		
				
				clientContext.executeQueryAsync(Function.createDelegate(this, this.onLoadSucceeded), Function.createDelegate(this, this.onLoadFailed)); 
}	
onLoadSucceeded = function(){  
				
	 var listEnumerator = this.pendingItems.getEnumerator();
	while(listEnumerator.moveNext()){ 
					var  lstItm = listEnumerator.get_current();
				  var item = listEnumerator.get_current().get_fieldValues();
			for(var i=0; i< buAppArr.length; i++){//	alert('0 ' + buAppArr[i].gbu +' = ' + item.GBU.get_lookupValue()+ '\n' + buAppArr[i].bu + ' = ' + item.Title +'\n' + buAppArr[i].subbu + ' = ' + item.subbu);
				 if(item.Title == buAppArr[i].bu && item.GBU.get_lookupValue() == buAppArr[i].gbu && item.subbu == buAppArr[i].subbu){ 
					
						SetPeoplePickerValue('BU Approver', lstItm.get_item("approver").get_lookupValue());
				 }
			}							
	}
	
//	getApproverName();
}
onLoadFailed = function(){	
	 alert('From   OfficeShowBudgetOptions.js: Unable to load Subgroups list. ' + args.get_message() + '\n' + args.get_stackTrace());
}	

function getApproverName(){   
   // Initialize packed or we get the word 'undefined'
    var packed = "";
  
   for ( var i = 0; (i < buAppArr.length); i++) {
     if (i > 0) {
       packed += ",";	  
     }
     packed += escape(approverArr[i].gbu);	 						 
   }
   for(var i= buAppArr.length; i< 2*buAppArr.length; i++){
		var  j = i-buAppArr.length;
		packed += ",";
		packed += escape(approverArr[j].bu);
	}
	for(var i= 2*buAppArr.length; i< 3*buAppArr.length; i++){
		var  k = i-2*buAppArr.length;
		packed += ",";
		 packed += escape(approverArr[k].subbu);
	}	
	for(var i= 3*buAppArr.length; i< 4*buAppArr.length; i++){
		var  m = i-3*buAppArr.length;
		packed += ",";
		 packed += escape(approverArr[m].approver);		
	}
	//Pass in the length of the data
	  packed += ",";
	  packed += 4*buAppArr.length;
   //Empty the itemArr for future use
	      buAppArr.splice(0, approverArr.length); //alert(packed); 
		  
   var AppOptions ={
	   url: "https://hpenterprise.sharepoint.com/teams/HPESS-Equipment/SitePages/BU%20Approver%20Page.aspx?PageView=Shared&DisplayMode=Design&InitialTabId=Ribbon.WebPartPage&VisibilityContext=WSSWebPartPage?",	
	   args:    packed,		  
	   dialogReturnValueCallback: function(dialogResult, returnValue){
									if(dialogResult == SP.UI.DialogResult.ok){
											var approver = "";
										SP.UI.Notify.addNotification("The user clicked the OK button  " , true);	
										for(var j=0; j< returnValue.length; j++){
											alert('The number of chosen  budget is ' +returnValue.length + '\n and values are ' + returnValue[j].approver);
											   approver +=  returnValue[j].approver ;
										}
										
										SetPeoplePickerValue('BU Approver', approver);									
									}	
									else SP.UI.Notify.addNotification("The user clicked the cancel button  " , false);
								//Where you can do additional JS function base on the dialogResult.
								SP.UI.ModalDialog.RefreshPage(dialogResult);
						}
   };

    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', AppOptions);
}
</script>

