
const { test, expect } = require('@playwright/test');

//there are network errors happened ,when i develop this project so i add more wait time for that please consider that
// because of that netork error out put appear slowly that cause to error thats why i add more wait time
//use this command to run      npx playwright test --workers=1 --headed

const positiveTests = [
  { id: 'Pos_Fun_0001', name: 'Simple Present Sentence', input: 'mallii cricket gahanavaa', expected: 'මල්ලී cricket ගහනවා' },
  { id: 'Pos_Fun_0002', name: 'Compound sentences with a request', input: 'adha udhee kalin aavoth, kalin gedhara yanna puluvan', expected: 'අද' },
  { id: 'Pos_Fun_0003', name: 'Question Future tense', input: 'oyaa labana sathiye lectures enavadha?', expected: 'ඔයා ලබන සතියෙ lectures එනවද?' },
  { id: 'Pos_Fun_0004', name: 'Date formatting', input: 'exam eka 2026-07-15 thamaa thiyennee', expected: 'exam එක 2026-07-15 තමා තියෙන්නේ' },
  { id: 'Pos_Fun_0006', name: 'Long paragraph', input: 'adha lookayee thaakshaNika dhiyuNuvath samaga noyekuth nava mevalam lookayee baavithayata paemina aetha.eevaa atharin AI suvisheeSha vee.adha ee nisa  edhinidhaa  jiivithayee vaedakatayuthu thavath pahasu vii aetha.', expected: 'අද ලෝකයේ තාක්ශණික දියුණුවත් සමග නොයෙකුත් නව මෙවලම් ලෝකයේ බාවිතයට පැමින ඇත.ඒවා අතරින් AI සුවිශේෂ වේ.අද ඒ නිස  එදිනිදා  ජීවිතයේ වැඩකටයුතු තවත් පහසු වී ඇත.' },
  { id: 'Pos_Fun_0007', name: 'with a place, past tense format ', input: 'api iiyee nuvara eliyee trip ekak giyaa.', expected: 'අපි ඊයේ නුවර එලියේ trip එකක් ගියා.' },
  { id: 'Pos_Fun_0008', name: 'Include plural english words', input: 'oyaalaa haemooma heta anivaaryen enna oonii', expected: 'ඔයාලා හැමෝම හෙට අනිවාර්යෙන් එන්න ඕනී' },
  { id: 'Pos_Fun_0009', name: 'Negation', input: 'mata adha nan vaeda karanna baee hari mahansiyi.', expected: 'මට අද නන් වැඩ කරන්න බෑ හරි මහන්සියි.' },
  { id: 'Pos_Fun_0010', name: 'Formal greeting', input: 'suba udhaeesanak veevaa!!', expected: 'සුබ උදෑසනක් වේවා!!' },
  { id: 'Pos_Fun_0011', name: 'Informal question(slang)', input: 'machan kohomadha adha adiyak gahamudha?', expected: 'මචන් කොහොමද අද අඩියක් ගහමුද?' },
  { id: 'Pos_Fun_0012', name: 'With time expression', input: 'ikmanin ikmanin yan', expected: 'ඉක්මනින් ඉක්මනින් යන්' },
  { id: 'Pos_Fun_0013', name: 'Short term usage', input: 'mata heta DMS practical naee', expected: 'මට හෙට DMS practical නෑ' },
  { id: 'Pos_Fun_0014', name: 'Currency formatting', input: 'Mee kadee  cheese koththuvak rs.1400.00 vithara venavaa', expected: 'මේ කඩේ  cheese කොත්තුවක් rs.1400.00 විතර වෙනවා' },
  { id: 'Pos_Fun_0015', name: 'measurements', input: 'puthaa kadeeta gihillaa haal 1kg yi , 1l ice cream ekak geenna.', expected: 'පුතා කඩේට ගිහිල්ලා හාල් 1kg යි , 1l ice cream එකක් ගේන්න.' },
  { id: 'Pos_Fun_0016', name: 'pancuation and question', input: 'ayiyoo!!!! kohomadha meevaa balannee????  ', expected: 'අයියෝ!!!! කොහොමද මේවා බලන්නේ???? ' },
  { id: 'Pos_Fun_0017', name: 'handling the abbreviations', input: 'heta  exam ekata NIC eka oonii. ', expected: 'හෙට  exam එකට NIC එක ඕනී.' },   
  { id: 'Pos_Fun_0018', name: 'Daily Language usage', input: 'meeka oven ekata dhaanna.', expected: 'මේක oven එකට දාන්න.' },  
  { id: 'Pos_Fun_0019', name: 'Technical terms', input: 'adha project ekee branches okkooma  Merge karanna  oonii.', expected: 'අද project එකේ branches ඔක්කෝම  Merge කරන්න  ඕනී.' }, 
  { id: 'Pos_Fun_0020', name: 'Plural pronoun', input: 'eyaalaa enavaa', expected: 'එයාලා එනවා' }, 
  { id: 'Pos_Fun_0021', name: 'singular pronoun', input: 'mama enavaa', expected: 'මම එනවා' }, 
  { id: 'Pos_Fun_0022', name: 'collocation phrase', input: 'kanna bonna hinaavenna', expected: 'කන්න බොන්න හිනාවෙන්න' }, 
  { id: 'Pos_Fun_0023', name: 'conditional request', input: 'oyaata puluvandha heta udheema maava hambenna enna,oyaata  gift ekak dhenna thiyee mata', expected: 'ඔයාට පුලුවන්ද හෙට උදේම මාව හම්බෙන්න එන්න,ඔයාට  gift එකක් දෙන්න තියේ මට' }, 
  { id: 'Pos_Fun_0024', name: 'Event plan', input: 'labana sathiyee trip ekata ekata badu tika geenna,kotta,thuvaa,burusu', expected: 'ලබන සතියේ trip එකට එකට බඩු ටික ගේන්න,කොට්ට,තුවා,බුරුසු' }, 


];

