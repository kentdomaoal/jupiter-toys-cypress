pipeline {
	agent any
	parameters {
        choice(name: 'ENV', choices: ['dev', 'qa', 'stg' , 'prod'], description: 'Select Environment')
    }
	stages {
		stage('Clone Git Repo'){
				steps{
					git 'https://github.com/kentdomaoal/planit-assessment.git'
		    }
		}
		stage('Install Dependencies'){
				steps{
					bat 'npm install'
				}
		}
		stage('Run Tests'){
				steps{
					bat 'npm test:qa'
				}
		}
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/results', reportFiles: 'merge-reports.html', reportName: "${env.BUILD_TAG}-HTML-Report", reportTitles: ''])
				}
		}
	}
}