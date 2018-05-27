import { AulaSeteRotasPage } from './app.po';

describe('aula-sete-rotas App', function() {
  let page: AulaSeteRotasPage;

  beforeEach(() => {
    page = new AulaSeteRotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
