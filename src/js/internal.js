(function() {

  function documentReady() {
    @@include('partials/heading-slider.js');
    @@include('partials/header.js');
    @@include('partials/accordion.js');
    @@include('partials/map.js');
    @@include('partials/burger.js');
  };

  document.addEventListener("DOMContentLoaded", documentReady);
})();