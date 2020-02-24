$(document).ready(function(){
    $(".dev-icon").click(function(){
        $("#dev-image").toggle();
        $("#dev").toggle();
    });

    $(".design-icon").click(function(){
        $("#design-image").toggle();
        $("#design").toggle();
    });

    $(".product-icon").click(function(){
        $("#product-image").toggle();
        $("#product").toggle();
    }); 
})