export class DateSh{
    dateDetails(afterCurrentDate){
        cy.get('.custom-date-box').eq(0).click()
        cy.wait(1000)
        cy.get('[aria-label*="your start date."].asd__day--today button').eq(0).invoke('text').then((fromDate) => {
          cy.log(fromDate)
          cy.get('[role="presentation"] [aria-label*="your start date."] button').then((todate) => {
            cy.log(todate)
            //cy.get('[aria-label*="your start date."].asd__day--today button').eq(0).click() //from date
            cy.get(todate).eq(parseInt(afterCurrentDate)).click({ force: true }) //Select from date - 3 days after from current date
            cy.get('.custom-date-box').eq(0).click()
            cy.wait(1000)
            cy.get(todate).eq(parseInt(afterCurrentDate) + 5).click({ force: true }) //Click todate - 7 days after from date
          })
})
}
}