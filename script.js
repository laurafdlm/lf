// script.js

$(document).ready(function () {
    $('.menu a').on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
  
    var projectDetailButtons = document.querySelectorAll('.project-details-button');
    projectDetailButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var targetId = this.getAttribute('data-target');
        var projectDetailsContent = $('#' + targetId).html();
        $('#modal-content').html(projectDetailsContent);
  
        // Obtén la posición del botón que se hizo clic
        var buttonPosition = $(this).offset();
        // Ajusta las coordenadas del modal en relación con el botón
        $('#project-modal').css({ top: buttonPosition.top, left: buttonPosition.left });
  
        $('#project-modal').show();
      });
    });
  
    $('.close-button').on('click', function () {
      $('#project-modal').hide();
    });
  
    $(window).on('click', function (event) {
      if (event.target.id === 'project-modal') {
        $('#project-modal').hide();
      }
    });
    $(document).ready(function () {
        $(".menu-toggle").click(function () {
          $(".menu").slideToggle();
        });
      
        $(window).resize(function () {
          if ($(window).width() > 768) {
            $(".menu").removeAttr("style");
          }
        });
  });
});

$(document).ready(function () {
    // Smooth scrolling for menu links
    $('.menu a').on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
  
    // Project details modal functionality (if needed)
    var projectDetailButtons = document.querySelectorAll('.project-details-button');
    projectDetailButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var targetId = this.getAttribute('data-target');
        var projectDetailsContent = $('#' + targetId).html();
        $('#modal-content').html(projectDetailsContent);
  
        var buttonPosition = $(this).offset();
        $('#project-modal').css({ top: buttonPosition.top, left: buttonPosition.left });
  
        $('#project-modal').show();
      });
    });
  
    // Close project modal
    $('.close-button').on('click', function () {
      $('#project-modal').hide();
    });
  
    // Close project modal on outside click
    $(window).on('click', function (event) {
      if (event.target.id === 'project-modal') {
        $('#project-modal').hide();
      }
    });
  
    var menuOpen = false;

    // Responsive menu toggle
    $(".menu-toggle").click(function () {
      if (menuOpen) {
        $(".menu").slideUp();
      } else {
        $(".menu").slideDown();
      }
      menuOpen = !menuOpen;
    });
  
    // Reset menu display when window is resized
    $(window).resize(function () {
      if ($(window).width() > 768) {
        $(".menu").removeAttr("style");
        menuOpen = false; // Restablecer el estado del menú al cerrarlo
      }
    });
  
    // Close menu when a menu item is clicked
    $('.menu a').on('click', function () {
      if ($(window).width() <= 768) {
        $(".menu").slideUp();
        menuOpen = false; // Restablecer el estado del menú al cerrarlo
      }
    });
  });
  