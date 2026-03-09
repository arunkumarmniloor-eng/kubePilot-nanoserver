pipeline {
    agent any

    environment {
        APP_NAME = "nano-backend"
        DOCKER_IMAGE = "arundevops0047/nano-backend:${BUILD_NUMBER}"
        DOCKER_IMAGE_LATEST = "arundevops0047/nano-backend:latest"
        KUBECONFIG = "/etc/rancher/k3s/k3s.yaml"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE -t $DOCKER_IMAGE_LATEST .'
            }
        }

        stage('DockerHub Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
                sh 'docker push $DOCKER_IMAGE_LATEST'
            }
        }

        stage('Update Kubernetes Manifest') {
            steps {
                sh '''
                  sed -i "s|IMAGE_PLACEHOLDER|$DOCKER_IMAGE|g" k8s/deployment.yaml
                '''
            }
        }

        stage('Deploy to K3s') {
            steps {
                sh 'sudo k3s kubectl apply -f k8s/deployment.yaml'
                sh 'sudo k3s kubectl rollout restart deployment/nano-backend'
                sh 'sudo k3s kubectl rollout status deployment/nano-backend --timeout=120s'
            }
        }
    }

    post {
        success {
            echo 'Build, push, and K3s deployment completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check console output for details.'
        }
        always {
            sh 'docker logout || true'
        }
    }
}
