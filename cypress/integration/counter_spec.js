describe('Counter Application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('increments the counter on button click', () => {
    cy.get('.current_count').should('contain', '0');
    cy.get('.count_button').click();
    cy.get('.current_count').should('contain', '1');
  });

  it('resets the counter to the new start value when start value is changed', () => {
    cy.get('#start_at').clear().type('5');
    cy.get('.count_button').click();
    cy.get('.current_count').should('contain', '5');
  });

  it('increments the counter by the specified step value', () => {
    cy.get('#step').clear().type('3');
    cy.get('.count_button').click();
    cy.get('.current_count').should('contain', '3');
    cy.get('.count_button').click();
    cy.get('.current_count').should('contain', '6');
  });

  it('handles negative step values correctly', () => {
    cy.get('#start_at').clear().type('10');
    cy.get('#step').clear().type('-1');
    cy.get('.count_button').click();
    cy.get('.current_count').should('contain', '9');
    cy.get('.count_button').click();
    cy.get('.current_count').should('contain', '8');
  });
});