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
						  }
					  }	
				});												
})

</script>


