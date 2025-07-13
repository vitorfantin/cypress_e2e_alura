describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMmMyMmM0ZC02ZmUwLTQyODctODJlMy1kYTBlYmZhYThlNzgiLCJhZG9wdGVyTmFtZSI6IlZpdG9yIEZhbnRpbiIsImlhdCI6MTc1MjQ0ODUzOCwiZXhwIjoxNzUyNzA3NzM4fQ.CsqY_RiFJJwzfxZLvJSW3dUL821qqNUGchZy6WCmaIQ`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/e2c22c4d-6fe0-4287-82e3-da0ebfaa8e78',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })

    })

})