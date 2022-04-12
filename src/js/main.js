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

// if (
//   window.location.pathname == '/tributes/' ||
//   window.location.pathname == '/business-ads/' ||
//   window.location.pathname == '/headshots-bios/'
// ) {
// console.log("i'm here");

// const duedatePara = document.querySelectorAll('.duedate');

// const playTitle = document.querySelector('.duedate').previousElementSibling;

// duedatePara.forEach((duedatePara) => {
//   const duedate = duedatePara.innerHTML;
//   const duedateDate = new Date(duedate);
//   const now = new Date();
//   if (now > duedateDate) {
//     duedatePara.classList.add('faded');
//     duedatePara.previousElementSibling.classList.add('faded');
//   }
// });
// }

const mQuery = window.matchMedia('(max-width: 768px)');
const siteNav = document.querySelector('.site-head__nav');
const siteButtons = siteNav.querySelectorAll('[type="button"]');
const siteSubMenus = Array.from(siteNav.querySelectorAll('.dropdown__menu'));
const tests = Array.from(document.querySelectorAll('.here'));
const links = Array.from(document.querySelectorAll('.external'));
const lidrop = siteNav.querySelector('.dropdown');

function handleResize(e) {
  // Check if the media query is true

  if (e.matches) {
    // console.log('It is small');
    function handleSmallLinkClick(event) {
      console.log('external link was clicked');
      siteSubMenus.forEach((menu) => {
        menu.hidden = true;
      });
    }

    links.forEach((link) =>
      link.addEventListener('click', handleSmallLinkClick)
    );

    siteSubMenus.forEach((menu) => {
      menu.hidden = true;
    });
    function handleSiteButtonClick(event) {
      siteButtons.forEach((button) => {
        button.setAttribute('aria-expanded', false);
      });
      event.currentTarget.setAttribute('aria-expanded', true);
      event.stopPropagation();
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
    console.log('It is big');
    function handleBigLinkClick(event) {
      location.reload();
    }

    links.forEach((link) => link.addEventListener('click', handleBigLinkClick));

    siteSubMenus.forEach((menu) => {
      menu.hidden = false;
    });
  }
}
handleResize(mQuery);
mQuery.addEventListener('change', handleResize);

focusMethod = function getFocus() {
  siteNav.focus();
  console.log('yeah it clicked');
};
