describe('fundemtals  test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('Contains correct header test', () => {
  //it.only('Contains correct header test', () => {
   // cy.get('[data-test="fundementals-header"]').contains(/Testing Fundamentals/i)
    cy.getDataTest("fundementals-header").should('contain.text','Testing Fundamentals')
  })
  it('According works correctly', () => {
    //cy.visit('/fundamentals')
   // cy.get('[data-test="fundementals-header"]').contains(/Testing Fundamentals/i)
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  }) 
})