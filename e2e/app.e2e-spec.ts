import { QAPage } from './app.po';

describe('qa App', () => {
  let page: QAPage;

  beforeEach(() => {
    page = new QAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
