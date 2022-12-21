# jupiter-toys-cypress
Sample Test automation using Cypress.

## How to run in local machine

- ## 💻 Pre-requisites
  - Git Bash
  - Node JS
  - Java 8 or higher - for Allure Reporter

## 1. Clone the project

       git clone https://github.com/kentdomaoal/jupiter-toys-cypress.git
       
       cd jupiter-toys-cypress

## 2. Install dependencies

       npm install
    
## 3. Run the test

   (a) with mochawesome reporter
   
       npm run test:qa
       
   (b) with allure reporter
   
        npm run test:qa:allure
        
## 4. View html report

   (a) For mochawesome report, it can be found on `/cypress/results/merge-reports.html`
   
   (b) For allure report, it can be found on `/allure-report/index.html`
       
   Or you can run this command to open the allure generated report
       
       npx allure open allure-report
