// footer animation
(() => {

  let footerItems = document.querySelectorAll('.footer_anim_item');

  for (let j = 0; j < footerItems.length; j++) {
    footerItems[j].addEventListener('mouseover', function () {
      for (let i = 0; i < footerItems.length; i++) {
        footerItems[i].classList.remove('active');
        footerItems[i].classList.add('pasive');
      }
      this.classList.remove('pasive');
      this.classList.add('active');
    })
  }

  for (let j = 0; j < footerItems.length; j++) {
    footerItems[j].addEventListener('mouseout', function () {
      for (let i = 0; i < footerItems.length; i++) {
        footerItems[i].classList.remove('active');
        footerItems[i].classList.remove('pasive');
      }
    })
  }

})();

// scroling
(() => {

  let sections = document.querySelectorAll('.js_main_three');
  let mainSection = document.querySelector('.js_main');



  window.addEventListener('scroll', scrollSection);
  let lastScrollTop = 0;

  function scrollSection() {

    if (window.innerHeight > 700) {
      for (let i = 0; i < sections.length; i++) {

        let heightElem = sections[i].clientHeight;
        let elem = sections[i].nextElementSibling;
        let top = sections[i].getBoundingClientRect().top;

        if (top <= 0) {
          elem = sections[i].nextElementSibling;
          elem.style.marginTop = heightElem + 'px';
          sections[i].classList.add('fixed');
        }

        let scrollPosition = document.documentElement.scrollTop;
        scrollPosition < lastScrollTop && scrollTop();
        lastScrollTop = scrollPosition

      }
      if (mainSection) {
        mainSection.classList.add('fixed');
        mainSection.nextElementSibling.style.marginTop = mainSection.clientHeight + 'px';
      }
    }
  }

  function scrollTop() {
    for (let i = 0; i < sections.length; i++) {
      let top = sections[i].nextElementSibling.getBoundingClientRect().top;

      let heightElem = sections[i].clientHeight;
      if (top >= heightElem) {
        sections[i].nextElementSibling.style.marginTop = 0 + 'px';
        sections[i].classList.remove('fixed');
      }
    }
  }

  window.addEventListener("resize", function () {
    scrollSection();
    if (window.innerWidth < window.innerHeight) {
      mainSection.classList.remove('fixed');
      mainSection.nextElementSibling.style.marginTop = 0 + 'px';

      for (let i = 0; i < sections.length; i++) {
        elem = sections[i].nextElementSibling;
        elem.style.marginTop = 0 + 'px';
        sections[i].classList.remove('fixed');
      }
    }
  }, false);






})();


// popup open
(() => {

  let button = document.querySelectorAll('.js_button');
  let popup = document.querySelector('.js_pop_up');
  let close = document.querySelector('.js_poup_close');



  let inpName = document.querySelector('.js_popup_name');
  let inpPhone = document.querySelector('.js_popup_call');
  let inpSubmit = document.querySelector('.js_popup_submit');
  let inpError = document.querySelector('.js_popup_error')
  let inpEmail = document.querySelector('.js_popup_email')

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
      popup.classList.add('active');
    })
  }

  if (close) {
    close.addEventListener('click', function () {
      popup.classList.remove('active');
      inpError.innerHTML = '';
      inpError.classList.remove('active');
      inpName.value = '';
      inpPhone.value = '';
      inpEmail.value = '';
    })
  }








  // check form popup
  if (inpSubmit) {
    inpSubmit.addEventListener('click', function (e) {
      let outputName = '';
      let outputPhone = '';
      let outputEmail = '';
      let flagPhone = false;
      let flagEmail = false;
      let flagName = false;

      if (inpName) {
        //  name 
        if (inpName.value.length > 3) {
          flagName = true;
          outputName = '';
        }
        else {
          outputName = 'Недостаточное кол-во символов в поле Имя!';
          flagName = false;
        }
        //  email
        let em = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;;
        let valEmail = inpEmail.value;
        let validE = em.test(valEmail);
        if (validE) {
          flagEmail = true;
          outputEmail = '';
        }
        else {
          outputEmail = 'E-mail введен неправильно!';
          flagEmail = false;
        }
        //  tel
        let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
        let valPhone = inpPhone.value;
        let valid = re.test(valPhone);
        if (valid) {
          flagPhone = true;
          outputPhone = '';
        }
        else {
          outputPhone = 'Номер телефона введен неправильно!';
          flagPhone = false;
        }

        inpError.innerHTML = outputName + ' ' + outputEmail + ' ' + outputPhone;
        inpError.classList.add('active');

        if (flagName && flagEmail && flagPhone) {
          e.preventDefault();
          e.stopPropagation();
          document.querySelector('.js_pop_up').classList.remove('active');
          document.querySelector('.js_pop_answer').classList.add('active');
          setTimeout(() => document.querySelector('.js_pop_answer').classList.remove('active'), 3000);
          // сюда пишем функцию запуска ajax  пример functionAjax();
        } else {
          e.preventDefault();
          e.stopPropagation();
        }


      }
    })
  }
})();


