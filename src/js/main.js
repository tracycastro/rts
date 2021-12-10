// gray out dates
const duedatePara = document.querySelectorAll(".duedate");

const playTitle = document.querySelector(".duedate").previousElementSibling;

duedatePara.forEach((duedatePara) => {
  const duedate = duedatePara.innerHTML;
  const duedateDate = new Date(duedate);
  const now = new Date();
  if (now > duedateDate) {
    duedatePara.classList.add("faded");
    duedatePara.previousElementSibling.classList.add("faded");
  }
});
