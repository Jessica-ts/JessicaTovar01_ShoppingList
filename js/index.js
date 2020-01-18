function init()
{
	$("#submitButton").on("click", (event)=> 
	{
		event.preventDefault();	
		let item = $("#item").val();
		$("#shoppingList").append('<p> <li>' + item + "</p> <button id='checkButton'>Check</button>" + "<button id='deleteButton'>Delete</button>" + '</li>');
		$('#item').val("");
    });
	checkBtn();
	deleteBtn();
	
}

function checkBtn()
{
	$("#shoppingList").on("click", "#checkButton", (event)=>
	{
		event.preventDefault();	
		$(event.target).parent().toggleClass("markItem");
	});

}

function deleteBtn()
{
	$("#shoppingList").on("click", "#deleteButton", (event)=>
	{
    	event.preventDefault();	
    	$(event.target).parent().remove();
	});
}

$(init);