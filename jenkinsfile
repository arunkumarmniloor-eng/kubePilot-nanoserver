pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/arunkumarmniloor-eng/nano-server.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nano-backend:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f nano-container || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name nano-container nano-backend:latest'
            }
        }
    }
}
