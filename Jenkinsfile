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
                        dir ('frontend') {
                            sh 'npm install'
                        }
                    }
                }
                stage('Build') {
                    steps {
                        dir ('frontend') {
                            sh 'npm run build'
                        }
                    }
                }
                stage('Archive') {
                    steps {
                        dir ('frontend'){
                            archiveArtifacts 'build/**'
                        }
                    }
                }
            }
        }
        stage('Deploy'){
            agent {
                label 'master'
            }
            options {
                skipDefaultCheckout()
            }
            steps {
                sh 'rm -rf /var/www/sggastos'
                sh 'mkdir /var/www/sggastos'
                sh 'pwd'
                sh 'ls'
                sh 'echo "---------"'
                sh 'ls */'
                sh '#cp -Rp build/** /var/www/sggastos/'
                sh 'echo hola > /var/www/sggastos/test.html'
                sh 'docker stop sggastos || true && docker rm sggastos || true'
                sh 'docker run -dit --name sggastos -p 3017:3000 -v /var/www/sggastos/:/usr/local/apache2/htdocs/ httpd:2.4'
            }
        }
    }
}

