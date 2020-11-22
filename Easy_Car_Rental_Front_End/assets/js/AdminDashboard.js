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
    $('#Dashboard').show();

});

$('#btn-customers').click(()=>{
    hideall();
    setClass();
    $('#btn-customers').addClass('btn-custom-selected');
    $('#Customers').show();

});

$('#btn-cars').click(()=>{
    setClass();
    $('#btn-cars').addClass('btn-custom-selected');
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

let hide = ['#Dashboard','#Customers'];

function hideall(){
    for (let i in hide) {
        $(hide[i]).hide();
    }

}

