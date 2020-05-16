$(document).ready(function() {
    $('#submit-button').on('click', function() {
        var burgerData = {
            burger_name: $('#new_burger').val().trim()
        }
     
    $.ajax("/burger/create", {
        type: "POST",
        data: burgerData        
    })
    .then(function() {
        console.log("created a new burger");
        location.reload();
        });
    });	


    $('.devour-button').on('click', function() {
        var devourData = {
            id: $(this).attr('data-id')	
        }
        
    $.ajax("/burger/eat", {
        type: "POST",
        data: devourData
    })
    .then(function() {
        console.log("updated a new burger to deveour!");
        location.reload();
        });  
    });	

    $('.restore-button').on('click', function() {
        var restoreData = {
            id: $(this).attr('data-id')	
        }
    
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