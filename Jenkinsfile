pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo "Cloning backend.."          
            }
        }
        stage('build image') {
            steps {
                echo "building docker image"
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh 'docker build -t agasprosper/ridesmart-backend:${BUILD_ID} .'
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh 'docker push agasprosper/ridesmart-backend:${BUILD_ID}'
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