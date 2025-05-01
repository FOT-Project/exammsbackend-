# Express.js REST API Starter

## Project dependencies

### **1. Clone the Repository**

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/FOT-Project/express-api-starter.git

cd express-api-starter
```

### **2. Install Dependencies**

Install the required dependencies using `npm` or `yarn`:

```bash
npm install
```

### **3. Configure Environment Variables**

1. Rename the `.env` file or create a new `.env` file in the root directory.
2. Update the following environment variables in the `.env` file:
   ```plaintext
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=express_starter
   DB_USERNAME=root
   DB_PASSWORD=
   DB_DIALECT=mysql
   ```
   - Replace the values with your database credentials.

### **4. Set Up the Database**

1. Ensure you have a MySQL database running.
2. Create a database with the name specified in the `.env` file (`DB_NAME`).

### **5. Run Migrations**

Run the Sequelize migrations to create the necessary tables in the database:

```bash
npm run migrate
```

### **6. Seed the Database**

(Optional) Populate the database with initial data using seeders:

```bash
npm run seed
```

### **7. Start the Development Server**

Start the server in development mode:

```bash
npm run dev
```

- The server will run on the port specified in the `.env` file (default: `3000`).

### **8. Test the API**

1. Use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test the API endpoints.
2. Available routes:
   - `GET /` - Welcome message.
   - `GET /users` - Fetch all users.
   - `GET /users/:id` - Fetch a user by ID.
   - `POST /users` - Create a new user.
   - `PUT /users/:id` - Update a user by ID.
   - `DELETE /users/:id` - Delete a user by ID.

### **9. Run Tests**

If tests are included, run them using:

```bash
npm test
```

### **10. Deploy the Application**

1. **Prepare for Production:**
   - Set the `NODE_ENV` to `production`.
   - Update the `.env` file with production database credentials.
2. **Start the Server:**
   ```bash
   npm start
   ```

### **11. Additional Commands**

- **Undo Last Migration:**
  ```bash
  npm run migrate:undo
  ```
- **Undo All Migrations:**
  ```bash
  npm run migrate:undo:all
  ```
- **Undo Seeders:**
  ```bash
  npm run seed:undo
  ```
- **Undo All Seeders:**
  ```bash
  npm run seed:undo:all
  ```

### **12. Project Structure Overview**

- **`server.js`**: Main server file.
- **`routes/`**: Contains route definitions.
- **`controllers/`**: Handles request logic.
- **`services/`**: Business logic layer.
- **`repositories/`**: Database interaction layer.
- **`models/`**: Sequelize models.
- **`migrations/`**: Database migration files.
- **`seeders/`**: Database seed files.
- **`config/`**: Configuration files.
