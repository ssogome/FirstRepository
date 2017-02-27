<script type="text/javascript" src="/teams/ProcurementTEST_O365/Script%20Library/jquery-ui.min.js"></script>
<script type="text/javascript" src="/teams/ProcurementTEST_O365/Script%20Library/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="/teams/ProcurementTEST_O365/Script%20Library/knockout-3.3.0.js"></script>
<script  type="text/javascript" src="/teams/ProcurementTEST_O365/Script%20Library/jquery.SPServices-2014.02.min.js"></script>
<script type="text/javascript"   src="/teams/ProcurementTEST_O365/Script%20Library/accounting.min.js"></script>

<script type="text/javascript">

		var shipmentinfo = "";
		var gbu = "";
		var bu  = "";
		var subbu = "";
		var buAppArr = [];
		  
   $(function(){  
	 
			 //Begin Ship-to functionalities
			$("select[title='Shipment Destination Required Field']").change(function(){ 							  
						shipmentinfo = $(this).val();		    	
								//Execute 
					    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', doLoad());
			});  
			//End Ship-to functionalities
			
			//Load restrictions on the fields
				teamPrivilege();
			//Load user Fields selections
				userSelection();
			// Adjust with user's changes: Line part qty: Could have been done a function call with 2 variables
		
			 $("input[title='line1-qty Required Field']").change(function(){  
								var x1 = parseFloat($("input[title='line1-cost Required Field']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line1-qty Required Field']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line1-extcost']").val( accounting.formatMoney(x3));
								
								EstimatedCostValue();						
			 });
			 $("input[title='line1-cost Required Field']").change(function(){  
								var x1 = parseFloat($("input[title='line1-cost Required Field']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line1-qty Required Field']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line1-extcost']").val( accounting.formatMoney(x3));
								
								EstimatedCostValue();						
			 });
			$("input[title='line2-qty']").change(function(){ 					   
								var x1 = parseFloat($("input[title='line2-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line2-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line2-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
			});
			$("input[title='line2-cost']").change(function(){ 					   
								var x1 = parseFloat($("input[title='line2-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line2-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line2-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
			});
			$("input[title='line3-qty']").change(function(){ 						
								var x1 = parseFloat($("input[title='line3-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line3-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line3-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line3-cost']").change(function(){ 						
								var x1 = parseFloat($("input[title='line3-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line3-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line3-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line4-qty']").change(function(){ 					    
								var x1 = parseFloat($("input[title='line4-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line4-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line4-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line4-cost']").change(function(){ 					    
								var x1 = parseFloat($("input[title='line4-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line4-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line4-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line5-qty']").change(function(){ 						
								var x1 = parseFloat($("input[title='line5-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line5-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line5-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line5-cost']").change(function(){ 						
								var x1 = parseFloat($("input[title='line5-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line5-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line5-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line6-qty']").change(function(){ 						
								var x1 = parseFloat($("input[title='line6-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line6-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line6-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line6-cost']").change(function(){ 						
								var x1 = parseFloat($("input[title='line6-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line6-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line6-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line7-qty']").change(function(){ 					    
								var x1 = parseFloat($("input[title='line7-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line7-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line7-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line7-cost']").change(function(){ 					    
								var x1 = parseFloat($("input[title='line7-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line7-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line7-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line8-qty']").change(function(){ 						
								var x1 = parseFloat($("input[title='line8-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line8-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line8-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line8-cost']").change(function(){ 						
								var x1 = parseFloat($("input[title='line8-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line8-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line8-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line9-qty']").change(function(){ 						
								var x1 = parseFloat($("input[title='line9-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line9-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line9-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line9-cost']").change(function(){ 						
								var x1 = parseFloat($("input[title='line9-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line9-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line9-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();
						
	   		});
			$("input[title='line10-qty']").change(function(){ 						
								var x1 = parseFloat($("input[title='line10-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line10-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line10-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();						
	   		});
			$("input[title='line10-cost']").change(function(){ 
						
								var x1 = parseFloat($("input[title='line10-cost']").val().replace(",", ""));
								var x2 = parseFloat($("input[title='line10-qty']").val().replace(",", ""));   
								var x3 = x1*x2; 
								$("input[title='line10-extcost']").val(accounting.formatMoney(x3));
								
								EstimatedCostValue();						
	   		});
			  			 
    });
		
	/*************Shipment destination *****************************************/
function doLoad(){  
	
 loadShipToList = function(theCurrentItemID){  
			  var  clientContext = SP.ClientContext.get_current();
			  var theID = theCurrentItemID;
			  var  list = clientContext.get_web().get_lists().getByTitle('ShipTo');
			
			  var query = new SP.CamlQuery();
			    query.set_viewXml("<View>"
									+ "<Query>"
									+ "  <OrderBy>"
									+ "   <FieldRef Name='ID' />"
									+ "  </OrderBy>"
									+ "<Where>"
									+ "  <Eq>"
									+ "       <FieldRef Name='ID' />"
									+ "       <Value  Type='Number'>" + theID 
									+ "        </Value>"
									+ "  </Eq>"
									+ " </Where>"
									+ "</Query>"
									+ "<ViewFields>"
									+ "   <FieldRef Name='Title' />"
									+ "   <FieldRef Name='ID' />"
									+ "    <FieldRef Name='DestType' />"
									+ "    <FieldRef Name='st_person' />"
									+ "    <FieldRef Name='st_phone' />"
									+ "    <FieldRef Name='st_street' />"
									+ "    <FieldRef Name='st_building' />"
									+ "    <FieldRef Name='st_state' />"
									+ "    <FieldRef Name='st_country' />"
									+ "    <FieldRef Name='st_postal' />"
									+ "    <FieldRef Name='st_mgr' />"
									+ "    <FieldRef Name='st_mailstop' />"
									+ "    <FieldRef Name='region' />"
									+ "    <FieldRef Name='localization' />"
									+ "</ViewFields>"
									+ "<RowLimit>5000</RowLimit>"
									+ "</View>");
									
				this._pendingItems = list.getItems(query);
				clientContext.load(this._pendingItems, 'Include(ID, Title, st_person, st_phone, st_street, st_building, st_state, st_country, st_postal, st_mailstop, region, localization)');		
				
				clientContext.executeQueryAsync(Function.createDelegate(this, this.onLoadListSucceeded), Function.createDelegate(this, this.onLoadListFailed));
		  }
		  
		onLoadListSucceeded = function(sender, args) {
			  var listEnumerator = this._pendingItems.getEnumerator();
			  var count = 1;
			  while(listEnumerator.moveNext()){
				  var item = listEnumerator.get_current().get_fieldValues();
				   
				if(item.Title != 'Other'){
						//Set values and make them read only
					 $("input[title='Ship-to-City Required Field']").val(item.Title); 
					 $("input[title='Ship-to-City Required Field']").attr("readonly","true");
					 $("input[title='Ship-to-person Required Field']").val(item.st_person); 
					 $("input[title='Ship-to-person Required Field']").attr("readonly","true");
					 $("input[title='Ship-to person phone number Required Field']").val(item.st_phone); 
					 $("input[title='Ship-to person phone number Required Field']").attr("readonly","true");
					 $("input[title='Ship-to-Street Required Field']").val(item.st_street); 
					 $("input[title='Ship-to-Street Required Field']").attr("readonly","true");
					 $("input[title='Ship-to-Mailstop']").val(item.st_mailstop); 					
					 $("select[title='Ship-to-State Required Field']").find('option').filter(function(){return this.text === item.st_state;}).attr('selected','selected');
					 $("input[title='Ship-to-Building Required Field']").val(item.st_building); 
					 $("input[title='Ship-to-Building Required Field']").attr("readonly","true");
					 $("select[title='Ship-to-Country Required Field']").find('option').filter(function(){return this.text === item.st_country;}).attr('selected','selected');	
					 $("input[title='Ship-to-Postal Code']").val(item.st_postal);
					 $("input[title='Ship-to-Postal Code']").attr("readonly","true");
					 $("select[title='Region']").find('option').filter(function(){return this.text === item.region;}).attr('selected','selected');					 
					 $("select[title='localization']").find('option').filter(function(){return this.text === item.localization;}).attr('selected','selected');
					
				}
				else{
					 $("input[title='Ship-to-City Required Field']").val('');
					 $("input[title='Ship-to-person Required Field']").val('');
					 $("input[title='Ship-to person phone number Required Field']").val('');
					 $("input[title='Ship-to-Street Required Field']").val('');
					 $("input[title='Ship-to-Building Required Field']").val('');
					 $("input[title='Ship-to-Country Required Field']").val('');
					 $("input[title='Ship-to-Postal Code']").val('');
					 $("select[title='localization']").find('option').filter(function(){return this.text === 'Select localization';}).attr('selected','selected');
					 $("select[title='Region']").find('option').filter(function(){return this.text === 'Select Region';}).attr('selected','selected');
					 $("select[title='Ship-to-Country Required Field']").find('option').filter(function(){	return this.text === 'Select Country';}).attr('selected','selected');	
					 $("select[title='Ship-to-State Required Field']").find('option').filter(function(){return this.text === 'Select State';}).attr('selected','selected');			
				}
				 count++;
							if(item.Title == 'Other'){  
									//Undo  read only					
									$("input[title='Ship-to-City Required Field']").removeAttr("readonly");					
									$("input[title='Ship-to-person Required Field']").removeAttr("readonly");					
									$("input[title='Ship-to person phone number Required Field']").removeAttr("readonly");				
									$("input[title='Ship-to-Street Required Field']").removeAttr("readonly");				 
									$("input[title='Ship-to-Building Required Field']").removeAttr("readonly");					 
									$("input[title='Ship-to-Postal Code']").removeAttr("readonly");										
							}
			  }
				
		  }
		
		onLoadListFailed = function(sender, args){
			  alert('From  ShipmentDestination.js: Unable to load ShipTo list. ' + args.get_message() + '\n' + args.get_stackTrace());
		}
		  
		 loadShipToList(shipmentinfo);  
}
/*****************************************	Team privilege	************************************************************/
function teamPrivilege(){
	$().SPServices({
		              operation: 		"GetGroupCollectionFromUser",
					  userLoginName:    $().SPServices.SPGetCurrentUser(),
					  async:            false,
					  completefunc:     function(xData, Status){  
					      if($(xData.responseXML).find("Group[Name='HPESW IS Procurement Team']").length != 1){		    							  	
									if($("input[title='locked']").is(":checked")){						
											alert('Sorry, you can\'t do any update on this item since it has been locked …');
											window.location.href = "/teams/ProcurementTEST_O365/SitePages/Home.aspx";
									}	
									$('nobr:contains("Service End Date")').closest('tr').hide();
									$('nobr:contains("Service Start Date")').closest('tr').hide();	
									$('nobr:contains("Service Term")').closest('tr').hide();
									$('nobr:contains("Initiative")').closest('tr').hide();
									$('nobr:contains("Problem Log")').closest('tr').hide();									
									$('nobr:contains("Procurement Instructions")').closest('tr').hide();
									$('nobr:contains("AMR Re")').closest('tr').hide();	
									$('nobr:contains("Pre-")').closest('tr').hide();
									$('nobr:contains("Post-")').closest('tr').hide();
									$('nobr:contains("PotentialQ")').closest('tr').hide();
									$('nobr:contains("EL ")').closest('tr').hide();
									$('nobr:contains("Validation Review")').closest('tr').hide();
									$('nobr:contains("Correction")').closest('tr').hide();	
									$('nobr:contains("CentralBudget")').closest('tr').hide();
									$('nobr:contains("Destination Environment")').closest('tr').hide();
									$('nobr:contains("Program/Project")').closest('tr').hide();
									$('nobr:contains("RequestID")').closest('tr').hide();
									$('nobr:contains("AdjustedID")').closest('tr').hide();  
									$('nobr:contains("Created1")').closest('tr').hide();
									$('nobr:contains("Fiscal year of request")').closest('tr').hide();									
									$('nobr').filter(function () { return $(this).text() === 'Comments' }).closest('tr').hide();
									$('nobr:contains("Amortization Required-Account Code 1410")').closest('tr').hide();	
									$("input[title='Title Required Field']").attr("readonly","true");
									$("input[title='Expedite']").attr("disabled","disabled");
									$("select[title='Request Status']").attr("disabled","disabled");
									$("input[title='BU Approver']").attr("disabled","disabled");
									$("select[title='Express Request']").attr("disabled","disabled");
									$("textarea[title='Chennai Comments']").attr("readonly","true");
									$("textarea[title='IS Comments']").attr("readonly","true");
									$("input[title='Tie-Off']").attr("readonly","true");
									$("textarea[title='Tie-Off Notes']").attr("readonly","true");	
									$("input[title='ChennaiOrdering']").attr("disabled","disabled");								
									$("input[title='Processed By']").attr("disabled","disabled");
									$("input[title='Remarketed']").attr("disabled","disabled");
									$("input[title='Asset Master Record Number']").attr("readonly","true");
									$("input[title='Purchase Request Number']").attr("readonly","true");
									$("input[title='Total PR Value']").attr("readonly","true");
									$("input[title='Date Ordered']").attr("disabled","disabled");
									$("input[title='PO Number']").attr("readonly","true");
									$("input[title='HP Order Number']").attr("readonly","true");
									$("input[title='SANDY Status']").attr("readonly","true");
									$("input[title='Estimated Ship Date']").attr("disabled","disabled");
									$("input[title='Actual Ship Date']").attr("disabled","disabled");
									$("input[title='Invoice Date']").attr("disabled","disabled");
									$("input[title='Tracking Code']").attr("readonly","true");
									$("input[title='SWAN / SAP']").attr("readonly","true");
									$("input[title='Pending Entry TimeStamp']").attr("disabled","disabled");
									$("input[title='Invoice #']").attr("readonly","true");
									$("input[title='Validate TimeStamp']").attr("disabled","disabled");
									$("input[title='BU Accept TimeStamp']").attr("disabled","disabled");
									$("input[title='EngrArch Review TimeStamp']").attr("disabled","disabled");
									$("input[title='EngrArch Review Feedback TimeStamp']").attr("disabled","disabled");
									$("input[title='Ops Review TimeStamp']").attr("disabled","disabled");
									$("input[title='Ops Review Feedback TimeStamp']").attr("disabled","disabled");
									$("input[title='BU Approved TimeStamp']").attr("disabled","disabled");
									$("input[title='Finance Review Completion TimeStamp']").attr("disabled","disabled");
									$("input[title='Funded TimeStamp']").attr("disabled","disabled");
									$("input[title='Processing TimeStamp']").attr("disabled","disabled");
									$("input[title='Submitted TimeStamp']").attr("disabled","disabled");
									$("input[title='Ordered TimeStamp']").attr("disabled","disabled");
									$("input[title='Blocked TimeStamp']").attr("disabled","disabled");
									$("input[title='Shipped TimeStamp']").attr("disabled","disabled");
									$("input[title='Received TimeStamp']").attr("disabled","disabled");
									
						  }
					  }	
		
		    });	
}

/*************************************** GBU-BU-Sub BU combination	**************************************/

function  userSelection(){
 $("select[title$='GBU Required Field']").change(function(){
		gbu = $(this).val();
		  if($(this).val() == 'Application Delivery Mgmt'){ 
		      //Set Business Unit field accordingly. First empty it
			        $("select[title$='Business Unit Required Field']").empty();
				var  applDevMgmtOptions = {"None": "None", "ALM": "ALM"};
			   	$.each(applDevMgmtOptions, function(value, key){  
					$("select[title$='Business Unit Required Field']").append($('<option></option>').attr("value", value).text(key));					
				}); 				
				//Adjust to user's changes: Business Unit  
				$("select[title='Business Unit Required Field']").change(function(){
							 bu = $(this).val();	  
					if($(this).val() == "ALM"){ 
						//Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
					var  almOptions = {"None": "None", "Performance Center": "Performance Center", "Mobile":"Mobile", "Lifecycle Management & SaaS":"Lifecycle Management & SaaS", "APM":"APM", "AppPulse":"AppPulse", "PPM": "PPM"};
					$.each(almOptions, function(value, key){
							$("select[title$='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
					});
					}				
		         });
					//Adjustt  to user's changes: SubGroup
					$("select[title='SubGroup Required Field']").change(function(){			
								subbu = $(this).val();	
										buAppArr.push({
														gbu:   gbu,
														bu:     bu,
														subbu:  subbu,
										}); 
							findBUApprover();
					});		
			}
		   if($(this).val() == 'Big Data'){  
		     //Set Business Unit field accordingly. First empty it
			        $("select[title$='Business Unit Required Field']").empty();		
			var  bigdtOptions = {"None": "None", "Archiving/E-Discovery": "Archiving/E-Discovery", "Data Protection": "Data Protection", "Enterprise Content Mgmt": "Enterprise Content Mgmt", "HAVEn": "HAVEn", "Unified Info/Analytics":"Unified Info/Analytics", "Vertica": "Vertica"};
				$.each(bigdtOptions, function(value, key){
					$("select[title$='Business Unit Required Field']").append($('<option></option>').attr("value", value).text(key));
				});
				//Adjust to user's changes: Business Unit  
	          $("select[title='Business Unit Required Field']").change(function(){ 
						 bu = $(this).val();	   
		           if($(this).val() == "Archiving/E-Discovery"){  
		      //Set SubGroup field accordingly. First empty it			        
					$("select[title='SubGroup Required Field']").empty();
				var  archEdiscOptions = {"None": "None", "ACA": "ACA", "AeD": "AeD", "CAMM": "CAMM", "DigitalSafe":"DigitalSafe", "EAS":"EAS", "IAP":"IAP", "MAS":"MAS", "NearPoint":"NearPoint"};
			   	$.each(archEdiscOptions, function(value, key){
					$("select[title$='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				});
			  }		
			  if($(this).val() == 'Data Protection'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  dtProcOptions = {"None": "None", "Connected": "Connected", "Data Protector": "Data Protector", "LiveVault":"LiveVault"};
			   	$.each(dtProcOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				 if($(this).val() == 'Enterprise Content Mgmt'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  EntContMgmtOptions = {"None": "None", "APA": "APA", "ARM": "ARM", "Control Point":"Control Point","Scrittura":"Scrittura", "TRIM":"TRIM", "Teleform":"Teleform", "Worksite":"Worksite", "iManage":"iManage"};
			   	$.each(EntContMgmtOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				 if($(this).val() == 'HAVEn'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  HVnOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(HVnOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				 if($(this).val() == 'Unified Info/Analytics'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  UInfoOptions = {"None": "None", "IDOL": "IDOL", "IDOL Connectors": "IDOL Connectors"};
			   	$.each(UInfoOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				 if($(this).val() == 'Vertica'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  VertOptions = {"None": "None", "Community Edition": "Community Edition", "Enterprise Edition": "Enterprise Edition"};
			   	$.each(VertOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				});
				//Adjustt  to user's changes: SubGroup
					$("select[title='SubGroup Required Field']").change(function(){			
								subbu = $(this).val();	
										buAppArr.push({
														gbu:   gbu,
														bu:     bu,
														subbu:  subbu,
										}); 
							findBUApprover();
					});		
			  			
			}	  	  
		    if($(this).val() == 'Big Data SaaS'){  			 
		     //Set Business Unit field accordingly. First empty it
			        $("select[title$='Business Unit Required Field']").empty();
			
			var  BigdtSOptions = {"None": "None", "Archiving/E-Discovery SaaS":"Archiving/E-Discovery SaaS", "Data Protection SaaS":"Data Protection SaaS", "Enterprise Content Mgmt SaaS":"Enterprise Content Mgmt SaaS", "HAVEn SaaS":"HAVEn SaaS", "Unified Info/Analytics SaaS":"Unified Info/Analytics SaaS", "Vertica SaaS": "Vertica SaaS"};
				$.each(BigdtSOptions, function(value, key){
					$("select[title$='Business Unit Required Field']").append($('<option></option>').attr("value", value).text(key));
				});
				//Adjust to user's changes: Business Unit  
	          $("select[title='Business Unit Required Field']").change(function(){ 
								bu = $(this).val();	  
		           if($(this).val() == "Archiving/E-Discovery SaaS"){ 
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  archEdiscSOptions = {"None":"None", "ACA-SaaS-Networking":"ACA-SaaS-Networking", "ACA-SaaS-Server":"ACA-SaaS-Server","ACA-SaaS-Storage":"ACA-SaaS-Storage", "AeD-SaaS-Networking":"AeD-SaaS-Networking", "AeD-SaaS-Server":"AeD-SaaS-Server", "AeD-SaaS-Storage":"AeD-SaaS-Storage", "CMM-SaaS-Networking":"CMM-SaaS-Networking", "CMM-SaaS-Server":"CMM-SaaS-Server", "CMM-SaaS-Storage":"CMM-SaaS-Storage","DigitalSafe-SaaS-Networking":"DigitalSafe-SaaS-Networking",
				     "DigitalSafe-SaaS-Server":"DigitalSafe-SaaS-Server","DigitalSafe-SaaS-Storage":"DigitalSafe-SaaS-Storage","EAS-SaaS-Networking":"EAS-\
				SaaS-Networking","EAS-SaaS-Server":"EAS-SaaS-Server", "EAS-SaaS-Storage":"EAS-SaaS-Storage","IAP-SaaS-Networking":"IAP-SaaS-Networking","IAP-SaaS-Server":"IAP-SaaS-Server", "IAP-SaaS-Storage":"IAP-SaaS-Storage" ,"MAS-SaaS-Networking":"MAS-SaaS-Networking","MAS-SaaS-Server":"MAS-SaaS-Server","MAS-SaaS-Storage":"MAS-SaaS-Storage","NearPoint-SaaS-Networking":"NearPoint-SaaS-Networking","NearPoint-SaaS-Server":"NearPoint-SaaS-Server", "NearPoint-SaaS-Storage":"NearPoint-SaaS-Storage"};
					$.each(archEdiscSOptions, function(value, key){
						$("select[title$='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
					});
				   }
			    if($(this).val() == 'Data Protection SaaS'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  dtProcSOptions = {"None":"None", "Connected-SaaS-Networking": "Connected-SaaS-Networking", "Connected-SaaS-Server": "Connected-SaaS-Server","Connected-SaaS-Storage":"Connected-SaaS-Storage","Data Protector-SaaS-Networking":"Data Protector-SaaS-Networking","Data Protector-SaaS-Server":"Data Protector-SaaS-Server","Data Protector-SaaS-Storage":"Data Protector-SaaS-Storage","LiveVault-SaaS-Networking":"LiveVault\
				                   -SaaS-Networking","LiveVault-SaaS-Server":"LiveVault-SaaS-Server","LiveVault-SaaS-Storage":"LiveVault-SaaS-Storage","Next Gen Platform Helion SaaS":"Next Gen Platform Helion SaaS"};
			   	$.each(dtProcSOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
			 if($(this).val() == "Enterprise Content Mgmt SaaS"){ 
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  EntContMgmtSOptions = {"None":"None", "APA-SaaS-Networking": "APA-SaaS-Networking", "APA-SaaS-Server": "APA-SaaS-Server", "APA-SaaS-Storage": "APA-SaaS-Storage", "ARM-SaaS-Networking":"ARM-SaaS-Networking", "ARM-SaaS-Server":"ARM-SaaS-Server", "ARM-SaaS-Storage":"ARM-SaaS-Storage", "choice8":"Control Point-SaaS-Networking", "Control Point-SaaS-Server":"Control Point-SaaS-Server", "Control Point-SaaS-Storage":"Control Point-SaaS-Storage","Scrittura-SaaS-Networking":"Scrittura-SaaS-Networking","Scrittura-SaaS-Server":"Scrittura-SaaS-Server","Scrittura-SaaS-Storage":"Scrittura-SaaS-Storage","TRIM-SaaS-Networking":"TRIM-\
				 SaaS-Networking","TRIM-SaaS-Server":"TRIM-SaaS-Server", "TRIM-SaaS-Storage":"TRIM-SaaS-Storage","Teleform-SaaS-Networking":"Teleform-SaaS-Networking","Teleform-SaaS-Server":"Teleform-SaaS-Server","Teleform-SaaS-Storage":"Teleform-SaaS-Storage", "Worksite-SaaS-Networking":"Worksite-SaaS-Networking","Worksite-SaaS-Server":"Worksite-SaaS-Server","Worksite-SaaS-Storage":"Worksite-SaaS-Storage","iManage-SaaS-Networking":"iManage-SaaS-Networking","iManage-SaaS-Server":"iManage-SaaS-Server", "iManage-SaaS-Storage":"iManage-SaaS-Storage"};
					$.each(EntContMgmtSOptions, function(value, key){
						$("select[title$='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
					});
				   }
			   if($(this).val() == 'HAVEn SaaS'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  HVnSOptions = {"None":"None", "SaaS-Networking": "SaaS-Networking", "SaaS-Server": "SaaS-Server","SaaS-Storage":"SaaS-Storage"};
			   	$.each(HVnSOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
			 if($(this).val() == 'Unified Info/Analytics SaaS'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  UInfoSOptions = {"None":"None", "IDOL Connectors SaaS-Networking": "IDOL Connectors SaaS-Networking", "IDOL Connectors SaaS-Server": "IDOL Connectors SaaS-Server","IDOL Connectors SaaS-Storage":"IDOL Connectors SaaS-Storage","IDOL-SaaS-Networking":"IDOL-SaaS-Networking","IDOL-SaaS-Server":"IDOL-SaaS-Server","IDOL-SaaS-Storage":"IDOL-SaaS-Storage"};
			   	$.each(UInfoSOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
			if($(this).val() == 'Vertica SaaS'){  
			//Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  VertSOptions = {"None":"None", "Community Edition SaaS-Networking": "Community Edition SaaS-Networking", "Community Edition SaaS-Server": "Community Edition SaaS-Server","Community Edition SaaS-Storage":"Community Edition SaaS-Storage","Enterprise Edition SaaS-Networking":"Enterprise Edition SaaS-Networking","Enterprise Edition SaaS-Server":"Enterprise Edition SaaS-Server","Enterprise Edition SaaS-Storage":"Enterprise Edition SaaS-Storage"};
			   	$.each(VertSOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
			  });
			  	//Adjustt  to user's changes: SubGroup
					$("select[title='SubGroup Required Field']").change(function(){			
								subbu = $(this).val();	
										buAppArr.push({
														gbu:   gbu,
														bu:     bu,
														subbu:  subbu,
										}); 
							findBUApprover();
					});					
		    }
		    if($(this).val() == 'Client Services'){		
		     //Set Business Unit field accordingly. First empty it
			        $("select[title$='Business Unit Required Field']").empty();
			
			var  cltSvcOptions = {"None": "None", "Education Services": "Education Services", "SW Support": "SW Support", "Services": "Services"};
				$.each(cltSvcOptions, function(value, key){
					$("select[title$='Business Unit Required Field']").append($('<option></option>').attr("value", value).text(key));
				});
				  $("select[title='Business Unit Required Field']").change(function(){ 
							bu = $(this).val();	  
				     if($(this).val() == 'Education Services'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  edSvcOptions = {"None": "None", "N/A":"N/A"};
			   	$.each(edSvcOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'SW Support'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  swSuppOptions = {"None":"None", "ESP Fortify": "ESP Fortify", "ESP Arcsight": "ESP Arcsight", "ESP Vertica": "ESP Vertica", "ESP Atalla": "ESP Atalla", "ITOM ADM": "ITOM ADM", "BD Platform": "BD Platform", "BD IM&G": "BD IM&G"};
			   	$.each(swSuppOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'Services'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  svcOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(svcOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }				
		    	});
				//Adjustt  to user's changes: SubGroup
					$("select[title='SubGroup Required Field']").change(function(){			
								subbu = $(this).val();	
										buAppArr.push({
														gbu:   gbu,
														bu:     bu,
														subbu:  subbu,
										}); 
							findBUApprover();
					});		
    	    }
		    if($(this).val() == 'Enterprise Security Products'){
		     //Set Business Unit field accordingly. First empty it
			        $("select[title$='Business Unit Required Field']").empty();
			
			var  EntSecMgmtOptions = {"None": "None", "ARC": "ARC", "ATL": "ATL", "Education": "Education", "FOD": "FOD", "FORT":"FORT", "HSR": "HSR", "Marketing": "Marketing", "TP":"TP"};
				$.each(EntSecMgmtOptions, function(value, key){
					$("select[title$='Business Unit Required Field']").append($('<option></option>').attr("value", value).text(key));
				}); 
			$("select[title='Business Unit Required Field']").change(function(){ 
						bu = $(this).val();	  
				     if($(this).val() == 'ARC'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  arcOptions = {"None":"None", "ConApp": "ConApp", "Connector": "Connector","Enterprise Security Mgmt":"Enterprise Security Mgmt","Enterprise View":"Enterprise View","Identity View":"Identity View","Logger":"Logger","Services":"Services"};
			   	$.each(arcOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
				 
			    }
				if($(this).val() == 'ATL'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  atlOptions = {"None":"None", "ESKM": "ESKM","NSP":"NSP", "Voltage":"Voltage"};
			   	$.each(atlOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'Education'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  eduOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(eduOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'FOD'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  fodOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(fodOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'FORT'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
        			var  fortOptions = {"None": "None",  "Fortify Runtime": "Fortify Runtime","Software Security Center":"Software Security Center","Static Code Analyser":"Static Code Analyser","Webinspect":"Webinspect", "Across Fortify R&D": "Across Fortify R&D"};
			   	$.each(fortOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'HSR'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  hsrOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(hsrOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'Marketing'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  mktgOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(mktgOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'TP'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  tpOptions = {"None": "None",  "CloudArmour": "CloudArmour","DVLabs":"DVLabs","Intrusion Prevention System":"Intrusion Prevention System","Next Gen Firewall":"Next Gen Firewall","SMS":"SMS"};
			   	$.each(tpOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
		    });
			    //Adjustt  to user's changes: SubGroup
					$("select[title='SubGroup Required Field']").change(function(){			
								subbu = $(this).val();	
										buAppArr.push({
														gbu:   gbu,
														bu:     bu,
														subbu:  subbu,
										}); 
							findBUApprover();
					});					  		 
		    }
    	    if($(this).val() == 'Global Sales'){ 	
		      //Set Business Unit field accordingly. First empty it
			        $("select[title='Business Unit Required Field']").empty();
			
			var  gblSalesOptions = {"None":"None", "Global Marketing": "Global Marketing", "PreSales": "PreSales", "FE": "FE"};
				$.each(gblSalesOptions, function(value, key){
					$("select[title$='Business Unit Required Field']").append($('<option></option>').attr("value", value).text(key));
				});
			$("select[title='Business Unit Required Field']").change(function(){
							bu = $(this).val();	  
				if($(this).val() == 'Global Marketing'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  gblMktgOpt = {"None": "None", "N/A":"N/A"};
			   	$.each(gblMktgOpt, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }	
				if($(this).val() == 'PreSales'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  preSaleOptions = {"None": "None", "N/A":"N/A"};
			   	$.each(preSaleOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }		
			    if($(this).val() == 'FE'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  feOptions = {"None": "None", "N/A":"N/A"};
			   	$.each(feOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
			});
				//Adjustt  to user's changes: SubGroup
					$("select[title='SubGroup Required Field']").change(function(){			
								subbu = $(this).val();	
										buAppArr.push({
														gbu:   gbu,
														bu:     bu,
														subbu:  subbu,
										}); 
							findBUApprover();
					});			 
		    }
		    if($(this).val() == 'IT Operations Mgmt'){ 
		     //Set Business Unit field accordingly. First empty it
			        $("select[title$='Business Unit Required Field']").empty();
			
	    		var  itMgmtOptions = {"None": "None", "PFS": "PFS", "Automate": "Automate", "Automate Orchestrate Other":"Automate Orchestrate Other",  "Orchestrate":"Orchestrate", "Service Broker":"Service Broker"};
				$.each(itMgmtOptions, function(value, key){
					$("select[title$='Business Unit Required Field']").append($('<option></option>').attr("value", value).text(key));
				}); 
				$("select[title='Business Unit Required Field']").change(function(){
							 bu = $(this).val();	  
				if($(this).val() == 'Automate'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  bsmOptions = {"None": "None",  "Asset Mgmt Center":"Asset Mgmt Center", "Automation Center":"Automation Center", "Network Mgmt Center":"Network Mgmt Center",  "Service Mgmt Center":"Service Mgmt Center", "Storage Essentials":"Storage Essentials", "AppPulse SaaS Product":"AppPulse SaaS Product"};
			   	$.each(bsmOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				   });
			     }
				  if($(this).val() == 'Automate Orchestrate Other'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  caOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(caOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
			    if($(this).val() == 'PFS'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  pfsOptions = {"None": "None",  "CSS": "CSS","G11N":"G11N","HPLN":"HPLN","Security Office":"Security Office"};
			   	$.each(pfsOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'Orchestrate'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  spmOptions = {"None": "None", "Analytics Center":"Analytics Center", "SOA Center":"SOA Center", "Cloud Center":"Cloud Center", "Configuration Mgmt System":"Configuration Mgmt System", "IT Business Analytics Center":"IT Business Center", "Service and Operations Bridge Cntr":"Service and Operations Bridge Cntr", "Systems Mgmt Center":"Systems Mgmt Center"};
			   	$.each(spmOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }				
				if($(this).val() == 'Service Broker'){
					 //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
						var  spmOptions = {"None": "None", "Propel Center":"Propel Center", "Service Anywhere SaaS Product":"Service Anywhere SaaS Product"};
						$.each(spmOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				    });
				}
				});	
						//Adjustt  to user's changes: SubGroup
					$("select[title='SubGroup Required Field']").change(function(){			
								subbu = $(this).val();	
										buAppArr.push({
														gbu:   gbu,
														bu:     bu,
														subbu:  subbu,
										}); 
							findBUApprover();
					});		
		    }
		
		   if($(this).val() == 'SaaS'){
		     //Set Business Unit field accordingly. First empty it
			        $("select[title$='Business Unit Required Field']").empty();
			
			var  ssOptions = {"None": "None", "ITM-SaaS": "ITM-SaaS", "Infrastructure Services": "Infrastructure Services"};
				$.each(ssOptions, function(value, key){
					$("select[title$='Business Unit Required Field']").append($('<option></option>').attr("value", value).text(key));
				});
			$("select[title='Business Unit Required Field']").change(function(){
								bu = $(this).val();	  
					if($(this).val() == 'ITM-SaaS'){						
							//Set SubGroup field accordingly. First empty it
						$("select[title='SubGroup Required Field']").empty();
						var  itmSOptions = {"None": "None", "Colo/Telecom BPO": "Colo/Telecom BPO", "NGDC Lab":"NGDC Lab", "Networking":"Networking", "Servers":"Servers",  "Storage":"Storage", "Public Cloud": "Public Cloud"};
					$.each(itmSOptions, function(value, key){
						$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
					});					    
				    }				 
				if($(this).val() == 'Infrastructure Services'){										
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  infraSvcOptions = {"None": "None", "ENG": "ENG", "Lab Ops":"Lab Ops", "Security":"Security", "Shared Services Tools and Utilities-COS":"Shared Services Tools and Utilities-COS",  "Shared Services Tools and Utilities-RND":"Shared Services Tools and Utilities-RND"};
			   	$.each(infraSvcOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }				
				});
            	//Adjustt  to user's changes: SubGroup
					$("select[title='SubGroup Required Field']").change(function(){			
								subbu = $(this).val();	
										buAppArr.push({
														gbu:   gbu,
														bu:     bu,
														subbu:  subbu,
										}); 
							findBUApprover();
					});							 
		    }
		    if($(this).val() == 'EL BPO Big Data SaaS'){ 				
		      //Set Business Unit field accordingly. First empty it
			        $("select[title$='Business Unit Required Field']").empty();
			
			var  elBigdtSOptions = {"None": "None", "Archiving/E-Discovery SaaS EL": "Archiving/E-Discovery SaaS EL", "Data Protection SaaS EL": "Data Protection SaaS EL", "Enterprise Content Mgmt SaaS EL": "Enterprise Content Mgmt SaaS EL", "HAVEn SaaS EL": "HAVEn SaaS EL", "Unified Info/Analytics SaaS EL":"Unified Info/Analytics SaaS EL", "Vertica SaaS EL": "Vertica SaaS EL"};
				$.each(elBigdtSOptions, function(value, key){
					$("select[title$='Business Unit Required Field']").append($('<option></option>').attr("value", value).text(key));
				});            				
				$("select[title='Business Unit Required Field']").change(function(){
								bu = $(this).val();	  
					if($(this).val() == 'Archiving/E-Discovery SaaS EL'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  archEDiscElOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(archEDiscElOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'Data Protection SaaS EL'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  dtProcElOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(dtProcElOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'Enterprise Content Mgmt SaaS EL'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  EntContMgmtElOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(EntContMgmtElOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'HAVEn SaaS EL'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  HVnElOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(HVnElOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'Unified Info/Analytics SaaS EL'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  UinfoElOptions = {"None": "None","N/A": "N/A"};
			   	$.each(UinfoElOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
				if($(this).val() == 'Vertica SaaS EL'){  
		      //Set SubGroup field accordingly. First empty it
			        $("select[title='SubGroup Required Field']").empty();
				var  vertElOptions = {"None": "None", "N/A": "N/A"};
			   	$.each(vertElOptions, function(value, key){
					$("select[title='SubGroup Required Field']").append($('<option></option>').attr("value", value).text(key));
				 });
			    }
			});
			//Adjustt  to user's changes: SubGroup
					$("select[title='SubGroup Required Field']").change(function(){			
								subbu = $(this).val();	
										buAppArr.push({
														gbu:   gbu,
														bu:     bu,
														subbu:  subbu,
										}); 
							findBUApprover();
					});			
		  }
		
		 
 });   
}

//********************************************************************************************************************************************************************************************************//
findBUApprover = function(){	
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
			for(var i=0; i< buAppArr.length; i++){
				 if(item.Title == buAppArr[i].bu && item.GBU.get_lookupValue() == buAppArr[i].gbu && item.subbu == buAppArr[i].subbu){ 
					
						SetPeoplePickerValue('BU Approver', lstItm.get_item("approver").get_lookupValue());						
				 }
			}							
	}
	
}
onLoadFailed = function(){	
	 alert('From   OfficeEditForm.js: Unable to load Subgroups list. ' + args.get_message() + '\n' + args.get_stackTrace());
}

//*********************************************************Set Person or Group field****************************************************************************************//	
function SetPeoplePickerValue(fieldName, userName) 
{       
    //Clear the field first
				var getIDPeoplePicker=$("div[title='" + fieldName + "']").attr('id');;
				var ppobject = SPClientPeoplePicker.SPClientPeoplePickerDict[getIDPeoplePicker];
				var usersobject = ppobject.GetAllUserInfo();
				usersobject.forEach(function (index) {
				ppobject.DeleteProcessedUser(usersobject[index]);
			});
	
	var peoplePickerId = $("div[title='" + fieldName + "']").attr('id');
	var peoplePicker = $("input[title='" + fieldName + "']").val(userName);
	var peoplePickerObject = SPClientPeoplePicker.SPClientPeoplePickerDict[peoplePickerId];
	peoplePickerObject.AddUnresolvedUserFromEditor(true);
}
//**************************************************************Update Estimated cost field*************************************************************************************//
function EstimatedCostValue(){
	var x1 = parseFloat($("input[title='line1-cost Required Field']").val().replace(",", ""))*parseFloat($("input[title='line1-qty Required Field']").val().replace(",", ""));
	var x2 = parseFloat($("input[title='line2-cost']").val().replace(",", ""))*parseFloat($("input[title='line2-qty']").val().replace(",", ""));
	var x3 = parseFloat($("input[title='line3-cost']").val().replace(",", ""))*parseFloat($("input[title='line3-qty']").val().replace(",", ""));
	var x4 = parseFloat($("input[title='line4-cost']").val().replace(",", ""))*parseFloat($("input[title='line4-qty']").val().replace(",", ""));
	var x5 = parseFloat($("input[title='line5-cost']").val().replace(",", ""))*parseFloat($("input[title='line5-qty']").val().replace(",", ""));
	var x6 = parseFloat($("input[title='line6-cost']").val().replace(",", ""))*parseFloat($("input[title='line6-qty']").val().replace(",", ""));
	var x7 = parseFloat($("input[title='line7-cost']").val().replace(",", ""))*parseFloat($("input[title='line7-qty']").val().replace(",", ""));
	var x8 = parseFloat($("input[title='line8-cost']").val().replace(",", ""))*parseFloat($("input[title='line8-qty']").val().replace(",", ""));
	var x9 = parseFloat($("input[title='line9-cost']").val().replace(",", ""))*parseFloat($("input[title='line9-qty']").val().replace(",", ""));
	var x10 = parseFloat($("input[title='line10-cost']").val().replace(",", ""))*parseFloat($("input[title='line10-qty']").val().replace(",", ""));
	var temp =x1 + x2 + x3+ x4 + x5 + x6 + x7 + x8 + x9 + x10;
	
	//   alert(x1+ '\n' + x2 + '\n' + x3 + '\n' + x4 +'\n' + x5 + '\n' + x6 + '\n'+ x7 + '\n' + x8 + '\n' + x9 + '\n' + x10 + '\n' + parseFloat($("input[title='line1-cost Required Field']").val().replace(",", "")));
	$("input[title='Estimated Cost']").val( accounting.formatMoney(temp));
}

</script>







