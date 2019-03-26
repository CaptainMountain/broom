var elements1 = $('.modal1-overlay, .modal1');
var elements2 = $('.modal2-overlay, .modal2');

$('#button1').click(function(){
    elements1.addClass('active');
});

$('#button2').click(function(){
    elements2.addClass('active');
});

$('.close-modal1').click(function(){
    elements1.removeClass('active');
});

$('.close-modal2').click(function(){
    elements2.removeClass('active');
});