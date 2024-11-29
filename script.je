// script.js

// Get DOM elements
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Function to load messages from local storage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    
    messages.forEach(message => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.innerText = message;
        messagesDiv.appendChild(messageDiv);
    });

    // Scroll to the bottom of the chat container
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Function to send a message
function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        // Get existing messages from local storage
        const messages = JSON.parse(localStorage.getItem("messages")) || [];

        // Add the new message to the list
        messages.push(message);

        // Save the updated messages to local storage
        localStorage.setItem("messages", JSON.stringify(messages));

        // Display the new message
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.innerText = message;
        messagesDiv.appendChild(messageDiv);

        // Clear the input field
        messageInput.value = "";

        // Scroll to the bottom of the chat container
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}

// Listen for the send button click
sendButton.addEventListener("click", function() {
    sendMessage();
});

// Listen for Enter key press to send message
messageInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Load the messages when the page loads
window.onload = loadMessages;
