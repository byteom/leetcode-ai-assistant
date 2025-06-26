# 🆘 Support Guide

Welcome to the LeetCode AI Assistant support guide! This document will help you find solutions to common issues and get the help you need.

## 📋 Table of Contents

- [Getting Help](#getting-help)
- [Common Issues](#common-issues)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Contact Information](#contact-information)
- [Community Resources](#community-resources)

## 🆘 Getting Help

### Before Asking for Help

1. **Check this guide** - Your issue might already be covered here
2. **Search existing issues** - Someone else might have had the same problem
3. **Check the documentation** - README.md and other docs might have the answer
4. **Try troubleshooting** - Use the troubleshooting section below

### How to Ask for Help

When asking for help, please include:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Environment details** (browser, OS, extension version)
- **Screenshots or videos** if applicable
- **Error messages** if any

## 🐛 Common Issues

### Extension Not Loading

**Symptoms**: Extension doesn't appear on LeetCode pages

**Solutions**:
1. **Check if extension is enabled**:
   - Go to `chrome://extensions/`
   - Make sure LeetCode AI Assistant is enabled
   - Click "Reload" if needed

2. **Check LeetCode page**:
   - Make sure you're on a problem page (URL contains `/problems/`)
   - Refresh the page
   - Wait a few seconds for the extension to load

3. **Check browser compatibility**:
   - Ensure you're using a supported browser (Chrome 88+, Firefox 85+, Edge 88+)
   - Update your browser to the latest version

### AI Assistant Button Not Appearing

**Symptoms**: Button doesn't show up on LeetCode problem pages

**Solutions**:
1. **Refresh the page** and wait 2-3 seconds
2. **Check browser console** for any error messages
3. **Disable other extensions** that might interfere
4. **Try incognito/private mode** to test
5. **Reinstall the extension** if needed

### API Key Issues

**Symptoms**: "Please set your GROQ API key" error

**Solutions**:
1. **Get a GROQ API key**:
   - Visit [GROQ Console](https://console.groq.com/)
   - Sign up or log in
   - Create a new API key

2. **Set the API key**:
   - Click the extension icon in your browser
   - Enter your API key in the settings
   - Click "Save"

3. **Check API key validity**:
   - Make sure the key is correct
   - Check if you have sufficient credits
   - Verify the key hasn't expired

### Modal Not Working

**Symptoms**: Modal doesn't open, buttons don't work, or modal is broken

**Solutions**:
1. **Refresh the page** and try again
2. **Check for JavaScript errors** in browser console
3. **Clear browser cache** and cookies
4. **Try a different browser** to isolate the issue
5. **Reinstall the extension**

### Code Analysis Not Working

**Symptoms**: Code analysis feature doesn't provide results

**Solutions**:
1. **Check API key** - Make sure it's valid and has credits
2. **Verify code format** - Make sure code is properly formatted
3. **Check problem detection** - Ensure the extension can detect the problem
4. **Try a different problem** to test
5. **Check browser console** for error messages

## 🔧 Troubleshooting

### Step-by-Step Troubleshooting

#### 1. Basic Checks
- [ ] Extension is installed and enabled
- [ ] You're on a LeetCode problem page
- [ ] Browser is up to date
- [ ] No other extensions are interfering

#### 2. Extension Loading
- [ ] Check `chrome://extensions/` for errors
- [ ] Try reloading the extension
- [ ] Check browser console for errors
- [ ] Try disabling other extensions

#### 3. API Integration
- [ ] API key is set correctly
- [ ] API key has sufficient credits
- [ ] Internet connection is stable
- [ ] GROQ API is accessible

#### 4. UI Issues
- [ ] Refresh the page
- [ ] Clear browser cache
- [ ] Try different browser
- [ ] Check for JavaScript errors

### Debug Mode

To enable debug mode and get more information:

1. **Open browser console** (F12)
2. **Look for extension logs** - they start with "LeetCode AI Assistant"
3. **Check for errors** in the console
4. **Test page detection** by running `window.debugLeetCodeElements()` in console

### Common Error Messages

| Error Message | Cause | Solution |
|---------------|-------|----------|
| "Please set your GROQ API key" | API key not configured | Set API key in extension settings |
| "Could not extract problem information" | Page detection failed | Refresh page or try different problem |
| "Error contacting GROQ API" | Network or API issue | Check internet connection and API key |
| "Extension not found" | Extension not installed | Install extension from Chrome Web Store |

## ❓ FAQ

### General Questions

**Q: Is this extension free to use?**
A: The extension itself is free, but you need a GROQ API key which may have usage costs.

**Q: Which browsers are supported?**
A: Chrome 88+, Firefox 85+, Edge 88+, and Safari 14+ (limited testing).

**Q: Do I need a LeetCode account?**
A: No, the extension works on public LeetCode problem pages.

**Q: Is my code sent to external servers?**
A: Yes, your code is sent to GROQ's API for analysis. See our privacy policy for details.

### Technical Questions

**Q: How do I get a GROQ API key?**
A: Visit [GROQ Console](https://console.groq.com/), sign up, and create an API key.

**Q: What programming languages are supported?**
A: Python, JavaScript, Java, C++, C#, Go, Rust, and Swift.

**Q: Can I use my own AI model?**
A: Currently, only GROQ's API is supported. We may add other providers in the future.

**Q: How much does the API cost?**
A: Check [GROQ's pricing](https://console.groq.com/) for current rates.

### Feature Questions

**Q: Can I analyze my own code?**
A: Yes, use the "Analyze My Code" feature to get feedback on your solutions.

**Q: Does the extension work offline?**
A: No, it requires an internet connection to access the AI API.

**Q: Can I save my analysis results?**
A: Currently, results are not automatically saved, but you can copy them manually.

**Q: Does it work on all LeetCode problems?**
A: It should work on most problems, but some very new or complex problems might have issues.

## 📞 Contact Information

### Getting Help

- **GitHub Issues**: [Create an issue](https://github.com/byteom/leetcode-ai-assistant/issues)
- **Email Support**: [support@example.com](mailto:support@example.com)
- **Discord Community**: [Join our Discord](https://discord.gg/your-server)

### Response Times

- **Critical Issues**: 24 hours
- **General Support**: 48 hours
- **Feature Requests**: 1 week
- **Bug Reports**: 3-5 days

### Before Contacting Support

1. **Check this guide** thoroughly
2. **Search existing issues** on GitHub
3. **Try troubleshooting** steps above
4. **Gather information** about your issue
5. **Prepare screenshots** if needed

## 🌐 Community Resources

### Official Channels

- **GitHub Repository**: [Main project page](https://github.com/byteom/leetcode-ai-assistant)
- **Documentation**: [Project docs](https://github.com/byteom/leetcode-ai-assistant/wiki)
- **Releases**: [Latest updates](https://github.com/byteom/leetcode-ai-assistant/releases)

### Community Forums

- **Reddit**: [r/LeetCode](https://www.reddit.com/r/LeetCode/)
- **Discord**: [Programming Community](https://discord.gg/programming)
- **Stack Overflow**: [LeetCode tag](https://stackoverflow.com/questions/tagged/leetcode)

### Learning Resources

- **LeetCode Official**: [leetcode.com](https://leetcode.com/)
- **GROQ Documentation**: [docs.groq.com](https://docs.groq.com/)
- **Browser Extensions**: [Chrome Web Store](https://chrome.google.com/webstore/)

## 📝 Reporting Issues

### Bug Reports

When reporting a bug, please include:

```markdown
**Bug Description**: [Clear description]

**Steps to Reproduce**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Behavior**: [What should happen]

**Actual Behavior**: [What actually happens]

**Environment**:
- Browser: [Version]
- OS: [Version]
- Extension Version: [Version]

**Screenshots**: [If applicable]

**Console Errors**: [If any]
```

### Feature Requests

When requesting features, please include:

```markdown
**Feature Description**: [What you want]

**Use Case**: [Why you need it]

**Proposed Solution**: [How it should work]

**Alternatives**: [Other ways to solve this]

**Additional Context**: [Any other relevant info]
```

## 🎯 Getting Started

### First Time Setup

1. **Install the extension** from Chrome Web Store
2. **Get a GROQ API key** from [console.groq.com](https://console.groq.com/)
3. **Set your API key** in extension settings
4. **Visit a LeetCode problem** page
5. **Click the AI Assistant button** to get started

### Quick Test

1. Go to [LeetCode Two Sum](https://leetcode.com/problems/two-sum/)
2. Look for the "🤖 AI Assistant" button
3. Click it to open the modal
4. Try the "Explain Problem" feature
5. Verify everything works correctly

---

**Need more help?** Don't hesitate to reach out! We're here to help you succeed with LeetCode. 🚀 