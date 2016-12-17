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
        readURL(this, '#product-photo');
    });
    $('#productDiagram').change(function () {
        readURL(this, '#product-img');
    });

    $('#motor_spec').click(function () {
        if (this.checked) {
            $("#motor_colums,#Motor_rows,#create-motor_table").removeAttr("disabled");
        } else {
            $("#motor_colums,#Motor_rows,#create-motor_table").attr("disabled", true);
        }
    });

    $('#gear_spec').click(function () {
        if (this.checked) {
            $("#gear_colums,#gear_rows,#create-gear_table").removeAttr("disabled");
        } else {
            $("#gear_colums,#gear_rows,#create-gear_table").attr("disabled", true);
        }
    });

    var limit = 3;
    $('input.single-checkbox').on('change', function (evt) {
        if ($('input.single-checkbox:checked').length > limit) {
            this.checked = false;
        }
    });

    $('.edit').on('click', function (e) {
        e.preventDefault();
        //Do edit functionality
        $(this).siblings('.publish').removeClass('gray-out').attr('disabled',false);
    });

    $('.publish').on('click', function (e) {
        e.preventDefault();
        //Do publish functionality
        if (!$(this).attr('disabled')) {

            $(this).addClass('gray-out');
            $('#published').modal({});
            $(this).attr('disabled', true);
        }
    });
});

function readURL(input, img) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(img).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function createTable(table_id) {

    var mytable = $('<tbody></tbody>');
    var rows = new Number($("#Motor_rows").val());
    var cols = new Number($("#motor_colums").val());
    var tr = [];
    for (var i = 0; i < rows; i++) {
        var row = $('<tr></tr>').attr({ class: [].join(' ') }).appendTo(mytable);
        for (var j = 0; j < cols; j++) {
            $('<td></td>').html("<input type='text'>").appendTo(row);
        }

    }
    $("#MotortableHolder table").html('');
    mytable.appendTo("#MotortableHolder table");

}
function creategearTable(table_id) {

    var mytable = $('<tbody></tbody>');
    var rows = new Number($("#gear_rows").val());
    var cols = new Number($("#gear_colums").val());
    var tr = [];
    for (var i = 0; i < rows; i++) {
        var row = $('<tr></tr>').attr({ class: [].join(' ') }).appendTo(mytable);
        for (var j = 0; j < cols; j++) {
            $('<td></td>').html("<input type='text'>").appendTo(row);
        }

    }
    $("#geartableHolder table").html('');
    mytable.appendTo("#geartableHolder table");

}