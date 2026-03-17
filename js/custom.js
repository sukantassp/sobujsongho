
window.onscroll = function () {
  var header = document.querySelector(".bg-header");
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// back to top start ------------------------------
var btn = $('#buttonBackTop');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// back to top end --------------------------------


$(".toggle-password").click(function () {

  $(this).toggleClass("eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

$("#getOtp").click(function () {
  $(".member-login").addClass("hideMember");
  $(".get-otp-outer").removeClass("hideOtp");
});



// key enter start -------------------------------
document.querySelectorAll('.digit-group-section input').forEach((input) => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, ''); // Allow only digits

    if (this.value.length === 1) {
      const nextInput = document.getElementById(this.dataset.next);
      if (nextInput) {
        nextInput.focus();
      }
    }
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace' && this.value === '') {
      const prevInput = document.getElementById(this.dataset.previous);
      if (prevInput) {
        prevInput.focus();
      }
    }
  });
});

// key enter end -------------------------------

$(document).ready(function () {
  $(".sidemenu-toggler").click(function () {
    $(".side-menu").addClass("show");
    $(".rightbar-overlay").addClass("show");
  });

  $(".sidemenu-close").click(function () {
    $(".side-menu").removeClass("show");
    $(".rightbar-overlay").removeClass("show");
  });

  // Click outside (overlay click)
  $(".rightbar-overlay").click(function () {
    $(".side-menu").removeClass("show");
    $(this).removeClass("show");
  });

});

// banner start --------------------------------
$(document).ready(function () {
  $('.banner-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
    nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
  });

  AOS.init({
    //once: true,
    //duration: 1000
  });

});

// banner end ----------------------------------

$(document).ready(function () {
  $('.event-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4, // Default for desktop
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
    nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
    responsive: [
      {
        breakpoint: 1024, // iPad
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});

// logout popup start ----------------------------------------------------------
// Show the modal when logout button is clicked
document.getElementById('logoutBtn')?.addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('logoutModal').style.display = 'flex';
});

document.getElementById('logoutBtn1')?.addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('logoutModal').style.display = 'flex';
});
// Cancel logout
document.getElementById('cancelLogout')?.addEventListener('click', function () {
  document.getElementById('logoutModal').style.display = 'none';
});
document.getElementById('closePopup')?.addEventListener('click', function () {
  document.getElementById('logoutModal').style.display = 'none';
});
document.getElementsByClassName('logout-modal-overlay')[0]?.addEventListener('click', function () {
  document.getElementById('logoutModal').style.display = 'none';
});

// Confirm logout (you can redirect or call an API)
document.getElementById('confirmLogout')?.addEventListener('click', function () {
  window.location.href = '/logout'; // Change this URL to your actual logout route
});
// logout popup end -------------------------------------------------------------



// scroll start --------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector('.sport-nav');
  const content = document.querySelector('.sport-nav-content');

  if (content) { // Ensure content exists before accessing its properties
    const contentTop = content.getBoundingClientRect().top;

    window.addEventListener('scroll', function () {
      if (contentTop <= 0) {
        nav.classList.add('showing');
      } else {
        nav.classList.remove('showing');
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".sport-nav-content .section");
  const navLinks = document.querySelectorAll(".sport-nav li a");

  function onScroll() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const li = link.closest("li");
      if (link.getAttribute("href").slice(1) === currentSectionId) {
        li.classList.add("activedone");
      } else {
        li.classList.remove("activedone");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // call initially in case user loads mid-way
});
// scroll end ----------------------------------------------------------------------


$(document).ready(function () {
  $('.box-focus input, .box-focus select, .box-focus textarea').focus(function () {
    me = $(this);
    $("label[for='" + me.attr('id') + "']").addClass("animate-label");
  });
  $('.box-focus input, .box-focus select, .box-focus textarea').blur(function () {
    me = $(this);
    if (me.val() == "") {
      $("label[for='" + me.attr('id') + "']").removeClass("animate-label");
    }
  });

})

// custom select
$(document).ready(function () {
  $('.custom-selectpicker').each(function () {
    const $original = $(this);
    const placeholder = $original.data('placeholder') || 'Select...';

    const $wrapper = $('<div class="select-wrapper"></div>');
    const $display = $('<div class="select-display"></div>').text(placeholder);
    const $dropdown = $('<div class="select-dropdown"></div>');

    // Append options
    $original.find('option').each(function () {
      const val = $(this).val();
      const text = $(this).text();
      if (val !== undefined) {
        const $option = $('<div class="select-option" data-value="' + val + '">' + text + '</div>');
        $dropdown.append($option);
      }
    });

    // Build DOM
    $original.hide().after($wrapper);
    $wrapper.append($display).append($dropdown);

    // Toggle open/close
    $display.on('click', function () {
      $('.select-wrapper').not($wrapper).removeClass('open');
      $wrapper.toggleClass('open');
    });

    // Option click
    $dropdown.on('click', '.select-option', function () {
      const val = $(this).data('value');
      const txt = $(this).text();
      $display.text(txt);
      $original.val(val).trigger('change');
      $wrapper.removeClass('open');
    });
  });

  // Close on outside click
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.select-wrapper').length) {
      $('.select-wrapper').removeClass('open');
    }
  });
});

