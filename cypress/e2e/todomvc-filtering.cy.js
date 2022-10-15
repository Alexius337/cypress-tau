/// <reference types="cypress" />

describe('filtering', () => {

    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type("Clean room{enter}")
        cy.get('.new-todo').type("Learn JavaScript{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('should filter "Active" todos', () => {
        // filter the list by only active todos
        cy.contains('Active').click()

        // the list should contain 2 items
        cy.get('.todo-list li').should('have.length', 2)
    })

    it('should filter "Completed" todos', () => {
        // filter the list by only active todos
        cy.contains('Completed').click()

        // the list should contain 1 item
        cy.get('.todo-list li').should('have.length', 1)
    })

    it('should filter "All" todos', () => {
        // filter the list by only active todos
        cy.contains('All').click()

        // the list should contain 2 items
        cy.get('.todo-list li').should('have.length', 3)
    })

})