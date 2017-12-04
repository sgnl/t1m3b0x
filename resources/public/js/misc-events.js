(() => {
  let interfaceOffDelayTimeoutProcess = null;
  let interfaceOnDelayTimeoutProcess = null;

  window.addEventListener('blur', function() {
    window.clearInterval(interfaceOnDelayTimeoutProcess);

    interfaceOffDelayTimeoutProcess = window.setTimeout(() => {
      let uis = document.querySelector('.ui');
      uis !== null && uis.classList.remove('toggle-ui-on');

      let icn_cog = document.querySelector('.icn-cog');
      icn_cog !== null && icn_cog.classList.remove('toggle-ui-on');

      let icn_unlocked = document.querySelector('.icn-unlocked');
      icn_unlocked !== null && icn_unlocked.classList.remove('toggle-ui-on');
    }, 1000);

  });

  window.addEventListener('focus', function() {
    window.clearInterval(interfaceOffDelayTimeoutProcess);
    interfaceOnDelayTimeoutProcess = setTimeout(() => {
      let uis = document.querySelector('.ui');
      uis !== null && uis.classList.add('toggle-ui-on');

      let icn_cog = document.querySelector('.icn-cog');
      icn_cog !== null && icn_cog.classList.add('toggle-ui-on');

      let icn_unlocked = document.querySelector('.icn-unlocked');
      icn_unlocked !== null && icn_unlocked.classList.add('toggle-ui-on');
    }, 1200);
  });
})()
