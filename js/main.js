$(document).ready(function() {
	//Code

  var url = "https://flynn.boolean.careers/exercises/api/array/music";

  $.ajax (
    {
    "url" : url,
    "method" : "GET",
    "success" : function(data) {
      processData(data.response);
    },
    "error" : function(request, state, errors) {
      alert("errore" + errors);
    }

  });

  // funzione per selezionare il tipo di musica

  $(document).on('change', 'select', function() {
      var genre = $('select').val();
      console.log(genre);
      $('.cd').each(function(){
        if ($(this).find('.genre').text() == genre) {
          console.log($(this));
          console.log($(this).find('.genre').text());
          $(this).show();
        } else {
          $(this).hide();
        }

      });
    });



});


function processData(cds) {
 for (var i = 0; i < cds.length; i++) {
   var cd = cds[i];

   var source = $("#entry-template").html();
   var template = Handlebars.compile(source);

   var html = template(cd);
   $(".cds-container").append(html)
 }
}
