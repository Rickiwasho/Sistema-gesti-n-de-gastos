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
                        sh 'cd frontend; npm install; npm start'
                    }
                }
            }
        }
    }
}

