## Description

Single API Endpoint for WeMaintain backend test:

https://gitlab.com/wemaintain-public/backend-test

## Installation

```bash
$ docker-compose up -d

$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Stack

### Docker

Docker is used for building the MongoDB database and seeding database with the provided dataset.

### MongoDB

MongoDB is used as the database for simplicity of use with mongoose and for the easy use of geolocation request. It is also more flexible.
As we have relations between our entities (not materialized in the database collections) we might have go with PostgreSQL.

### NestJS

NestJS is used as the framework for the application as :
* it provides great tools to build API with the helps of decorators.
* it has great documentation and learning curve is great
* it is similar to API Platform in some ways (which I am familiar with)
* easy to implement differents software architectures

### Swagger
Thanks to NestJS we have access to a swagger: http://localhost:3000/api to test our API

## Architecture

![Architecture](./doc/hexagonal-architecture.png "Architecture")
credit: https://reflectoring.io/spring-hexagonal/

The architecture is mainly based on Clean/Hexagonal architecture (Ports & Adapters) to separate the domain layer (which contains entities and use-cases related to the domain) of the application and infrastructure layers.
We have a separation in layers for the differents NestJS modules.

### Domain Module/Layer

Contains all the domain logic which includes:

* Entities
* Domain Services
* Ports to communicates whit others layers
* Domain Use Cases

### Application Module/Layer

Contains all the application/framework scope which includes:

* Controllers
* Application Services (related to framework for example)

### Infrastructure Module/Layer

Contains all the infrastructure related scope which includes:

* Adapters for each Ports in Domain
* Infrastructure Services

### Pros

* Domain Layer is independant of the framework and infrastructure. As such external resources and framework can be swapped easily
* Easier to add or remove features as we have a good segmentations between business rules and application or infrastructure rules
* Testable and scalable (we can test only the domain layer to assure rules are respected)

### Cons

* Not really suited for smalls applications as we have multiple layers or blocks which increase complexity (might be overkill)
* Learning Curve

### In our case

* **domain**: domain module/layer directory.
    * **models**: domain model entities and interfaces to abstract those.
    * **ports**: boundaries of the domain layer, implemented as interfaces.
      * **repositories**: repositories to fetch domain entities based on their properties.
    * **services**: domain services to handle differents actions, manipulations related to domain entities.
      * **response-mappers**: a type of services to map, aggregate datas and return domain entities.
    * **use-cases**: domain use-cases define primaries business rules (or behaviour).


* **application**: application module/layer directory (mainly framework related).  
    * **uses-cases**: directory to help the implementation of the domain use cases within the application. Each sub-directories represent a use cases.
      * **controllers**: controllers REST to call our use-cases (can be pure domain or application extended).
      * **dtos**: mainly used to be decorated for swagger, and also provide a schema to validate with.
      * **pipes**: NestJS pipes to transform and validate request from a controller.
  

* **infrastructure**: infrastructure module/layer directory.
    * **adapters**: adapters are the implementation of ports (domain/ports). We only have MongoDB in our infrastructure layer.
      * **entities**: MongoDB entities to build document related to domain entities.
      * **repositories**: Fetch entities in MongoDB.
      * **schemas**: Mongo schemas.
      * **use-cases**: Needed to adapt our use-cases to our infrastructure.
    
## Improvements for scalability and limitations (Step 2 of the weMaintain test)

### First improvement: PostgreSQL

At the moment we have MongoDB as our database without relation between our entities, resulting in multiple queries for requesting the differents objects needed to our response. We could use a relationship oriented database such as PostgreSQL to optimize to one request (with relationship) the data we need.
PostgreSQL is faster with tabular data compared to json data, so we need to convert the json data provided in plain data and build the relationships within it.

#### Drawback!

Even if PostgreSQL should speed up our queries, MongoDB is better for scaling up as it is build through native sharding enabling an horizontal scaling. We can always add instances to keep scaling so it is easier than data replication on PostgreSQL.
We should think about caching if we go for PostgreSQL.
Also the data structure is more strict with a relation database so if our data model become complexe it should be a little bit unfriendly to maintain in code.

#### Keys elements to be monitored

We should monitor the workload on the SQL database and the sizes of our database. If in the future we decide to integrate POST/UPDATE/DELETE requests we should monitoring lock between resources.
Depending on where we are hosted we could use a third party tool like OPM (or pgDash) which can be used to monitor all the points.

### Second improvement: GraphQL

Itself, GraphQL is not faster than REST for an identical query. Where REST often return all the data of the object response, GraphQL allow us to retrieve only the data necessary which result in a faster response time. As such GraphQL requests will be smaller and more efficient.
It is also possible to require multiple entities at once which increase efficiency in our case to request in one endpoint all the datas from Bands, Venues and Concerts but only the data needed for each to forged the response.

#### Drawback!

GraphQL lack of the built-in caching support where REST API leverage native HTTP caching so we need to rely on another library to caching efficiency.
Another drawback is also the complexity as it is more difficult to implement it (learning curve issue).

#### Keys elements to be monitored

We should monitor the traffic incoming on the single HTTP endpoint and each query performances to avoid slow response time or slow query time.
We could use [Apollo Server](https://github.com/apollographql/apollo-server/blob/main/docs/source/monitoring/metrics.md) as we can send metric, logs and track our requests.

### Third improvement: Caching (example: Redis)

If we retreive a lot of data on a single request and we have a lot of those requests in a short amount of time we should implement a cache to avoid another hit on the database.
Redis store the data in-memory temporary so when the data is required again it can be delivered faster. We could scale up by multiplying clusters.

### Drawback!

As it is an in-memory storage it requires a huge RAM.

#### Keys elements to be monitored

We should monitor specifically the RAM usage.