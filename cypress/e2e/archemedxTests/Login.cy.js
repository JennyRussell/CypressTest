/// <reference types="cypress" />

it('Logs In', () => {
      cy.visit('https://kyber.arche.services/api/v1/learner/curricula/67c8273c-1b6e-4d6d-9110-845f073f196f/activities/a8c60a05-23f5-4a0f-b8c2-90d2e413f097/authorize?identity-provider=kyber-staging')
      cy.get('#username').type('CandIntern4@somewhere.com')
      cy.get('#password').type('WhatUp23?')
      cy.get('[name="action"]').click()
      
    
    //   // clicking back
    //   cy.go(-1)
    //   cy.location('pathname').should('not.include', 'navigation')
  
    //   // clicking forward
    //   cy.go(1)
    //   cy.location('pathname').should('include', 'navigation')
    // })
  
  })

  it('Plays the video', () => {
    cy.contains('Start At The Beginning', {timeout:20000}).click()
  
  })

  it('Detects the first moment ', () => {
    cy.contains('Can you see this message', {timeout:15000}).should('be.visible')
  })

  it('Detects the second moment', () => {
    cy.get('[data-test="active-moment-type-note"]', {timeout:25000}).should('not.have.css', 'bottom', '-100%')
  })

  it('Continues the video after Educator Note pause', () => {
    cy.get('[data-test="continue-button-moment"]', {timeout:25000}).click()
  })
  