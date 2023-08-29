pipeline {
    agent any
    tools{
        nodejs 'Node'
    }
    stages {
        stage('build') {
            steps {
                echo "building frontend.."
                sh "npm install -g yarn"
                sh "yarn install"
                sh "yarn start"
                sh "ls"          
            }
        }
        stage('build image') {
            steps {
                echo "building docker image"
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh 'docker build -t agasprosper/ridesmart-frontend:${BUILD_ID} .'
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh 'docker push agasprosper/ridesmart-frontend:${BUILD_ID}'
                    }
                }
            } 
        }
        stage('deploy') {
            steps {
                echo "this is the deploy stage" 
            }
        }
    }
}