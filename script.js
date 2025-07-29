const loader = document.getElementById('loader');
const auth = document.getElementById('auth');
const app = document.getElementById('app');
const pinCode = "2025";

window.onload = () => {
  setTimeout(() => {
    loader.classList.add('hidden');
    auth.classList.remove('hidden');
  }, 3000);
};

function unlock() {
  const enteredPin = document.getElementById('pin').value;
  if (enteredPin === pinCode) {
    auth.classList.add('hidden');
    app.classList.remove('hidden');
    loadQuotes();
  } else {
    alert("Wrong PIN. Access Denied.");
  }
}

function saveQuote() {
  const input = document.getElementById('quoteInput').value.trim();
  if (!input) return alert("Write something first.");
  const quotes = JSON.parse(localStorage.getItem('sanctum_quotes') || '[]');
  quotes.push({ text: input, time: new Date().toISOString() });
  localStorage.setItem('sanctum_quotes', JSON.stringify(quotes));
  document.getElementById('quoteInput').value = '';
  loadQuotes();
}

function loadQuotes() {
  const list = document.getElementById('quotesList');
  const quotes = JSON.parse(localStorage.getItem('sanctum_quotes') || '[]').reverse();
  list.innerHTML = '';
  quotes.forEach(q => {
    const div = document.createElement('div');
    div.textContent = `✴️ ${q.text}`;
    list.appendChild(div);
  });
}

function exportQuotes() {
  const quotes = JSON.parse(localStorage.getItem('sanctum_quotes') || '[]');
  const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ARCHE_QUOTES.json";
  link.click();
}
