$(function () {
    $(document).on('click', '#productPhoto-div', function (e) {
        e.preventDefault();
        $('#productPhoto').trigger('click');
    });

    $(document).on('click', '#productDiagram-div', function (e) {
        e.preventDefault();
        $('#productDiagram').trigger('click');
    });

    $('#productPhoto').change(function () {
        readURL(this,'#product-photo');
    });
     $('#productDiagram').change(function () {
        readURL(this,'#product-img');
    });
});

function readURL(input,img) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(img).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}