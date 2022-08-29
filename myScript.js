$('kenyaone')
           .on('mouseenter', function () {
               $('#title1').show('fast');
           })
           .on('mouseleave', function () {
               $('#title1').hide('fast');
           });
       function myFunction() {
           let text;
           let name = prompt("Please enter your name:", "*****");
           if (name == null || name == "") {
               text = "User cancelled the prompt.";
           } else {
               text = "Hello " + name + "we have received your message thank you for contacting us?";
           }
           document.getElementById("ouput").innerHTML = text;
       }
  $(document).ready(function () {
        $("#btn1").click(function () {
        $("#brian").show();
        });
         $("#brian").click(function () {
        $("#brian").hide();
         });
  });
  $(document).ready(function () {
        $("#btn4").click(function () {
        $("#brian3").show();
        });
         $("#brian3").click(function () {
        $("#brian3").hide();
         });
        });      
 $(document).ready(function () {
        $("#btn2").click(function () {
        $("#brian1").show();
        });
         $("#brian1").click(function () {
        $("#brian1").hide();
         });
 });
$(document).ready(function () {
    $("#btn3").click(function () {
    $("#brian2").show();
    });
        $("#brian2").click(function () {
    $("#brian2").hide();
        });
    });         
$(document).ready(function () {
    $("#btn5").click(function () {
    $("#brian4").show();
    });
        $("#brian4").click(function () {
    $("#brian4").hide();
        });
    });
$(document).ready(function () {
    $("#btn6").click(function () {
    $("#brian5").show();
    });
        $("#brian5").click(function () {
    $("#brian5").hide();
        });
    });        
    