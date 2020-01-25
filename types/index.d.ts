/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Create several Todo items via UI
       * @example
       * cy.downloadFile('http://demourl','example','demo.pdf')
       */
      downloadFile(url: string, directory: string, filename:string, userAgent?:string): Chainable<any>
    }
  }