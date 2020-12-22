pipeline{
    agent none
    stages{
        stage('Frontend: install & deploy'){
            agent {
                docker {
                    image 'node:14-alpine'
                    args '-p 3016:3000'
                }
            }
            environment {
                HOME = '.'
            }
            stages {
                stage('Install') {
                    steps {
                        sh 'pwd'
                        sh 'ls'
                        sh '#npm install'
                    }
                }
                stage('Deploy'){
                    steps {
                        sh '#npm start'
                    }
                }
            }
        }
    }
}

