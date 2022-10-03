/// <reference types="cypress" />

it('Logs In', () => { // tests login portal with given credentials
      cy.visit('https://kyber.arche.services/api/v1/learner/curricula/67c8273c-1b6e-4d6d-9110-845f073f196f/activities/a8c60a05-23f5-4a0f-b8c2-90d2e413f097/authorize?identity-provider=kyber-staging')
      cy.get('#username').type('CandIntern4@somewhere.com')
      cy.get('#password').type('WhatUp23?')
      cy.get('[name="action"]').click()
      
  })

  // since I already watched the video once, it no longer gave me the option to add my name upon login so I just wrote the test 
  // from the point of rewatching the video option

  it('Plays the video', () => {
    cy.contains('Start At The Beginning', {timeout:20000}).click() // needs data-cy attribute value
  
  })

  it('Detects the first moment ', () => {
    cy.contains('Can you see this message', {timeout:15000}).should('be.visible') // needs data-cy attribute value
  })

  it('Detects the second moment', () => {
    cy.get('[data-test="active-moment-type-note"]', {timeout:25000}).should('not.have.css', 'bottom', '-100%') // targeted this element when it deletes its "style" value upon popup
  })

  it('Continues the video after Educator Note pause', () => {
    cy.get('[data-test="continue-button-moment"]', {timeout:25000}).click() // resumed the video by selecting the continue button on the moment popup
  })
  
  it('Shows the activity review for user "Jenny" ', () => {
    cy.contains('Activity Review for Jenny', {timeout: 25000}).should('be.visible')
  })

  it('Validates the user completed the activity ', () => {
    cy.contains('You have completed this Activity', {timeout: 10000}).should('be.visible')
  })
  
  it('Allow user to revisit the activity', () => {
    cy.wait(15000)
    cy.get('.c00474').find('button').contains('Revisit Activity').click({force:true})
  })
