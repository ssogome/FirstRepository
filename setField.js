<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-1.11.3.min.js"></script>
 <script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-ui.min.js"></script>
 <script  type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery.SPServices-2014.02.min.js"></script>
 <script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/knockout-3.3.0.js"></script>
 
<script type="text/javascript">
	var str = "Last Approver";
	
$(function(){
	 
	    SetLastApprover();
});	
SetLastApprover = function(){ alert('start');
			var  clientContext = SP.ClientContext.get_current();			 
			  var  list = clientContext.get_web().get_lists().getByTitle('SubGroups');
		/*Change Title to Business Unit (new column)*******/	
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
			//alert(item.Title   + '\n' +  item.GBU.get_lookupValue() + '\n' +  item.subbu );
				 if(item.Title == 'ALM' && item.GBU.get_lookupValue() == 'Application Delivery Mgmt' && item.subbu == 'Autopass'){ 
					alert('find if              ' + lstItm.get_item("approver").get_lookupValue());
					    $("div[title='approver']").text(lstItm.get_item("approver").get_lookupValue());
						SetPeoplePickerValue('approver', lstItm.get_item("approver").get_lookupValue());
				 }
	}
	
}
onLoadFailed = function(){	
	 alert('From   NewForm.aspx: Unable to load Approvers list. ' + args.get_message() + '\n' + args.get_stackTrace());
}	

</script>