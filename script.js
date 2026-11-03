const students = [
  { name: 'Advaith V', regno: 'TZ24CS1191', year: 2002 },
  { name: 'Adithyan Suresh', regno: 'TZ24CS1223', year: 1999 },
  { name: 'Lukson Akhi Elakkattu', regno: 'TZ24CS1192', year: 2001 },
  { name: 'Jinto Joseph', regno: 'TZ24CS1210', year: 1998 }
];

const promoColors = [
  { name: 'Signal Orange', value: '#ff5b2e' },
  { name: 'Charge Yellow', value: '#f6c744' },
  { name: 'Circuit Green', value: '#45a875' },
  { name: 'Sky Current', value: '#63b9c7' }
];
let promoIndex = 0;
let motionTimer;
let motionPosition = 0;

function displayClock() {
  const now = new Date();
  document.getElementById('digital-clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById('today-date').textContent = now.toLocaleDateString([], { day: '2-digit', month: 'short', year: 'numeric' });
}

function setBackgroundColor() {
  promoIndex = (promoIndex + 1) % promoColors.length;
  const promo = promoColors[promoIndex];
  document.documentElement.style.setProperty('--orange', promo.value);
  document.getElementById('promo-name').textContent = promo.name;
  document.getElementById('color-name').textContent = promo.name;
  document.getElementById('color-swatch').style.background = promo.value;
}

function increaseFontSize() { document.getElementById('hover-copy').style.fontSize = '16px'; }
function decreaseFontSize() { document.getElementById('hover-copy').style.fontSize = '12px'; }

function moveProduct() {
  const product = document.getElementById('moving-product');
  motionPosition = (motionPosition + 2) % 100;
  product.style.left = `${motionPosition}%`;
}

function startMotion() {
  if (!motionTimer) motionTimer = setInterval(moveProduct, 40);
}

function stopMotion() {
  clearInterval(motionTimer);
  motionTimer = undefined;
}

function renderStudents() {
  const table = document.getElementById('student-list');
  table.innerHTML = students.map((student) => {
    const category = student.year < 2000 ? 'Before 2000' : '2000 and after';
    return `<tr><td>${student.name}</td><td>${student.regno}</td><td>${student.year}</td><td>${category}</td></tr>`;
  }).join('');
  document.getElementById('record-count').textContent = `${students.length} entries`;
}

displayClock();
renderStudents();
setInterval(displayClock, 1000);
setInterval(setBackgroundColor, 30000);