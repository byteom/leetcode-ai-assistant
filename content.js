// Detect when on a LeetCode problem page
function isLeetCodeProblemPage() {
    return window.location.href.includes('/problems/');
  }
  
  // Extract problem title
  function getProblemTitle() {
    // Try multiple selectors for the title
    const selectors = [
      '.text-title-large.font-semibold.text-text-primary a', // New LeetCode structure
      '.text-title-large a', // Simplified version
      '[data-cy="question-title"]',
      '.mr-2.text-label-1.dark\\:text-dark-label-1.text-lg.font-medium',
      'h1',
      '.text-title-large',
      '[class*="title"]'
    ];
    
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element && element.textContent.trim()) {
        console.log('Found title with selector:', selector, element.textContent.trim());
        return element.textContent.trim();
      }
    }
    
    // More aggressive search based on the exact structure provided
    const titleDivs = document.querySelectorAll('div');
    for (const div of titleDivs) {
      if (div.className && div.className.includes('text-title-large')) {
        const link = div.querySelector('a');
        if (link && link.textContent.trim()) {
          console.log('Found title in text-title-large div:', link.textContent.trim());
          return link.textContent.trim();
        }
      }
    }
    
    // Look for any link that contains a problem number and title
    const links = document.querySelectorAll('a');
    for (const link of links) {
      const text = link.textContent.trim();
      if (text && /^\d+\.\s/.test(text)) { // Matches pattern like "19. Remove Nth Node From End of List"
        console.log('Found title in link with number pattern:', text);
        return text;
      }
    }
    
    // Fallback: look for any h1 element
    const h1Elements = document.querySelectorAll('h1');
    for (const h1 of h1Elements) {
      if (h1.textContent.trim() && h1.textContent.trim().length > 0) {
        console.log('Found title in h1:', h1.textContent.trim());
        return h1.textContent.trim();
      }
    }
    
    console.log('No title found');
    return '';
  }
  
  // Extract problem description
  function getProblemDescription() {
    // Try multiple selectors for the description
    const selectors = [
      '[data-cy="description-content"]',
      '.content__u3I1.question-content__JfgR',
      '.question-content__JfgR',
      '[class*="description"]',
      '[class*="content"]',
      '.description',
      '.content',
      // New selectors based on common patterns
      '[data-track-load="description_content"]',
      '.xFUwe',
      '.question-content',
      '.problem-description'
    ];
    
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element && element.textContent.trim()) {
        console.log('Found description with selector:', selector, element.textContent.trim().substring(0, 100) + '...');
        return element.textContent.trim();
      }
    }
    
    // Fallback: look for any div with substantial text content that contains problem-related keywords
    const divs = document.querySelectorAll('div');
    for (const div of divs) {
      const text = div.textContent.trim();
      if (text.length > 100 && (
        text.includes('Example') || 
        text.includes('Input') || 
        text.includes('Output') || 
        text.includes('Constraints') ||
        text.includes('Follow up') ||
        text.includes('Note:')
      )) {
        console.log('Found description in div:', text.substring(0, 100) + '...');
        return text;
      }
    }
    
    console.log('No description found');
    return '';
  }
  
  // Create and inject the assistant button
  function injectAssistantButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'lc-ai-assistant-container';
    buttonContainer.style.cssText = `
      position: relative;
      display: inline-block;
      margin: 10px;
      z-index: 1000;
    `;
    
    const button = document.createElement('button');
    button.className = 'lc-ai-assistant-btn';
    button.innerHTML = `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        position: relative;
        z-index: 2;
      ">
        <span style="
          font-size: 18px;
          animation: pulse 2s infinite;
        ">🤖</span>
        <span style="
          font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        ">AI Assistant</span>
        <span style="
          font-size: 12px;
          opacity: 0.8;
          animation: sparkle 1.5s infinite;
        ">✨</span>
      </div>
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff);
        background-size: 400% 400%;
        border-radius: 25px;
        opacity: 0;
        transition: opacity 0.3s ease;
        animation: gradientShift 3s ease infinite;
        z-index: 1;
      "></div>
    `;
    
    // Apply amazing button styling
    button.style.cssText = `
      position: relative;
      padding: 12px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      background-size: 200% 200%;
      border: none;
      border-radius: 25px;
      color: white;
      cursor: pointer;
      font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      box-shadow: 
        0 8px 32px rgba(102, 126, 234, 0.4),
        0 4px 16px rgba(118, 75, 162, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
      user-select: none;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      min-width: 160px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    // Add hover effects
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px) scale(1.05)';
      button.style.boxShadow = `
        0 12px 40px rgba(102, 126, 234, 0.6),
        0 8px 24px rgba(118, 75, 162, 0.4),
        0 4px 12px rgba(240, 147, 251, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3)
      `;
      button.style.backgroundPosition = '100% 100%';
      
      // Show gradient overlay
      const gradientOverlay = button.querySelector('div:last-child');
      if (gradientOverlay) {
        gradientOverlay.style.opacity = '0.3';
      }
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0) scale(1)';
      button.style.boxShadow = `
        0 8px 32px rgba(102, 126, 234, 0.4),
        0 4px 16px rgba(118, 75, 162, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2)
      `;
      button.style.backgroundPosition = '0% 0%';
      
      // Hide gradient overlay
      const gradientOverlay = button.querySelector('div:last-child');
      if (gradientOverlay) {
        gradientOverlay.style.opacity = '0';
      }
    });
    
    // Add click effect
    button.addEventListener('mousedown', () => {
      button.style.transform = 'translateY(-1px) scale(0.98)';
      button.style.boxShadow = `
        0 4px 16px rgba(102, 126, 234, 0.5),
        0 2px 8px rgba(118, 75, 162, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `;
    });
    
    button.addEventListener('mouseup', () => {
      button.style.transform = 'translateY(-3px) scale(1.05)';
      button.style.boxShadow = `
        0 12px 40px rgba(102, 126, 234, 0.6),
        0 8px 24px rgba(118, 75, 162, 0.4),
        0 4px 12px rgba(240, 147, 251, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3)
      `;
    });
    
    button.onclick = showAssistantModal;
    
    buttonContainer.appendChild(button);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      @keyframes sparkle {
        0%, 100% { opacity: 0.8; transform: rotate(0deg); }
        50% { opacity: 1; transform: rotate(180deg); }
      }
      
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
      
      .lc-ai-assistant-btn {
        animation: float 3s ease-in-out infinite;
      }
      
      .lc-ai-assistant-btn::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff);
        background-size: 400% 400%;
        border-radius: 27px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
        animation: gradientShift 3s ease infinite;
      }
      
      .lc-ai-assistant-btn:hover::before {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    
    // Try to find a suitable place near the question title to insert the button
    const titleContainer = document.querySelector('.flex.items-start.justify-between.gap-4');
    if (titleContainer) {
      titleContainer.appendChild(buttonContainer);
    } else {
      document.body.appendChild(buttonContainer);
    }
  }
  
  // Global variables for modal state
  let modalState = {
    isMinimized: false,
    originalSize: null,
    originalPosition: null,
    currentContent: null,
    currentResponse: null
  };
  
  // Show the assistant modal
  function showAssistantModal() {
    console.log('showAssistantModal called');
    
    // Check if modal already exists and restore it
    const existingModal = document.getElementById('lc-ai-assistant-modal');
    if (existingModal) {
      if (modalState.isMinimized) {
        restoreModal(existingModal);
      }
      return;
    }
    
    // Create modal container with inline styles
    const modal = document.createElement('div');
    modal.id = 'lc-ai-assistant-modal';
    modal.style.cssText = `
      position: fixed;
      z-index: 10000;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      max-width: 900px;
      min-width: 600px;
      height: 85vh;
      min-height: 500px;
      max-height: 90vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      user-select: none;
      overflow: hidden;
      transition: all 0.3s ease;
    `;
    
    // Modal content with modern design
    modal.innerHTML = `
      <div style="
        background: white;
        margin: 3px;
        border-radius: 17px;
        display: flex;
        flex-direction: column;
        height: calc(100% - 6px);
        overflow: hidden;
        position: relative;
      ">
        <!-- Header -->
        <div id="lc-ai-modal-header" style="
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 17px 17px 0 0;
          flex-shrink: 0;
          cursor: move;
        ">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="
              width: 40px;
              height: 40px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 20px;
            ">🤖</div>
            <div>
              <h3 style="margin: 0; font-size: 18px; font-weight: 600;">AI Coding Assistant</h3>
              <small style="opacity: 0.8;">Powered by GROQ Llama3-70b</small>
        </div>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <button id="lc-ai-minimize-btn" style="
              background: rgba(255, 255, 255, 0.2);
              border: none;
              color: white;
              padding: 8px;
              border-radius: 50%;
              cursor: pointer;
              font-size: 16px;
              transition: background 0.2s;
            " title="Minimize to Corner">📌</button>
            <button id="lc-ai-maximize-btn" style="
              background: rgba(255, 255, 255, 0.2);
              border: none;
              color: white;
              padding: 8px;
              border-radius: 50%;
              cursor: pointer;
              font-size: 16px;
              transition: background 0.2s;
            " title="Maximize">□</button>
            <span class="lc-ai-close" style="
              color: white;
              font-size: 28px;
              font-weight: bold;
              cursor: pointer;
              padding: 5px;
              border-radius: 50%;
              transition: background 0.2s;
            ">&times;</span>
            </div>
          </div>
        
        <!-- Body -->
        <div id="lc-ai-modal-body" style="
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 20px;
          overflow: hidden;
          position: relative;
        ">
          <!-- Options Grid -->
          <div id="lc-ai-options-grid" style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
            flex-shrink: 0;
          ">
            <button id="lc-ai-explain-btn" style="
              padding: 15px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              border: none;
              border-radius: 12px;
              cursor: pointer;
              font-weight: 600;
              transition: transform 0.2s, box-shadow 0.2s;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 8px;
            ">
              <span style="font-size: 24px;">📖</span>
              <span>Explain Problem</span>
            </button>
            
            <button id="lc-ai-solution-btn" style="
              padding: 15px;
              background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
              color: white;
              border: none;
              border-radius: 12px;
              cursor: pointer;
              font-weight: 600;
              transition: transform 0.2s, box-shadow 0.2s;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 8px;
            ">
              <span style="font-size: 24px;">💡</span>
              <span>Show Solution</span>
            </button>
            
            <button id="lc-ai-thinking-btn" style="
              padding: 15px;
              background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
              color: white;
              border: none;
              border-radius: 12px;
              cursor: pointer;
              font-weight: 600;
              transition: transform 0.2s, box-shadow 0.2s;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 8px;
            ">
              <span style="font-size: 24px;">🧠</span>
              <span>Thinking Approach</span>
            </button>
            
            <button id="lc-ai-analyze-btn" style="
              padding: 15px;
              background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
              color: white;
              border: none;
              border-radius: 12px;
              cursor: pointer;
              font-weight: 600;
              transition: transform 0.2s, box-shadow 0.2s;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 8px;
            ">
              <span style="font-size: 24px;">🔍</span>
              <span>Analyze My Code</span>
            </button>
        </div>
          
          <!-- Code Input Area (initially hidden) -->
          <div id="lc-ai-code-input" style="display: none; flex-shrink: 0;">
            <div style="
              background: #f8f9fa;
              border: 2px dashed #dee2e6;
              border-radius: 12px;
              padding: 20px;
              text-align: center;
            ">
              <h4 style="margin: 0 0 15px 0; color: #495057;">📝 Paste Your Code Here</h4>
              <textarea id="lc-ai-code-textarea" placeholder="Paste your code here and I'll analyze it for you..." style="
                width: 100%;
                min-height: 150px;
                max-height: 300px;
                padding: 15px;
                border: 1px solid #dee2e6;
                border-radius: 8px;
                font-family: 'Courier New', monospace;
                font-size: 14px;
                resize: vertical;
                box-sizing: border-box;
              "></textarea>
              <button id="lc-ai-analyze-code-btn" style="
                margin-top: 15px;
                padding: 12px 24px;
                background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
              ">Analyze Code</button>
          </div>
        </div>
          
          <!-- Response Area -->
          <div id="lc-ai-response" style="
            flex: 1;
            border: 1px solid #e9ecef;
            border-radius: 12px;
            padding: 20px;
            background: #f8f9fa;
            min-height: 200px;
            overflow-y: auto;
            position: relative;
          ">
            <div id="lc-ai-loading" style="display: none; text-align: center; padding: 40px;">
              <div style="
                border: 4px solid #f3f3f3;
                border-top: 4px solid #667eea;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px auto;
              "></div>
              <p style="color: #6c757d; font-size: 16px;">🤖 AI is analyzing your request...</p>
            </div>
            <div id="lc-ai-response-content" style="
              line-height: 1.6;
              color: #495057;
            "></div>
            
            <!-- Scroll to top button -->
            <button id="lc-ai-scroll-top" style="
              position: absolute;
              bottom: 20px;
              right: 20px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              border: none;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              cursor: pointer;
              font-size: 18px;
              display: none;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
              transition: transform 0.2s;
            " title="Scroll to top">↑</button>
          </div>
        </div>
        
        <!-- Resize handles for all sides -->
        <div id="lc-ai-resize-n" style="
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          cursor: n-resize;
          background: transparent;
        "></div>
        <div id="lc-ai-resize-s" style="
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 8px;
          cursor: s-resize;
          background: transparent;
        "></div>
        <div id="lc-ai-resize-e" style="
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 8px;
          cursor: e-resize;
          background: transparent;
        "></div>
        <div id="lc-ai-resize-w" style="
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 8px;
          cursor: w-resize;
          background: transparent;
        "></div>
        <div id="lc-ai-resize-ne" style="
          position: absolute;
          top: 0;
          right: 0;
          width: 12px;
          height: 12px;
          cursor: ne-resize;
          background: transparent;
        "></div>
        <div id="lc-ai-resize-nw" style="
          position: absolute;
          top: 0;
          left: 0;
          width: 12px;
          height: 12px;
          cursor: nw-resize;
          background: transparent;
        "></div>
        <div id="lc-ai-resize-se" style="
          position: absolute;
          bottom: 0;
          right: 0;
          width: 12px;
          height: 12px;
          cursor: se-resize;
          background: transparent;
        "></div>
        <div id="lc-ai-resize-sw" style="
          position: absolute;
          bottom: 0;
          left: 0;
          width: 12px;
          height: 12px;
          cursor: sw-resize;
          background: transparent;
        "></div>
      </div>
    `;
    
    document.body.appendChild(modal);
    console.log('Modal added to DOM');
    
    // Restore state if exists
    if (modalState.currentResponse) {
      const responseContent = document.getElementById('lc-ai-response-content');
      if (responseContent) {
        responseContent.innerHTML = modalState.currentResponse;
        // Re-setup copy buttons for restored content
        setTimeout(() => {
          setupCopyButtons();
        }, 100);
      }
    }
    
    // Add hover effects to buttons
    const buttons = modal.querySelectorAll('button[id^="lc-ai-"]');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
      });
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
      });
    });
    
    // Add event listeners
    const closeBtn = document.querySelector('.lc-ai-close');
    const minimizeBtn = document.getElementById('lc-ai-minimize-btn');
    const maximizeBtn = document.getElementById('lc-ai-maximize-btn');
    const scrollTopBtn = document.getElementById('lc-ai-scroll-top');
    
    if (closeBtn) {
      closeBtn.onclick = () => {
        console.log('Close button clicked');
      document.body.removeChild(modal);
        // Reset state
        modalState = {
          isMinimized: false,
          originalSize: null,
          originalPosition: null,
          currentContent: null,
          currentResponse: null
        };
      };
    }
    
    if (minimizeBtn) {
      minimizeBtn.onclick = () => {
        console.log('Minimize button clicked');
        minimizeToCorner(modal);
      };
    }
    
    if (maximizeBtn) {
      maximizeBtn.onclick = () => {
        console.log('Maximize button clicked');
        maximizeModal(modal);
      };
    }
    
    if (scrollTopBtn) {
      scrollTopBtn.onclick = () => {
        const responseArea = document.getElementById('lc-ai-response');
        responseArea.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
    
    const explainBtn = document.getElementById('lc-ai-explain-btn');
    const solutionBtn = document.getElementById('lc-ai-solution-btn');
    const thinkingBtn = document.getElementById('lc-ai-thinking-btn');
    const analyzeBtn = document.getElementById('lc-ai-analyze-btn');
    const analyzeCodeBtn = document.getElementById('lc-ai-analyze-code-btn');
    
    console.log('Buttons found:', {
      explain: !!explainBtn,
      solution: !!solutionBtn,
      thinking: !!thinkingBtn,
      analyze: !!analyzeBtn,
      analyzeCode: !!analyzeCodeBtn
    });
    
    if (explainBtn) {
      explainBtn.onclick = () => {
        console.log('Explain button clicked');
        hideCodeInput();
        handleOptionClick('explain');
      };
    }
    
    if (solutionBtn) {
      solutionBtn.onclick = () => {
        console.log('Solution button clicked');
        hideCodeInput();
        showLanguageSelection();
      };
    }
    
    if (thinkingBtn) {
      thinkingBtn.onclick = () => {
        console.log('Thinking button clicked');
        hideCodeInput();
        handleOptionClick('thinking');
      };
    }
    
    if (analyzeBtn) {
      analyzeBtn.onclick = () => {
        console.log('Analyze button clicked');
        showCodeInput();
      };
    }
    
    if (analyzeCodeBtn) {
      analyzeCodeBtn.onclick = () => {
        console.log('Analyze code button clicked');
        handleCodeAnalysis();
      };
    }
    
    // Make modal draggable and resizable
    makeModalDraggable(modal);
    makeModalResizable(modal);
    setupScrollToTop();
    setupKeyboardShortcuts(modal);
    
    // Add click outside to minimize
    document.addEventListener('click', handleClickOutside);
  }
  
  // Function to show code input area
  function showCodeInput() {
    const codeInput = document.getElementById('lc-ai-code-input');
    const responseContent = document.getElementById('lc-ai-response-content');
    if (codeInput) {
      codeInput.style.display = 'block';
      responseContent.innerHTML = '<p style="color: #6c757d; text-align: center;">📝 Paste your code above and click "Analyze Code" to get detailed feedback!</p>';
    }
  }
  
  // Function to hide code input area
  function hideCodeInput() {
    const codeInput = document.getElementById('lc-ai-code-input');
    if (codeInput) {
      codeInput.style.display = 'none';
    }
  }
  
  // Function to make modal draggable
  function makeModalDraggable(modal) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    const header = document.getElementById('lc-ai-modal-header');
    
    if (header) {
      header.addEventListener('mousedown', dragStart);
    }
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    
    function dragStart(e) {
      // Only allow dragging from the header, not from buttons
      if (e.target.closest('button') || e.target.closest('span')) {
        return;
      }
      
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
      isDragging = true;
    }
    
    function drag(e) {
      if (isDragging) {
        e.preventDefault();
        
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        
        xOffset = currentX;
        yOffset = currentY;
        
        setTranslate(currentX, currentY, modal);
      }
    }
    
    function setTranslate(xPos, yPos, el) {
      el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }
    
    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;
      isDragging = false;
    }
  }
  
  // Handle option click
  function handleOptionClick(option) {
    console.log('Option clicked:', option);
    const problemTitle = getProblemTitle();
    const problemDescription = getProblemDescription();
    
    console.log('Problem title:', problemTitle);
    console.log('Problem description length:', problemDescription ? problemDescription.length : 0);
    
    if (!problemTitle || !problemDescription) {
      showError('Could not extract problem information. Please try again.');
      return;
    }
    
    // Get API key from storage
    chrome.storage.sync.get(['groqApiKey'], (result) => {
      const apiKey = result.groqApiKey;
    if (!apiKey) {
        showError('Please set your GROQ API key in the extension popup first.');
      return;
    }
    
      console.log('Making API call to GROQ...');
    showLoading();
    
    let prompt;
    switch (option) {
      case 'explain':
        prompt = `Explain the following LeetCode problem in simple terms:\n\nTitle: ${problemTitle}\n\nDescription: ${problemDescription}\n\nProvide a clear explanation of what the problem is asking, with examples if needed. Break down any complex terms or concepts.`;
        break;
      case 'solution':
          prompt = `I need a solution for the following LeetCode problem. Please ask me which programming language I prefer (Python, JavaScript, Java, C++, etc.) and then provide a complete solution in that language.

Problem: ${problemTitle}
Description: ${problemDescription}

Please respond with:
1. First ask: "Which programming language would you like the solution in? (Python, JavaScript, Java, C++, etc.)"
2. Then provide the complete solution in the requested language with:
   - Clean, well-commented code
   - Time and space complexity analysis
   - Brief explanation of how the solution works
   - Handle edge cases properly`;
        break;
      case 'thinking':
          prompt = `Provide different thinking approaches and strategies for solving the following LeetCode problem. DO NOT provide the actual code solution, only the thinking process and different approaches.

Problem: ${problemTitle}
Description: ${problemDescription}

Please provide:
1. **Multiple Approaches**: Different ways to think about this problem
2. **Algorithm Ideas**: What algorithms or data structures might be useful
3. **Step-by-step Thinking**: How to break down the problem
4. **Edge Cases**: What edge cases to consider
5. **Optimization Ideas**: How to improve the solution
6. **Common Pitfalls**: What mistakes to avoid

Focus on the thinking process, not the implementation.`;
        break;
    }
    
    // Send request to GROQ API
    fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          model: 'llama3-70b-8192',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful coding assistant that helps with LeetCode problems. Provide clear, concise, and accurate explanations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    })
      .then(response => {
        console.log('API Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
    .then(data => {
        console.log('API Response data:', data);
      hideLoading();
      if (data.choices && data.choices[0] && data.choices[0].message) {
        showResponse(data.choices[0].message.content);
      } else {
        showError('Failed to get response from AI. Please check your API key and try again.');
      }
    })
    .catch(error => {
        console.error('API Error:', error);
      hideLoading();
      showError('Error contacting GROQ API: ' + error.message);
      });
    });
  }
  
  // Handle code analysis
  function handleCodeAnalysis() {
    const codeTextarea = document.getElementById('lc-ai-code-textarea');
    const userCode = codeTextarea.value.trim();
    
    if (!userCode) {
      showError('Please paste your code first.');
      return;
    }
    
    const problemTitle = getProblemTitle();
    const problemDescription = getProblemDescription();
    
    if (!problemTitle || !problemDescription) {
      showError('Could not extract problem information. Please try again.');
      return;
    }
    
    // Get API key from storage
    chrome.storage.sync.get(['groqApiKey'], (result) => {
      const apiKey = result.groqApiKey;
      if (!apiKey) {
        showError('Please set your GROQ API key in the extension popup first.');
        return;
      }
      
      console.log('Analyzing user code...');
      showLoading();
      
      const prompt = `Analyze the following code for the LeetCode problem and provide detailed feedback:

Problem: ${problemTitle}
Description: ${problemDescription}

User's Code:
\`\`\`
${userCode}
\`\`\`

Please provide a detailed analysis including:
1. **Syntax Errors**: Any syntax issues with line numbers
2. **Logic Errors**: Problems with the algorithm or logic
3. **Edge Cases**: Missing edge cases that might cause failures
4. **Performance Issues**: Inefficient parts of the code
5. **Suggestions**: How to improve the code
6. **Corrected Version**: A corrected version of the code

Format your response with clear sections and use markdown formatting. Highlight specific line numbers where issues occur.`;
      
      // Send request to GROQ API
      fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama3-70b-8192',
          messages: [
            {
              role: 'system',
              content: 'You are an expert code reviewer and programming tutor. Provide detailed, constructive feedback on code with specific line numbers and clear explanations.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.3,
          max_tokens: 3000
        })
      })
      .then(response => {
        console.log('API Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('API Response data:', data);
        hideLoading();
        if (data.choices && data.choices[0] && data.choices[0].message) {
          showResponse(data.choices[0].message.content);
        } else {
          showError('Failed to get response from AI. Please check your API key and try again.');
        }
      })
      .catch(error => {
        console.error('API Error:', error);
        hideLoading();
        showError('Error contacting GROQ API: ' + error.message);
      });
    });
  }
  
  // Helper functions for UI
  function showLoading() {
    document.getElementById('lc-ai-loading').style.display = 'block';
    document.getElementById('lc-ai-response-content').innerHTML = '';
  }
  
  function hideLoading() {
    document.getElementById('lc-ai-loading').style.display = 'none';
  }
  
  // Enhanced markdown to HTML converter
  function simpleMarkdownToHtml(text) {
    return text
      // Code blocks with syntax highlighting
      .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        const language = lang || 'text';
        return '<pre style="background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; font-family: \'Courier New\', monospace; font-size: 13px; line-height: 1.4; margin: 15px 0;"><code style="color: #d4d4d4;">' + code.trim() + '</code></pre>';
      })
      // Inline code
      .replace(/`([^`]+)`/g, '<code style="background: #f1f3f4; color: #d73a49; padding: 2px 6px; border-radius: 4px; font-family: \'Courier New\', monospace; font-size: 0.9em;">$1</code>')
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: 600; color: #2c3e50;">$1</strong>')
      // Italic text
      .replace(/\*(.*?)\*/g, '<em style="font-style: italic;">$1</em>')
      // Headers
      .replace(/^### (.*$)/gim, '<h3 style="color: #2c3e50; margin: 20px 0 10px 0; font-size: 18px;">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 style="color: #2c3e50; margin: 25px 0 15px 0; font-size: 20px;">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 style="color: #2c3e50; margin: 30px 0 20px 0; font-size: 22px;">$1</h1>')
      // Lists
      .replace(/^\d+\. (.*$)/gim, '<li style="margin: 5px 0;">$1</li>')
      .replace(/^- (.*$)/gim, '<li style="margin: 5px 0;">$1</li>')
      // Line breaks
      .replace(/\n\n/g, '</p><p style="margin: 15px 0;">')
      .replace(/\n/g, '<br>')
      // Wrap in paragraph if not already wrapped
      .replace(/^(.+)$/, '<p style="margin: 15px 0;">$1</p>')
      // Fix double paragraphs
      .replace(/<\/p><p style="margin: 15px 0;"><\/p>/g, '</p>')
      .replace(/<p style="margin: 15px 0;"><\/p>/g, '');
  }
  
  // Enhanced response display with auto-scroll
  function showResponse(content) {
    const responseElement = document.getElementById('lc-ai-response-content');
    const responseArea = document.getElementById('lc-ai-response');
    
    if (responseElement) {
      responseElement.innerHTML = simpleMarkdownToHtml(content);
      
      // Save current response to state
      modalState.currentResponse = responseElement.innerHTML;
      
      // Auto-scroll to top of response
      setTimeout(() => {
        if (responseArea) {
          responseArea.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      
      // Setup copy buttons
      setTimeout(() => {
        setupCopyButtons();
      }, 100);
    }
  }
  
  function showError(message) {
    const responseElement = document.getElementById('lc-ai-response-content');
    responseElement.innerHTML = `<div style="color: #ef4444; padding: 10px; background-color: #fee2e2; border-radius: 4px;">${message}</div>`;
  }
  
  // Debug function to help identify page elements
  function debugPageElements() {
    console.log('=== DEBUGGING PAGE ELEMENTS ===');
    
    // Check for title elements
    console.log('Title elements:');
    const titleSelectors = [
      '.text-title-large.font-semibold.text-text-primary a', // New LeetCode structure
      '.text-title-large a', // Simplified version
      '[data-cy="question-title"]',
      '.mr-2.text-label-1.dark\\:text-dark-label-1.text-lg.font-medium',
      'h1',
      '.text-title-large',
      '[class*="title"]'
    ];
    
    titleSelectors.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        console.log(`  ${selector}: "${element.textContent.trim()}"`);
      } else {
        console.log(`  ${selector}: NOT FOUND`);
      }
    });
    
    // Check for description elements
    console.log('Description elements:');
    const descSelectors = [
      '[data-cy="description-content"]',
      '.content__u3I1.question-content__JfgR',
      '.question-content__JfgR',
      '[class*="description"]',
      '[class*="content"]',
      '.description',
      '.content',
      // New selectors based on common patterns
      '[data-track-load="description_content"]',
      '.xFUwe',
      '.question-content',
      '.problem-description'
    ];
    
    descSelectors.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        console.log(`  ${selector}: "${element.textContent.trim().substring(0, 100)}..."`);
      } else {
        console.log(`  ${selector}: NOT FOUND`);
      }
    });
    
    // Check for any elements with substantial text
    console.log('Elements with substantial text:');
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach((div, index) => {
      const text = div.textContent.trim();
      if (text.length > 50 && (text.includes('Example') || text.includes('Input') || text.includes('Output') || text.includes('Constraints'))) {
        console.log(`  Div ${index}: "${text.substring(0, 100)}..."`);
        console.log(`    Classes: ${div.className}`);
        console.log(`    ID: ${div.id}`);
      }
    });
    
    // Check for any elements with "title" in their class name
    console.log('Elements with "title" in class name:');
    const titleElements = document.querySelectorAll('[class*="title"]');
    titleElements.forEach((element, index) => {
      console.log(`  Title element ${index}: "${element.textContent.trim()}"`);
      console.log(`    Classes: ${element.className}`);
    });
    
    // Check for any elements with "content" in their class name
    console.log('Elements with "content" in class name:');
    const contentElements = document.querySelectorAll('[class*="content"]');
    contentElements.forEach((element, index) => {
      const text = element.textContent.trim();
      if (text.length > 20) {
        console.log(`  Content element ${index}: "${text.substring(0, 100)}..."`);
        console.log(`    Classes: ${element.className}`);
      }
    });
    
    console.log('=== END DEBUGGING ===');
  }
  
  // Make debug function available globally
  window.debugLeetCodeElements = debugPageElements;
  
  // Initialize the extension when on a problem page
  if (isLeetCodeProblemPage()) {
    console.log('LeetCode problem page detected');
    
    // Wait for page to fully load
    setTimeout(() => {
      debugPageElements();
    injectAssistantButton();
    }, 2000);
  }
  
  // Function to make modal resizable
  function makeModalResizable(modal) {
    const resizeHandles = document.querySelectorAll('#lc-ai-resize-n, #lc-ai-resize-s, #lc-ai-resize-e, #lc-ai-resize-w, #lc-ai-resize-ne, #lc-ai-resize-nw, #lc-ai-resize-se, #lc-ai-resize-sw');
    let isResizing = false;
    let resizeDirection = '';
    let startX, startY, startWidth, startHeight, startLeft, startTop;
    
    resizeHandles.forEach(handle => {
      handle.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizeDirection = handle.id.replace('lc-ai-resize-', '');
        startX = e.clientX;
        startY = e.clientY;
        startWidth = modal.offsetWidth;
        startHeight = modal.offsetHeight;
        startLeft = modal.offsetLeft;
        startTop = modal.offsetTop;
        
        e.preventDefault();
        e.stopPropagation();
      });
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isResizing) return;
      
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      
      let newWidth = startWidth;
      let newHeight = startHeight;
      let newLeft = startLeft;
      let newTop = startTop;
      
      // Handle different resize directions
      if (resizeDirection.includes('e')) {
        newWidth = Math.max(600, Math.min(window.innerWidth - 40, startWidth + deltaX));
      }
      if (resizeDirection.includes('w')) {
        const widthChange = Math.max(-startWidth + 600, Math.min(startWidth - 600, -deltaX));
        newWidth = startWidth - widthChange;
        newLeft = startLeft + widthChange;
      }
      if (resizeDirection.includes('s')) {
        newHeight = Math.max(500, Math.min(window.innerHeight - 40, startHeight + deltaY));
      }
      if (resizeDirection.includes('n')) {
        const heightChange = Math.max(-startHeight + 500, Math.min(startHeight - 500, -deltaY));
        newHeight = startHeight - heightChange;
        newTop = startTop + heightChange;
      }
      
      // Apply new dimensions
      modal.style.width = newWidth + 'px';
      modal.style.height = newHeight + 'px';
      modal.style.left = newLeft + 'px';
      modal.style.top = newTop + 'px';
      modal.style.transform = 'none'; // Remove transform when resizing
    });
    
    document.addEventListener('mouseup', () => {
      isResizing = false;
      resizeDirection = '';
    });
  }
  
  // Function to minimize modal to corner
  function minimizeToCorner(modal) {
    // Save current state
    const responseContent = document.getElementById('lc-ai-response-content');
    if (responseContent) {
      modalState.currentResponse = responseContent.innerHTML;
    }
    
    // Save original size and position
    if (!modalState.originalSize) {
      modalState.originalSize = {
        width: modal.style.width,
        height: modal.style.height,
        left: modal.style.left,
        top: modal.style.top,
        transform: modal.style.transform
      };
    }
    
    // Minimize to corner - smaller size
    modal.style.width = '200px';
    modal.style.height = '60px';
    modal.style.left = '20px';
    modal.style.top = '20px';
    modal.style.transform = 'none';
    modal.style.borderRadius = '30px';
    modal.style.transition = 'all 0.3s ease';
    
    // Hide body content
    const modalBody = document.getElementById('lc-ai-modal-body');
    if (modalBody) {
      modalBody.style.display = 'none';
    }
    
    // Update header for minimized state
    const header = document.getElementById('lc-ai-modal-header');
    if (header) {
      header.style.borderRadius = '30px';
      header.style.padding = '10px 15px';
      header.style.cursor = 'move';
      
      // Make header draggable
      makeHeaderDraggable(header, modal);
      
      // Add click to restore
      header.onclick = (e) => {
        // Only restore if not dragging
        if (!e.target.closest('button')) {
          restoreModal(modal);
        }
      };
    }
    
    modalState.isMinimized = true;
  }
  
  // Function to restore modal
  function restoreModal(modal) {
    if (!modalState.isMinimized) return;
    
    // Restore original size and position
    if (modalState.originalSize) {
      modal.style.width = modalState.originalSize.width;
      modal.style.height = modalState.originalSize.height;
      modal.style.left = modalState.originalSize.left;
      modal.style.top = modalState.originalSize.top;
      modal.style.transform = modalState.originalSize.transform;
    } else {
      // Default restore
      modal.style.width = '90%';
      modal.style.maxWidth = '900px';
      modal.style.height = '85vh';
      modal.style.minHeight = '500px';
      modal.style.left = '50%';
      modal.style.top = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
    }
    
    modal.style.borderRadius = '20px';
    modal.style.transition = 'all 0.3s ease';
    
    // Show body content
    const modalBody = document.getElementById('lc-ai-modal-body');
    if (modalBody) {
      modalBody.style.display = 'flex';
    }
    
    // Update header for normal state
    const header = document.getElementById('lc-ai-modal-header');
    if (header) {
      header.style.borderRadius = '17px 17px 0 0';
      header.style.padding = '20px';
      header.style.cursor = 'move';
      
      // Remove click handler and draggable functionality
      header.onclick = null;
      
      // Remove draggable event listeners by cloning and replacing
      const newHeader = header.cloneNode(true);
      header.parentNode.replaceChild(newHeader, header);
      
      // Re-setup the header content
      const titleDiv = newHeader.querySelector('div:first-child');
      const buttonsDiv = newHeader.querySelector('div:last-child');
      
      if (titleDiv) {
        titleDiv.innerHTML = `
          <div style="
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
          ">🤖</div>
          <div>
            <h3 style="margin: 0; font-size: 18px; font-weight: 600;">AI Coding Assistant</h3>
            <small style="opacity: 0.8;">Powered by GROQ Llama3-70b</small>
          </div>
        `;
      }
      
      if (buttonsDiv) {
        buttonsDiv.innerHTML = `
          <button id="lc-ai-minimize-btn" style="
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            padding: 8px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.2s;
          " title="Minimize to Corner">📌</button>
          <button id="lc-ai-maximize-btn" style="
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            padding: 8px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.2s;
          " title="Maximize">□</button>
          <span class="lc-ai-close" style="
            color: white;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            transition: background 0.2s;
          ">&times;</span>
        `;
        
        // Re-attach event listeners
        const minimizeBtn = newHeader.querySelector('#lc-ai-minimize-btn');
        const maximizeBtn = newHeader.querySelector('#lc-ai-maximize-btn');
        const closeBtn = newHeader.querySelector('.lc-ai-close');
        
        if (minimizeBtn) {
          minimizeBtn.onclick = () => minimizeToCorner(modal);
        }
        if (maximizeBtn) {
          maximizeBtn.onclick = () => maximizeModal(modal);
        }
        if (closeBtn) {
          closeBtn.onclick = () => {
            document.body.removeChild(modal);
            modalState = {
              isMinimized: false,
              originalSize: null,
              originalPosition: null,
              currentContent: null,
              currentResponse: null
            };
          };
        }
      }
    }
    
    // Restore response content if exists
    if (modalState.currentResponse) {
      const responseContent = document.getElementById('lc-ai-response-content');
      if (responseContent) {
        responseContent.innerHTML = modalState.currentResponse;
        // Re-setup copy buttons for restored content
        setTimeout(() => {
          setupCopyButtons();
        }, 100);
      }
    }
    
    modalState.isMinimized = false;
  }
  
  // Function to make header draggable when minimized
  function makeHeaderDraggable(header, modal) {
    let isDragging = false;
    let startX, startY, startLeft, startTop;
    
    header.addEventListener('mousedown', (e) => {
      // Don't start dragging if clicking on buttons
      if (e.target.closest('button')) return;
      
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      startLeft = parseInt(modal.style.left) || 20;
      startTop = parseInt(modal.style.top) || 20;
      
      // Prevent text selection
      e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      
      const newLeft = Math.max(0, Math.min(window.innerWidth - 200, startLeft + deltaX));
      const newTop = Math.max(0, Math.min(window.innerHeight - 60, startTop + deltaY));
      
      modal.style.left = newLeft + 'px';
      modal.style.top = newTop + 'px';
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }
  
  // Function to setup copy buttons with improved functionality
  function setupCopyButtons() {
    const codeBlocks = document.querySelectorAll('#lc-ai-response-content pre code');
    codeBlocks.forEach((codeBlock, index) => {
      // Remove existing copy button if any
      const existingBtn = codeBlock.parentElement.querySelector('.copy-btn');
      if (existingBtn) {
        existingBtn.remove();
      }
      
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.innerHTML = '📋';
      copyBtn.style.cssText = `
        position: absolute;
        top: 5px;
        right: 5px;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 4px;
        padding: 4px 8px;
        cursor: pointer;
        font-size: 12px;
        opacity: 0;
        transition: opacity 0.2s;
        z-index: 10;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      `;
      
      copyBtn.onclick = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        try {
          // Get the code content
          let codeContent = codeBlock.textContent || codeBlock.innerText;
          
          // Clean up the code before copying
          let cleanCode = codeContent
            .replace(/\/\*[\s\S]*?\*\//g, '') // Remove /* */ comments
            .replace(/\/\/.*$/gm, '') // Remove // comments
            .replace(/\s*\/\*\s*@param.*?\*\/\s*/g, '') // Remove JSDoc comments
            .replace(/\s*\/\*\s*@return.*?\*\/\s*/g, '') // Remove return comments
            .replace(/\s*\/\*\s*@.*?\*\/\s*/g, '') // Remove other JSDoc comments
            .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove extra blank lines
            .replace(/^\s+|\s+$/gm, '') // Trim whitespace from each line
            .replace(/\n{3,}/g, '\n\n') // Limit consecutive newlines
            .trim();
          
          console.log('Attempting to copy code:', cleanCode.substring(0, 100) + '...');
          
          // Try modern clipboard API first
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(cleanCode);
            console.log('Code copied successfully using clipboard API');
          } else {
            // Fallback: create temporary textarea
            const textarea = document.createElement('textarea');
            textarea.value = cleanCode;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            textarea.style.top = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            textarea.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand('copy');
            document.body.removeChild(textarea);
            console.log('Code copied successfully using execCommand');
          }
          
          // Visual feedback
          copyBtn.innerHTML = '✅';
          copyBtn.style.background = 'rgba(76, 175, 80, 0.9)';
          setTimeout(() => {
            copyBtn.innerHTML = '📋';
            copyBtn.style.background = 'rgba(255, 255, 255, 0.9)';
          }, 1000);
          
        } catch (error) {
          console.error('Copy failed:', error);
          
          // Final fallback
          try {
            const textarea = document.createElement('textarea');
            textarea.value = codeBlock.textContent || codeBlock.innerText;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            textarea.style.top = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            textarea.setSelectionRange(0, 99999);
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            copyBtn.innerHTML = '✅';
            copyBtn.style.background = 'rgba(76, 175, 80, 0.9)';
            setTimeout(() => {
              copyBtn.innerHTML = '📋';
              copyBtn.style.background = 'rgba(255, 255, 255, 0.9)';
            }, 1000);
          } catch (fallbackError) {
            console.error('Fallback copy also failed:', fallbackError);
            copyBtn.innerHTML = '❌';
            copyBtn.style.background = 'rgba(244, 67, 54, 0.9)';
            setTimeout(() => {
              copyBtn.innerHTML = '📋';
              copyBtn.style.background = 'rgba(255, 255, 255, 0.9)';
            }, 1000);
          }
        }
      };
      
      const preElement = codeBlock.parentElement;
      preElement.style.position = 'relative';
      preElement.appendChild(copyBtn);
      
      preElement.addEventListener('mouseenter', () => {
        copyBtn.style.opacity = '1';
      });
      
      preElement.addEventListener('mouseleave', () => {
        copyBtn.style.opacity = '0';
      });
    });
  }
  
  // Function to handle click outside
  function handleClickOutside(e) {
    const modal = document.getElementById('lc-ai-assistant-modal');
    if (modal && !modal.contains(e.target) && !modalState.isMinimized) {
      // Check if click is not on any button or interactive element
      const isButton = e.target.tagName === 'BUTTON' || 
                      e.target.closest('button') || 
                      e.target.closest('.lc-ai-close') ||
                      e.target.closest('#lc-ai-modal-header');
      
      if (!isButton) {
        minimizeToCorner(modal);
      }
    }
  }
  
  // Function to maximize modal
  function maximizeModal(modal) {
    const currentWidth = modal.offsetWidth;
    const currentHeight = modal.offsetHeight;
    
    if (currentWidth === window.innerWidth - 40 && currentHeight === window.innerHeight - 40) {
      // Restore
      modal.style.width = '90%';
      modal.style.maxWidth = '900px';
      modal.style.height = '85vh';
      modal.style.maxHeight = '90vh';
      modal.style.left = '50%';
      modal.style.top = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
    } else {
      // Maximize
      modal.style.width = (window.innerWidth - 40) + 'px';
      modal.style.maxWidth = 'none';
      modal.style.height = (window.innerHeight - 40) + 'px';
      modal.style.maxHeight = 'none';
      modal.style.left = '20px';
      modal.style.top = '20px';
      modal.style.transform = 'none';
    }
  }
  
  // Function to setup scroll to top functionality
  function setupScrollToTop() {
    const responseArea = document.getElementById('lc-ai-response');
    const scrollTopBtn = document.getElementById('lc-ai-scroll-top');
    
    if (responseArea && scrollTopBtn) {
      responseArea.addEventListener('scroll', () => {
        if (responseArea.scrollTop > 200) {
          scrollTopBtn.style.display = 'block';
        } else {
          scrollTopBtn.style.display = 'none';
        }
      });
      
      // Add hover effect to scroll button
      scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.transform = 'scale(1.1)';
      });
      
      scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.transform = 'scale(1)';
      });
    }
  }
  
  // Function to setup keyboard shortcuts
  function setupKeyboardShortcuts(modal) {
    document.addEventListener('keydown', (e) => {
      // Only work when modal is focused or visible
      if (!modal || !document.body.contains(modal)) return;
      
      // Escape key to close modal
      if (e.key === 'Escape') {
        document.body.removeChild(modal);
      }
      
      // Ctrl/Cmd + Enter to analyze code when in code input
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const codeTextarea = document.getElementById('lc-ai-code-textarea');
        if (codeTextarea && document.activeElement === codeTextarea) {
          handleCodeAnalysis();
        }
      }
      
      // Number keys for quick actions
      if (e.key >= '1' && e.key <= '4' && !e.ctrlKey && !e.metaKey) {
        const buttons = [
          document.getElementById('lc-ai-explain-btn'),
          document.getElementById('lc-ai-solution-btn'),
          document.getElementById('lc-ai-thinking-btn'),
          document.getElementById('lc-ai-analyze-btn')
        ];
        
        const buttonIndex = parseInt(e.key) - 1;
        if (buttons[buttonIndex]) {
          buttons[buttonIndex].click();
        }
      }
    });
  }
  
  // Function to show language selection
  function showLanguageSelection() {
    const responseContent = document.getElementById('lc-ai-response-content');
    const languages = [
      { name: 'Python', icon: '🐍', color: '#3776ab' },
      { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
      { name: 'Java', icon: '☕', color: '#007396' },
      { name: 'C++', icon: '⚡', color: '#00599c' },
      { name: 'C#', icon: '💜', color: '#239120' },
      { name: 'Go', icon: '🐹', color: '#00add8' },
      { name: 'Rust', icon: '🦀', color: '#ce422b' },
      { name: 'Swift', icon: '🍎', color: '#ff6b35' }
    ];
    
    const languageHTML = languages.map(lang => `
      <button class="lang-btn" data-lang="${lang.name}" style="
        padding: 15px 20px;
        margin: 8px;
        background: linear-gradient(135deg, ${lang.color}22, ${lang.color}44);
        border: 2px solid ${lang.color};
        border-radius: 12px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        color: ${lang.color};
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 150px;
        justify-content: center;
      ">
        <span style="font-size: 20px;">${lang.icon}</span>
        <span>${lang.name}</span>
      </button>
    `).join('');
    
    responseContent.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <h3 style="color: #2c3e50; margin-bottom: 20px;">🎯 Choose Your Programming Language</h3>
        <p style="color: #666; margin-bottom: 30px;">Select the language you'd like the solution in:</p>
        <div style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          max-width: 600px;
          margin: 0 auto;
        ">
          ${languageHTML}
        </div>
      </div>
    `;
    
    // Add event listeners to language buttons
    const langButtons = responseContent.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
        btn.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = 'none';
      });
      
      btn.addEventListener('click', () => {
        const selectedLang = btn.dataset.lang;
        handleSolutionWithLanguage(selectedLang);
      });
    });
  }
  
  // Function to handle solution with selected language
  function handleSolutionWithLanguage(language) {
    const problemTitle = getProblemTitle();
    const problemDescription = getProblemDescription();
    
    if (!problemTitle || !problemDescription) {
      showError('Could not extract problem information. Please try again.');
      return;
    }
    
    // Get API key from storage
    chrome.storage.sync.get(['groqApiKey'], (result) => {
      const apiKey = result.groqApiKey;
      if (!apiKey) {
        showError('Please set your GROQ API key in the extension popup first.');
        return;
      }
      
      console.log('Making API call to GROQ for solution in', language);
      showLoading();
      
      const prompt = `Provide a complete solution for the following LeetCode problem in ${language}:

Problem: ${problemTitle}
Description: ${problemDescription}

Please provide:
1. Complete solution in ${language} with clean, well-commented code
2. Time and space complexity analysis
3. Brief explanation of how the solution works
4. Handle edge cases properly
5. Make sure the code is properly formatted and ready to copy-paste

Focus on providing a working, clean solution that can be directly used.`;
      
      // Send request to GROQ API
      fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama3-70b-8192',
          messages: [
            {
              role: 'system',
              content: `You are an expert ${language} programmer. Provide clean, well-commented code solutions that are ready to use.`
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.3,
          max_tokens: 3000
        })
      })
      .then(response => {
        console.log('API Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('API Response data:', data);
        hideLoading();
        if (data.choices && data.choices[0] && data.choices[0].message) {
          showResponse(data.choices[0].message.content);
        } else {
          showError('Failed to get response from AI. Please check your API key and try again.');
        }
      })
      .catch(error => {
        console.error('API Error:', error);
        hideLoading();
        showError('Error contacting GROQ API: ' + error.message);
      });
    });
  }