function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const messages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    appendMessage("user", userMessage);
    botResponse(userMessage);
    userInput.value = "";
  }
});

function appendMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.textContent = message;
  msgDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  messages.appendChild(msgDiv);
}

function botResponse(userMessage) {
  console.log("User Message:", userMessage); // Debug input
  let response = "Sorry, I didn't understand that.";
  if (userMessage.toLowerCase().includes("hello")) {
    response = "Hi there! How can I help you?";
  } else if (userMessage.toLowerCase().includes("ml")) {
    response = "Machine Learning is fascinating! Do you have a specific question about it?";
  }else if (userMessage.toLowerCase().includes("hi")) {
    response = "Hi there! How can I help you?";
  }
  console.log("Bot Response:", response); // Debug output
  appendMessage("bot", response);
}



