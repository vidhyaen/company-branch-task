var company = Backbone.Model.extend({
  defaults: {
    name: "",
    nature: "",
    gst: "",
    address: ""
  }
});

var company = new Backbone.Collection();

company.on("add", function (company) {});

company.add([{ name: "codingmart" }, { name: "web" }]);
$(document).ready(function () {
  $(".add-company").on("click", function () {
    var company = new company({
      author: $(".author-input").val(),
      title: $(".title-input").val(),
      url: $(".url-input").val()
    });
    $(".author-input").val("");
    $(".title-input").val("");
    $(".url-input").val("");
    company.add(company);
    company.save(null, {
      success: function (response) {
        console.log("Successfully SAVED: " + response.toJSON()._id);
      },
      error: function () {
        console.log("Failed to save company details!");
      }
    });
  });
});
