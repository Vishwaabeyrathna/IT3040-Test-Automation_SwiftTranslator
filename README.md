# IT3040 Assignment 01 - SwiftTranslator Automation Testing

**Student ID:** IT23265110  
**Assignment:** SwiftTranslator Web Application Test Automation using Playwright

---

## 📋 Project Overview

This project contains automated test cases for the **SwiftTranslator** web application - a Singlish to Sinhala script translation tool. The test suite validates functionality, negative scenarios, and UI behavior using Playwright automation framework.

**Application Under Test:** https://swifttranslator.netlify.app/

---

## 🎯 Test Coverage

| Test Type | Count | Description |
|-----------|-------|-------------|
| **Positive Functional Tests** | 24 | Valid Singlish inputs with expected Sinhala translations |
| **Negative Tests** | 10 | Invalid inputs, edge cases, error handling |
| **UI Tests** | 1 | Real-time typing and streaming behavior |
| **Total** | **35** | Comprehensive test coverage |

---

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed:

### Required Software:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **Internet Connection** (to access the web application)

### Check Installation:
```bash
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
git --version     # Should show git version
```

---

## 🚀 Setup Instructions

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Assignment01_IT23265110
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- `@playwright/test` (v1.58.0)
- `@types/node` (v25.0.10)
- Playwright browsers (Chromium, Firefox, WebKit)

### Step 3: Install Playwright Browsers
```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run All Tests (Headless Mode)
```bash
npm test
```
or
```bash
npx playwright test
```

### Run All Tests with Browser Visible (Recommended for Examiners)
```bash
npm run test:headed
```
or
```bash
npx playwright test --workers=1 --headed
```

### Run Specific Test Categories

**Positive Tests Only:**
```bash
npx playwright test -g "Pos_Fun" --headed --workers=1
```

**Negative Tests Only:**
```bash
npx playwright test -g "Neg_Fun" --headed --workers=1
```

**UI Tests Only:**
```bash
npx playwright test -g "UI" --headed --workers=1
```

**Single Test by ID:**
```bash
npx playwright test -g "Pos_Fun_0001" --headed
```

---

## 📊 Viewing Test Reports

After running tests, view the detailed HTML report:

```bash
npm run test:report
```
or
```bash
npx playwright show-report
```

The report includes:
- ✅ Pass/Fail status for each test
- 📸 Screenshots of failures
- 🎬 Video recordings (if enabled)
- ⏱️ Execution time
- 📋 Detailed error logs

---

## 📁 Project Structure

```
Assignment01_IT23265110/
│
├── tests/
│   └── assignment1.spec.js       # Main test file with all test cases
│
├── playwright-report/             # Generated HTML reports
│
├── test-results/                  # Test execution results and artifacts
│
├── playwright.config.js           # Playwright configuration
├── package.json                   # Project dependencies
└── README.md                      # This file
```

---

## 🧪 Test Case Details

### Positive Tests (24 cases)
Tests valid Singlish inputs and verifies correct Sinhala translation:
- Simple sentences (present, past, future tense)
- Questions and requests
- Technical terms and abbreviations
- Numbers, dates, measurements
- Punctuation handling
- Mixed case inputs
- Colloquial phrases

### Negative Tests (10 cases)
Tests invalid inputs and error handling:
- Joined words without spaces
- Brand names
- URLs
- Name errors
- Complex brand names
- Email addresses
- Number-character mixing
- Spelling mistakes
- Code segments

### UI Tests (1 case)
Tests real-time character-by-character translation behavior

---

## ⚙️ Configuration Notes

### Important Settings:
- **Sequential Execution:** Tests run one at a time (`--workers=1`) to avoid network conflicts
- **Wait Times:** Extended timeouts (5-15 seconds) account for slow network responses
- **Visual Popups:** Each test displays a visual result popup in the browser for easy verification

### Network Considerations:
Due to potential network delays when accessing the web application, the tests include:
- Extended wait timeouts
- Retry mechanisms
- Visual confirmation popups

---

## 🔍 Test Validation Logic

### Positive Tests:
1. Fill input field with Singlish text
2. Wait for translation to appear
3. Verify output contains expected Sinhala text
4. Display PASS popup with results

### Negative Tests:
1. Fill input field with invalid input
2. Wait for processing
3. Verify output matches expected incorrect output
4. If output doesn't match expected, test FAILS
5. Display result popup

---

## 📝 Adding New Tests

To add new test cases, edit `tests/assignment1.spec.js`:

```javascript
// Add to positiveTests array
{ 
  id: 'Pos_Fun_0025', 
  name: 'Your Test Name', 
  input: 'singlish input here', 
  expected: 'expected sinhala output' 
}

// Add to negativeTests array
{ 
  id: 'Neg_Fun_0011', 
  name: 'Your Test Name', 
  input: 'invalid input here', 
  expected: 'expected wrong output' 
}
```

---

## 🐛 Troubleshooting

### Issue: Tests fail with timeout errors
**Solution:** Increase timeout values in the test file or check your internet connection

### Issue: Browsers not installed
**Solution:** Run `npx playwright install`

### Issue: Tests run too fast and fail
**Solution:** Use `--workers=1` flag to run tests sequentially

### Issue: Can't see what's happening
**Solution:** Use `--headed` flag to see browser during test execution

---

## 📞 Support Information

**Student ID:** IT23265110  
**Course:** IT3040  
**Assignment:** Assignment 01 - Test Automation  
**Framework:** Playwright v1.58.0  
**Node Version:** v18+

---

## 📄 License

This project is created for educational purposes as part of IT3040 course requirements.

---

## ✅ Quick Start Checklist for Examiners

- [ ] Install Node.js (v18+)
- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Run `npx playwright install`
- [ ] Execute tests: `npm run test:headed`
- [ ] View report: `npm run test:report`

---

**Last Updated:** January 2026
