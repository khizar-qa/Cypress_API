describe('Reqres API - Resources', () => {

    before(() => {
      cy.fixture('resources').as('resourceData');
    });
  
    it('GET list of resources', () => {
      cy.request('GET', '/users?page=2').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.be.an('array');
      });
    });
  
    it('GET single resource', function() {
      cy.request('GET', `/users/2`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property('id', 2);
      });
    });
  
    it('GET single resource not found', () => {
      cy.request({ method: 'GET', url: '/users/23', failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  
  });
  