document.addEventListener('DOMContentLoaded', () => {
  const apiKeyStatus = document.getElementById('api-key-status');
  const apiKeyForm = document.getElementById('api-key-form');
  const changeKeyBtn = document.getElementById('change-key-btn');
  const apiKeyInput = document.getElementById('popup-api-key');
  const saveKeyBtn = document.getElementById('popup-save-key');
  
  // Function to update UI based on API key status
  function updateUI(hasApiKey) {
    if (hasApiKey) {
      apiKeyStatus.innerHTML = `
        <div class="api-key-saved">
           API Key Saved<br>
          <small>Your GROQ API key is configured and ready to use!</small>
        </div>
      `;
      apiKeyForm.classList.add('hidden');
      changeKeyBtn.classList.remove('hidden');
    } else {
      apiKeyStatus.innerHTML = `
        <div class="api-key-missing">
           API Key Required<br>
          <small>Please enter your GROQ API key to use the assistant</small>
        </div>
      `;
      apiKeyForm.classList.remove('hidden');
      changeKeyBtn.classList.add('hidden');
    }
  }
  
  // Load saved API key and update UI
  chrome.storage.sync.get(['groqApiKey'], (result) => {
    if (result.groqApiKey) {
      apiKeyInput.value = result.groqApiKey;
      updateUI(true);
    } else {
      updateUI(false);
    }
  });
  
  // Save API key
  saveKeyBtn.addEventListener('click', () => {
    const apiKey = apiKeyInput.value.trim();
    if (!apiKey) {
      alert('Please enter a valid API key');
      return;
    }
    
    chrome.storage.sync.set({ groqApiKey: apiKey }, () => {
      updateUI(true);
      saveKeyBtn.textContent = 'Saved!';
      setTimeout(() => {
        saveKeyBtn.textContent = 'Save API Key';
      }, 2000);
    });
  });
  
  // Change API key
  changeKeyBtn.addEventListener('click', () => {
    updateUI(false);
    apiKeyInput.value = '';
    apiKeyInput.focus();
  });
  
  // Handle Enter key in input
  apiKeyInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      saveKeyBtn.click();
    }
  });
});