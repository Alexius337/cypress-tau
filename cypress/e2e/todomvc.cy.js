/// <reference types="cypress" />

it('should be able to add new todo to the list', () => {
    // navigate to the application address
    cy.visit('http://todomvc-app-for-testing.surge.sh')

    // select "new todo" box and type "Clean room" and press enter
    // increase the default timeout to 6 seconds
    cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")

    // validate that label contains that text we just put in
    cy.get('label').should('have.text', 'Clean room')

    // assert that toggle is not checked yet
    cy.get('.toggle').should('not.be.checked')

    // select "toggle" next to todo item and click it to complete todo
    cy.get('.toggle').click()

    // assert that toggling todo puta line through the text
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    // select element that contains the text "Clear completed" and click on it
    cy.contains('Clear completed').click()

    // assert that there are no li elements under the ul element
    cy.get('.todo-list').should('not.have.descendants', 'li')
})