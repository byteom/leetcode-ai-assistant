# 🤖 LeetCode AI Assistant - Chrome Extension

> **Intelligent AI-powered coding assistant for LeetCode problems with advanced features and beautiful UI**

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-v1.0.0-blue.svg)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange.svg)](manifest.json)

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
- **🔐 Secure API Integration** - GROQ Llama3-70b AI model integration
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
The extension uses GROQ's Llama3-70b model for AI responses. You'll need:
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
└── README.md             # This file
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
      model: 'llama3-70b-8192',
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

## 🔒 Security & Privacy

### Data Protection
- **Local Storage**: API keys stored locally in Chrome storage
- **No Data Collection**: Extension doesn't collect personal data
- **Secure API Calls**: All API communication uses HTTPS
- **Input Validation**: All user inputs are validated and sanitized

### Privacy Features
- **No Tracking**: No analytics or tracking scripts
- **Offline Capable**: Works without internet (except API calls)
- **Data Retention**: No persistent data storage on servers

## 🐛 Troubleshooting

### Common Issues

#### Extension Not Loading
1. Check if Developer mode is enabled
2. Verify all files are present in the extension folder
3. Check Chrome's extension page for error messages
4. Try reloading the extension

#### API Key Issues
1. Verify your GROQ API key is correct
2. Check if you have sufficient API credits
3. Ensure the API key has proper permissions
4. Try regenerating the API key

#### Copy Function Not Working
1. Check browser permissions for clipboard access
2. Try using the fallback copy method
3. Verify the code block is properly formatted
4. Check browser console for error messages

#### Modal Not Appearing
1. Ensure you're on a LeetCode problem page
2. Check if the extension is enabled
3. Try refreshing the page
4. Check for JavaScript errors in console

### Debug Mode
Enable debug mode by adding `?debug=true` to any LeetCode URL. This will:
- Show detailed console logs
- Display API request/response data
- Enable additional error reporting
- Show modal state information

## 📈 Performance Optimization

### Loading Speed
- **Lazy Loading**: Components load only when needed
- **Minified Assets**: All CSS and JS are optimized
- **Efficient DOM**: Minimal DOM manipulation
- **Caching**: Smart caching of API responses

### Memory Management
- **Event Cleanup**: Proper removal of event listeners
- **DOM Cleanup**: Automatic cleanup of temporary elements
- **State Optimization**: Efficient state management
- **Resource Management**: Proper resource disposal

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Style
- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ standards
- Add comments for complex logic
- Maintain existing code structure

### Testing
- Test on different Chrome versions
- Verify all features work correctly
- Check for memory leaks
- Test error scenarios

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GROQ** for providing the AI API
- **LeetCode** for the problem platform
- **Chrome Extensions Team** for the extension framework
- **Open Source Community** for inspiration and tools

## 📞 Support

### Getting Help
- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check this README for solutions
- **Community**: Join our Discord server for discussions

### Contact
- **Email**: support@leetcode-ai-assistant.com
- **Twitter**: [@LeetCodeAI](https://twitter.com/LeetCodeAI)
- **Discord**: [Join our server](https://discord.gg/leetcode-ai)

---

<div align="center">

**Made with ❤️ by the LeetCode AI Assistant Team**

[![GitHub stars](https://img.shields.io/github/stars/username/leetcode-ai-assistant?style=social)](https://github.com/username/leetcode-ai-assistant)
[![GitHub forks](https://img.shields.io/github/forks/username/leetcode-ai-assistant?style=social)](https://github.com/username/leetcode-ai-assistant)
[![GitHub issues](https://img.shields.io/github/issues/username/leetcode-ai-assistant)](https://github.com/username/leetcode-ai-assistant/issues)

</div>
