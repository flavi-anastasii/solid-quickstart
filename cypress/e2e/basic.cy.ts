describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
      .contains('Hello World!', { matchCase: false })
  })

  it('displays a button directing to streetartoronto.ca', () => {
    cy.get('button')
      .contains('Clicks')
      .click()
      .then(() => {
        cy.visit('https://streetartoronto.ca')
      })
  })
})
