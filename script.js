// Smooth Theme Auto Changer
const colors = [
  {primary:"#ff00cc", secondary:"#3333ff", bg:"#0f0f1a"},
  {primary:"#00ffee", secondary:"#ff0088", bg:"#111122"},
  {primary:"#ff8800", secondary:"#00ccff", bg:"#141414"},
];

let index = 0;

function changeTheme() {
  index = (index + 1) % colors.length;
  const theme = colors[index];
  document.documentElement.style.setProperty('--primary', theme.primary);
  document.documentElement.style.setProperty('--secondary', theme.secondary);
  document.documentElement.style.setProperty('--bg', theme.bg);
}

setInterval(changeTheme, 8000);

// Scroll
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

// Order
function orderProduct(name) {
  alert("You selected " + name + ". Payment will be made on delivery.");
}

// WhatsApp
function openWhatsApp() {
  window.location.href = "https://wa.me/ais/867051314767696?s=5";
}

// AI Chatbot
function handleChat(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("chatInput");
    const chatBody = document.getElementById("chatBody");

    const userMsg = input.value;
    chatBody.innerHTML += "<div><strong>You:</strong> " + userMsg + "</div>";

    let botReply = "Please contact us via WhatsApp for detailed assistance.";

    if (userMsg.toLowerCase().includes("track"))
      botReply = "To track your order, please provide your order number via WhatsApp.";
    if (userMsg.toLowerCase().includes("delivery"))
      botReply = "All payments are made on delivery. Fast shipping available.";

    setTimeout(() => {
      chatBody.innerHTML += "<div><strong>AI:</strong> " + botReply + "</div>";
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);

    input.value = "";
  }
}