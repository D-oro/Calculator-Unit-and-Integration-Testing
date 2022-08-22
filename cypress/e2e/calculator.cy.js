describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // Do the arithmetical operations update 
  // the display with the result of the operation?
  it('should update the display with the result of the arithmetical operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  // Can multiple operations be chained together?  
  it('should chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  //should show different types of numbers
  it('should show negative numbers correctly', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6')
  })

  //show large numbers
  it('should show large numbers correctly', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2230')
  })

  //show decimals
  it('should show decimals correctly', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  //show math error if dividing by zero
  it('show math error if dividing by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Math error')
  })

})