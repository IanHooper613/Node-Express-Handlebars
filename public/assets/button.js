$(document).ready(function() {
    
    //when button is clicked, it creates a function
    $('#submit-button').on('click', function() {
        var burgerData = {
            burger_name: $('#new_burger').val().trim()
        }
    //sends a post request
    $.ajax("/burger/create", {
        type: "POST",
        data: burgerData        
    })
    .then(function() {
        console.log("created a new burger");
        location.reload();
        });
    });	

    //funcion when devoured button is clicked
    $('.devour-button').on('click', function() {
        var devourData = {
            id: $(this).attr('data-id')	
        }
    //send a post request    
    $.ajax("/burger/eat", {
        type: "POST",
        data: devourData
    })
    .then(function() {
        console.log("updated a new burger to deveour!");
        location.reload();
        });  
    });	

    //function when restore button is clicked
    $('.restore-button').on('click', function() {
        var restoreData = {
            id: $(this).attr('data-id')	
        }
        
        //send a post request
        $.ajax("/burger/restore", {
            type: "POST",
            data: restoreData
        })
        .then(function() {
            console.log("updated a new burger to restore!");
            location.reload();
        });
    });	
});