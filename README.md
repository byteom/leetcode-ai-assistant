

# 🤖 LeetCode AI Assistant - Chrome Extension

> **Intelligent AI-powered coding assistant for LeetCode problems with advanced features and beautiful UI**

<!-- ✅ Replace EXTENSION_ID with your real Chrome Extension ID after publishing -->
[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-v1.0.0-blue.svg)](https://chrome.google.com/webstore/detail/leetcode-ai-assistant/EXTENSION_ID)
[![License](https://img.shields.io/badge/License-Non--Commercial-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange.svg)](manifest.json)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Security](https://img.shields.io/badge/security-policy-brightgreen.svg)](SECURITY.md)

---

## 📋 Table of Contents

- [🚀 Features](#-features)
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
- 💡 Optimized Code Solutions
- 🧠 Thinking Approach
- 🔍 Code Analysis

### 🎨 UI/UX Enhancements
- 📌 Minimize to Corner
- 🖱️ Drag & Drop Modal
- 📋 One-Click Code Copy
- ⌨️ Power User Shortcuts
- 📱 Responsive Design
- 🎯 Resizable Interface

### 🔧 Technical Capabilities
- 🔐 GROQ Llama 4 Scout 17B Integration
- 💾 Local State Management
- ⚡ Lightweight & Fast
- 🛡️ Robust Error Handling
- 🔍 Built-in Debug Tools

---

## 📦 Installation

### ✅ Method 1: Chrome Web Store
1. Visit the [Chrome Web Store](https://chrome.google.com/webstore/detail/leetcode-ai-assistant/EXTENSION_ID)
2. Click **"Add to Chrome"**
3. Extension icon will appear in your toolbar

### 🛠️ Method 2: Developer Mode
```bash
git clone https://github.com/byteom/leetcode-ai-assistant.git
cd leetcode-ai-assistant
┌───────────────────────────────────────────────┐
│ 🤖 AI Assistant                    [📌] [×]   │
├───────────────────────────────────────────────┤
│ [📖 Explain] [💡 Solution] [🧠 Think] [🔍 Analyze] │
│                                               │
│ ┌───────────────────────────────────────────┐ │
│ │ Response Area with Code/Output           │ │
│ │ [📋 Copy Code]                            │ │
│ └───────────────────────────────────────────┘ │
└───────────────────────────────────────────────┘
leetcode-ai-assistant/
├── manifest.json
├── background.js
├── content.js
├── popup.html / .js / .css
├── welcome.html / .js
├── icons/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
└── SUPPORT.md
async function callGROQAPI(prompt, apiKey) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 2000
    })
  });
  return await response.json();
}








 





