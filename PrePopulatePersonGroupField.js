<script src="https://ent302.sharepoint.hp.com/teams/sw-IS-Procurement/procurementgov/requesttest/js/jquery-1.11.3.min.js" type="text/javascript"></script>
<script language="javascript" type="text/javascript">

var PEOPLEPICKERFIELDNAME = "Requested For";
 
function SetPeoplePickerValue(fieldName, userName) 
{       
	var peoplePickerId = $("div[title='" + fieldName + "']").attr('id');
	var peoplePicker = $("input[title='" + fieldName + "']").val(userName);
	var peoplePickerObject = SPClientPeoplePicker.SPClientPeoplePickerDict[peoplePickerId];
	peoplePickerObject.AddUnresolvedUserFromEditor(true);
}
 
function GetCurrentUser()
{
	var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/currentuser";
	var requestHeaders = { "accept":"application/json;odata=verbose" };
	$.ajax({
		url: requestUri,
		contentType: "application/json;odata=verbose",
		headers: requestHeaders,
		success: onSuccess,
		error: onError
	});
}
 
function onSuccess(data, request)
{
	var userName= data.d.LoginName;
	userName = userName.toString().split("i:0#.w|")[1];
	SetPeoplePickerValue(PEOPLEPICKERFIELDNAME, userName);

}
 
function onError(error)
{
	alert(error);
}
 
$(document).ready(function(){
	GetCurrentUser();	
});
</script>
