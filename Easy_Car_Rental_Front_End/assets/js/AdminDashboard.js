//=========================Left Panal Button Select========================

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
    $('#Dashboard').fadeIn(1500);

});

$('#btn-customers').click(()=>{
    hideall();
    setClass();
    loadAllUnverifiedCustomers();
    loadAllCustomers();
    $('#btn-customers').addClass('btn-custom-selected');
    $('#Customers').fadeIn(1500);

});

$('#btn-cars').click(()=>{
    hideall();
    setClass();
    loadAllCars();
    $('#btn-cars').addClass('btn-custom-selected');
    $('#Cars').fadeIn(1500);
});

$('#btn-orders').click(()=>{
    hideall();
    setClass();
    $('#btn-orders').addClass('btn-custom-selected');
});

$('#btn-payments').click(()=>{
    hideall();
    setClass();
    $('#btn-payments').addClass('btn-custom-selected');
});

$('#btn-reports').click(()=>{
    hideall();
    setClass();
    $('#btn-reports').addClass('btn-custom-selected');

});

$('#btn-drivers').click(()=>{
    hideall();
    setClass();
    $('#btn-drivers').addClass('btn-custom-selected');

});

let hide = ['#Dashboard','#Customers','#Cars'];

function hideall(){
    for (let i in hide) {
        $(hide[i]).hide();
    }

}

//===============load all customers========================

function loadAllUnverifiedCustomers() {
    $('#tblCusBody').empty();
    $.ajax({
        url: 'http://localhost:8080/carRentalSystem/api/v1/customer',
        method: 'GET',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                if (values[i].verified == false) {
                    let id = values[i].customerID;
                    let name = values[i].name;
                    let nic = values[i].nicNo;
                    let licence = values[i].drivingLicenceNo;

                    $('#tblCusBody').append(`<tr><th>${id}</th><td>${name}</td><td>${nic}</td><td>${licence}</td><td><button type="button" class="btn btn-secondary">View</button></td><td><button type="button" class="btn btn-secondary">View</button></td><td><button type="button" class="btn btn-success vrfy">Verify</button></td></tr>`)
                }

            }
        }
    });
}

function loadAllCustomers() {
    $('#tblCusAllBody').empty();
    $.ajax({
        url: 'http://localhost:8080/carRentalSystem/api/v1/customer',
        method: 'GET',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                if (values[i].verified == true) {
                    let id = values[i].customerID;
                    let username = values[i].userName;
                    let name = values[i].name;
                    let nic = values[i].nicNo;
                    let licence = values[i].drivingLicenceNo;
                    let email = values[i].email;
                    let address = values[i].address;
                    let contact = values[i].contact;

                    $('#tblCusAllBody').append(`<tr><th>${id}</th><td>${username}</td><td>${name}</td><td>${nic}</td><td>${licence}</td><td>${email}</td><td>${address}</td><td>${contact}</td></tr>`)
                }
            }
        }
    });
}

$('#btncreate').click(()=>{
    let name = $('#inputName').val();
    let contact = $('#inputContactNo').val();
    let email = $('#inputEmail').val();
    let address = $('#inputAddress').val();
    let drivingLicenceNo = $('#inputDrivingLicence').val();
    let nic = $('#inputNIC').val();
    let userName = $('#inputUserName').val();
    let password = $('#inputPassword').val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/carRentalSystem/api/v1/customer",
        data:JSON.stringify({
            "customerID":"",
            "name":name,
            "contact": contact,
            "email": email,
            "address":address,
            "drivingLicenceNo":drivingLicenceNo,
            "verified":1,
            "nicNo":nic,
            "userName":userName,
            "password":password
        }),
        dataType:'Json',
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            if(res.message=='Success'){
                alert('Registration Successful');
                loadAllCustomers();
            }
        },
        error: function (ob, textStatus, error) {
            console.log("error from : " + ob + " " + textStatus + " " + error);
            if(res.message!='Success'){
                alert('Registration UnSuccessful! Try again');
            }
        }
    });
});

$('#savecar').click(()=>{
    let brand = $('#brand').val();
    let passengers = $('#passengers').val();
    var cartype = $('#cartype').find(":selected").text();
    var fueltype = $('#fueltype').find(":selected").text();
    var transmision = $('#transmisiontype').find(":selected").text();
    let regno = $('#regno').val();
    var colour = $('#colour').find(":selected").text();
    let dailyrate = $('#dailyrate').val();
    let monthlyrate = $('#monthlyrate').val();
    let price = $('#price').val();
    let duration = $('#duration').val();
    let extrakm = $('#extrakm').val();
    let lossdamage = $('#lossdamage').val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/carRentalSystem/api/v1/car",
        data:JSON.stringify({
            "carID":"",
            "Brand":brand,
            "Type": cartype,
            "numberOfPassengers": passengers,
            "transmissionType":transmision,
            "fuelType":fueltype,
            "priceForExtraKM":extrakm,
            "registrationNumber":regno,
            "colour":colour,
            "dailyRate":dailyrate,
            "monthlyRate":monthlyrate,
            "freeMillagePrice":price,
            "freeMillageDuration":duration
        }),
        dataType:'Json',
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            if(res.message=='Success'){
                alert('Registration Successful');
                loadAllCars();
            }
        },
        error: function (ob, textStatus, error) {
            console.log("error from : " + ob + " " + textStatus + " " + error);
            if(res.message!='Success'){
                alert('Registration UnSuccessful! Try again');
            }
        }
    });
});

function loadAllCars() {
    $('#tblCarsBody').empty();
    $.ajax({
        url: 'http://localhost:8080/carRentalSystem/api/v1/car',
        method: 'GET',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                    let id = values[i].carID;
                    let regno = values[i].registrationNumber;
                    let brand = values[i].Brand;
                    let passengers = values[i].numberOfPassengers;
                    let transmision = values[i].transmissionType;
                    let cartype = values[i].type;
                    let colour = values[i].colour;
                    let fuel = values[i].fuelType;

                    $('#tblCarsBody').append(`<tr><th>${id}</th><td>${regno}</td><td>${brand}</td><td>${passengers}</td><td>${transmision}</td><td>${cartype}</td><td>${colour}</td><td>${fuel}</td></tr>`)
                }
        }
    });
}

