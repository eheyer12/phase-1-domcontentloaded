// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    let changeText = document.getElementById('text');
    changeText.textContent = changeText.textContent.replace(`${changeText.textContent}`, "This is really cool!");
});
