Feature('test');

BeforeSuite(async (I) => {
  I.sendTestRequest();
});

Scenario('test something', (I) => {
  I.amOnPage('https://github.com');
  I.see('GitHub');
});
