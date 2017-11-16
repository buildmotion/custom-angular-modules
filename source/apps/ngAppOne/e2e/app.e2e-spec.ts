import { NgAppOnePage } from './app.po';

describe('ng-app-one App', () => {
  let page: NgAppOnePage;

  beforeEach(() => {
    page = new NgAppOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
