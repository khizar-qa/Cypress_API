describe('Reqres API - Login', () => {

    before(() => {
      cy.fixture('login').as('loginData');
    });
  
    it('POST successful login', function() {
      cy.request('POST', '/login', this.loginData.successfulLogin).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
      });
    });
  
    it('POST unsuccessful login', function() {
      const loginDetails = { email: "peter@klaven" };
      cy.request({ method: 'POST', url: '/login', body: loginDetails, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error', 'Missing password');
      });
    });
  
  });
  