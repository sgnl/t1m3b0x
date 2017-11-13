(() => {
  let interfaceOffDelayTimeoutProcess = null;
  let interfaceOnDelayTimeoutProcess = null;

  window.addEventListener('blur', function() {
    window.clearInterval(interfaceOnDelayTimeoutProcess);
    interfaceOffDelayTimeoutProcess = window.setTimeout(() => {
      document.querySelector('.ui').classList.remove('toggle-ui-on');
      document.querySelector('.icn-cog').classList.remove('toggle-ui-on');
      document.querySelector('.icn-unlocked').classList.remove('toggle-ui-on');
    }, 1000);
  });

  window.addEventListener('focus', function() {
    window.clearInterval(interfaceOffDelayTimeoutProcess);
    interfaceOnDelayTimeoutProcess = setTimeout(() => {
      document.querySelector('.ui').classList.add('toggle-ui-on');
      document.querySelector('.icn-cog').classList.add('toggle-ui-on');
      document.querySelector('.icn-unlocked').classList.add('toggle-ui-on');
    }, 1200);
  });
})()
