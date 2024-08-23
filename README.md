# snapnet-exam
Snpanet Test for the role of NodeJs Developer

**Problem Statement**

Develop a RESTful API for an inventory management system with authentication to track products, 
warehouses, and stock levels. The system should provide secure endpoints for creating, reading, 
updating, and deleting inventory data.

**Technical Requirements**

• Stack: Node.js, Express with TypeScript, Sequelize, MySQL
• Authentication: JSON Web Token (JWT)

**Database Schema**

**Tables:**

• users (id, username, email, password, role, createdAt, updatedAt)
• products (id, name, description, price, createdAt, updatedAt)
• warehouses (id, name, location, capacity, createdAt, updatedAt)
• stocks (id, productId, warehouseId, quantity, createdAt, updatedAt)

**API Endpoints**

**Authentication**:

• POST /login: Authenticates a user and returns a JWT token.
• POST /register: Registers a new user.

**Products:**

• GET /products (protected): Retrieves a list of all products with pagination and filtering 
options.
• GET /products/:id (protected): Retrieves a specific product by ID.
• POST /products (protected): Creates a new product.
• PUT /products/:id (protected): Updates an existing product.
• DELETE /products/:id (protected): Deletes a product.

**Warehouses:**

• GET /warehouses (protected): Retrieves a list of all warehouses with pagination and filtering 
options.
• GET /warehouses/:id (protected): Retrieves a specific warehouse by ID.
• POST /warehouses (protected): Creates a new warehouse.
• PUT /warehouses/:id (protected): Updates an existing warehouse.
• DELETE /warehouses/:id (protected): Deletes a warehouse.

**Stocks:**

• GET /stocks (protected): Retrieves a list of all stocks with pagination and filtering options.
• GET /stocks/:id (protected): Retrieves a specific stock by ID.
• POST /stocks (protected): Creates a new stock record.
• PUT /stocks/:id (protected): Updates an existing stock record.
• DELETE /stocks/:id (protected): Deletes a stock record.

**Additional Requirements**

• Roles: Implement different user roles with varying permissions (e.g., admin, manager, user).
• Error Handling: Implement proper error handling and return informative error messages.
• Data Validation: Validate input data to prevent invalid records.
• Security: Protect sensitive data using encryption and secure storage practices.
• Testing: Write unit and integration tests to ensure code quality and reliability.

**Evaluation Criteria**

• API design and adherence to RESTful principles.
• Database schema design and query efficiency.
• Code quality, readability, and maintainability.
• Authentication and authorization implementation.
• Error handling and exception management.
• Security best practices.
• Testing coverage and code quality.
• Performance optimization and scalability considerations
