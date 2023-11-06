/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * This command allows you to download a file from a given URL and save it to a specified directory with an optional filename.
       * @param url The url to download the file from
       * @param directory The directory to save the file to
       * @param filename The filename to save the file as
       * @param userAgent Header to use for the request
       * @param timeout The timeout for the request
       * @example
       * Basic usage
       * cy.downloadFile('http://demourl', 'example', 'demo.pdf')
       * 
       * With a custom user agent
       * cy.downloadFile('http://demourl', 'example', 'demo.pdf', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36')
       * 
       * With a custom timeout
       * cy.downloadFile('http://demourl', 'example', 'demo.pdf', '', {timeout: 10000})
       */
      downloadFile(url: string, directory: string, filename:string, userAgent?:string, options?: { timeout: number }): Chainable<any>
    }
  }
