# Scatch - E-Commerce Platform

Scatch is a full-featured e-commerce platform built with Node.js and Express, featuring user authentication, product management, and shopping cart functionality.

## Tech Stack

- **Backend Framework:** Express.js
- **Template Engine:** EJS
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Password Encryption:** Bcrypt
- **File Upload:** Multer
- **Development Tools:** Nodemon

## Features

- 🔐 User Authentication System
  - User registration and login
  - Owner/Admin authentication
  - JWT-based session management
  - Encrypted password storage

- 🛍️ Product Management
  - Create, read, update, and delete products
  - Image upload functionality
  - Product categorization
  - Product listing and details view

- 🛒 Shopping Cart
  - Add/remove items
  - View cart contents
  - Update quantities

- 👤 User Roles
  - Regular users (customers)
  - Shop owners/administrators
  - Role-based access control

- 🎨 Responsive Design
  - Clean and modern interface
  - Mobile-friendly layout
  - Consistent styling across pages

## Project Structure

```
├── app.js                 # Application entry point
├── config/               # Configuration files
│   ├── database-connection.js
│   ├── development.json
│   └── multer-config.js
├── controllers/          # Route controllers
├── middlewares/         # Custom middleware
├── models/              # Database models
├── public/              # Static files
│   ├── css/
│   ├── images/
│   └── js/
├── routes/              # Route definitions
└── views/              # EJS templates
    └── partials/       # Reusable template parts
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/duanshi-26/Scatch.git
   cd Scatch
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a development configuration:
   - Copy `config/development.json.example` to `config/development.json` (if not exists)
   - Update the configuration with your MongoDB connection string and JWT secret

## Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Access the application:
   - Open your browser and navigate to `http://localhost:3000`
   - Default port is 3000 unless configured otherwise

## Available Scripts

- `npm start`: Runs the application in development mode with nodemon
- `npm test`: Runs the test suite (currently not configured)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

duanshi-26

---

For any additional questions or concerns, please open an issue in the repository.
