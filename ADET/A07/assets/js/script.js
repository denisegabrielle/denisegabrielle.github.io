var quotes = [];

const getQuotes = async () => {
    const response = await fetch('https://raw.githubusercontent.com/AtaGowani/daily-motivation/refs/heads/master/src/data/quotes.json');
    quotes = await response.json();
};

getQuotes();

function displayRandomQuote() {
    if (quotes.length > 0) {
        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        var contentContainer = document.getElementById("contentContainer");
        contentContainer.innerHTML = `
            <div class="contentText">
                <div class="quote">`+ quote.quote +`</div>
                <div class="author mt-5 mb-5"><i> - ` + quote.author +`</i></div>
            </div>
        `;
    }
}

document.getElementById("generateQuote").addEventListener("click", displayRandomQuote);