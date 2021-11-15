describe('Single Zodiac Views', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.intercept(
      'POST',
      'https://aztro.sameerkumar.website/?sign=aries&day=$today',
      {
        statusCode: 201,
        body: {
          date_range: 'Mar 21 - Apr 20',
          current_date: 'November 15, 2021',
          description:
            "Feeling the urge to either fight or take flight? Stay right here and channel your intense feelings into doing your nonviolent best -- victory's sweeter when everyone emerges with a smile.",
          compatibility: 'Cancer',
          mood: 'Friendly',
          color: 'Navy Blue',
          lucky_number: '43',
          lucky_time: '3am',
        },
      }
    );
  });

  it('Should have am img that displays blinking stars', () => {
    cy.get('img')
      .should(
        'have.attr',
        'src',
        'data:image/gif;base64,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'
      )
      .should('have.attr', 'alt', 'Star');
  });

  it('Should have an h1 that displays the title of the page', () => {
    cy.get('h1').contains('WRITTEN IN THE STARS');
  });

  it('Should display a HOME button', () => {
    cy.get('.home-button').contains('HOME');
  });

  it('Should display a ZODIAC SIGNS dropdown button', () => {
    cy.get('.drop-button').contains('ZODIAC SIGNS');
  });
  it('Should show the user single zodiac details once they have clicked on a zodiac card', () => {
    cy.get('#aries')
      .click({ force: true })
      .url()
      .should('include', 'aries')
      .get('.current-sign-title')
      .contains('aries')
      .get('.date_range')
      .contains('Mar 21 - Apr 20')
      .get('.current_date')
      .contains('November 15, 2021')
      .get('.description')
      .contains(
        "Feeling the urge to either fight or take flight? Stay right here and channel your intense feelings into doing your nonviolent best -- victory's sweeter when everyone emerges with a smile."
      )
      .get('.compatibility')
      .contains('Cancer')
      .get('.mood')
      .contains('Friendly')
      .get('.color')
      .contains('Navy Blue')
      .get('.lucky_number')
      .contains('43')
      .get('.lucky_time')
      .contains('3am');
  });

  it("Should allow user to see yesterday's zodiac by clicking on yesterday button", () => {
    cy.visit('http://localhost:3000/aries/yesterday');
  });

  it("Should allow user to see todays's zodiac by clicking on yesterday button", () => {
    cy.visit('http://localhost:3000/aries/today');
  });

  it("Should allow user to see tomorrow's zodiac by clicking on yesterday button", () => {
    cy.visit('http://localhost:3000/aries/tomorrow');
  });

  it('Should allow the user to return home by clicking the HOME button', () => {
    cy.visit('http://localhost:3000/aries');
    cy.get('.home-button').click().url().should('not.include', 'aries');
  });
});
