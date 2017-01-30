$(document).ready(function () {
    $("#start").click(function () {
        $(".modal").fadeOut(120)
        $(".overlay").fadeOut(120)
    });
});
$(document).ready(function () {
    $("#close").click(function () {
        $(".modal").fadeOut(120)
        $(".overlay").fadeOut(120)
    });
});

$(document).ready(function () {
    $("#about").click(function () {

    		document.getElementById('infoModal').style.display = 'block';
    		document.getElementById('infoModal').style.visibility = 'visible';

    });
});
