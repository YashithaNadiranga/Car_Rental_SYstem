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
loadAllCars();

let btnarray = ['#btn-cust-home','#btn-cust-cars','#btn-cust-orders','#btn-cust-payments'];
function setClass() {
    for (let id in btnarray) {
        $(btnarray[id]).removeClass('btn-custom-selected').addClass('btn-custom');
    }
}

$('#btn-cust-home').click(()=>{
    setClass();
    hideall();
    $('#btn-cust-home').addClass('btn-custom-selected');
    $('#Cust-Dashboard').fadeIn(1000);

});

$('#btn-cust-cars').click(()=>{
    loadAllCars();
    setClass();
    hideall();
    $('#btn-cust-cars').addClass('btn-custom-selected');
    $('#All-cars').fadeIn(1000);

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

$('#carsearch').click(()=>{
    loadSearchCars();
});

let hide = ['#Cust-Dashboard','#All-cars'];

function hideall(){
    for (let i in hide) {
        $(hide[i]).hide();
    }

}

function loadAllCars() {
    $('#tblCar').empty();
    $.ajax({
        url: 'http://localhost:8080/carRentalSystem/api/v1/car',
        method: 'GET',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let id = values[i].carID;
                let brand = values[i].brands;
                let passengers = values[i].numberOfPassengers;
                let transmision = values[i].transmissionType;
                let cartype = values[i].type;
                let colour = values[i].colour;
                let fuel = values[i].fuelType;

                $('#tblCar').append(`<tr><th>${id}</th><td>${brand}</td><td>${passengers}</td><td>${transmision}</td><td>${cartype}</td><td>${colour}</td><td>${fuel}</td><td><button class="btn btn-secondary">View Image</button></td></tr>`)
            }
        }
    });
}

function loadSearchCars() {
    let tp = $('#carstype').find(":selected").text();
    console.log(tp)
    $('#tblCarSerch').empty();
    $.ajax({
        url: 'http://localhost:8080/carRentalSystem/api/v1/car/type/'+tp,
        method: 'GET',
        success: function (res) {
            console.log(res);
            let values = res.data;
            for (i in values) {
                let id = values[i].carID;
                let brand = values[i].brands;
                let passengers = values[i].numberOfPassengers;
                let transmision = values[i].transmissionType;
                let cartype = values[i].type;
                let colour = values[i].colour;
                let fuel = values[i].fuelType;

                $('#tblCarSerch').append(`<tr><th>${id}</th><td>${brand}</td><td>${passengers}</td><td>${transmision}</td><td>${cartype}</td><td>${colour}</td><td>${fuel}</td><td><button class="btn btn-secondary">View Image</button></td></tr>`)
            }
        }
    });
}

