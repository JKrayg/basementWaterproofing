$(document).ready(function() {
    $('.modal').hide();

    $("#foundationDropDown").on("click", function() {
        $('.modal').show();
        $("#modalPhoto1").attr("src", "style/images/Scan 1.png");
        $("#modalPhoto2").attr("src", "style/images/Scan.png");

    })

    $(".close").on("click", function () {
        $(".modal").hide();
        location.reload();
    })
});
