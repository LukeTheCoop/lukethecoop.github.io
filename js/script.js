// Load the initial poem, god, and philosophy preview
document.addEventListener("DOMContentLoaded", function() {
  fetch('/static/writings/poems.json')
    .then(response => response.json())
    .then(poems => {
      // Get the first poem
      const firstPoem = poems[0];
      // Extract the first 200 words
      const poemPreview = firstPoem.content.split(" ").slice(0, 120).join(" ");
      // Update the poem preview text
      document.getElementById('poem-preview').textContent = `${poemPreview}... `;
    })
    .catch(err => console.log(err));

  fetch('/static/writings/philosophies.json')
    .then(response => response.json())
    .then(philosophies => {
      // Get the first philosophy
      const firstPhilosophy = philosophies[0];
      // Extract the first 200 words
      const philosophyPreview = firstPhilosophy.content.split(" ").slice(0, 120).join(" ");
      // Update the philosophy preview text
      document.getElementById('philosophy-preview').textContent = `${philosophyPreview}... `;
    })
    .catch(err => console.log(err));

   fetch('/static/writings/god.json')
    .then(response => response.json())
    .then(gods => {
      // Get the first god
      const firstGod = gods[0];
      // Extract the first 200 words
      const godPreview = firstGod.content.split(" ").slice(0, 120).join(" ");
      // Update the god preview text
      document.getElementById('god-preview').textContent = `${godPreview}... `;
    })
    .catch(err => console.log(err));
});


// JavaScript for Random Thought Generator
function generateThought() {
    const thoughts = [
        "Life is about making an impact, not making an income.",
        "Whatever the mind of man can conceive and believe, it can achieve.",
        "Strive not to be a success, but rather to be of value.",
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    ];
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    document.getElementById("thought").innerHTML = thoughts[randomIndex];
}