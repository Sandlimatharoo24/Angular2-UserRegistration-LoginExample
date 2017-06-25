import { Angular2UserRegistrationLoginExamplePage } from './app.po';

describe('angular2-user-registration-login-example App', () => {
  let page: Angular2UserRegistrationLoginExamplePage;

  beforeEach(() => {
    page = new Angular2UserRegistrationLoginExamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
