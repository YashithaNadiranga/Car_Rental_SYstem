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

$('#user').text(getCookie('user'));


let btnarray = ['#btn-cust-home','#btn-cust-cars','#btn-cust-orders','#btn-cust-payments'];
function setClass() {
    for (let id in btnarray) {
        $(btnarray[id]).removeClass('btn-custom-selected').addClass('btn-custom');
    }
}

$('#btn-cust-home').click(()=>{
    setClass();
    $('#btn-cust-home').addClass('btn-custom-selected');

});

$('#btn-cust-cars').click(()=>{
    setClass();
    $('#btn-cust-cars').addClass('btn-custom-selected');

});

$('#btn-cust-orders').click(()=>{
    setClass();
    $('#btn-cust-orders').addClass('btn-custom-selected');
});

$('#btn-cust-payments').click(()=>{
    setClass();
    $('#btn-cust-payments').addClass('btn-custom-selected');
});

$('#logout').click(()=>{
    if (confirm("Are you sure to Sign-out")){
        window.location.replace("index.html");

    }else{

    }
});

let hide = ['#Dashboard','#Customers','#Cars'];

function hideall(){
    for (let i in hide) {
        $(hide[i]).hide();
    }

}

