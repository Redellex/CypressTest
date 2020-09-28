/// <reference types="cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_table')
    cy.get('#accept-choices').click()
  })

  describe('Filter Table Tests', () => {
    it('When user inputs "in", it should filter by keyword "in"', () => {
      getIframeBody().find('#myInput').type("in")
      getIframeBody().find('tr:visible > td:nth-child(1)').each(($el,
        index, $list) => {
            expect($el).to.contain('in')
          })
      })
  })


    const getIframeDocument = () => {
      return cy
      .get('iframe[id="iframeResult"]')
      .its('0.contentDocument').should('exist')
    }
    
    const getIframeBody = () => {
      return getIframeDocument()
      .its('body').should('not.be.undefined')
      .then(cy.wrap)
    }
    
})

