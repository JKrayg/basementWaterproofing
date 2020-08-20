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

    $("#stabilizeAndSecure").on("click", function() {
        $('.modal').show();
        $("#modalPhoto1").attr("src", "style/images/stabilizennsecure.png");
        $("#modalPhoto2").attr("src", "style/images/stabilizensecure1.png");

    })

    $("#permanentlyStabilize").on("click", function() {
        $('.modal').show();
        $(".carousel-indicators").append("<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>" + 
        "<li data-target='#carouselExampleIndicators' data-slide-to='3'></li>")
        $(".carousel-inner").append("<div class = 'carousel-item photo3'>")
        $(".photo3").append("<img id = 'modalPhoto3' class='d-block w-100'>")
        $(".carousel-inner").append("<div class = 'carousel-item photo4'>")
        $(".photo4").append("<img id = 'modalPhoto4' class='d-block w-100'>")
        $("#modalPhoto1").attr("src", "style/images/permstabilize1.png");
        $("#modalPhoto2").attr("src", "style/images/permstabilize2.png");
        $("#modalPhoto3").attr("src", "style/images/permstabilize3.png");
        $("#modalPhoto4").attr("src", "style/images/permstabilize4.png");

    })
});
