// Background script for extension management
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
      // Open the options page on first install
      chrome.tabs.create({
        url: chrome.runtime.getURL('welcome.html')
      });
    }
    // Set uninstall URL for feedback
    chrome.runtime.setUninstallURL('https://your-feedback-site.com/extension-uninstalled?source=leetcode-ai', () => {
      // Optionally log or handle errors
      if (chrome.runtime.lastError) {
        console.error('Failed to set uninstall URL:', chrome.runtime.lastError);
      }
    });
});

// Also set uninstall URL on every background load (for updates/reloads)
chrome.runtime.setUninstallURL('https://your-feedback-site.com/extension-uninstalled?source=leetcode-ai', () => {
  if (chrome.runtime.lastError) {
    console.error('Failed to set uninstall URL:', chrome.runtime.lastError);
  }
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getApiKey') {
    chrome.storage.sync.get(['groqApiKey'], (result) => {
      sendResponse({ apiKey: result.groqApiKey });
    });
    return true; // Required for async response
  }
});