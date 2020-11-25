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
    $('#Dashboard').fadeIn(1000);

});

$('#btn-customers').click(()=>{
    hideall();
    setClass();
    loadAllUnverifiedCustomers();
    loadAllCustomers();
    $('#btn-customers').addClass('btn-custom-selected');
    $('#Customers').fadeIn(1000);

});

$('#btn-cars').click(()=>{
    hideall();
    setClass();
    loadAllCars();
    $('#btn-cars').addClass('btn-custom-selected');
    $('#Cars').fadeIn(1000);
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
    loadAllDrivers();
    $('#btn-drivers').addClass('btn-custom-selected');
    $('#Drivers').fadeIn(1000);

});

$('#cleardriver').click(()=>{
    cleardriverfields();
});

let hide = ['#Dashboard','#Customers','#Cars','#Drivers'];

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
            "brands":brand,
            "type": cartype,
            "numberOfPassengers": passengers,
            "transmissionType":transmision,
            "fuelType":fueltype,
            "priceForExtraKM":extrakm,
            "registrationNumber":regno,
            "colour":colour,
            "dailyRate":dailyrate,
            "monthlyRate":monthlyrate,
            "freeMillagePrice":price,
            "freeMillageDuration":duration,
            "lossDamageWaiver":lossdamage
        }),
        dataType:'Json',
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            if(res.message=='Success'){
                alert('Registration Successful');
                loadAllCars();
                $('#modal').modal('hide');
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
                    let brand = values[i].brands;
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

$('#saveDriver').click(()=>{
    let dusername = $('#dusername').val();
    let dpassword = $('#dpassword').val();
    let dname = $('#dfullname').val();
    let dcontact = $('#dcontact').val();
    let dnic = $('#NIC').val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/carRentalSystem/api/v1/driver",
        data:JSON.stringify({
            "driverID":"",
            "name":dname,
            "contactNo": dcontact,
            "nic": dnic,
            "userName":dusername,
            "password":dpassword
        }),
        dataType:'Json',
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            if(res.message=='Success'){
                alert('Registration Successful');
                loadAllDrivers();
            }
            console.log(res);
        },
        error: function (ob, textStatus, error) {
            console.log("error from : " + ob + " " + textStatus + " " + error);
            if(res.message!='Success'){
                alert('Registration UnSuccessful! Try again');
            }
        }
    });
});

function loadAllDrivers() {
    $('#tblDriverBody').empty();
    $.ajax({
        url: 'http://localhost:8080/carRentalSystem/api/v1/driver',
        method: 'GET',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let id = values[i].driverID;
                let username = values[i].userName;
                let name = values[i].name;
                let nic = values[i].nic;
                let contactno = values[i].contactNo;
                $('#tblDriverBody').append(`<tr><th>${id}</th><td>${username}</td><td>${name}</td><td>${nic}</td><td>${contactno}</td></tr>`);
                $('#tblDriverBody tr').off('click');

                $('#tblDriverBody tr').on('click', function () {
                    let username = $($(this).children().get(1)).text();
                    let name = $($(this).children().get(2)).text();
                    let nic = $($(this).children().get(3)).text();
                    let contactno = $($(this).children().get(4)).text();
                    $('#dusername').val(username);
                    $('#dfullname').val(name);
                    $('#NIC').val(nic);
                    $('#dcontact').val(contactno);
                });
            }
        }
    });
}

function cleardriverfields() {
    $('#dusername').val("");
    $('#dfullname').val("");
    $('#NIC').val("");
    $('#dcontact').val("");
}



