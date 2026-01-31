const { test, expect } = require('@playwright/test');

test('Inspect page elements', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  
  // Wait for page to load
  await page.waitForTimeout(3000);
  
  
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputField.fill('mama');
  
  await page.waitForTimeout(2000);
  
  
  const sinhalaSection = page.locator('text=Sinhala').first();
  const parent = sinhalaSection.locator('xpath=..');
  const parentHtml = await parent.innerHTML();
  console.log('Sinhala section parent HTML length:', parentHtml.length);
  
  
  const outputCandidates = await page.locator('div.h-80, div.min-h-80, div[class*="h-80"]').all();
  console.log('Divs with h-80 class:', outputCandidates.length);
  
  for (let i = 0; i < outputCandidates.length; i++) {
    const text = await outputCandidates[i].textContent();
    console.log(`Output candidate ${i}:`, text?.substring(0, 50));
  }
});
