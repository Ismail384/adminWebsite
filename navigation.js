document.querySelector('.leftbar').addEventListener('click', function(event) {
    event.preventDefault();
    var target = event.target.getAttribute('href');
    loadContent(target);
  });
  
  function loadContent(url) {
    var iframe = document.getElementById('content-iframe');
    iframe.src = url;
  }

  