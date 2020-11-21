//=========================Left Panal Button Select========================

let btnarray = ['#btn-home','#btn-customers','#btn-cars','#btn-orders','#btn-payments'];

function setClass() {
    for (id in btnarray) {
        $(btnarray[id]).removeClass('btn-custom-selected').addClass('btn-custom');
    }
}

$('#btn-home').click(()=>{
    setClass();
    $('#btn-home').addClass('btn-custom-selected');

});

$('#btn-customers').click(()=>{
    setClass();
    $('#btn-customers').addClass('btn-custom-selected');
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

//===============left panal button selected end======================

//================left panal button hover start======================
