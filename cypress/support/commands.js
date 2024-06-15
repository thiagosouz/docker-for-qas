Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})

Cypress.Commands.add('audioPlay', () => {
    cy.get('.play').eq(5).click()

    cy.get('audio[src="https://raw.githubusercontent.com/qaxperience/mock/main/songs/afight.mp3"]')
        .as('classAudio')
        .should((audioElements) => {
            let audioable = false;

            if (audioElements[0].duration > 0 &&
                audioElements[0].played.length > 0 &&
                !audioElements[0].paused &&
                !audioElements[0].muted) {
                audioable = true;
            }

            expect(audioable).to.be.equal(true)
        })

    cy.get('.pause').last().click()
    cy.get('@classAudio')
        .should((audioElements) => {
            let audioable = true;

            if (audioElements[0].paused || audioElements[0].muted) {
                audioable = false;
            }
            expect(audioable).to.be.equal(false)
        })
})
