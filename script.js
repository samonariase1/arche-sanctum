const pinInput = document.getElementById('pin-input');
const lockScreen = document.getElementById('lock-screen');
const mainApp = document.getElementById('main-app');
const quotesContainer = document.getElementById('quotesContainer');
const savedPIN = '1234'; // Changeable later

function unlockSanctum() {
  if (pinInput.value === savedPIN) {
    lockScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    loadQuotes();
  } else {
    alert('Invalid PIN');
  }
}

function saveQuote() {
  const quote = document.getElementById('quoteInput').value;
  if (quote.trim()) {
    const quotes = JSON.parse(localStorage.getItem('arche_quotes') || '[]');
    quotes.push({ text: quote, time: new Date().toISOString() });
    localStorage.setItem('arche_quotes', JSON.stringify(quotes));
    document.getElementById('quoteInput').value = '';
    loadQuotes();
  }
}

function loadQuotes() {
  quotesContainer.innerHTML = '';
  const quotes = JSON.parse(localStorage.getItem('arche_quotes') || '[]');
  quotes.reverse().forEach(q => {
    const div = document.createElement('div');
    div.textContent = `✴️ ${q.text}`;
    quotesContainer.appendChild(div);
  });
}
