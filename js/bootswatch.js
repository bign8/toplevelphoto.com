(function($){
  /*
   * Initialize all bootstrap popovers and tooltips
   */
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();

  $('#contact-form').submit(function (event) {
    event.preventDefault();

    var form = $(this);
    var btn = $('[type=submit]', this).button('loading');

    var data = form.serializeArray().reduce(function (hash, ele) {
      hash[ele.name] = ele.value;
      return hash;
    }, {});

    $.ajax({
      url: form.attr('action'),
      method: "POST",
      data: data,
      dataType: "json"
    }).done(function(data) {
      // TODO: verify response
      console.log(data);
    }).always(function () {
      btn.button('reset')
    });
  });
})(jQuery);
