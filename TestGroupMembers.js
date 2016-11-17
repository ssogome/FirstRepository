<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/HTML%20Library/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-ui.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/knockout-3.3.0.js"></script>
<script  type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery.SPServices-2014.02.min.js"></script>
<script type="text/javascript"   src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/accounting.min.js"></script>

<script type="text/javascript">
	var theBuInfo = [];
	var theBuAcceptValues = [];
	var dt = new Date();

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
/***********************************************************************************************/	
	// Function returns all users in respective Groups                                           
function getAllUsersFromGroup(groupName) {	
// alert(groupName);
		$().SPServices({
                       operation: "GetUserCollectionFromGroup",
                       groupName: groupName,
                       async: false,
                       completefunc: function (xDataUser, Status) {
                            $(xDataUser.responseXML).find("User").each(function() {
//alert($(this).attr("Name").trim()+  $(this).attr("ID")  +'---------0--------\n-' + theBuInfo[0].Id +'---------0--------\n-' + theBuInfo[0].BuId +'---------0--------\n-' + theBuInfo[0].etag);
										if($(this).attr("ID")  == theBuInfo[0].BuId){
											
											DoBuPreApproval(theBuInfo[0].Id, theBuInfo[0].BuName, theBuInfo[0].etag, theBuInfo[0].comment, theBuInfo[0].hist);
										}		   
												
							        });
                            }
        });
}



/************************************************************************************************/
					
onGetDefaultViewSuccessed = function(itemList){//	 alert('0123');
    for(var i=0; i<itemList.length; i++){  // alert(itemList[i].buStateValues  + '-----id =   ' + itemList[i].BU_x0020_Approver.ID + '\n'+ itemList[i].History);
		if(itemList[i].Request_x0020_Status == 'Pending BU approval'){	 alert(); 
		theBuInfo.push({ BuId: itemList[i].BU_x0020_Approver.ID, BuName:itemList[i].BU_x0020_Approver.Title,  etag:itemList[i].__metadata.etag, Id:itemList[i].Id, comment:itemList[i].Accept_x0020_Comment, hist:itemList[i].History});
					theBuAcceptValues = itemList[i].buStateValues.split(";");  
			// alert(itemList[i].Funding_x0020_Type+' == '+theBuAcceptValues[2]  + '\n' + accounting.formatMoney(itemList[i].Estimated_x0020_Cost)+' == '+ theBuAcceptValues[3]); 		
			//Get All SharePoint Groups  if there is no need to upload the request
				if(itemList[i].Funding_x0020_Type == theBuAcceptValues[2] && accounting.formatMoney(itemList[i].Estimated_x0020_Cost) == theBuAcceptValues[3])getAllGroupsFromSite(); theBuInfo.splice(0, theBuInfo.length);  		   		   			   			   			   
				theBuAcceptValues.splice(0, theBuAcceptValues.length);
			   
		}			
	}
}			   
/*****************************************************************************************************/
  //Get the Request List for update
getRequests  = function(callback){  
							var restUrl =  "https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/dev/_api/web/lists/GetByTitle('DevRequestList')/items"
								+ "?$orderby=Created desc&$top=5000"			
							+ "&$select=Accept_x0020_Comment,History, Request_x0020_Status, Funding_x0020_Type, Estimated_x0020_Cost, buStateValues, ID, Title,BU_x0020_Approver/ID,BU_x0020_Approver/Title&$expand=BU_x0020_Approver/ID";
                        								 
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

/***********************************************************************************************************/
DoBuPreApproval = function(id, approverName, etag, comment, hist){
//	alert(id + '\n' + approverName + '\n' + etag + '\n'+  + '\n' + theBuAcceptValues);
	updateRequest("BU Approved", id, etag, comment,  "The request was BU pre-approved", hist, approverName, onUpdateSuccess)
}
updateRequest =function(RequestApprovalLevel, id, etag, theComment, theNotes, theHistory, approverName, callback){ 
//alert(RequestApprovalLevel + '\n' + id + '\n'+ etag+ '\n' + approverId + '\n'+ theHistory + '\n'+ theNotes);     
	 var body ={  
		 '__metadata':{'type': 'SP.Data.DevRequestListListItem'},
		  'Request_x0020_Status': RequestApprovalLevel,
		  'ApproverComments': "This request was BU pre-approved.",
		  'Approved_x0020_TimeStamp': dt,
		  'History':    theHistory  + "\n" + "The request was moved from Pending BU Approval status to Fund status  as BU pre-approved on " + dt + " by " 	+ approverName +".",
	 };
//	 alert(theNotes + '\n' + theHistory + '\n' + body);
	 body = JSON.stringify(body);
	
	 $.ajax({
		url: "https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/dev/_api/web/lists/GetByTitle('DevRequestList')/items/getbyid('" + id.toString() +"')",
		type: "POST",
		data: body,
		headers:{
			 "X-Http-Method": "PATCH",
			 "X-RequestDigest": $("#__REQUESTDIGEST").val(),
			 "IF-MATCH": etag,
			  "accept" : "application/json;odata=verbose",
			 "content-type": "application/json;odata=verbose",
			 "content-length": body.length
		},
	  success: function(data,status,resp){callback(id, resp.getResponseHeader("ETAG"));},
	  error: function(err){//sendEmail(); 
				alert("Microsoft Cloud Farm is Busy.  Please wait and then try again");}	
         	 });
 }
 function onUpdateSuccess(){        
     // location.replace(location.pathname);	
 }
/*****************************************
	
/_api/web/lists/getbytitle(listname)/items?$select=Title,Author/ID,Author/Title&$expand=Author/ID,Author/Title
	
/_api/web/lists/getbytitle(listname)/items?$select=Title,Author/ID,Author/FirstName,Author/LastName,Author/Title,Author/Department,Author/SipAddress&$expand=Author/ID	
	
	
********************************************/ 
</script>
	
