<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/HTML%20Library/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-ui.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/knockout-3.3.0.js"></script>
<script  type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery.SPServices-2014.02.min.js"></script>

<script type="text/javascript">
$(function(){ 				
			$().SPServices({
                        operation: "GetGroupCollectionFromSite",
                        async: false,
                        completefunc: function (xData, Status) {
                                        $(xData.responseXML).find("Group").each(function() {
                                    //     alert($(this).attr("Name"));
                                        getAllUsersFromGroup($(this).attr("Name"));
                                                                                           });
                        }
			});

                   
});

	// Function returns all users in respective Groups                                           
function getAllUsersFromGroup(groupName) {//alert('0');		
// alert(groupName);
		$().SPServices({
                       operation: "GetUserCollectionFromGroup",
                       groupName: groupName,
                       async: false,
                       completefunc: function (xDataUser, Status) {
                                       $(xDataUser.responseXML).find("User").each(function() {
										//   alert($(this).attr("Name"));
                                    //   $('#GroupUsers').append("<tr><td>" + groupName + "</td><td>" + $(this).attr("Name") + "</td></tr>");
                                                                                   });
                                    }
        });
}



</script>


					
					
