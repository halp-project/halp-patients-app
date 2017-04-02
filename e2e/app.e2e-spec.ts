import { HalpPatientsAppPage } from './app.po';

describe('halp-patients-app App', () => {
  let page: HalpPatientsAppPage;

  beforeEach(() => {
    page = new HalpPatientsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
