(function() {
  // Remove all elements from the current page
  const allElements = document.querySelectorAll("*");
  allElements.forEach(element => element.parentNode.removeChild(element));

  // Create a new empty HTML element
  const newHtml = document.createElement('html');
  newHtml.style.height = '100%';
  newHtml.style.width = '100%';
  newHtml.style.overflow = 'hidden';
  document.appendChild(newHtml);

  // Create an iframe element inside the new HTML
  const iframe = newHtml.appendChild(document.createElement('iframe'));
  iframe.style.height = '100%';
  iframe.style.width = '100%';
  iframe.style.border = '0px';

  // Prompt user for game selection
  const url = prompt('Please choose a game:\n1. Polytrack\n2. DustSim\n3. Die in the Dungeon\n4. Tanuki Sunset\n5. HELP NO BRAKE!\n6. It Was All For The Tuna\n7. Bad Monday Simulator\n8. Goodbye, Doggy\n9. Little Chef\n10. Kraft & Slash\n11. Gun Knight\n12. Custom');

  // Set iframe source based on user selection
  if (url == "1") {
        iframe.src = "https://html-classic.itch.zone/html/11880944/index.html";
  } else if (url == "2") {
        iframe.src = "https://html-classic.itch.zone/html/4501816/index.html";
  } else if (url == "3") {
        iframe.src = "https://html-classic.itch.zone/html/7330268/Die%20in%20the%20Dungeon%201.6.2f%20%5BWEB%5D/index.html";
  } else if (url == "4") {
        iframe.src = "https://html-classic.itch.zone/html/1756009/WebGL/index.html";
  } else if (url == "5"){
        iframe.src = "https://html-classic.itch.zone/html/6749357/index.html";
  } else if (url == "6"){
        iframe.src = "https://html-classic.itch.zone/html/7202700/index.html";
  } else if (url == "7"){
        iframe.src = "https://html-classic.itch.zone/html/6086484/index.html";
  } else if (url == "8"){
        iframe.src = "https://html-classic.itch.zone/html/1249714/index.html";
  } else if (url == "9"){
        iframe.src = "https://html-classic.itch.zone/html/8589309/ItchBuild_1.3/index.html";
  } else if (url == "10"){
        iframe.src = "https://html-classic.itch.zone/html/4552916/index.html";
  } else if (url == "11"){
        iframe.src = "https://html-classic.itch.zone/html/3524996/index.html";
  } else if (url == "12") {
        const customUrl = prompt("Please enter a URL for embedding");
        iframe.src = customUrl;
  }
})();
