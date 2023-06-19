# kubernetes_mongo_nodejs

This application is used to create and deployed an application  on kuberetes which has follwing tech stack:-

1. node js 
2. express
3. mongoose
4. mongodb



This is multi-tier application 
* serivce tier
* db tier


### how to run application ?

#### Steps to generate docker image for service tier

1. Build node js rest api image

docker build -t node-rest-api .

2. Tag image

docker tag node-rest-api <username>/node-rest-api

3. push the image

docker push <username>/node-rest-api

it will push image with latest tag

#### Deploy image in kuberete 

run follwing command 

cd kubctlyaml

kubectl apply -f api-deployment.yaml

kubectl apply -f node-service.yaml

kubectl apply -f node-api-config.yaml

to expose this service tier outside the cluster need to deploy loadbalancer service 'node-service.yaml' .
To use configuration from the kuberentes config map deloying 'node-api-config.yaml' .

API pod is deployed 

to check that run kubects get pods
to check service  run kubectl get services

#### Deploy mongodb in kuberete 

run follwing command 

kubectl apply -f mongodb-deployment.yaml

kubectl apply -f mongodb-service.yaml

kubectl apply -f mongodb-pvc.yaml

kubectl apply -f mongodb-secret.yaml

kubectl apply -f mongodb-storageclass.yaml

DB pod is deployed 

to check that run kubects get pods
to check service  run kubectl get services


#### hitting api pod from exposed id 

kubectl get services

copy api pod service ip address and hit from the browser 













