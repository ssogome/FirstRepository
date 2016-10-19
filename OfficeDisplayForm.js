<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-ui.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/knockout-3.3.0.js"></script>
<script  type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery.SPServices-2014.02.min.js"></script>


<script type="text/javascript">
$(function(){ 
//Hide Expedite, ExpressRequest and ExpressDirection fields from regular users
				$().SPServices({
		              operation: 		"GetGroupCollectionFromUser",
					  userLoginName:    $().SPServices.SPGetCurrentUser(),
					  async:            false,
					  completefunc:     function(xData, Status){
					      if($(xData.responseXML).find("Group[Name='HPESW IS Procurement Team']").length != 1){			          							  																																			
									//Hide this fields on the display form
							$('td:contains("Amortization Required-Account Code 1410")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Amortization Required-Account Code 1410")').hide();				
							$('td.ms-formlabel:contains("Service Start Date")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Service Start Date")').hide();
							$('td.ms-formlabel:contains("Service End Date")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Service End Date")').hide();
							$('td.ms-formlabel:contains("Contract Term (in months)")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Contract Term (in months)")').hide();
							$('td.ms-formlabel:contains("Expedite")').closest('td').next('td').hide();													
							$('td.ms-formlabel:contains("Express Directions")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Express Directions")').hide();
							$('td.ms-formlabel:contains("ChennaiOrdering")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("ChennaiOrdering")').hide();														
							$('td.ms-formlabel:contains("Problem Log")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Problem Log")').hide();
							$('td.ms-formlabel:contains("Finance Review Status")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Finance Review Status")').hide();
							$('td.ms-formlabel:contains("Procurement Instructions")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Procurement Instructions")').hide();
							$('td.ms-formlabel:contains("AMR Re")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("AMR Re")').hide();
							$('td.ms-formlabel:contains("Pre-")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Pre-")').hide();
							$('td.ms-formlabel:contains("Post-")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Post-")').hide();
							$('td.ms-formlabel:contains("PotentialQ")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("PotentialQ")').hide();
							$('td.ms-formlabel:contains("EL ")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("EL ")').hide();
							$('td.ms-formlabel:contains("Validation Review")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Validation Review")').hide();
							$('td.ms-formlabel:contains("Correction")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Correction")').hide();
							$('td.ms-formlabel:contains("CentralBudget")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("CentralBudget")').hide();
							$('td.ms-formlabel:contains("Destination Environment")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Destination Environment")').hide();
							$('td.ms-formlabel:contains("Program/Project")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Program/Project")').hide();
							$('td.ms-formlabel:contains("RequestID")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("RequestID")').hide();
							$('td.ms-formlabel:contains("AdjustedID")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("AdjustedID")').hide();
							$('td.ms-formlabel:contains("Created1")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Created1")').hide();
							$('td.ms-formlabel:contains("Fiscal year of request")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Fiscal year of request")').hide();
							$('td.ms-formlabel:contains("Comments")').closest('td').next('td').hide();
							$('td.ms-formlabel:contains("Comments")').hide();
						  }
					  }	
				});												
})

</script>


									
	