// CREATES DATE (TODAY)
var Today = new Date();

// CREATES VARIABLE ThisDay ASSIGNS IT TO THE CURRENT DAY
var ThisDay = Today.getDate();

// VARIABLE ThisMonth ASSIGNS CURRENT MONTH (MONTHS ARE 0 INDEX FOR JAVASCRIPT)
var ThisMonth = Today.getMonth() + 1; 

// VARIABLE ThisYear ASSIGNS TO CURRENT YEAR
var ThisYear = Today.getFullYear();

// FORMATE OF TODAYS DATE MONTH DAY YEAR
document.addEventListener('DOMContentLoaded', function() {
    var mainPageParagraph = document.getElementById('main-page');
    mainPageParagraph.innerHTML = "Today's date: " + ThisMonth + "/" + ThisDay + "/" + ThisYear; 
    
    // CHANGE THE STYLE OF THE ELEMENT id="main-title"
    var mainTitle = document.getElementById('main-title');
    mainTitle.style.color = 'blue'; 
    mainTitle.style.fontSize = '36px'; 
    mainTitle.style.fontWeight = 'bold'; // 
});


function changeFooterColor() { // NEW FUNCTION PER DIRECTIONS
    const footer = document.querySelector('footer');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F33FFF', '#FF33A8']; // COLORS OFC
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    footer.style.backgroundColor = randomColor;
}
