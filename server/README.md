```markdown
# BACK-END PROJECT

## Project Structure

```plaintext
nestjs-project/
│
├── src/                          # Source code of the NestJS application
│   ├── auth                      # Authentication-related features
│   │
│   ├── common/                   # Common utilities and shared components
│   │   ├── cloudinary            # Cloudinary configuration and services
│   │   ├── decorators             # Custom decorators for various functionalities
│   │   ├── exception-filters      # Global exception handling filters
│   │   ├── pipes                  # Data transformation and validation pipes
│   │   ├── interface              # Interfaces for TypeScript type definitions
│   │
│   ├── config                    # Configuration files and settings
│   │
│   ├── controllers               # Controllers to handle incoming requests
│   │
│   ├── dto/                      # Data Transfer Objects (DTOs) for request validation
│   │   ├── pet                   # DTOs related to pets
│   │   ├── userDto               # DTOs related to user data
│   │
│   ├── entities                  # Database entities representing models
│   │   
│   ├── modules                   # Feature modules to organize the application
│   │
│   ├── services                  # Business logic and service classes
│   │
│   ├── app.controller.ts         # Main application controller
│   ├── app.module.ts             # Root module of the application
│   ├── app.service.ts            # Main application service
│   ├── main.ts                   # Entry point of the application
│
├── .env                           # Environment variables for configuration
├── .env.template                  # Template for .env file structure
├── .eslintrc.js                   # ESLint configuration file
├── .gitignore                     # Files and directories to ignore in git
├── .prettierrc                    # Prettier configuration file for code formatting
├── nest-cli.json                 # Nest CLI configuration
├── package.json                  # Project metadata and dependencies
├── tsconfig.build.json           # TypeScript configuration for build
├── tsconfig.json                 # TypeScript configuration for development
└── README.md                     # Project documentation
```

## Environment Variables

```plaintext
# Database Host
DB_HOST=

# Database Port
DB_PORT=

# Database Username
DB_USERNAME=

# Database Password
DB_PASSWORD=

# Database Name
DB_NAME=

# Cloudinary Name
CLOUDINARY_NAME=

# Cloudinary Api Key
CLOUDINARY_API_KEY=

# Cloudinary Api Secret
CLOUDINARY_API_SECRET=

# JWT Secret
JWT_SECRET=

# CORS Origins
CORS_ORIGINS=

# Server Port
PORT=

# Node Environment
NODE_ENV= development # Change this to 'production' for production environment 
```

## Technologies Used

This project is built with the following technologies and dependencies:

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeORM**: An ORM that works well with NestJS to interact with databases.
- **JWT**: For authentication and authorization.
- **Cloudinary**: For managing media assets.
- **Swagger**: For API documentation and testing.

### Dependencies

The project dependencies can be found in the `package.json` file. Here are some of the most relevant ones:

- `@nestjs/common`: Common NestJS functionalities.
- `@nestjs/core`: Core NestJS library.
- `@nestjs/jwt`: JWT authentication integration.
- `@nestjs/swagger`: API documentation generation.
- `@nestjs/typeorm`: TypeORM integration with NestJS.
- `mysql2`: MySQL database driver.
- `bcrypt`: Password hashing.
- `class-validator` & `class-transformer`: For data validation and transformation.

## Starting the Project

To start the project, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

1. Clone the repository:
   ```bash
   git clone https://github.com/sotomen10/Project_PAM-React_NestJS.git
   ```

2. Navigate to the project folder:
   ```bash
   cd nestjs-project
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run start:dev
   ```

Your application will be available at `http://localhost:3001`.

## Deployment

The application is deployed and available at [API Documentation (Swagger)](https://back-pet-projectriwi-production.up.railway.app/api).
