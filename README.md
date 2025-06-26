# 🤖 LeetCode AI Assistant - Chrome Extension

> **Intelligent AI-powered coding assistant for LeetCode problems with advanced features and beautiful UI**

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-v1.0.0-blue.svg)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/License-Non--Commercial-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange.svg)](manifest.json)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)
[![Security](https://img.shields.io/badge/security-policy-brightgreen.svg)](SECURITY.md)

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

## 🚀 Features

### ✨ Core AI Capabilities
- **🤖 Smart Problem Explanation** - Understand complex algorithms with AI-powered explanations
- **💡 Intelligent Solutions** - Get optimized solutions in your preferred programming language
- **🧠 Thinking Approach** - Learn multiple problem-solving strategies and approaches
- **🔍 Code Analysis** - Analyze your code for errors, optimizations, and improvements

### 🎨 Advanced UI/UX Features
- **📌 Minimize to Corner** - Smart pin functionality with state preservation
- **🖱️ Drag & Drop** - Fully draggable modal and minimized pin
- **📋 One-Click Copy** - Clean code copying with multiple fallback methods
- **⌨️ Keyboard Shortcuts** - Power user shortcuts for quick access
- **📱 Responsive Design** - Works perfectly on all screen sizes
- **🎯 Resizable Interface** - Resize from any corner or edge

### 🔧 Technical Features
- **🔐 Secure API Integration** - GROQ Llama 4 Scout 17B AI model integration
- **💾 State Preservation** - Never lose your work with smart state management
- **⚡ Performance Optimized** - Lightweight and fast loading
- **🛡️ Error Handling** - Robust error handling with user-friendly messages
- **🔍 Debug Mode** - Built-in debugging tools for development

## 📦 Installation

### Method 1: Chrome Web Store (Recommended)
1. Visit the Chrome Web Store
2. Search for "LeetCode AI Assistant"
3. Click "Add to Chrome"
4. Confirm installation

### Method 2: Manual Installation (Developer Mode)
1. Download or clone this repository
   ```bash
   git clone https://github.com/byteom/leetcode-ai-assistant.git
   cd leetcode-ai-assistant
   ```
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension icon should appear in your toolbar

## 🎯 Quick Start

### 1. Setup API Key
1. Click the extension icon in your Chrome toolbar
2. Enter your GROQ API key in the welcome screen
3. Click "Save" to store your credentials securely

### 2. Navigate to LeetCode
1. Go to any LeetCode problem page
2. The extension will automatically detect the problem
3. Click the extension icon or use keyboard shortcut `Ctrl+Shift+L`

### 3. Choose Your Action
- **📖 Explain Problem** - Get detailed problem explanation
- **💡 Show Solution** - Receive optimized code solutions
- **🧠 Thinking Approach** - Learn problem-solving strategies
- **🔍 Analyze My Code** - Get feedback on your code

## 🎨 UI Features

### Modal Interface
```
┌─────────────────────────────────────────────────────────┐
│ 🤖 AI Coding Assistant                    [📌] [□] [×] │
├─────────────────────────────────────────────────────────┤
│ [📖 Explain] [💡 Solution] [🧠 Thinking] [🔍 Analyze]   │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Response Area with Syntax Highlighting             │ │
│ │ [📋 Copy Code] [↑ Scroll to Top]                   │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Minimized Pin
```
┌─────────────────────┐
│ 🤖 AI Assistant     │
│ Powered by GROQ     │
└─────────────────────┘
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+L` | Open/Close AI Assistant |
| `Ctrl+Shift+E` | Explain Problem |
| `Ctrl+Shift+S` | Show Solution |
| `Ctrl+Shift+T` | Thinking Approach |
| `Ctrl+Shift+A` | Analyze Code |
| `Esc` | Close Modal |
| `Ctrl+C` | Copy Code (when focused) |

## 🔧 Configuration

### API Settings
The extension uses GROQ's Llama 4 Scout 17B model for AI responses. You'll need:
- GROQ API key (get it from [console.groq.com](https://console.groq.com))
- Valid API credentials

### Customization Options
- **Theme**: Light/Dark mode support
- **Language**: Multiple programming language support
- **Response Length**: Configurable response detail level
- **Auto-minimize**: Automatic pinning behavior

## 🛠️ Development

### Project Structure
```
leetcode-ai-assistant/
├── manifest.json          # Extension manifest
├── background.js          # Background script
├── content.js            # Content script (main logic)
├── popup.js              # Popup interface
├── popup.html            # Popup markup
├── popup.css             # Popup styles
├── modal.css             # Modal styles
├── styles.css            # Global styles
├── welcome.html          # Welcome screen
├── welcome.js            # Welcome logic
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── README.md             # Project documentation
├── CONTRIBUTING.md       # Contribution guidelines
├── LICENSE               # License file
├── CHANGELOG.md          # Version history
├── CODE_OF_CONDUCT.md    # Community standards
├── SECURITY.md           # Security policy
└── SUPPORT.md            # Support guide
```

### Key Components

#### Content Script (`content.js`)
- **Modal Management**: Creates and manages the AI assistant modal
- **API Integration**: Handles GROQ API communication
- **UI Interactions**: Manages drag, resize, and minimize functionality
- **State Management**: Preserves user state and responses
- **Code Processing**: Handles code extraction and formatting

#### Background Script (`background.js`)
- **Extension Lifecycle**: Manages extension startup and shutdown
- **API Key Storage**: Securely stores user credentials
- **Message Handling**: Coordinates between popup and content scripts

#### Popup Interface (`popup.js`, `popup.html`)
- **Welcome Screen**: API key setup and configuration
- **Status Display**: Shows connection status and settings
- **Quick Actions**: Direct access to common functions

### Core Functions

#### AI Communication
```javascript
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
```

#### Modal Management
```javascript
function showAssistantModal() {
  // Creates modal with modern UI
  // Handles state preservation
  // Sets up event listeners
}

function minimizeToCorner(modal) {
  // Minimizes modal to compact pin
  // Preserves current state
  // Makes pin draggable
}
```

#### Code Processing
```javascript
function setupCopyButtons() {
  // Adds copy buttons to code blocks
  // Handles multiple copy methods
  // Provides visual feedback
}
```

## 🎨 UI/UX Design Principles

### Modern Design Language
- **Gradient Backgrounds**: Beautiful color transitions
- **Glass Morphism**: Translucent effects with backdrop blur
- **Smooth Animations**: 300ms transitions for all interactions
- **Responsive Layout**: Adapts to different screen sizes
- **Accessibility**: High contrast and keyboard navigation

### Color Palette
```css
/* Primary Colors */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Status Colors */
--success: #4CAF50;
--error: #F44336;
--warning: #FF9800;
--info: #2196F3;
```

### Typography
- **Font Family**: System fonts with fallbacks
- **Font Sizes**: Responsive scaling (14px - 24px)
- **Line Height**: 1.6 for optimal readability
- **Font Weights**: 400 (normal), 600 (semibold), 700 (bold)

## 🤝 Contributing

We welcome contributions from the community! This project thrives on collaboration and we appreciate all forms of contributions.

### 🎯 How You Can Contribute

- **🐛 Bug Reports**: Help us identify and fix issues
- **💡 Feature Requests**: Suggest new features and improvements
- **📝 Documentation**: Improve guides and documentation
- **🎨 UI/UX**: Enhance the user interface and experience
- **🔧 Code**: Submit pull requests with improvements
- **🧪 Testing**: Help test features and report issues
- **🌐 Community**: Help other users and spread the word

### 🚀 Quick Start for Contributors

1. **Fork the repository**
   ```bash
   git clone https://github.com/byteom/leetcode-ai-assistant.git
   cd leetcode-ai-assistant
   ```

2. **Set up development environment**
   - Load the extension in Chrome developer mode
   - Test on LeetCode problem pages
   - Check browser console for debugging

3. **Make your changes**
   - Follow our coding standards
   - Test thoroughly
   - Update documentation if needed

4. **Submit your contribution**
   - Create a pull request
   - Follow our PR template
   - Wait for review and feedback

### 📋 Contribution Guidelines

- **Code Style**: Follow existing code patterns and conventions
- **Testing**: Test on multiple browsers and LeetCode pages
- **Documentation**: Update docs for new features
- **Communication**: Be respectful and constructive
- **Licensing**: All contributions are licensed under the same terms

### 📚 Detailed Information

For comprehensive contribution guidelines, please see:
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Detailed contribution process
- **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** - Community standards
- **[SECURITY.md](SECURITY.md)** - Security reporting procedures

## 🔒 Security

We take security seriously and appreciate security researchers who help us maintain a secure codebase.

### 🛡️ Security Features

- **Secure API Communication**: All API calls use HTTPS
- **Input Validation**: All user inputs are validated and sanitized
- **No Data Collection**: Extension doesn't collect personal data
- **Local Storage**: API keys stored securely in browser storage
- **Error Handling**: Secure error handling prevents information disclosure

### 🚨 Reporting Security Issues

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them privately:
- **Email**: [security@example.com](mailto:security@example.com)
- **Subject**: `[SECURITY] LeetCode AI Assistant Vulnerability Report`
- **Response Time**: We aim to respond within 48 hours

For detailed security information, see **[SECURITY.md](SECURITY.md)**.

## 📞 Support

We're here to help! Here are the best ways to get support:

### 🆘 Getting Help

1. **📖 Check Documentation**: Start with this README and [SUPPORT.md](SUPPORT.md)
2. **🔍 Search Issues**: Check existing GitHub issues for solutions
3. **🐛 Report Bugs**: Create a new issue with detailed information
4. **💡 Request Features**: Suggest new features through GitHub issues
5. **📧 Contact Us**: Reach out for direct support

### 📋 Support Resources

- **[SUPPORT.md](SUPPORT.md)** - Comprehensive support guide
- **[GitHub Issues](https://github.com/byteom/leetcode-ai-assistant/issues)** - Bug reports and feature requests
- **[GitHub Discussions](https://github.com/byteom/leetcode-ai-assistant/discussions)** - Community discussions
- **[Wiki](https://github.com/byteom/leetcode-ai-assistant/wiki)** - Additional documentation

### 🐛 Common Issues

- **Extension not loading**: Check developer mode and file permissions
- **API key issues**: Verify GROQ API key and credits
- **Modal not appearing**: Ensure you're on a LeetCode problem page
- **Copy function not working**: Check browser clipboard permissions

For detailed troubleshooting, see **[SUPPORT.md](SUPPORT.md)**.

## 📄 License

This project is licensed under the **Advanced Non-Commercial License** - see the [LICENSE](LICENSE) file for details.

### 📋 License Summary

**✅ Permitted:**
- Personal and educational use
- Contributing to the project
- Forking for personal use
- Modifying for personal use

**❌ Prohibited:**
- Commercial use or distribution
- Selling the software or derivatives
- Using in commercial products
- Removing license terms

For complete license terms, see **[LICENSE](LICENSE)**.

## 🙏 Acknowledgments

- **GROQ** for providing the AI API and Llama 4 Scout 17B model
- **LeetCode** for the problem platform and community
- **Chrome Extensions Team** for the extension framework
- **Open Source Community** for inspiration, tools, and contributions
- **All Contributors** who help improve this project

## 📊 Project Statistics

[![GitHub stars](https://img.shields.io/github/stars/byteom/leetcode-ai-assistant?style=social)](https://github.com/byteom/leetcode-ai-assistant)
[![GitHub forks](https://img.shields.io/github/forks/byteom/leetcode-ai-assistant?style=social)](https://github.com/byteom/leetcode-ai-assistant)
[![GitHub issues](https://img.shields.io/github/issues/byteom/leetcode-ai-assistant)](https://github.com/byteom/leetcode-ai-assistant/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/byteom/leetcode-ai-assistant)](https://github.com/byteom/leetcode-ai-assistant/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/byteom/leetcode-ai-assistant)](https://github.com/byteom/leetcode-ai-assistant/graphs/contributors)

## 🔗 Quick Links

- **[📖 Documentation](https://github.com/byteom/leetcode-ai-assistant/wiki)**
- **[🐛 Report Bug](https://github.com/byteom/leetcode-ai-assistant/issues/new?template=bug_report.md)**
- **[💡 Request Feature](https://github.com/byteom/leetcode-ai-assistant/issues/new?template=feature_request.md)**
- **[🤝 Contribute](CONTRIBUTING.md)**
- **[🔒 Security](SECURITY.md)**
- **[📞 Support](SUPPORT.md)**
- **[📄 License](LICENSE)**
- **[📝 Changelog](CHANGELOG.md)**

---

<div align="center">

**Made with ❤️ by the LeetCode AI Assistant Community**

[![GitHub stars](https://img.shields.io/github/stars/byteom/leetcode-ai-assistant?style=social)](https://github.com/byteom/leetcode-ai-assistant)
[![GitHub forks](https://img.shields.io/github/forks/byteom/leetcode-ai-assistant?style=social)](https://github.com/byteom/leetcode-ai-assistant)
[![GitHub issues](https://img.shields.io/github/issues/byteom/leetcode-ai-assistant)](https://github.com/byteom/leetcode-ai-assistant/issues)

**⭐ Star this repository if you find it helpful!**

</div>
