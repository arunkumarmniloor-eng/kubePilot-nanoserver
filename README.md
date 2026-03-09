# 🚀 KubePilot – Cloud-Native CI/CD Automation Platform

KubePilot is an end-to-end **DevOps automation platform** that demonstrates how modern applications are built, containerized, and deployed automatically using a CI/CD pipeline.

The project automates the workflow from **code commit → Docker build → image push → Kubernetes deployment** using Jenkins pipelines.

This project simulates a **production-style DevOps workflow** using containerization and Kubernetes on AWS infrastructure.

---

# 🏗 Architecture

```
Developer
   │
   ▼
GitHub Repository
   │
   ▼
Jenkins CI Pipeline
   │
   ▼
Docker Image Build
   │
   ▼
DockerHub Registry
   │
   ▼
Jenkins CD Pipeline
   │
   ▼
K3s Kubernetes Cluster
   │
   ▼
Application Deployment
```

---

# 🛠 Technology Stack

| Tool             | Purpose                 |
| ---------------- | ----------------------- |
| Jenkins          | CI/CD automation        |
| Docker           | Containerization        |
| DockerHub        | Image registry          |
| Kubernetes (K3s) | Container orchestration |
| AWS EC2          | Cloud infrastructure    |
| Git & GitHub     | Version control         |
| Node.js          | Backend application     |

---

# 📂 Project Structure

```
kubepilot
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── jenkins
│   ├── Jenkinsfile-CI
│   └── Jenkinsfile-CD
│
├── k8s
│   └── deployment.yaml
│
└── README.md
```

---

# ⚙ CI/CD Workflow

### Continuous Integration (CI)

1. Developer pushes code to GitHub
2. Jenkins CI pipeline triggers
3. Jenkins builds Docker image
4. Image is tagged with build number
5. Image is pushed to DockerHub

### Continuous Deployment (CD)

1. Jenkins CD pipeline is triggered
2. Kubernetes deployment manifest is updated
3. K3s pulls latest Docker image
4. Kubernetes rolls out updated container
5. Application becomes available via NodePort

---

# 🐳 Docker Image

The backend service is containerized using Docker.

Build image locally:

```
docker build -t nano-backend .
```

Run container:

```
docker run -d -p 3000:3000 nano-backend
```

---

# ☸ Kubernetes Deployment

The application is deployed to Kubernetes using K3s.

Apply deployment:

```
sudo k3s kubectl apply -f k8s/deployment.yaml
```

Check pods:

```
sudo k3s kubectl get pods
```

Check services:

```
sudo k3s kubectl get svc
```

---

# 🌍 Access the Application

Once deployed, access the application via NodePort:

```
http://<EC2_PUBLIC_IP>:30007
```

---

# 🔐 Jenkins Credentials Required

Add the following credential in Jenkins:

Credential ID:

```
dockerhub-creds
```

Type:

```
Username with password
```

Used for pushing images to DockerHub.

---

# 📌 Features

* Automated CI/CD pipelines
* Docker image build and versioning
* Container registry integration
* Kubernetes deployment automation
* Lightweight Kubernetes cluster with K3s
* Cloud-based deployment on AWS EC2

---

# 🚀 Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/arunkumarmniloor-eng/kubePilot-nanoserver.git
cd kubepilot
```

### 2. Install Docker

```
sudo apt update
sudo apt install docker.io -y
```

### 3. Install K3s

```
curl -sfL https://get.k3s.io | sh -
```

### 4. Verify Kubernetes

```
sudo k3s kubectl get nodes
```

### 5. Configure Jenkins

Install required plugins:

* Pipeline
* Git
* Docker Pipeline

Create two pipelines:

```
kubepilot-ci
kubepilot-cd
```

---

# 📈 Future Enhancements

* Add monitoring with Prometheus and Grafana
* Implement GitHub webhook triggers
* Use Helm for Kubernetes deployments
* Implement Blue
* # 🚀 KubePilot – Cloud-Native CI/CD Automation Platform

KubePilot is an end-to-end **DevOps automation platform** that demonstrates how modern applications are built, containerized, and deployed automatically using a CI/CD pipeline.

The project automates the workflow from **code commit → Docker build → image push → Kubernetes deployment** using Jenkins pipelines.

This project simulates a **production-style DevOps workflow** using containerization and Kubernetes on AWS infrastructure.

---

# 🏗 Architecture

```
Developer
   │
   ▼
