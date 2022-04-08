// gray out dates on One Time Ads Page

if (
  window.location.pathname == '/donors/' ||
  window.location.pathname == '/sponsors/'
) {
  const colors = [
    '#051958',
    '#FFB400',
    '#00A6ED',
    '#3C54A6',
    '#051958',
    '#051958',
  ];
  confetti({
    particleCount: 200,
    colors: colors,
    disableForReducedMotion: true,
    spread: 70,
    origin: { y: 0.6 },
  });
  // console.log('here is confetti!');
}

if (
  window.location.pathname == '/tributes/' ||
  window.location.pathname == '/business-ads/' ||
  window.location.pathname == '/headshots-bios/'
) {
  // console.log("i'm here");

  const duedatePara = document.querySelectorAll('.duedate');

  const playTitle = document.querySelector('.duedate').previousElementSibling;

  duedatePara.forEach((duedatePara) => {
    const duedate = duedatePara.innerHTML;
    const duedateDate = new Date(duedate);
    const now = new Date();
    if (now > duedateDate) {
      duedatePara.classList.add('faded');
      duedatePara.previousElementSibling.classList.add('faded');
    }
  });
}

const mQuery = window.matchMedia('(max-width: 768px)');
const siteNav = document.querySelector('.site-head__nav');
const siteButtons = siteNav.querySelectorAll('[type="button"]');
const siteSubMenus = Array.from(siteNav.querySelectorAll('.dropdown__menu'));
const tests = Array.from(document.querySelectorAll('.here'));
const links = document.querySelectorAll('.external');

function handleLinkClick() {
  location.reload();
}

links.forEach((link) => link.addEventListener('click', handleLinkClick));

function handleResize(e) {
  // Check if the media query is true

  if (e.matches) {
    // console.log('It is small');
    siteSubMenus.forEach((menu) => {
      menu.hidden = true;
    });
    function handleSiteButtonClick(event) {
      event.preventDefault();
      siteButtons.forEach((button) => {
        button.setAttribute('aria-expanded', false);
      });
      event.currentTarget.setAttribute('aria-expanded', true);
      const { id } = event.currentTarget;
      const siteSubMenu = siteSubMenus.find(
        (menu) => menu.getAttribute('aria-labelledby') === id
      );
      if (siteSubMenu.hidden == true) {
        siteSubMenu.hidden = false;
      } else {
        siteSubMenu.hidden = true;
      }
    }
    siteButtons.forEach((button) =>
      button.addEventListener('click', handleSiteButtonClick)
    );
  } else {
    // console.log('It is big');
    siteSubMenus.forEach((menu) => {
      menu.hidden = false;
    });
  }
}

handleResize(mQuery);
mQuery.addEventListener('change', handleResize);
