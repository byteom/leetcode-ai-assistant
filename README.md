# 🤖 LeetCode AI Assistant - Chrome Extension

> **Intelligent AI-powered coding assistant for LeetCode problems with advanced features and beautiful UI**

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-v1.0.0-blue.svg)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/License-Non--Commercial-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange.svg)](manifest.json)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)
[![Security](https://img.shields.io/badge/security-policy-brightgreen.svg)](SECURITY.md)

---

## 📋 Table of Contents

- [🚀 Features](#-features)
- [🖼️ Screenshots](#️-screenshots)
- [📦 Installation](#-installation)
- [🎯 Quick Start](#-quick-start)
- [🎨 UI Features](#-ui-features)
- [⌨️ Keyboard Shortcuts](#️-keyboard-shortcuts)
- [🔧 Configuration](#-configuration)
- [🛠️ Development](#️-development)
- [🤝 Contributing](#-contributing)
- [🔒 Security](#-security)
- [📞 Support](#-support)
- [📄 License](#-license)

---

## 🚀 Features

### ✨ Core AI Capabilities
- 🤖 Smart Problem Explanation
- 💡 Intelligent Solutions
- 🧠 Thinking Approach
- 🔍 Code Analysis

### 🎨 Advanced UI/UX Features
- 📌 Minimize to Corner
- 🖱️ Drag & Drop Modal
- 📋 One-Click Copy
- ⌨️ Keyboard Shortcuts
- 📱 Responsive Design
- 🎯 Resizable Interface

### 🔧 Technical Features
- 🔐 Secure API Integration (GROQ LLaMA 4 Scout 17B)
- 💾 State Preservation
- ⚡ Performance Optimized
- 🛡️ Error Handling
- 🔍 Debug Mode

---

## 🖼️ Screenshots

| 🧠 Main Assistant Modal | 📌 Minimized View | 📝 Popup & API Setup |
|------------------------|------------------|-----------------------|
| ![Main Modal](assets/screenshots/modal-full.png) | ![Minimized](assets/screenshots/minimized.png) | ![Popup](assets/screenshots/popup.png) |

> Make sure the images exist at `assets/screenshots/`. Add your own UI screenshots or mockups there.

---

## 📦 Installation

### Method 1: Chrome Web Store (Recommended)
1. Go to Chrome Web Store
2. Search: **LeetCode AI Assistant**
3. Click **Add to Chrome**

### Method 2: Manual Installation
```bash
git clone https://github.com/byteom/leetcode-ai-assistant.git
cd leetcode-ai-assistant
┌──────────────────────────────────────────────┐
│ 🤖 LeetCode AI Assistant          📌  □  ✕ │
├──────────────────────────────────────────────┤
│ [📖 Explain] [💡 Solution] [🧠 Thinking]     │
│ ┌──────────────────────────────────────────┐ │
│ │ AI Response Area                        │ │
│ │ [📋 Copy Code] [↑ Scroll]               │ │
│ └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
leetcode-ai-assistant/
├── manifest.json
├── background.js
├── content.js
├── popup.html / popup.js / popup.css
├── welcome.html / welcome.js
├── modal.css / styles.css
├── icons/
│   └── icon16.png, icon48.png, icon128.png
├── assets/screenshots/
│   └── modal-full.png, minimized.png, popup.png
async function callGROQAPI(prompt, apiKey) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 2000
    })
  });
  return response.json();
}
