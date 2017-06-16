import { CmasPage } from './app.po';

describe('cmas App', () => {
  let page: CmasPage;

  beforeEach(() => {
    page = new CmasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
