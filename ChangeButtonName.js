 <script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-ui.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/knockout-3.3.0.js"></script>

<script  type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery.SPServices-2014.02.min.js"></script>
<script type="text/javascript">
 $(function(){  
  
      SP.SOD.executeFunc('sp.js', 'SP.ClientContext', ChangeSaveButtonText);

  
});


function ChangeSaveButtonText()
{alert();
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
inputcontrols[i].value = "Submit";
}
}

</script>


