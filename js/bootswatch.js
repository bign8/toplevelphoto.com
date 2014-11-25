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

    // parse form data
    var data = form.serializeArray().reduce(function (hash, ele) {
      hash[ele.name] = ele.value;
      return hash;
    }, {});
    delete data['_gotcha']

    // submit form
    var ajax = $.ajax({
      url: form.attr('action'),
      method: "POST",
      data: data,
      dataType: "json"
    }).done(function(data) {
      // TODO: verify response
      console.log(data);
    });

    // de-bounce
    var timer = new Promise(function (accept) {
      setTimeout(accept, 2000);
    });

    var reset = function () { btn.button('reset'); };
    Promise.all([ajax, timer]).then(reset, reset);
  });
})(jQuery);
