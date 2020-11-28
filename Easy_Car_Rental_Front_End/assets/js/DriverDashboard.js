//=========================Left Panal Button Select========================

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

$('#username').text(getCookie('user'));


let btnarray = ['#btn-home','#btn-customers','#btn-cars','#btn-orders','#btn-payments','#btn-reports','#btn-drivers'];
function setClass() {
    for (id in btnarray) {
        $(btnarray[id]).removeClass('btn-custom-selected').addClass('btn-custom');
    }
}

$('#btn-home').click(()=>{
    hideall();
    setClass();
    $('#btn-home').addClass('btn-custom-selected');
    $('#Dashboard').show();

});

$('#btn-customers').click(()=>{
    hideall();
    setClass();
    $('#btn-customers').addClass('btn-custom-selected');
    $('#Customers').show();

});

$('#btn-cars').click(()=>{
    hideall();
    setClass();
    $('#btn-cars').addClass('btn-custom-selected');
    $('#Cars').show();
});

$('#btn-orders').click(()=>{
    setClass();
    $('#btn-orders').addClass('btn-custom-selected');
});

$('#btn-payments').click(()=>{
    setClass();
    $('#btn-payments').addClass('btn-custom-selected');
});

$('#btn-reports').click(()=>{
    setClass();
    $('#btn-reports').addClass('btn-custom-selected');

});

$('#btn-drivers').click(()=>{
    setClass();
    $('#btn-drivers').addClass('btn-custom-selected');

});

let hide = ['#Dashboard','#Customers','#Cars'];

function hideall(){
    for (let i in hide) {
        $(hide[i]).hide();
    }

}

