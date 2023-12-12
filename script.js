function updateDigitalClock() {
  const now = new Date();
  const timeZone = "America/Los_Angeles"; // Adjust this to your preferred time zone
  const optionsTime = { timeZone: timeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const optionsDate = { day: 'numeric', month: 'numeric', year: 'numeric' };

  const localTime = now.toLocaleString("en-US", optionsTime);
  const localDate = now.toLocaleString("en-US", optionsDate);

  document.getElementById('digitalTime').textContent = localTime;
  document.getElementById('digitalDate').textContent = localDate;
}

// Initial setup
updateDigitalClock();

// Update digital clock every second
setInterval(updateDigitalClock, 1000);
(()=>{
  alert(`Welcome!  It is currently ${new Date}!  Take care, Meow!`)
})();