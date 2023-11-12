node {
    def WORKSPACE = "/var/lib/jenkins/workspace/Myticket_FO"
    def dockerImageTag = "myticket-fo-deploy${env.BUILD_NUMBER}"
    try{
        stage('Clone Repo') {
            git url: 'https://github.com/Sipoufo/myticket.git',
                credentialsId: 'myticket_ssh',
                branch: 'master'
            sh 'npm install'
         }
        stage('Build docker') {
             dockerImage = docker.build("myticket-fo-deploy:${env.BUILD_NUMBER}")
        }
        stage('Deploy docker'){
              echo "Docker Image Tag Name: ${dockerImageTag}"
              sh "docker stop myticket-fo-deploy || true && docker rm myticket-fo-deploy || true"
              sh "docker run --net=host --name myticket-fo-deploy -d -p 80:80 myticket-fo-deploy:${env.BUILD_NUMBER}"
        }
    }catch(e){
        throw e
    }
}