GitHub Repository
   │
   ▼
Jenkins CI Pipeline
   │
   ▼
Docker Image Build
   │
   ▼
DockerHub Registry
   │
   ▼
Jenkins CD Pipeline
   │
   ▼
K3s Kubernetes Cluster
   │
   ▼
Application Deployment
```

---

# 🛠 Technology Stack

| Tool             | Purpose                 |
| ---------------- | ----------------------- |
| Jenkins          | CI/CD automation        |
| Docker           | Containerization        |
| DockerHub        | Image registry          |
| Kubernetes (K3s) | Container orchestration |
| AWS EC2          | Cloud infrastructure    |
| Git & GitHub     | Version control         |
| Node.js          | Backend application     |

---

# 📂 Project Structure

```
kubepilot
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── jenkins
│   ├── Jenkinsfile-CI
│   └── Jenkinsfile-CD
│
├── k8s
│   └── deployment.yaml
│
└── README.md
```

---

# ⚙ CI/CD Workflow

### Continuous Integration (CI)

1. Developer pushes code to GitHub
2. Jenkins CI pipeline triggers
3. Jenkins builds Docker image
4. Image is tagged with build number
5. Image is pushed to DockerHub

### Continuous Deployment (CD)

1. Jenkins CD pipeline is triggered
2. Kubernetes deployment manifest is updated
3. K3s pulls latest Docker image
4. Kubernetes rolls out updated container
5. Application becomes available via NodePort

---

# 🐳 Docker Image

The backend service is containerized using Docker.

Build image locally:

```
docker build -t nano-backend .
```

Run container:

```
docker run -d -p 3000:3000 nano-backend
```

---

# ☸ Kubernetes Deployment

The application is deployed to Kubernetes using K3s.

Apply deployment:

```
sudo k3s kubectl apply -f k8s/deployment.yaml
```

Check pods:

```
sudo k3s kubectl get pods
```

Check services:

```
sudo k3s kubectl get svc
```

---

# 🌍 Access the Application

Once deployed, access the application via NodePort:

```
http://<EC2_PUBLIC_IP>:30007
```

---

# 🔐 Jenkins Credentials Required

Add the following credential in Jenkins:

Credential ID:

```
dockerhub-creds
```

Type:

```
Username with password
```

Used for pushing images to DockerHub.

---

# 📌 Features

* Automated CI/CD pipelines
* Docker image build and versioning
* Container registry integration
* Kubernetes deployment automation
* Lightweight Kubernetes cluster with K3s
* Cloud-based deployment on AWS EC2

---

# 🚀 Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/<your-username>/kubepilot.git
cd kubepilot
```

### 2. Install Docker

```
sudo apt update
sudo apt install docker.io -y
```

### 3. Install K3s

```
curl -sfL https://get.k3s.io | sh -
```

### 4. Verify Kubernetes

```
sudo k3s kubectl get nodes
```

### 5. Configure Jenkins

Install required plugins:

* Pipeline
* Git
* Docker Pipeline

Create two pipelines:

```
kubepilot-ci
kubepilot-cd
```

---

# 📈 Future Enhancements

* Add monitoring with Prometheus and Grafana
* Implement GitHub webhook triggers
* Use Helm for Kubernetes deployments
* Implement Blue/Green deployments
* Add Terraform infrastructure provisioning

---

# 👨‍💻 Author

Arun Kumar

DevOps Engineer

---

# ⭐ If you like this project

Consider giving the repository a ⭐ on GitHub.

