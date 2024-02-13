describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://userinyerface.com/')
    cy.get('.logo__icon').should('be.visible')
    cy.get('.view__content > :nth-child(2) > :nth-child(1)').contains('Hi and welcome to User Inyerface, a challenging exploration of user interactions and design patterns.')
    cy.get('.view__content > :nth-child(2) > :nth-child(2)').contains('To play the game, simply fill in the form as fast and accurate as possible.')
    cy.get('.start__button').click()
  })
})