const $ = id => document.getElementById(id);

function analyze() {
  let text = $("source").value.trim();

  $("length").textContent = text.length;
  $("upper").textContent = text.toUpperCase();
  $("lower").textContent = text.toLowerCase();

  let words = text ? text.split() : [];
  $("words").textContent = words.length;

  // middle word(s)
  let middle = "NA";
  if (words.length) {
    let mid = Math.floor(words.length / 2);
    middle = words.length % 2 === 0 
      ? words[mid - 1] + " " + words[mid]
      : words[mid];
  }
  $("middle").textContent = middle;

  // count vowels & consonants
  let v = 0, c = 0;
  for (let ch of text.toLowerCase()) {
    if ("aeiou".includes(ch)) v++;
    else if (/[a-z]/.test(ch)) c++;
  }
  $("vowels").textContent = v;
  $("consonants").textContent = c;

  // camelCase
  let parts = text.match(/[A-Za-z0-9]+/g) || [];
  $("camel").textContent = parts.map((w,i) =>
    i==0 ? w.toLowerCase() :
    w[0].toUpperCase() + w.slice(1).toLowerCase()
  ).join("");
}

$("stringForm").addEventListener("submit", e => {
  e.preventDefault();
  analyze();
});
