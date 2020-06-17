$(document).ready(function () {
    var params = GetURLParams();
    if (Object.keys(params).length > 0 && params.x != "") {
        $("#x").val(params.x);
        $("#sel1").val(params.sel1);
        $("#sel2").val(params.sel2);
        convert();
    }
});		
function GetURLParams() {
    var url = window.location.href;
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
        params = {},
        match;
    while (match = regex.exec(url)) {
        params[match[1]] = match[2];
    }
    return params;
}
function copy()
{
    $("#y").select();
    document.execCommand('copy');
}

function swap() {
    var i1 = $("#sel1")[0].selectedIndex;
    var i2 = $("#sel2")[0].selectedIndex;
    $("#sel1")[0].selectedIndex = i2;
    $("#sel2")[0].selectedIndex = i1;
    $("#x").val( $("#y").val() );
    $("#y").val("");
}

function convert() {
    var x = $("#x").val();
    var b1 = $("#sel1")[0].selectedIndex+2;
    var b2 = $("#sel2")[0].selectedIndex+2;
    try {
        var x = new BigNumber(x, b1);
      

        $("#x").css("background-color", "white");
    }
    catch(err) {
        $("#x").css("background-color", "aquamarine");
        $("#y").val("");
        return;
    }

    $("#y").val( x.toString(b2).toUpperCase() );
}