## PHASE 1 – Backend & Node.js Foundations
- What is backend? (the kitchen of a restaurant) ✅
- Client‑server architecture (customer and waiter/chef) ✅
- CLI vs GUI (talking directly vs pointing and clicking)✅
- What Node.js actually is (a program that runs JavaScript outside your browser)
- Why Node exists (to build fast, scalable network programs)
- V8 engine (the brain that reads JavaScript)
- Event loop (the manager that never sleeps)
- Call stack (your to‑do list)
- Microtasks vs macrotasks (urgent vs normal chores)
- libuv (the helper that does slow work like reading files)
- Non‑blocking I/O (not waiting for the toast to pop)
- Modules (CommonJS vs ESM) (different ways to share code)
- Built‑in modules (fs, path, http, events, streams)
- History of Node.js (a quick story)

## PHASE 2 – Terminal & OS Fundamentals
- Terminal and shell (the command centre)
- Basic shell commands (echo, pwd, whoami, ls, cd, touch, mkdir, cp, mv, rm, cat, grep, ps, kill)
- Editing files (nano, vim basics)
- Prompt and .bashrc/.zshrc (customising your command centre)
- Aliases (shortcuts for commands)
- CPU, cores, processes, threads (the factory floor)
- Concurrency vs parallelism (juggling vs two hands)
- Environment variables (settings for your app)
- Executable files and PATH
- File permissions (chmod, chown)
- Process signals (SIGTERM, SIGKILL)
- WSL (Windows Subsystem for Linux)
- process object in Node (your app's ID card)

## PHASE 3 – Node Module System & Package Management
- CommonJS (require, module.exports)
- module.exports vs exports (the subtle difference)
- Module wrapper function (what Node adds around your code)
- Module resolution algorithm (how Node finds and loads modules)
- ES modules (import/export)
- __filename and __dirname in ESM (and how to get them)
- NPM deep dive: what happens during npm install, package-lock.json, node_modules structure
- package.json deep dive (every field explained)
- Semantic versioning
- npx internals (running without installing)
- Shebang (#!/usr/bin/env node)
- Publishing packages
- CLI vs library packages (design differences)

## PHASE 4 – Working with Files (fs module) & Paths
- File system basics: reading/writing files (sync vs callback vs promise)
- File descriptors (handles to open files)
- Path manipulation (path module)
- Watching files
- Working with directories
- File stats
- Symlinks
- Mini project: File organizer CLI (sort files by extension)

## PHASE 5 – Data Representation, Buffers, and Binary
- Binary, decimal, hex systems (how computers count)
- Character encoding (ASCII, Unicode, UTF‑8, UTF‑16)
- Endianness (byte order)
- ArrayBuffer (raw memory)
- Typed arrays (Uint8Array, etc.)
- Node Buffer (the Node way to handle binary)
- alloc vs allocUnsafe (safe vs fast memory)
- Buffer pool (reusing memory for efficiency)
- Base64, hex encoding/decoding
- Writing binary to disk and network

## PHASE 6 – Event‑Driven Architecture & EventEmitter
- Understanding events and callbacks
- EventEmitter class: on, emit, once, removeListener
- How EventEmitter works internally (listeners array)
- Error events
- Inheriting from EventEmitter
- Real-world use: custom event-driven systems
- Memory leaks with listeners

## PHASE 7 – Streams – The Node.js Superpower
- What are streams? (water flowing through pipes)
- Why streams are memory-efficient
- Types: Readable, Writable, Duplex, Transform
- Internal mechanics: buffers, flowing vs paused modes, _read, _write
- Piping (pipe() and pipeline)
- Backpressure (when the sink can't keep up)
- Implementing custom streams
- Using built-in streams: fs.createReadStream, http request/response
- Benchmark: Compare reading large file with fs.readFile vs stream

## PHASE 8 – Networking Fundamentals
- How the internet works (simplified)
- IP addresses (v4 & v6) (street addresses)
- Ports (apartment numbers)
- DNS (phonebook of the internet)
- TCP vs UDP (reliable mail vs fast postcards)
- OSI vs TCP/IP model (the layers of networking)
- HTTP basics (request/response, methods, status codes, headers)
- HTTPS and TLS
- SSH (secure shell)
- SCP (secure copy)
- Firewalls (bouncers at the door)
- Public vs private IP, NAT
- Tools: ping, netstat, curl, telnet, nslookup

## PHASE 9 – Building Network Servers with Core Modules
- TCP server with net module
- UDP server with dgram module
- Building an HTTP server from scratch with http module
- Understanding HTTP headers, request/response objects
- Serving static files
- Handling different routes manually
- Mini project: Simple file server (like python's http.server)

## PHASE 10 – Express.js & RESTful APIs
- Why Express? (routing, middleware, ecosystem)
- Express internals: what app.use does, how middleware stack works
- Routing: app.get, app.post, route parameters
- Middleware: body-parser, cors, morgan, static
- Error handling middleware
- Creating a REST API (CRUD)
- File upload with multer (handling multipart)
- Security considerations: path traversal, CORS
- Mini project: Task manager API with Express

## PHASE 11 – Databases – MongoDB & PostgreSQL
- How Node talks to a database (drivers, connection strings)
- Connection pooling (reusing connections)
- MongoDB: document model, CRUD operations, indexing, aggregation
- PostgreSQL: relational model, SQL basics, joins, indexing, transactions
- ACID explained (Atomicity, Consistency, Isolation, Durability)
- When to use NoSQL vs SQL
- ORM vs query builders (Mongoose, Sequelize, Knex)
- Schema validation and migrations
- Backup and restore basics

## PHASE 12 – ORM/ODM Deep Dive – Mongoose
- Schema definition, data types
- Models and instances
- CRUD with Mongoose
- Middleware (pre/post hooks)
- Validation (built-in and custom)
- Indexes
- Population (referencing)
- Virtuals
- Embedded vs referenced documents (schema design)
- Performance considerations

## PHASE 13 – Authentication & Authorization
- Hashing passwords (bcrypt, scrypt, pbkdf2)
- JWT: structure, signing, verification, when to use
- Sessions: server-side storage (memory, database, Redis)
- OAuth2 and OpenID Connect (login with Google, GitHub)
- Security: CSRF, XSS, SQL injection, NoSQL injection
- Rate limiting and brute force protection
- Security headers (Helmet.js)
- HTTPS setup (Let's Encrypt)
- Role-based access control (RBAC)
- Mini project: Add authentication to task manager API

## PHASE 14 – Caching with Redis
- Why caching? (speed, reduce database load)
- Redis data structures: strings, hashes, lists, sets, sorted sets
- Common use cases: session store, rate limiting, job queue, cache
- Eviction policies (LRU, LFU, TTL)
- Redis pub/sub for real-time messaging
- Using Redis with Node (ioredis, node-redis)
- Project: Implement rate limiting and session store with Redis

## PHASE 15 – Testing Node.js Applications
- Types of tests: unit, integration, e2e
- Testing frameworks: Jest, Mocha, Chai, Supertest
- Mocking and stubbing (sinon)
- Test-driven development basics
- Testing database interactions
- Testing authentication and middleware
- Code coverage
- CI integration

## PHASE 16 – Deployment & Infrastructure
- Process managers: PM2 (clustering, monitoring)
- Reverse proxy with NGINX (load balancing, SSL termination)
- Docker: containerizing Node apps, Dockerfile best practices, docker-compose
- Environment configuration (12-factor app)
- CI/CD with GitHub Actions (build, test, deploy)
- Zero-downtime deployments
- Environment variables management
- Basic server hardening (firewall, fail2ban)

## PHASE 17 – Cloud Services (AWS)
- EC2: virtual machines, security groups, SSH
- S3: object storage, buckets, static hosting, signed URLs
- IAM: users, roles, policies
- CloudFront: CDN, caching, SSL
- RDS: managed databases (PostgreSQL)
- ElastiCache: managed Redis
- Deploying a Node app on EC2 or Elastic Beanstalk
- Project: Deploy task manager with S3 for file uploads

## PHASE 18 – Serverless Architecture
- What is serverless? (FaaS)
- AWS Lambda: execution model, cold starts, limits
- API Gateway: REST APIs for Lambda
- Running Express in Lambda (serverless-http)
- Serverless Framework / SAM
- Pricing considerations
- When to use serverless vs traditional

## PHASE 19 – Message Queues & Event‑Driven Architecture
- Why message queues? (decoupling, reliability, scaling)
- RabbitMQ vs Kafka vs SQS (brief comparison)
- Basic patterns: work queues, pub/sub, routing, topics
- Implementing with Bull (Redis-based queue)
- Event-driven microservices
- Idempotency and retries

## PHASE 20 – Observability & Production Readiness
- Logging: structured logging (pino, winston), log levels, centralization (ELK, Loki)
- Metrics: Prometheus, custom metrics (response time, error rate, request rate)
- Tracing: OpenTelemetry, distributed tracing (Jaeger)
- Health checks
- Alerting (Prometheus Alertmanager)
- Debugging production: heap dumps, CPU profiles, memory leaks
- Performance profiling (clinic.js, 0x)

## PHASE 21 – Node.js Internals Deep Dive
- Node architecture: JS layer, bindings, libuv, V8
- V8: hidden classes, inline caching, garbage collection (generational, mark-sweep)
- libuv: event loop phases (timers, I/O callbacks, idle, poll, check, close), thread pool
- Event loop blocking and how to avoid
- Memory management in Node
- Common memory leak patterns and detection
- Exploring Node source code

## PHASE 22 – Scaling Node.js Applications
- Horizontal scaling: multiple instances, load balancers
- Stateless design
- Database replication and sharding
- Caching strategies (CDN, Redis, database caching)
- Microservices vs monoliths
- Service discovery
- API gateways
- Circuit breakers and retries

## PHASE 23 – Advanced Architecture Patterns
- Clean architecture / Hexagonal architecture
- Domain-driven design (DDD) basics
- CQRS and Event Sourcing
- GraphQL (Apollo Server) vs REST
- WebSockets for real-time (Socket.io)
- gRPC for inter-service communication

## PHASE 24 – Capstone Project – Build a Production‑Ready Platform
- Build a full‑scale course hosting platform (like Udemy clone):
  - Authentication system (signup, login, roles)
  - RBAC (admin, instructor, student)
  - Course creation and management
  - Video upload and processing (transcoding)
  - Streaming (HLS, adaptive bitrate)
  - CDN integration (CloudFront)
  - Payments (Stripe/Razorpay, subscriptions)
  - Caching (Redis for sessions, database queries)
  - Search functionality
  - Testing (unit, integration, e2e)
  - CI/CD (automatic deployment on push)
  - Observability (logs, metrics, traces)
  - Cloud deployment (AWS, auto‑scaling)
  - Scaling strategies (horizontal scaling, database replication)