const negativeTests = [
  { id: 'Neg_Fun_0001', name: 'joined words', input: 'mamagedarayanavamatanindamathai', expected: 'මම ගෙදර යනවා මට නිදිමතයි' },
  { id: 'Neg_Fun_0002', name: 'some brand names as inputs', input: 'magee bike eka honda Activa I', expected: 'මගේ bike එක honda Activa I' },
  { id: 'Neg_Fun_0003', name: 'URL code', input: 'https://courseweb.sliit.lk/my/  ekata yanna', expected: 'https://courseweb.sliit.lk/my/ ' },
  { id: 'Neg_Fun_0004', name: 'name error', input: 'vishwa abeyrathna', expected: 'විශ්ව අබේරත්න' },
  { id: 'Neg_Fun_0005', name: 'complex brand names', input: 'volkswagen car ekak kiiyadha?', expected: 'Volkswagen car එකක් කීයද?' },
  { id: 'Neg_Fun_0006', name: 'Special characters with sentence', input: 'vishwanayanajith43@gmail.com', expected: 'vishwanayanajith43@gmail.com' },
  { id: 'Neg_Fun_0007', name: 'number and char mixed', input: 'colombo10vala', expected: 'Colombo 10 වල' },
  { id: 'Neg_Fun_0008', name: 'sinhala spelling mistake ', input: 'gangaava pahalata galaa basii', expected: 'ගංගාව පහලට ගලා බසී' },
  { id: 'Neg_Fun_0009', name: 'Mixed case caps', input: 'Mama Adha Enne Nae', expected: 'මම අද එන්නේ නෑ' },
  { id: 'Neg_Fun_0010', name: 'some code segements errors', input: 'meeka Javascript vala Bhaavitha vana method ekak , async function runPositiveTest(page, { id, name, input, expected })', expected: 'මේක Javascript  වල  භාවිත වන method එකක්,async function runPositiveTest(page, { id, name, input, expected })' },

 
];

const uiTests = [
  { id: 'Pos_UI_0001', name: 'Real-time Update Check', input: 'bohooma mahansi velayi assignment eka  kalee' },
  
];


