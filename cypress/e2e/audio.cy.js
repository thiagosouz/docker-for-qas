describe('Tests Parodify', () => {
    beforeEach(() => {
        cy.clearCookies();  // Limpa todos os cookies
        cy.clearLocalStorage();  // Limpa o armazenamento local        
        cy.visit('http://localhost:8082/')
    })
    it('Test play audio', () => {
        cy.audioPlay()
    })
})