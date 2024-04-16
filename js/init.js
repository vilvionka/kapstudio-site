$('.main_too_box_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  autoplay: true,
  arrows: false,
});
$('.licenses_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 777,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },

  ]
});

$('.employees_content_box.too').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
    {
      breakpoint: 1090,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
  ]
});
$('.employees_content_box.one').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  arrows: false,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
    {
      breakpoint: 1090,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
  ]
});
$('.employees_content_box.three').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  arrows: false,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
    {
      breakpoint: 1090,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      }
    },
  ]
});


$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.about_accardion_item span');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.about_accardion_item p').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.about_accardion'), false);
});