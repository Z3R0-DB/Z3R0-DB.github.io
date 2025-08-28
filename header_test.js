// Simple header parity test: records header height and logs mismatch
(function(){
  function getHeaderHeight(){
    var h=document.querySelector('header');
    return h? Math.round(h.getBoundingClientRect().height) : 0;
  }
  window.addEventListener('load', function(){
    var h=getHeaderHeight();
    console.log('[header_test] header height =', h);
    try{ localStorage.setItem('castora_header_height', h); } catch(e){}
  });
})();
