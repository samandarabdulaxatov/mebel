var elSiteHeader = document.querySelector('.site-header');
var elSiteHeaderToggler = elSiteHeader.querySelector('.js-site-header__toggler');

if (elSiteHeader) {
  elSiteHeaderToggler.addEventListener('click', function () {
     elSiteHeader.classList.toggle('site-header--open');
     
  })
}