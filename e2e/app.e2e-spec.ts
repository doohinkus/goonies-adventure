import { GooniesAdventurePage } from './app.po';

describe('goonies-adventure App', function() {
  let page: GooniesAdventurePage;

  beforeEach(() => {
    page = new GooniesAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
