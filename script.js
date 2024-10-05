function updateText() {
    var inputText = document.getElementById('userInput').value;
    document.getElementById('artext').textContent = inputText;
}

function clearText() {
    document.getElementById('userInput').value = '';
    document.getElementById('artext').textContent = 'ANIMATED';
}

function updateFont() {
    var selectedFont = document.getElementById('fontSelect').value;
    document.getElementById('artext').style.fontFamily = selectedFont;
}

function updateFontStyle() {
    var selectedStyle = document.getElementById('fontStyleSelect').value;
    document.getElementById('artext').style.fontStyle = selectedStyle.includes('italic') ? 'italic' : 'normal';
    document.getElementById('artext').style.fontWeight = selectedStyle.includes('bold') ? 'bold' : 'normal';
}

function updateFontSize() {
    var selectedSize = document.getElementById('fontSizeSelect').value;
    document.getElementById('artext').style.fontSize = selectedSize;
}

function toggleMenu() {
    var menu = document.querySelector('.nav-menu');
    menu.classList.toggle('show');
}
