<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/HTML%20Library/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-ui.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/knockout-3.3.0.js"></script>
<script  type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery.SPServices-2014.02.min.js"></script>

<script type="text/javascript">
	var theBuId = "";

$(function(){ 				
			
			getRequests(onGetDefaultViewSuccessed);
                   
});
/******************************************************************************************************/
	// Function returns all  Groups 
function getAllGroupsFromSite(){
	$().SPServices({
                        operation: "GetGroupCollectionFromSite",
                        async: false,
                        completefunc: function (xData, Status) {
                                        $(xData.responseXML).find("Group").each(function() {
                                    //     alert($(this).attr("Name"));
                                if($(this).attr("Name") == "BU Pre-Approve Group")getAllUsersFromGroup($(this).attr("Name"));
                                                                                           });
                        }
			});
}	
	// Function returns all users in respective Groups                                           
function getAllUsersFromGroup(groupName) {alert('0---------' + theBuId);		
// alert(groupName);
		$().SPServices({
                       operation: "GetUserCollectionFromGroup",
                       groupName: groupName,
                       async: false,
                       completefunc: function (xDataUser, Status) {
                                    $(xDataUser.responseXML).find("User").each(function() {
										   alert($(this).attr("Name").trim()+  $(this).attr("ID")  );
												
									});
                                    }
        });
}



/************************************************************************************************/
					
onGetDefaultViewSuccessed = function(itemList){	 alert('0123');
    for(var i=0; i<itemList.length; i++){
					theBuId = itemList[i].BU_x0020_ApproverId;
			//Get All SharePoint Groups
					getAllGroupsFromSite();    alert(itemList[i].BU_x0020_ApproverId);
			   
			   
			   
			   
			   
			   
	  		     if(itemList[i].Request_x0020_Status == 'Pending BU approval' ){ 
			       if(theCurrentUserID == itemList[i].BU_x0020_ApproverId){                  				   
			var theDisplayUrl = "https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Lists/Equipment%20Request/DispForm.aspx?ID="+ itemList[i].Id+ "&Source=";
     	    theDisplayUrl +="https%3A%2F%2Fhpenterprise%2Esharepoint%2Ecom%2Fteams%2FProcurementTEST%5FO365%2FLists%2FEquipment%2520Request%2FAllItems%2Easpx&ContentTypeId=0x01001E97B44A0AE01348961FDD9361B2E096";           				                 	 						   
				
				/*******************************************************/
									          
							  	newArr = (itemList[i].buStateValues).split(";");	
					if(newArr[2] != itemList[i].Funding_x0020_Type || newArr[3] != accounting.formatMoney(itemList[i].Estimated_x0020_Cost)){ 
							    self.requestEntries.push(new requestEntry( "<em><div style="+ "\"font-size:large;color:blue;" +"\"><a href=\" " + theDisplayUrl + "\" >" + itemList[i].AdjustedID + "</a></div></em>",															
														    itemList[i].Region,														
															itemList[i].Title,    
															itemList[i].Business_x0020_Unit,
															itemList[i].SubGroup,
															itemList[i].Funding_x0020_Type,
															accounting.formatMoney(itemList[i].Estimated_x0020_Cost),
															itemList[i].Justification,
															itemList[i].Requested_x0020_Quarter,
															itemList[i].Request_x0020_Type,																												
															itemList[i].Id,
															itemList[i].__metadata.etag,
															itemList[i].ApproverComments,
															itemList[i].BreakFix_x002d_Spares,
															itemList[i].Expedite));
					}
					if(newArr[2] == itemList[i].Funding_x0020_Type &&newArr[3] == accounting.formatMoney(itemList[i].Estimated_x0020_Cost)){
						updateRequest('BU Approved', itemList[i].Id, itemList[i].__metadata.etag, itemList[i].ApproverComments, "Request was pre-approved at the BU Accept level.", onUpdateSuccess);
					}							
					
				   }
				 }
			   }
}			   
/*****************************************************************************************************/
  //Get the Request List for update
getRequests  = function(callback){  
							var restUrl =  "https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/dev/_api/web/lists/GetByTitle('DevRequestList')/items"
								+ "?$orderby=Created desc&$top=5000"			
							+ "&$select=*";
                        								 
						//Query the request list to display
							$.ajax({
								url:   restUrl,
								type: "GET",
								headers: {
									"accept": 'application/json;odata=verbose',
								},
								success: function(data){ 
									callback(data.d.results); 
								},
								error: function(){
										alert("Could not load the Equipment Request List.  Please wait and then try again");
								}
							});
}
	
/*************************************************************************************************/
	//Get the current user info
getUserInfo = function(){
		
	$().SPServices({
    operation: "GetUserInfo",
    async: false,
    userLoginName: $().SPServices.SPGetCurrentUser(),
    completefunc: function (xData, Status) {
        $(xData.responseXML).find("User").each(function() {
            curUserId = $(this).attr("ID");
            curUserName = $(this).attr("Name");
            curFullUserName = $(this).attr("ID")+";#"+$(this).attr("Name");
        });
    }
});
		
}	
</script>
	
	

	
	