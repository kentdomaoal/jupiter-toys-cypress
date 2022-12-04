pipeline {
	agent any
	parameters {
        choice(name: 'ENV', choices: ['dev', 'qa', 'stg' , 'prod'], description: 'Select Environment')
		choice(name: 'Reporter', choices: ['mochawesome', 'allure'], description: 'Select Reporter')
    }
	stages {
		stage('Install Dependencies'){
				steps{
					bat 'npm install'
				}
		}
		stage('Run Tests'){
				steps{
					script {
						if (params.Reporter == 'allure') {
							bat "npm run test:${params.ENV}:${params.Reporter}"
						} else {
							bat "npm run test:${params.ENV}"
						}
					}	
				}
		}
		stage('Publish HTML Report'){
				environment {
					REPORT_DIR = 'cypress/results'
					REPORT_FILES = 'merge-reports.html'
				}
				steps{
					script {
						if (params.Reporter == 'allure') {
							REPORT_DIR = 'allure-report'
							REPORT_FILES = 'index.html'
						} 
					}

					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: "${REPORT_DIR}", reportFiles: "${REPORT_FILES}", reportName: "${env.BUILD_TAG}-HTML-Report", reportTitles: ''])
				}
		}
	}
}