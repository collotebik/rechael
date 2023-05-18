$('.ui.dropdown')
  .dropdown()
;

$('.ui.accordion')
  .accordion()
;



$("#switchcustomer").click(function(){
  $('.ui.modal').modal('show');
});


// $("#Create_a_new_customer").click(function(){
//   $('.ui.modal').modal('show');
// });


// $('.ui.modal').modal('show');

$("#Group_5109").click(function(){
  $('.ui.modal').modal({closable: false}).modal('show');
});
$("#Group_5105").click(function(){
  $('.ui.modal').modal({closable: false}).modal('show');
});

$("#Group_5330").click(function(){
  $('.ui.modal').modal({closable: false}).modal('show');
});

$("#Group_5330Iv").click(function(){
  $('#addnewcustomer').modal({closable: false}).modal('show');
});

$("#Group_5109Iv").click(function(){
  $('#addnewcustomer').modal({closable: false}).modal('show');
});

$("#Send_invoice").click(function(){
  $('.ui.longer.modal').modal({closable: false}).modal('show');
});


$("#shopping-bag").click(function(){
  $('.ui.modal').modal({closable: false}).modal('show');
}); 

$('.ui.checkbox').checkbox();

$("#addcustomermodal").click(function(){
  $("#addnewcustomer").modal({closable: false}).modal('show');
});

$("#addproductmodal").click(function(){
  $("#addnewproduct").modal({closable: false}).modal('show');
});

$("#selectproductmodal").click(function(){
  $("#selectproductsmodal").modal({closable: false}).modal('show');
});




			
$("#Share_Button").click(function(){
});

$(document).ready(function(){
  $("#Group_6427").click(function(){
      $("#Group_6533nv").show();
      $("#Group_5896").hide();
      $("#Group_5869").hide();
  });
});


$(document).ready(function(){
  $("#Group_6427nv").click(function(){
      $("#Group_6533nv").hide();
      $("#Group_5896").show();
      $("#Group_5869").show();
  });
});