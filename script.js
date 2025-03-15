let currentQuoteIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Changed from 100 to 30 - much faster typing
let pauseTime = 2000;
let currentQuote = null;

// Function to get a random quote
function getRandomQuote() {
    return quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

// Function to implement the typewriter effect
function typeWriter() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    
    // Get a new quote only when needed
    if (currentQuote === null || (isDeleting && currentCharIndex === 0)) {
        currentQuote = getRandomQuote();
    }
    
    const quoteText = currentQuote.text;
    
    // If we're deleting text
    if (isDeleting) {
        // Remove a character
        quoteElement.textContent = quoteText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        
        // If we've deleted everything, prepare for a new quote
        if (currentCharIndex === 0) {
            isDeleting = false;
            authorElement.textContent = '';
            // We'll get a new quote on the next call
        }
    } 
    // If we're typing text
    else {
        // Add a character
        quoteElement.textContent = quoteText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        // If we've typed the whole quote, prepare to delete after a pause
        if (currentCharIndex === quoteText.length) {
            authorElement.textContent = `- ${currentQuote.author}`;
            isDeleting = true;
            // Pause longer at the end of a complete quote
            typingSpeed = pauseTime;
        }
    }
    
    // Adjust typing speed
    let speed = isDeleting ? typingSpeed / 10 : typingSpeed;
    
    // If we're at the end of the quote or just started a new one, pause longer
    if ((isDeleting && currentCharIndex === 0) || (!isDeleting && currentCharIndex === 1)) {
        speed = 500;
    }
    
    // Reset typing speed to normal after pauses
    if (!isDeleting && currentCharIndex > 1) {
        typingSpeed = 30; // Changed to match the top value
    }
    
    // Continue the typewriter effect
    setTimeout(typeWriter, speed);
}

// Start the typewriter effect when the page loads
window.onload = function() {
    typeWriter();
};
