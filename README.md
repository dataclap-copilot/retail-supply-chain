# 🧱 Containerization Journey: Modernizing a Retail Supply Chain System

This project demonstrates the transformation of a traditional retail supply chain system from a VM-based monolith to modern microservices using **Node.js**, **Docker**, **Kubernetes**, **Istio**, and **GitHub Actions CI/CD**.

---

## 🧭 Overview

The system is broken down into independent services — `product`, `order`, `payment`, and `notification`. Each service is containerized, deployed with Kubernetes, and managed through a CI/CD pipeline with GitHub Actions. A service mesh (Istio) is integrated for observability and traffic management, enabling canary deployments and rollbacks.

---

## 🚀 Key Features

- ✅ Migration from VMs to Docker containers
- ✅ Kubernetes-based orchestration
- ✅ Istio for observability and traffic splitting
- ✅ GitHub Actions for CI/CD
- ✅ Canary deployments & automated rollbacks
- ✅ Helm charts for deployment packaging

---

## 📁 Folder Structure
```bash
retail-supply-chain/
├── microservices/
│ ├── product/ # Node.js microservice
│ ├── order/
│ ├── payment/
│ └── notification/
├── k8s/ # Raw Kubernetes manifests
│ ├── product/
│ ├── order/
│ ├── payment/
│ └── notification/
├── helm/ # Helm chart for deploying services
│ └── supply-chain-chart/
├── .github/
│ └── workflows/ # GitHub Actions CI/CD pipeline
├── .dockerignore
├── .gitignore
├── README.md
└── setup_project.sh # Shell script to generate the entire project structure
```

---

## 💻 Local Development
To run a service locally
```bash
cd microservices/product
npm install
npm start
```
---
## 🐳 Run with Docker
To build and run a service in Docker:
```bash
docker build -t product-service ./microservices/product
docker run -p 3000:3000 product-service
 
```
---
## ☸️ Deploy to Kubernetes
Make sure you have a Kubernetes cluster running (Minikube, Kind, EKS, etc.)

Deploy manually:
```bash
kubectl apply -f k8s/product/deployment.yaml
kubectl apply -f k8s/product/service.yaml
kubectl apply -f k8s/product/virtualservice.yaml
```
Deploy using Helm:
```bash
helm upgrade --install product ./helm/supply-chain-chart \
  --set image.repository=mydockerhubuser/product \
  --set image.tag=latest
```
---
## 🔁 CI/CD Pipeline
CI/CD is handled via GitHub Actions:

Runs on every push to main

Installs dependencies, runs test + lint

Builds Docker images

Pushes to DockerHub

Deploys using Helm Requires GitHub Secrets:

DOCKER_USERNAME

DOCKER_PASSWORD

---
## 🧪 Canary Deployments with Istio

Each service includes a VirtualService that allows weighted traffic routing (e.g., 90% to v1, 10% to v2). Update weights to perform canary releases and rollbacks.

---
## 📌 Future Enhancements
Add Prometheus/Grafana for metrics

Integrate ArgoCD for GitOps-based CD

Add unit/integration tests

Secure with JWT/Auth0

