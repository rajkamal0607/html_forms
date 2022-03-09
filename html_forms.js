var count = 1;
function inputData()
{
    count++;
    console.log("Adding Fields");
    if(count == 1) {

        add = `<div class="mb-3 cls_int">
        <div id="removeField">
        <label for="exampleInputInterest" class="form-label fw-bold">Interest</label>
        <input type="text" class="form-control" required placeholder="Enter Interest">
        <button type="button" onclick="inputData()" name="interest" class="btn btn-dark btn_int">+</button>
        <button type="button" style="position: absolute;right: -90px;top: 32px;" onclick="minusData()" class="btn btn-dark">-</button>
        </div>
        </div>`;
    }
    else {
        $('#spanMinus').html('<button type="button" style="position: absolute;right: -90px;top: 32px;" onclick="minusData()" class="btn btn-dark">-</button>');
        add = `<div class="mb-3 cls_int">
        <div id="removeField">
        <label for="exampleInputInterest" class="form-label fw-bold">Interest</label>
        <input type="text" class="form-control" required placeholder="Enter Interest">
        <button type="button" onclick="inputData()" name="interest" class="btn btn-dark btn_int">+</button>
        <button type="button" style="position: absolute;right: -90px;top: 32px;" onclick="minusData()" class="btn btn-dark">-</button>
        </div>
        </div>`;
    }

    var add_btn = document.getElementById('InputInterest');
    add_btn.innerHTML += add;

}

function minusData()
{
    var remove_fld = document.getElementById('removeField');
    if(count == 2) {
        $('#spanMinus').html('');
    }
    remove_fld.remove();
    count-=1;
}
