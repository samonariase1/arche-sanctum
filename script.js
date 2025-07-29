
const pinCode = "2025";
let savedQuotes = [];

function verifyPIN() {
  const input = document.getElementById("pinInput").value;
  if (input === pinCode) {
    document.getElementById("mainContent").classList.remove("hidden");
  } else {
    alert("Incorrect PIN. Try again.");
  }
}

function generateQuote() {
  const openings = ["The veil parts,", "From the throne above,", "Beneath divine silence,", "When the Watchers whisper,", "By ancient decree,"];
  const middles = [" a fire kindles within.", " time bends to will.", " the scribe seals the Word.", " light pierces the firmament.", " the heavens echo wisdom."];
  const endings = [" ✴️", " — ARCHE ✴️", " 🜃", " ⚖️🔥", " ✴️🜄"];

  const quote = `${pick(openings)}${pick(middles)}${pick(endings)}`;
  document.getElementById("quoteInput").value = quote;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function saveQuote() {
  const quote = document.getElementById("quoteInput").value;
  if (quote) {
    savedQuotes.push(quote);
    document.getElementById("quoteDisplay").innerHTML += `<p>✴️ ${quote}</p>`;
  }
}

function exportQuotes() {
  const blob = new Blob([savedQuotes.join("\n\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ARCHE_Quotes.txt";
  a.click();
}
