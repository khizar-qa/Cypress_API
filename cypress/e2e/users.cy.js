describe('Reqres API - Users', () => {

    before(() => {
      cy.fixture('users').as('usersData');
    });
  
    it('GET list of users', () => {
      cy.request('GET', '/users?page=2').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.be.an('array');
      });
    });
  
    it('GET single user', () => {
      cy.request('GET', '/users/2').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property('id', 2);
      });
    });
  
    it('GET single user not found', () => {
      cy.request({ method: 'GET', url: '/users/23', failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  
    it('POST create user', function() {
      const newUser = { name: "morpheus", job: "leader" };
      cy.request('POST', '/users', newUser).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('name', newUser.name);
        expect(response.body).to.have.property('job', newUser.job);
      });
    });
  
    it('PUT update user', function() {
      const updatedUser = { name: "morpheus", job: "zion resident" };
      cy.request('PUT', '/users/2', updatedUser).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', updatedUser.name);
        expect(response.body).to.have.property('job', updatedUser.job);
      });
    });
  
    it('PATCH update user', function() {
      const updatedUser = { name: "morpheus", job: "zion resident" };
      cy.request('PATCH', '/users/2', updatedUser).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', updatedUser.name);
        expect(response.body).to.have.property('job', updatedUser.job);
      });
    });
  
    it('DELETE user', () => {
      cy.request('DELETE', '/users/2').then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  
  });
  