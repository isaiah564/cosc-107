// Set the countdown date
const countdownDate = new Date('January 18, 2024 23:59:59').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('days').innerHTML = `${days} days`;
  document.getElementById('hours').innerHTML = `${hours} hours`;
  document.getElementById('minutes').innerHTML = `${minutes} minutes`;
  document.getElementById('seconds').innerHTML = `${seconds} seconds`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('days').innerHTML = 'EXPIRED';
    document.getElementById('hours').innerHTML = '';
    document.getElementById('minutes').innerHTML = '';
    document.getElementById('seconds').innerHTML = '';
  }
}, 1000);

