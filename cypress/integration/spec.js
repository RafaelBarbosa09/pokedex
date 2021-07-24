describe('CRA', () => {
  it('shows hello world', function () {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('be.visible')
      .and('have.text', 'Hello World')
  })
})