describe('Tests', () => {
  it('should be appear title pokédex', function () {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('be.visible')
      .and('have.text', 'Pokédex')
  })

  it('should be appear cards', function () {
    cy.visit('http://localhost:3000')
    cy.get('a').should('have.length', 21)
  })

  it('should be appear a card image', function () {
    cy.visit('http://localhost:3000')
    cy.get('img').should('be.visible')
  })

  it('should not be empty a card body', function () {
    cy.visit('http://localhost:3000')
    cy.get('.bubhuo').should('not.empty')
  })

  it('should not be empty a card footer', function () {
    cy.visit('http://localhost:3000')
    cy.get('.gKHwZP').should('not.empty')
  })
})