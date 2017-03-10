	$(":radio[value='P-Card / QMS Tracking']").click(function(){
					alert('radio    '  );
					//alert('radio'  + '\n'+ $(this).val() + '\n' + $(this).next().text());	
					//do something  here  with code attached to the value of the radio
	});
	// Prevent user from mixing request types
			$(":radio[value='Standard (catalog request)']").click(function(){
					alert('radio    '  );
					requestType($(this).next().text());
			});
			$(":radio[value='Single part number(s)']").click(function(){
					alert('radio    '  );
					requestType($(this).next().text());
			});
			$(":radio[value='Special Request (not in Catalog)']").click(function(){
					alert('radio    '  );
					requestType($(this).next().text());
			});
			$(":radio[value='Non-M&E']").click(function(){
					alert('radio    '  );
					requestType($(this).next().text());
			});			
			$(":radio[value='P-Card / QMS Tracking']").click(function(){
					alert('radio    '  );
					requestType($(this).next().text());
			});