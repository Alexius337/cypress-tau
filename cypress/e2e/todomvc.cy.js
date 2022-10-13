/// <reference types="cypress" />

it('should be able to add new todo to the list', () => {
    // navigate to the application address
    cy.visit('http://todomvc-app-for-testing.surge.sh')

    // select "new todo" box and type "Clean room" and press enter
    // increase the default timeout to 6 seconds
    cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")

    // select "toggle" next to todo item and click it to complete todo
    cy.get('.toggle').click()

    // select element that contains the text "Clear completed" and click on it
    cy.contains('Clear completed').click()
})