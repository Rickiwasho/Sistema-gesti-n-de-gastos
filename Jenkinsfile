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
                        sh 'cd frontend; ls'
                        sh 'npm install frontend/.'
                    }
                }
                stage('Deploy'){
                    steps {
                        sh 'cd frontend; npm start'
                    }
                }
            }
        }
    }
}

