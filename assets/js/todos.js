// Check off a todo with a click
$('ul').on("click", "li",function(){
    $(this).toggleClass('completed');
});

// Click 'X' to delete
$('ul').on("click", "span", function(event){
    // calls the <li>
    $(this).parent().fadeOut(500, function(){
        // removes the <li>
        $(this).remove();
    });
    // stops parent tags from reacting
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // Grabbing input text
        var todoText = $(this).val();
        $(this).val("");
        // create li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText +"</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})