// check form footer
(() => {

  let inpName = document.querySelector('.js_footer_name');
  let inpPhone = document.querySelector('.js_footer_call');
  let inpSubmit = document.querySelector('.js_footer_submit');
  let inpError = document.querySelector('.js_footer_error')
  let inpEmail = document.querySelector('.js_footer_email')

  if (inpSubmit) {
    inpSubmit.addEventListener('click', function (e) {
      let outputName = '';
      let outputPhone = '';
      let outputEmail = '';
      let flagPhone = false;
      let flagEmail = false;
      let flagName = false;

      if (inpName) {
        //  name 
        if (inpName.value.length > 3) {
          flagName = true;
          outputName = '';
        }
        else {
          outputName = 'Недостаточное кол-во символов в поле Имя!';
          flagName = false;
        }
        //  email
        let em = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;;
        let valEmail = inpEmail.value;
        let validE = em.test(valEmail);
        if (validE) {
          flagEmail = true;
          outputEmail = '';
        }
        else {
          outputEmail = 'E-mail введен неправильно!';
          flagEmail = false;
        }
        //  tel
        let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
        let valPhone = inpPhone.value;
        let valid = re.test(valPhone);
        if (valid) {
          flagPhone = true;
          outputPhone = '';
        }
        else {
          outputPhone = 'Номер телефона введен неправильно!';
          flagPhone = false;
        }

        inpError.innerHTML = outputName + ' ' + outputEmail + ' ' + outputPhone;
        inpError.classList.add('active');

        if (flagName && flagEmail && flagPhone) {
          e.preventDefault();
          e.stopPropagation();
          // сюда пишем функцию запуска ajax  пример functionAjax();
        } else {
          e.preventDefault();
          e.stopPropagation();
        }

      }
    })
  }
})();

//tab eployees
(() => {

  let boxsContent = document.querySelectorAll('.js_employees_content_box');
  let tabs = document.querySelectorAll('.js_employees_tab_item');

  if (tabs) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function () {
        tabs.forEach((el) => {
          el.classList.remove('active');
        });
        boxsContent.forEach((el) => {
          el.classList.remove('active');
        });
        this.classList.add('active');
        boxsContent[i].classList.add('active');
      })
    }
  }

})();


//tab stage
(() => {

  let boxsContent = document.querySelectorAll('.js_about_data_item');
  let tabs = document.querySelectorAll('.js_about_tab_box_stage');
  let lines = document.querySelectorAll('.js_about_tab_box_line')

  if (tabs) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function () {
        tabs.forEach((el) => {
          el.classList.remove('active');
        });
        boxsContent.forEach((el) => {
          el.classList.remove('active');
        });
        this.classList.add('active');
        boxsContent[i].classList.add('active');
        for (let g = 0; g < lines.length; g++) {
          lines[g].classList.remove('active')
        }
        for (let j = i; j < tabs.length; j++) {
          tabs[j].classList.remove('passive')
        }
        for (let k = 0; k < i; k++) {
          tabs[k].classList.add('passive')
          lines[k].classList.add('active')
        }

      })
    }
  }

})();


//touchmove stage about
(() => {
  let box = document.querySelector('.about_tab');
  let item = document.querySelector('.about_tab_box');
  let elem = document.querySelectorAll('.about_tab_box_wrap');
  let numElem = null;
  let leftNum = 0;
  let num = 0;
  let arr = [];
  if (box) {

    function difElemWidtch() {
      for (let i = 0; i < elem.length; i++) {
        arr.push(elem[i].offsetWidth);
      }
      numElem = elem.length - 1;
      let boxW = box.offsetWidth;
      let itemW = item.offsetWidth;
      if (boxW == itemW || window.innerWidth < 700) {
        startMove();
      }
    }
    difElemWidtch();
    window.addEventListener('resize', difElemWidtch);

    function goLeft() {
      if (num < numElem) {
        item.style.left = leftNum - arr[num] + 'px';
        leftNum = leftNum - arr[num];
        num = num + 1;
      }
    }

    function goRight() {
      if (num > 0) {
        item.style.left = leftNum + arr[num - 1] + 'px';
        leftNum = leftNum + arr[num - 1];
        num = num - 1;
      }
    }

    function startMove() {
      box.addEventListener('touchstart', handleTouchStart, false);
      box.addEventListener('touchmove', handleTouchMove, false);
    }
    box.addEventListener('touchstart', handleTouchStart, false);
    box.addEventListener('touchmove', handleTouchMove, false);

    let x1 = null;
    let y1 = null;

    function handleTouchStart(e) {
      const firstTouch = e.touches[0];
      x1 = firstTouch.clientX;
      y1 = firstTouch.clientY;

    }

    function handleTouchMove(e) {
      if (!x1 || !y1) {
        return false;
      }
      let x2 = e.touches[0].clientX;
      let y2 = e.touches[0].clientY;
      let xDif = x2 - x1;
      let yDif = y2 - y1;

      if (Math.abs(xDif) > Math.abs(yDif)) {
        if (xDif > 0) {
          goRight();
        }
        else {
          goLeft();
        }
      }
      x1 = null;
      y1 = null;
    }


  }

})();

