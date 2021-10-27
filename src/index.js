

var company = Backbone.Model.extend({
  defaults: {
    name: "",
    nature: "",
    gst: "",
    branch: "",
    address: ""
  }
});

var companys = Backbone.Collection.extend({
model: company();
});

var companies=new companys();
company.on("add", function (company) {});

company.add([{ name: "codingmart" }, { name: "web" }]);

var CompanyView = Backbone.View.extend({
	model: company,
	el: $('.company-list'),
	initialize: function() {
		var self = this;
		this.model.on('add', this.render, this);
		},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(company) {
			self.$el.append((new CompanyView({model: company})).render().$el);
		});
		return this;
	}
});
var CompanyView = new CompanyView();
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
