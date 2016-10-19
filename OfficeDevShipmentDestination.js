<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/HPESS-Equipment/Script%20Library/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/HPESS-Equipment/Script%20Library/jquery-ui.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/HPESS-Equipment/Script%20Library/knockout-3.3.0.js"></script>


<script type="text/javascript">
 var shipmentinfo = "";

$(function(){    
	   //Set it first to None
      $("select[title='Shipment Destination Required Field']").find('option').filter(function(){return this.text === 'None';}).attr('selected','selected');
  $("select[title='Shipment Destination Required Field']").change(function(){ 
   $('nobr:contains("Ship-to-person")').closest('tr').show();
   $('nobr:contains("Ship-to person phone number")').closest('tr').show();
   $('nobr:contains("Ship-to-Street")').closest('tr').show();
   $('nobr:contains("Ship-to-City")').closest('tr').show();
   $('nobr:contains("Ship-to-Building")').closest('tr').show();
   $('nobr:contains("Ship-to-Mailstop")').closest('tr').show();
   $('nobr:contains("Ship-to-State")').closest('tr').show();
   $('nobr:contains("Ship-to-Country")').closest('tr').show(); 
   $('nobr:contains("Region")').closest('tr').show(); 
   $('nobr:contains("Ship-to-Postal Code")').closest('tr').show();
   $('nobr:contains("localization")').closest('tr').show();
       shipmentinfo = $(this).val();		    	
	   //Load   the fields
		 SP.SOD.executeFunc('sp.js', 'SP.ClientContext', doLoad());
  });  
		 
})
function doLoad(){ 
	
 loadShipToList = function(theCurrentItemID){  
			  var  clientContext = SP.ClientContext.get_current();
			  var theID = theCurrentItemID;
			  var  list = clientContext.get_web().get_lists().getByTitle('Dev ShipTo');
			
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
				   
				if(item.Title != 'Other'){//  alert(item.st_state + '\n'+ item.st_mailstop);
						//Set values and make them read only
					 $("input[title='Ship-to-City Required Field']").val(item.Title); 
					 $("input[title='Ship-to-City Required Field']").attr("readonly","true");
					 $("input[title='Ship-to-person Required Field']").val(item.st_person); 
					 $("input[title='Ship-to-person Required Field']").attr("readonly","true");
					 $("input[title='Ship-to person phone number Required Field']").val(item.st_phone); 
					 $("input[title='Ship-to person phone number Required Field']").attr("readonly","true");
					 $("input[title='Ship-to-Street Required Field']").val(item.st_street); 
					 $("input[title='Ship-to-Mailstop']").val(item.st_mailstop); 
					 $("input[title='Ship-to-Street Required Field']").attr("readonly","true");
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
</script>


