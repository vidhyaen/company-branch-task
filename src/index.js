var company = Backbone.Model.extend({
  defaults: {
    name: "",
    nature: "",
    gst: "",
    branch: "",
    address: ""
  }
});

var company = new Backbone.Collection();

company.on("add", function (company) {});

company.add([{ name: "codingmart" }, { name: "web" }]);
$(document).ready(function () {
  $(".add-company").on("click", function () {
    var company = new company({
      name: $(".name-input").val(),
      nature: $(".nature-input").val(),
      gst: $(".gst-input").val(),
      address: $(".address-input").val()
    });
    $(".name-input").val("");
    $(".nature-input").val("");
    $(".address-input").val("");
    $(".branch-input").val("");
    $(".gst-input").val("");
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