async function showPopup(page, testId, testName, status, input, output) {
  const config = {
    'PASS': { color: '#4CAF50', emoji: '✅', label: 'PASS', bg: 'white' },
    'NEGATIVE_PASS': { color: '#FF9800', emoji: '⚠️', label: 'NEGATIVE TEST PASSED', bg: '#fff3e0' },
    'FAIL': { color: '#f44336', emoji: '❌', label: 'FAIL', bg: '#ffebee' }
  };
  const { color, emoji, label, bg } = config[status];

  await page.evaluate(({ testId, testName, label, input, output, color, emoji, bg }) => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);display:flex;justify-content:center;align-items:center;z-index:99999`;
    
    overlay.innerHTML = `
      <div style="background:${bg};padding:40px 50px;border-radius:20px;text-align:center;border:5px solid ${color};min-width:450px;max-width:600px;">
        <div style="font-size:70px;margin-bottom:15px">${emoji}</div>
        <h1 style="color:${color};margin:0 0 10px;font-size:32px;font-weight:bold">${label}</h1>
        <h2 style="color:#333;margin:0 0 5px;font-size:16px">${testId}</h2>
        <h3 style="color:#666;margin:0 0 20px;font-size:14px;font-weight:normal">${testName}</h3>
        <div style="background:#f5f5f5;padding:15px;border-radius:10px;text-align:left">
          <p style="margin:0 0 8px"><b>Input:</b> <span style="color:#1976D2">${input}</span></p>
          <p style="margin:0"><b>Output:</b> <span style="color:#388E3C;font-size:16px">${output}</span></p>
        </div>
      </div>`;
    document.body.appendChild(overlay);
  }, { testId, testName, label, input, output, color, emoji, bg });

  await page.waitForTimeout(2500);
}


async function runPositiveTest(page, { id, name, input, expected }) {
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  const outputField = page.locator('div[class*="h-80"]');

  await inputField.fill(input);
  
  // Wait for output to appear (not empty) - increased timeout for slow network
  await page.waitForFunction(
    (selector) => {
      const elem = document.querySelector(selector);
      return elem && elem.textContent.trim().length > 0;
    },
    'div[class*="h-80"]',
    { timeout: 15000 }
  );
  
  await page.waitForTimeout(2000); // Extra wait for full conversion on slow network

  const output = await outputField.textContent();
  console.log(`${id} Output:`, output);

  // Validate
  expect(output.length).toBeGreaterThan(0);
  if (expected) expect(output).toContain(expected);

  await showPopup(page, id, name, 'PASS', input, output);
}

async function runNegativeTest(page, { id, name, input, expected }) {
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  const outputField = page.locator('div[class*="h-80"]');

  await inputField.fill(input);
  
  // Wait for output to process - increased for slow network
  await page.waitForTimeout(5000);

  const actualOutput = await outputField.textContent();
  const trimmedActual = actualOutput ? actualOutput.trim() : '';
  const trimmedExpected = expected ? expected.trim() : '';
  
  console.log(`${id} Expected:`, trimmedExpected || '(empty)');
  console.log(`${id} Actual:`, trimmedActual || '(empty)');


  if (trimmedActual !== trimmedExpected) {
    
    await showPopup(page, id, name, 'FAIL', input, `Expected: "${trimmedExpected || '(empty)'}" | Actual: "${trimmedActual}"`);
    
    
    expect(trimmedActual, `${id}: Expected output "${trimmedExpected}" but got "${trimmedActual}"`).toBe(trimmedExpected);
  } else {
    await showPopup(page, id, name, 'NEGATIVE_PASS', input, trimmedActual || '(empty - as expected)');
  }
}

async function runUITest(page, { id, name, input }) {
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  const outputField = page.locator('div[class*="h-80"]');

  await inputField.pressSequentially(input, { delay: 400 });
  
  // Wait for conversion to complete - increased timeout for slow network
  await page.waitForFunction(
    (selector) => {
      const elem = document.querySelector(selector);
      return elem && elem.textContent.trim().length > 0;
    },
    'div[class*="h-80"]',
    { timeout: 15000 }
  );
  
  await page.waitForTimeout(2000); // Extra wait for slow network

  const output = await outputField.textContent();
  console.log(`${id} Output:`, output);

  expect(output.length).toBeGreaterThan(0);

  await showPopup(page, id, name, 'PASS', `${input} (typed slowly)`, output);
}


test.describe('IT3040 Assignment 1 - SwiftTranslator Automation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForTimeout(2000);
  });


  for (const tc of positiveTests) {
    test(`${tc.id}: ${tc.name}`, async ({ page }) => {
      try {
        await runPositiveTest(page, tc);
      } catch (error) {
        await showPopup(page, tc.id, tc.name, 'FAIL', tc.input, error.message);
        throw error;
      }
    });
  }

  
  for (const tc of negativeTests) {
    test(`${tc.id}: ${tc.name}`, async ({ page }) => {
      try {
        await runNegativeTest(page, tc);
      } catch (error) {
        await showPopup(page, tc.id, tc.name, 'FAIL', tc.input, error.message);
        throw error;
      }
    });
  }

  
  for (const tc of uiTests) {
    test(`${tc.id}: ${tc.name}`, async ({ page }) => {
      try {
        await runUITest(page, tc);
      } catch (error) {
        await showPopup(page, tc.id, tc.name, 'FAIL', tc.input, error.message);
        throw error;
      }
    });
  }

});