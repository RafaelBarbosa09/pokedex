describe('Tests', () => {
  it('should appear title pokédex', function () {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('be.visible')
      .and('have.text', 'Pokédex')
  })

  it('should appear all of the cards ', function () {
    cy.visit('http://localhost:3000')
    cy.get('a').should('have.length', 21)
  })

  it('should appear a card image', function () {
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

  it('should appear title pokédex in profile page', function () {
    cy.visit('http://localhost:3000/pokeprofile/bulbasaur')
    cy.get('h1').should('be.visible')
    .and('have.text', 'Pokédex')
  })

  it('should appear all of the cards in profile page', function () {
    cy.visit('http://localhost:3000/pokeprofile/bulbasaur')
    cy.get('.sc-fujyAs').should('have.length', 3)
  })

  it('should appear stat card', function () {
    cy.visit('http://localhost:3000/pokeprofile/bulbasaur')
    cy.get('.hambvp').should('not.empty')
  })

  it('Should come back home page by clicking on the arrow left', function () {
    cy.visit('http://localhost:3000/pokeprofile/bulbasaur')
    cy.get('a').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})