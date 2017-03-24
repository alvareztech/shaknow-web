import { ShaknowPage } from './app.po';

describe('shaknow App', () => {
  let page: ShaknowPage;

  beforeEach(() => {
    page = new ShaknowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
