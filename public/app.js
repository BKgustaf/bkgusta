// app.js
function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('generated-password').textContent = password;
}

function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('calculation-result').textContent = result;
}

function removePassword() {
    document.getElementById('generated-password').textContent = '';
}

function removeCalculation() {
    document.getElementById('calculation-result').textContent = '';
}

function addNote() {
    const noteInput = document.getElementById('note-input');
    const note = noteInput.value.trim();
    if (note) {
        const li = document.createElement('li');
        li.textContent = note;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = () => li.remove();

        li.appendChild(removeBtn);
        document.getElementById('notes-list').appendChild(li);
        noteInput.value = ''; // Limpar o input
    }
}

function init() {
    document.getElementById('generate-password-btn').onclick = generatePassword;
    document.getElementById('remove-password-btn').onclick = removePassword;
    document.getElementById('calculate-btn').onclick = calculateSum;
    document.getElementById('remove-calculation-btn').onclick = removeCalculation;
    document.getElementById('add-note-btn').onclick = addNote;
}

document.addEventListener('DOMContentLoaded', init);

// Exporta as funções para testes
module.exports = {
    generatePassword,
    calculateSum,
    addNote,
    removePassword,
    removeCalculation
};