/* -- -------- 15/07/2025----edit by Arif (start)------- */

const paymentTable1 = document.querySelector(".payment-section .payment-table-1");
const paymentTable2 = document.querySelector(".payment-section .payment-table-2");
const clickToPaymentOption = document.querySelector(".payment-section .click-to-payment-option");

if (clickToPaymentOption && paymentTable1 && paymentTable2) {
  clickToPaymentOption.addEventListener("click", function () {
    paymentTable1.style.display = "none";
    paymentTable2.style.display = "block";
  });
}
/* -- -------- 15/07/2025----edit by Arif (end)------- */




// tab start ---------------------------
document.addEventListener('DOMContentLoaded', function () {
  const tabContainers = document.querySelectorAll('.tab');

  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('.listTab ul li');
    const tabContents = container.querySelectorAll('.diewDetails');

    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        // Remove active class from all tabs and content
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab
        this.classList.add('active');
        const tabId = this.dataset.id;  // ✅ use data-id instead of textContent
        const targetContent = container.querySelector('#' + tabId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });
});


// tab end ---------------------------

// gallery light box start -----------------------------------
// Gallery lightbox for both images and videos
const lightboxContainer = document.querySelector('.lightbox-container');

if (lightboxContainer) {
  const lightboxImageWrapper = document.querySelector('.lightbox-image-wrapper');
  const lightboxBtns = document.querySelectorAll('.lightbox-btn');
  const lightboxBtnRight = document.querySelector('#right');
  const lightboxBtnLeft = document.querySelector('#left');
  const close = document.querySelector('#close');
  const lightboxEnabled = document.querySelectorAll('.lightbox-enabled');
  const lightboxArray = Array.from(lightboxEnabled);
  const lastItem = lightboxArray.length - 1;
  let activeItem;

  const showLightBox = () => { lightboxContainer.classList.add('active'); }
  const hideLightBox = () => { lightboxContainer.classList.remove('active'); }

  const setActiveMedia = (media) => {
    if (media.tagName === 'IMG') {
      lightboxImageWrapper.innerHTML = `<img src="${media.dataset.imgsrc}" alt="lightbox image" />`;
    } else if (media.tagName === 'VIDEO') {
      lightboxImageWrapper.innerHTML = `<video controls><source src="${media.dataset.videosrc}" type="video/mp4"></video>`;
    }
    activeItem = lightboxArray.indexOf(media);
  };

  const transitionSlidesLeft = () => {
    lightboxBtnLeft.focus();
    lightboxImageWrapper.classList.add('slideright');
    setTimeout(() => {
      activeItem === 0 ? setActiveMedia(lightboxArray[lastItem]) : setActiveMedia(lightboxArray[activeItem - 1]);
    }, 250);
    setTimeout(() => {
      lightboxImageWrapper.classList.remove('slideright');
    }, 500);
  };

  const transitionSlidesRight = () => {
    lightboxBtnRight.focus();
    lightboxImageWrapper.classList.add('slideleft');
    setTimeout(() => {
      activeItem === lastItem ? setActiveMedia(lightboxArray[0]) : setActiveMedia(lightboxArray[activeItem + 1]);
    }, 250);
    setTimeout(() => {
      lightboxImageWrapper.classList.remove('slideleft');
    }, 500);
  };

  lightboxEnabled.forEach(media => {
    media.addEventListener('click', () => {
      showLightBox();
      setActiveMedia(media);
    });
  });

  lightboxContainer.addEventListener('click', hideLightBox);
  close.addEventListener('click', hideLightBox);

  lightboxBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.currentTarget.id === 'left') {
        transitionSlidesLeft();
      } else {
        transitionSlidesRight();
      }
    });
  });

  lightboxImageWrapper.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}



// gallery light box end -------------------------------------


// page loader
$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('fast');
	},0);
});


// marquee repeate
// window.addEventListener('load', function () {
//   const list = document.querySelector('.auto-animate');
//   if (!list) return;

//   const listItems = list.innerHTML;
//   let repeated = '';
//   for (let i = 0; i < 10; i++) repeated += listItems;
//   list.insertAdjacentHTML('beforeend', repeated);
// });

window.addEventListener('load', function () {
  const marquee = document.querySelector('marquee');
  if (marquee) {
    marquee.setAttribute('scrollamount', '15');  // Adjust the speed as per your requirement
  }

  const list = document.querySelector('.auto-animate');
  if (!list) return; // <- prevents the innerHTML error when element is missing

  const listItems = list.innerHTML;
  let repeated = '';
  for (let i = 0; i < 10; i++) repeated += listItems;
  list.insertAdjacentHTML('beforeend', repeated);
});


// welcome popup close
$(".welcome-modal-overlay, .closeWelcome-popup").click(function () {
  $(".welcome-modal-outer").hide();
});
