<script src="//code.jquery.com/jquery-1.10.2.js"></script>
(function ($, undefined)
{
    $("document").ready(function ()
    {
        var inputcontrols = document.getElementsByTagName("input");
        alert(inputcontrols.length);
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Submit";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        alert(ribbonSave);
        ribbonSave.text("Submit");

    });
})(jQuery);

<script type=”text/javascript”>
function ChangeSaveButtonText()
{
var inputcontrols = document.getElementsByTagName(“input”);
for(i = 0; i<inputcontrols .length; i++)
{
if(inputcontrols [i].type == “button” && inputcontrols [i].value == “Save”)
inputcontrols [i].value = “Submit”;
}
}
_spBodyOnLoadFunctionNames.push(“ChangeSaveButtonText”);
</script>