// gamburg menu
(() => {
  menuButton = document.querySelector('.js_header_box_gamburg');
  menuContent = document.querySelector('.js_burger_menu');
  menuClose = document.querySelector('.js_burger_menu_close');

  menuButton.addEventListener('click', function () {
    menuContent.classList.remove('close');
    menuContent.classList.add('active');
    document.querySelector('body').style.overflow = 'hidden';
  })
  menuClose.addEventListener('click', function () {
    menuContent.classList.remove('active');
    menuContent.classList.add('close');
    document.querySelector('body').style.overflow = 'initial';
  })


})();

// rates sale
(() => {
  let buttonSale = document.querySelector('.js_rates_sale_right');
  let Boxsales = document.querySelector('.js_rates_sale_box_content');
  let sales = document.querySelectorAll('.js_rates_sale_box_content span');
  let value = document.querySelectorAll('.js_rates_box_item_price_num');
  let valueSale = document.querySelectorAll('.js_rates_box_item_price_numSale')

  if (buttonSale) {
    buttonSale.addEventListener('click', function () {
      Boxsales.classList.add('active');
    })
    for (let i = 0; i < sales.length; i++) {
      sales[i].addEventListener('click', function () {
        document.querySelector('.js_rates_sale_right p').innerHTML = this.innerHTML;
        Boxsales.classList.remove('active')
        if (this.classList.contains('one')) {
          valueSale.forEach(el => {
            el.classList.remove('active')
          });
          value.forEach(el => {
            el.classList.remove('passive')
          });
        }
        if (this.classList.contains('too')) {
          valueSale.forEach(el => {
            el.classList.add('active')
          });
          value.forEach(el => {
            el.classList.add('passive')
          });
        }
      })
    }

    document.addEventListener('click', (e) => {
      const lkEl = e.composedPath().includes(buttonSale);
      const gambLk = e.composedPath().includes(Boxsales);
      if (!lkEl && !gambLk) {
        Boxsales.classList.remove('active');
      }
    })


  }

})();


// rates user
(() => {
  let box = document.querySelector('.js_rates_box_item_price_box');
  let buttonSale = document.querySelector('.js_rates_box_item_price_modul');
  let Boxsales = document.querySelector('.js_rates_box_item_price_content');
  let sales = document.querySelectorAll('.js_rates_box_item_price_content span');
  let vol = document.querySelector('.js_rates_box_item_price_vol b');


  if (buttonSale) {
    buttonSale.addEventListener('click', function () {
      Boxsales.classList.add('active');
    })
    for (let i = 0; i < sales.length; i++) {
      sales[i].addEventListener('click', function () {
        Boxsales.classList.remove('active');
        let nextEl = box.nextElementSibling;
        let strPrice = this.getAttribute("data-price");
        nextEl.innerHTML = strPrice;

        nextEl.nextElementSibling.innerHTML = Number(strPrice.slice(0, -7).replace(/\s+/g, '')) * 0.8 - 2 + ' ' + '₽/мес.';
        vol.innerHTML = this.getAttribute("data-vol");
        document.querySelector('.js_rates_box_item_price_modul span').innerHTML = this.innerHTML.slice(0, -14)
      })
    }

    document.addEventListener('click', (e) => {
      const lkEl = e.composedPath().includes(buttonSale);
      const gambLk = e.composedPath().includes(Boxsales);
      if (!lkEl && !gambLk) {
        Boxsales.classList.remove('active');
      }
    })

  }



})();


// rates vers box
(() => {
  let box = document.querySelector('.js_rates_box_item_price_boxVers');
  let buttonSale = document.querySelector('.js_rates_box_item_price_modulVers');
  let Boxsales = document.querySelector('.js_rates_sale_box_contentVers');
  let sales = document.querySelectorAll('.js_rates_sale_box_contentVers span');

  if (buttonSale) {
    buttonSale.addEventListener('click', function () {
      Boxsales.classList.add('active');
    })
    for (let i = 0; i < sales.length; i++) {
      sales[i].addEventListener('click', function () {
        Boxsales.classList.remove('active');
        let nextEl = box.nextElementSibling;
        let strPrice = this.getAttribute("data-price");
        nextEl.innerHTML = strPrice;
        document.querySelector('.js_rates_box_item_price_modulVers span').innerHTML = this.innerHTML.slice(0, -14)
      })
    }


    document.addEventListener('click', (e) => {
      const lkEl = e.composedPath().includes(buttonSale);
      const gambLk = e.composedPath().includes(Boxsales);
      if (!lkEl && !gambLk) {
        Boxsales.classList.remove('active');
      }
    })

  }



})();

// rates buttonPay
(() => {

  let buttonPay = document.querySelectorAll('.js_rates_box_item_price_button');
  let formPay = document.querySelector('.js_pop_up');

  if (buttonPay) {
    for (let i = 0; i < buttonPay.length; i++) {
      buttonPay[i].addEventListener('click', function () {
        formPay.classList.add('active');
      })
    }
  }

})();