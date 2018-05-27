import { AulaSeisPipesPage } from './app.po';

describe('aula-seis-pipes App', function() {
  let page: AulaSeisPipesPage;

  beforeEach(() => {
    page = new AulaSeisPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
