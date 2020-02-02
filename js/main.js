$(document).ready(function() {
	//Code

  var url = "https://flynn.boolean.careers/exercises/api/array/music";

  $.ajax (
  {
    "url" : url,
    "method" : "GET",
    "success" : function(data) {
      console.log(data);
      console.log(data.response);
      processData(data.response);
    },
    "error" : function(request, state, errors) {
      alert("errore" + errors);
    },
  }
 );
});

function processData(cds) {
 for (var i = 0; i < cds.length; i++) {
   var cd = cds[i];
   console.log(cd);
   var source = $("#entry-template").html();
   var template = Handlebars.compile(source);
   var html = template(cd);
   $(".cds-container.container").append(html)
 }
}
