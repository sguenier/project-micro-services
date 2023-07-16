# gRPC Task Manager

## Installation
source for the readme : [MohammadBnei/grpc-task-manager](https://raw.githubusercontent.com/MohammadBnei/grpc-task-manager/main/Readme.md)

### Create the docker network

```bash
docker network create grpc-task-manager_default
```

### Launch the databases and tracing tools

```bash
docker compose up -d mariadb mongo tracing
```

### Run the prisma migration
#### User-api

Set the .env :
```bash
MYSQL_URL="mysql://root:passwd@localhost:3306/user"
insecure=true
NODE_ENV=development
JAEGER_URL="http://localhost:4318/v1/traces"
HEALTH_PORT=3001
AUTH_API_URL="localhost:4003"
```

```bash
npx prisma migrate dev
```
#### Auth-api

Set the .env :
```bash
MYSQL_URL="mysql://root:passwd@localhost:3306/auth"
PORT=4003
USER_API_URL="localhost:4002"
JWT_SECRET="super-secret"
insecure=true
JAEGER_URL="http://localhost:4318/v1/traces"
HEALTH_PORT=3002
```

```bash
npx prisma migrate dev
```

#### Product-api

Set the .env :
```bash
MYSQL_URL="mysql://root:passwd@localhost:3306/auth"
PORT=4004
USER_API_URL="localhost:4002"
JWT_SECRET="super-secret"
insecure=true
JAEGER_URL="http://localhost:4318/v1/traces"
HEALTH_PORT=3002
```

```bash
npx prisma migrate dev
```

#### Cat-api

Set the .env :
```bash
MYSQL_URL="mysql://root:passwd@localhost:3306/auth"
PORT=4005
USER_API_URL="localhost:4002"
JWT_SECRET="super-secret"
insecure=true
JAEGER_URL="http://localhost:4318/v1/traces"
HEALTH_PORT=3002
```

```bash
npx prisma migrate dev
```

## SSL

### Install mkcert 

https://github.com/FiloSottile/mkcert

### Certificates and rootCA
If there is not already the certs :
```bash
mkcert user-api localhost
mkcert auth-api localhost
mkcert task-api localhost
mkcert product-api localhost
mkcert cat-api localhost
mkcert front localhost
cp $(mkcert -CAROOT)/rootCA.pem .
```
Remove the +1 part of the name of the certificates 

## Front

### example .env

```bash
ROOT_CA=../local/certs/rootCA.pem
FRONT_KEY=../local/certs/front-key.pem
FRONT_CERT=../local/certs/front.pem
secure=false
TASK_API_URL=localhost:4001
AUTH_API_URL=localhost:4002
USER_API_URL=localhost:4000
```

## Start the servers

```bash
docker compose up -d
```
```bash
cd product-api
npm run start
cd ..
cd cat-api
npm run start
```

It will stats the server for product-api & cat-api

| **Name**         | **Url**                |
|------------------|------------------------|
| project          | http://localhost:4000  |
| observability ui | http://localhost:16686 |
|product-api | localhost:4004|
| cat-api | localhost:4005 |

## How to test the the product and cat api using GRPC by using postman :
import the proto file in postman and use the following url to test the product-api :
- localhost:6000

import the proto file in postman and use the following url to test the cat-api :
- localhost:6001

![Run in Postman](https://i.imgur.com/7AjvAoC.png)