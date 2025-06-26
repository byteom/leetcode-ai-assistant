# 🤝 Contributing to LeetCode AI Assistant

Thank you for your interest in contributing to the LeetCode AI Assistant! This document provides detailed guidelines on how you can contribute to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)
- [Questions or Problems?](#questions-or-problems)

## 📜 Code of Conduct

### Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

Examples of behavior that contributes to a positive environment for our community include:

- Using welcoming and inclusive language
- Being respectful of differing opinions, viewpoints, and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the overall community
- Showing empathy towards other community members

Examples of unacceptable behavior include:

- The use of sexualized language or imagery, and sexual attention or advances
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

## 🚀 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

**Bug Report Template:**
```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows 10, macOS 10.15, Ubuntu 20.04]
 - Browser: [e.g. Chrome 91, Firefox 89, Safari 14]
 - Extension Version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

If you have a suggestion for a new feature or enhancement, please use the feature request template:

**Feature Request Template:**
```markdown
**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### Code Contributions

We welcome code contributions! Here are the main areas where you can help:

#### 🎯 Priority Areas for Contribution

1. **UI/UX Improvements**
   - Better responsive design
   - Accessibility improvements
   - Dark mode support
   - Custom themes

2. **Feature Enhancements**
   - Additional AI models support
   - Code analysis improvements
   - Performance optimizations
   - New problem-solving features

3. **Bug Fixes**
   - LeetCode page detection improvements
   - API integration fixes
   - Browser compatibility issues

4. **Documentation**
   - Code documentation
   - User guides
   - API documentation

## 🛠️ Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git
- A modern web browser (Chrome, Firefox, Edge)

### Local Development Setup

1. **Fork the repository**
   ```bash
   # Fork the repository on GitHub first, then:
   git clone https://github.com/YOUR_USERNAME/leetcode-ai-assistant.git
   cd leetcode-ai-assistant
   ```

2. **Install dependencies** (if any)
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Load the extension in your browser**
   - Open Chrome/Edge and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `leetcode-ai-assistant` folder

4. **Make your changes**
   - Edit the files in your preferred code editor
   - Test your changes by reloading the extension

5. **Test your changes**
   - Go to any LeetCode problem page
   - Verify that your changes work as expected
   - Test on different browsers if possible

### Project Structure

```
leetcode-ai-assistant/
├── manifest.json          # Extension manifest
├── content.js             # Main content script
├── background.js          # Background script
├── popup.html             # Extension popup
├── popup.js               # Popup functionality
├── popup.css              # Popup styles
├── modal.css              # Modal styles
├── styles.css             # General styles
├── welcome.html           # Welcome page
├── welcome.js             # Welcome page logic
├── icons/                 # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── README.md              # Project documentation
├── CONTRIBUTING.md        # This file
├── LICENSE                # License file
└── CHANGELOG.md           # Version history
```

## 🔄 Pull Request Process

### Before Submitting a Pull Request

1. **Check existing issues and pull requests**
   - Make sure your issue/feature hasn't been reported already
   - Check if there's already a pull request for your changes

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make your changes**
   - Follow the coding standards below
   - Write tests if applicable
   - Update documentation if needed

4. **Test your changes thoroughly**
   - Test on different browsers
   - Test on different LeetCode pages
   - Test edge cases

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   # or
   git commit -m "fix: fix bug description"
   ```

### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation only changes
- `style:` - Changes that do not affect the meaning of the code
- `refactor:` - A code change that neither fixes a bug nor adds a feature
- `perf:` - A code change that improves performance
- `test:` - Adding missing tests or correcting existing tests
- `chore:` - Changes to the build process or auxiliary tools

### Submitting the Pull Request

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a pull request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your feature branch
   - Fill out the pull request template

3. **Pull Request Template**
   ```markdown
   ## Description
   Brief description of the changes made.

   ## Type of Change
   - [ ] Bug fix (non-breaking change which fixes an issue)
   - [ ] New feature (non-breaking change which adds functionality)
   - [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
   - [ ] Documentation update

   ## Testing
   - [ ] Tested on Chrome
   - [ ] Tested on Firefox
   - [ ] Tested on Edge
   - [ ] Tested on different LeetCode pages

   ## Screenshots (if applicable)
   Add screenshots to help explain your changes.

   ## Checklist
   - [ ] My code follows the style guidelines of this project
   - [ ] I have performed a self-review of my own code
   - [ ] I have commented my code, particularly in hard-to-understand areas
   - [ ] I have made corresponding changes to the documentation
   - [ ] My changes generate no new warnings
   - [ ] I have added tests that prove my fix is effective or that my feature works
   - [ ] New and existing unit tests pass locally with my changes
   ```

## 📝 Coding Standards

### JavaScript/HTML/CSS Guidelines

1. **JavaScript**
   - Use ES6+ features when possible
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Follow consistent indentation (2 spaces)
   - Use semicolons at the end of statements

2. **HTML**
   - Use semantic HTML elements
   - Include proper accessibility attributes
   - Keep markup clean and well-structured

3. **CSS**
   - Use consistent naming conventions
   - Prefer CSS Grid and Flexbox for layouts
   - Use CSS custom properties for theming
   - Keep styles modular and reusable

### Code Style Example

```javascript
// Good
function calculateTimeComplexity(algorithm) {
  const complexityMap = {
    'linear': 'O(n)',
    'quadratic': 'O(n²)',
    'logarithmic': 'O(log n)'
  };
  
  return complexityMap[algorithm] || 'Unknown';
}

// Bad
function calcTC(a) {
  var map = {
    'linear': 'O(n)',
    'quadratic': 'O(n²)',
    'logarithmic': 'O(log n)'
  };
  return map[a] || 'Unknown';
}
```

## 🧪 Testing Guidelines

### Manual Testing Checklist

Before submitting a pull request, please test:

- [ ] Extension loads without errors
- [ ] AI Assistant button appears on LeetCode problem pages
- [ ] Modal opens and closes properly
- [ ] All buttons in the modal work correctly
- [ ] API calls work with valid API keys
- [ ] Error handling works for invalid API keys
- [ ] Modal is draggable and resizable
- [ ] Minimize/maximize functionality works
- [ ] Copy buttons work for code blocks
- [ ] Responsive design works on different screen sizes

### Browser Compatibility

Test on the following browsers:
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest) - if possible

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions
- Include inline comments for complex logic
- Update README.md for new features
- Update this CONTRIBUTING.md if needed

### Example JSDoc Comment

```javascript
/**
 * Analyzes user code and provides feedback
 * @param {string} userCode - The code to analyze
 * @param {string} problemTitle - The LeetCode problem title
 * @param {string} problemDescription - The problem description
 * @returns {Promise<string>} Analysis result from AI
 */
async function analyzeUserCode(userCode, problemTitle, problemDescription) {
  // Implementation here
}
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the bug
2. **Steps to reproduce** the issue
3. **Expected vs actual behavior**
4. **Environment details** (OS, browser, extension version)
5. **Screenshots or videos** if applicable
6. **Console errors** if any

## 💡 Feature Requests

When suggesting features, please include:

1. **Problem description** - what issue does this solve?
2. **Proposed solution** - how should it work?
3. **Use cases** - who would benefit?
4. **Mockups or examples** if possible

## ❓ Questions or Problems?

If you have questions or run into problems:

1. **Check existing issues** - your question might already be answered
2. **Search the documentation** - README.md and this file
3. **Create a new issue** - use the "Question" template
4. **Join our community** - if we have a Discord/forum (to be added)

## 🎉 Recognition

Contributors will be recognized in:

- The README.md file
- Release notes
- The project's contributors page on GitHub

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project. See the [LICENSE](LICENSE) file for details.

---

Thank you for contributing to the LeetCode AI Assistant! 🚀

Your contributions help make this tool better for the entire LeetCode community. 