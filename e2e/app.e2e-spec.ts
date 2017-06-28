import { MapTestPage } from './app.po';

describe('map-test App', () => {
  let page: MapTestPage;

  beforeEach(() => {
    page = new MapTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
