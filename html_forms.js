$(document).ready(function() {
var max_fields      = 100; //maximum input boxes allowed
var wrapper   		= $("#InputInterest"); //Fields wrapper
var add_button      = $("#btn_id"); //Add button ID
    
var x = 1; //initlal text box count
$(add_button).click(function(e){ //on add input button click
console.log("populating");
e.preventDefault();
    if(x < max_fields){ //max input box allowed
        x++; //text box increment
        $(wrapper).append('<div class="input-group mb-3" style = "position : relative;"><div><label for="exampleInputInterest" id="int_num" class="form-label fw-bold">Interest</label><input placeholder="Enter Interest" type="text" name="mytext[]" class="form-control"><div class="input-group-append"></div><button class="btn btn-dark remove_field" style = "position : absolute; left:220px; top:32px" type="button">-</button></div>'); //add input box
    }
});

$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
    e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
    })
});
