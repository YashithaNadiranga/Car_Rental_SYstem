let array = ['#btn-home','#btn-car','#btn-rent','#btn-repair','#btn-payment'];

$('#btn-home').click(()=>{
    setClass();
    $('#btn-home').addClass('btn-custom-selected');
    console.log("hello")
});

$('#btn-car').click(()=>{
    setClass();
    $('#btn-car').addClass('btn-custom-selected')
});

$('#btn-rent').click(()=>{
    setClass();
    $('#btn-rent').addClass('btn-custom-selected')
});

$('#btn-repair').click(()=>{
    setClass();
    $('#btn-repair').addClass('btn-custom-selected')
});

$('#btn-payment').click(()=>{
    setClass();
    $('#btn-payment').addClass('btn-custom-selected')
});


function setClass() {
    for(id in array){
        $(array[id]).removeClass('btn-custom-selected').addClass('btn-custom');
    }
}

