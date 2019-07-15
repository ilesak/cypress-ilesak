pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        bat 'npx cypress run --record --key 2b4a58e3-349c-44e2-977e-caa07d230d49 --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat 'npx cypress run --record --key 2b4a58e3-349c-44e2-977e-caa07d230d49 --parallel'
                    }
                }
                stage('Run tests in parallel C') {
                    steps {
                        bat 'npx cypress run --record --key 2b4a58e3-349c-44e2-977e-caa07d230d49 --parallel'
                    }
                }
            }
        }
    }
}