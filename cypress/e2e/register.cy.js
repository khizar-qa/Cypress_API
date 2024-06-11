describe('Reqres API - Register', () => {

    before(() => {
      cy.fixture('register').as('registerData');
    });
  
    it('POST successful register', function() {
      cy.request('POST', '/register', this.registerData.successfulRegister).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('token');
      });
    });
  
    it('POST unsuccessful register', function() {
      const registerDetails = { email: "sydney@fife" };
    cy.request({ method: 'POST', url: '/register', body: registerDetails, failOnStatusCode: false }).then((response) => {
       expect(response.status).to.eq(400);
       expect(response.body).to.have.property('error', 'Missing password');
      });
    });
  
  });
  