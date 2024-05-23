document.getElementById('email').addEventListener('input', function() {
    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = emailInput.value.trim() === '';
});
