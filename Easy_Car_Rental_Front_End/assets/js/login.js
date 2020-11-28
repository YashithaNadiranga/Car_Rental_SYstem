
$('#btncreate').click(()=>{

    if (checkvalidationCustomer()){
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
                "nicNo":nic,
                "userName":userName,
                "password":password
            }),
            dataType:'Json',
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                if(res.message=='Success'){
                    alert('Registration Successful');
                }
            },
            error: function (ob, textStatus, error) {
                console.log("error from : " + ob + " " + textStatus + " " + error);
                if(res.message!='Success'){
                    alert('Registration UnSuccessful! Try again');
                }
            }
        });
    }

});

$('#login').click(function () {
    let userName = $('#uname').val();
    let password = $('#password').val();
    if (userName == ""){
        alert('Enter User Name..!');
    }else if(password == ""){
        alert('Enter Password..!');
    }else{
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/carRentalSystem/api/v1/customer/'+userName+'/'+password,
            success:function (res) {
                if(res.message == 'customer'){
                    document.cookie = "user="+res.data.name;
                    document.cookie = "userID="+res.data.customerID;
                    window.location.replace("CustomerDashboard.html");
                }else if(res.message == 'driver'){
                    document.cookie = "user="+res.data.name;
                    document.cookie = "userID="+res.data.DriverID;
                    localStorage.setItem('loggedUser', res);
                    window.location.replace("DriverDashboard.html");
                }else if(res.message == 'admin'){
                    document.cookie = "user="+res.data.name;
                    document.cookie = "userID="+res.data.adminID;
                    localStorage.setItem('loggedUser', res);
                    window.location.replace("AdminDashboard.html");
                }
            },
            error:function (ob, textStatus, error) {
                console.log("error from : " + error);
            }
        });
    }

});

function checkvalidationCustomer() {

    let name = $('#inputName').val();
    let contact = $('#inputContactNo').val();
    let email = $('#inputEmail').val();
    let address = $('#inputAddress').val();
    let drivingLicenceNo = $('#inputDrivingLicence').val();
    let nic = $('#inputNIC').val();
    let userName = $('#inputUserName').val();
    let password = $('#inputPassword').val();

    if (name!=""){
        if (contact!=""){
            if(email!=""){
                if (address!=""){
                    if (drivingLicenceNo!=""){
                        if (nic!=""){
                            if (userName!=""){
                                if (password){
                                    return true;
                                }else{
                                    alert("Please Enter Password");
                                    return false;
                                }
                            }else{
                                alert("Please Enter Username");
                                return false;
                            }
                        }else{
                            alert("Please Enter NIC");
                            return false;
                        }
                    }else{
                        alert("Please Enter Driving Licence No");
                        return false;
                    }
                }else{
                    alert("Please Enter Address");
                    return false;
                }
            }else{
                alert("Please Enter Email Address");
                return false;
            }
        }else {
            alert("Please Enter Contact");
            return false;
        }
    }else{
        alert("Please Enter Name");
        return false;
    }

}