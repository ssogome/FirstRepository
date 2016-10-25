(function (){ 
		var itemCtx ={};
			itemCtx.Templates = {};
			
			itemCtx.Templates.Fields ={
				"Business_x0020_Requirements" : {"View": renderStatus},
				"Quote_x0020_Request_x0020_Submit" : {"View": renderQuote},
				"Validate_x0020_Config_x0020__x00": {"View": renderValidate},
				"Quote_x0020_Received":  {"View": renderReceived},
				"Requested_x0020_submitted_x0020_": {"View": renderSharepoint},
				"Request_x0020_Approved_x0020__x0": {"View": renderBu},
				"IS_x0020_Funded": {"View": renderFunded},
				"PR_x0020_Created":  {"View": renderPR},
				"PO_x0020_Released": {"View": renderPO},
				"Order_x0020_servers_x0020_from_x": {"View": renderOrder},
				"Shipping_x0020_ETA_x0020_Provide":  {"View": renderETA}
			};
			

SPClientTemplates.TemplateManager.RegisterTemplateOverrides(itemCtx);

 })();
function renderStatus(ctx) { 
					var Business  = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (Business == 'Completed')
{
return "<span style='background-color: blue;color:white;'>" + Business + "</span>";
}
if(Business == 'Pending'){
return "<span style='background-color: yellow;color:white;'>" + Business + "</span>";	
}
if(Business == 'Started'){
return "<span style='background-color: green;color:white;'>" + Business + "</span>";	
}	
} 
/*********************************************Quote Request Submitted********************************/

function renderQuote(ctx) { 
					var quote = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (quote == 'Completed')
{
return "<span style='background-color: blue;color:white;width: 300px;height: 24px;'>" + quote + "</span>";
}
if(quote == 'Pending'){
return "<span style='background-color: yellow;color:white;width: 300px;height: 24px;'>" +quote + "</span>";	
}
if(quote == 'Started'){
return "<span style='background-color: green;color:white;width: 300px;height: 24px;'>" +quote + "</span>";	
}	
} 
/*********************************************Validate Config-Catalog********************************/
function renderValidate(ctx) { 
					var validate = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (validate == 'Completed')
{
return "<span style='background-color: blue;color:white;width: 300px;height: 24px;'>" + validate + "</span>";
}
if(validate == 'Pending'){
return "<span style='background-color: yellow;color:white;width: 300px;height: 24px;'>" +validate + "</span>";	
}
if(validate == 'Started'){
return "<span style='background-color: green;color:white;width: 300px;height: 24px;'>" +validate + "</span>";	
}	
} 
/****************************************Quote Received************************************************/
function renderReceived(ctx) {  
					var received  = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (received == 'Completed')
{
return "<span style='background-color: blue;color:white;'>" + received + "</span>";
}
if(received == 'Pending'){
return "<span style='background-color: yellow;color:white;'>" + received + "</span>";	
}
if(received == 'Started'){
return "<span style='background-color: green;color:white;'>" + received + "</span>";	
}	
} 
/****************************************Request submitted in Sharepoint************************************************/
function renderSharepoint(ctx) {  
					var sp  = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (sp == 'Completed')
{
return "<span style='background-color: blue;color:white;'>" + sp + "</span>";
}
if(sp == 'Pending'){
return "<span style='background-color: yellow;color:white;'>" + sp + "</span>";	
}
if(sp == 'Started'){
return "<span style='background-color: green;color:white;'>" + sp + "</span>";	
}	
} 
/***********************************IS BU Approve*****************************************************************/
function renderBu(ctx) {  
					var Bu  = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (Bu == 'Completed')
{
return "<span style='background-color: blue;color:white;'>" + Bu + "</span>";
}
if(Bu == 'Pending'){
return "<span style='background-color: yellow;color:white;'>" + Bu + "</span>";	
}
if(Bu == 'Started'){
return "<span style='background-color: green;color:white;'>" + Bu+ "</span>";	
}	
} 
/*************************************IS Funded****************************************************************/
function renderFunded(ctx) {  
					var Fund  = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (Fund == 'Completed')
{
return "<span style='background-color: blue;color:white;'>" + Fund + "</span>";
}
if(Fund == 'Pending'){
return "<span style='background-color: yellow;color:white;'>" + Fund + "</span>";	
}
if(Fund == 'Started'){
return "<span style='background-color: green;color:white;'>" + Fund + "</span>";	
}	
}
/********************************PR Created ******************************************************************/
function renderPR(ctx) {  
					var PR  = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (PR == 'Completed')
{
return "<span style='background-color: blue;color:white;'>" + PR + "</span>";
}
if(PR == 'Pending'){
return "<span style='background-color: yellow;color:white;'>" + PR + "</span>";	
}
if(PR == 'Started'){
return "<span style='background-color: green;color:white;'>" + PR + "</span>";	
}	
}
/********************************PO Created ******************************************************************/
function renderPO(ctx) {  
					var PO  = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (PO == 'Completed')
{
return "<span style='background-color: blue;color:white;'>" + PO + "</span>";
}
if(PO == 'Pending'){
return "<span style='background-color: yellow;color:white;'>" + PO + "</span>";	
}
if(PO == 'Started'){
return "<span style='background-color: green;color:white;'>" + PO + "</span>";	
}	
}
/********************************Order moved to Factory Team ******************************************************************/
function renderOrder(ctx) {  
					var Order  = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (Order == 'Completed')
{
return "<span style='background-color: blue;color:white;'>" + Order + "</span>";
}
if(Order == 'Pending'){
return "<span style='background-color: yellow;color:white;'>" + Order + "</span>";	
}
if(Order == 'Started'){
return "<span style='background-color: green;color:white;'>" + Order + "</span>";	
}	
}
/********************************Derlivery ETA ******************************************************************/
function renderETA(ctx) {  
					var eta = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
if (eta == 'Completed')
{
return "<span style='background-color: blue;color:white;'>" + eta + "</span>";
}
if(eta == 'Pending'){
return "<span style='background-color: yellow;color:white;'>" + eta + "</span>";	
}
if(eta == 'Started'){
return "<span style='background-color: green;color:white;'>" + eta + "</span>";	
}	
}








