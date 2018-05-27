import { AulaCincoServicosPage } from './app.po';

describe('aula-cinco-servicos App', function() {
  let page: AulaCincoServicosPage;

  beforeEach(() => {
    page = new AulaCincoServicosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
