# Pet Adoption Manager (PAM)

## Quick Introduction
Pet Adoption Manager (PAM) is a web application designed to facilitate the adoption of dogs and cats in the Valle de Aburrá. The platform centralizes information from various foundations, helping adopters easily find their future companions and simplifying the adoption process.

```
Project_PAM-React_NestJS/
│
├── client/      # Frontend code (React)
│   └── README.md  # Client README
│
└── server/      # Backend code (NestJS)
    └── README.md  # Server README
```

## Instructions to Run the Project

### Prerequisites
- Node.js v20.17.0
- NPM 10.8.2
- A MySQL (for backend)

### Running the Project
1. **Clone the repository:**
   ```bash
   git clone https://github.com/sotomen10/Project_PAM-React_NestJS.git
   cd Project_PAM-React_NestJS
   ```

2. **Start the backend:**
   - Navigate to the server directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     npm run start
     ```
   - The server will be available at `http://localhost:3001`.

3. **Start the frontend:**
   - Open a new terminal and navigate to the client directory:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the client:
     ```bash
     npm start
     ```
   - The application will be available at `http://localhost:3000`.

### Deployment
The application is deployed and available at [https://front-pet-project-nine.vercel.app/](https://front-pet-project-nine.vercel.app/).

### Viewing Project Structure

To view the structure of the backend and frontend, please refer to the following READMEs:

- **Frontend (React)**: [Client README](client/README.md)
- **Backend (NestJS)**: [Server README](server/README.md)

## Contents
1. [General Objective](#General-Objective)
2. [Problem Statement](#Problem-Statement)
3. [Project Scope](#Project-Scope)
4. [Project Logo](#Project-Logo)
5. [Slogan](#Slogan)
6. [Project Product Title](#Project-Product-Title)
7. [Group Members](#Group-Members)
8. [Environment Variables](#Environment-Variables)
9. [Database Model](#Database-Model)
10. [UML Class Models](#UML-Class-Models)
11. [Component Architecture Model](#Component-Architecture-Model)
12. [Use Cases](#Main-Use-Cases)
13. [User Stories - Epics](#User-Stories---Epics)
14. [Functional Requirements](#Functional-Requirements)
15. [Non-Functional Requirements](#Non-Functional-Requirements)
16. [Project Management Board Links](#Project-Management-Board-Links)
17. [Project Prototype Link](#Project-Prototype-Link)

---

## General Objective
To develop a website that allows users to search for and adopt dogs and cats currently in temporary homes in the Valle de Aburrá, facilitating contact between adopters and animal protection organizations.

## Problem Statement
In the Valle de Aburrá, many people want to adopt a pet, but information about available animals is scattered among different foundations. This complicates the adoption process, making it confusing and frustrating for interested parties. Our solution is to centralize all information in a single web application.

## Project Scope
The project will present an MVP (Minimum Viable Product) that centralizes information from various foundations in the Valle de Aburrá so that users can obtain unified information and proceed with pet adoption.

If the MVP is approved, the next steps will include:

- Searching for pets by breed, age, size, gender, location, and special needs.
- Viewing detailed profiles of each pet with photos and relevant information.
- A matching system to facilitate adoption.
- Managing adoption requests and communication with adopters.

## Project Logo
![image](https://github.com/user-attachments/assets/d3abee25-baf5-4660-8047-7f5d5d2d0194)  

## Slogan
**"Más que una adopción, es un propósito."**

## Project Product Title
**Pet Adoption Manager (PAM)**

### Why?
PAM arises from the need to simplify the pet adoption process, allowing interested parties to easily access information about various adoption points.

### What for?
With PAM, users can explore options and find their next life companion without having to visit each foundation individually.

### For whom?
It is aimed at individuals and families who wish to adopt pets, providing them with a platform to simplify the process.

## API Endpoint Documentation
You can find the complete documentation of the endpoints through Swagger at the following link:
[Documentación Swagger](https://back-pet-projectriwi-production.up.railway.app/api)

## UML Diagram
![image](https://github.com/user-attachments/assets/bb0a03ce-fe1f-4edc-871e-7eb8524e32d8) 

## Database Model
![image](https://github.com/user-attachments/assets/3d973ac3-2014-4ad4-8831-0014e7fd59b0)

## UML Class Models
![image](https://github.com/user-attachments/assets/4cce14da-6dd0-4c98-a628-d6dd700280d5) 

## Component Architecture Model
The project's architecture uses the Model-View-Controller (MVC) pattern in both the front-end and back-end. 
![image](https://github.com/user-attachments/assets/bae4911d-ca65-4f91-96b1-b49d2193c057)

### What is MVC?
MVC, or Model-View-Controller, is a software architecture pattern that separates application logic from view logic. This pattern is divided into three main components:
- **Model**: Represents the structure of data and business logic.
- **View**: The user interface that presents data to the end user.
- **Controller**: Acts as an intermediary between the Model and the View, managing user input and updating the Model or View accordingly.

Using MVC is important as it allows for a clear separation of responsibilities and facilitates scalability and maintenance of the software. Most modern frameworks use MVC or some adaptation of it for application architecture.

## Main Use Cases
1. **View available dogs and cats for adoption**  
   - Actor: Visitor user.
   - Flow: View the list of pets, filter by species, breed, age, etc.
   
2. **Send contact form for adoption**  
   - Actor: Visitor user.
   - Flow: Submit a contact form to adopt a pet.

3. **Pet registration by master user**  
   - Actor: Master user.
   - Flow: Register a new pet available for adoption.

4. **Master user registration**  
   - Actor: System administrator.
   - Flow: Register a new master user.

5. **Pet management**  
   - Actor: Master user.
   - Flow: Update or delete registered pets.  

## User Stories - Epics

### EPICS BACKEND
#### Users
- **Create User**: Implement functionality to register new users.
- **Implement Exceptions**: Handle errors and exceptions during user operations.
- **List Users**: Retrieve a list of all registered users.
- **Update Profile**: Allow users to update their personal information.
- **Log In**: Implement functionality for users to log in.
- **Implement Controllers**: Develop controllers to manage user requests.
- **Implement Validations**: Validate user input data.

#### Database
- **Create Class Diagram**: Design a class diagram for the database.
- **Database Implementation**: Create the database according to the defined model.
- **UML Implementation**: Implement the UML model in the database.

#### Pets
- **Delete Pet**: Allow deletion of pet records.
- **Update Pet Information**: Facilitate the updating of pet data.

#### Pet-photo
- **Upload a Pet Photo**: Implement functionality for users to upload photos of their pets.

### EPICS FRONTEND
#### User
- **Register New User**: Implement the form for registering new users.
- **User Log In**: Develop the interface for users to log in.

#### Pet
- **CRUD for Pets**: Allow Create, Read, Update, and Delete (CRUD) operations in pet management.
- **Delete Pet**: Implement functionality to delete pet records.
- **View List of Available Pets**: Show a list of all pets available for adoption.
- **View Pet Details**: Provide detailed information about each pet.

#### Organization
- **CRUD for Foundation**: Allow CRUD operations to manage foundations.

#### Pet-photo
- **Update Pet Information**: Facilitate the updating of pet information and photos.

## Functional Requirements
1. **CRUD for Users (Master User)**
   - Create, list, update, and delete users.
2. **CRUD for Pets (Master User)**
   - Create, list, update, and delete pets.
3. **Access to Pets (Visitor User)**
   - View the list of pets available for adoption.
4. **User Registration**
   - Allow registration of new users.

## Non-Functional Requirements
1. **Usability**
   - Intuitive and easy-to-navigate interface.
2. **Performance**
   - Fast page loading.
3. **Security**
   - Proper management of permissions between users.
4. **Compatibility**
   - Compatible with the most used browsers.
5. **Accessibility**
   - Comply with web accessibility guidelines (WCAG).

## Links to Project

 Management Boards
- **Project Management Board - Frontend**: [PAM Front](https://acanorave.atlassian.net/jira/software/projects/PAM/boards/3)
- **Project Management Board - Backend**: [PAM Backend](https://acanorave.atlassian.net/jira/software/projects/PAMB/boards/4)

## Completed Work Report - Frontend
![image](https://github.com/user-attachments/assets/2c482808-8ee0-4861-ac65-009f000c4a03) 

## Accumulative Flow Diagram - Frontend
![image](https://github.com/user-attachments/assets/2dc1edf6-a2d3-4bb3-ab3e-1e5be455abeb)

## Completed Work Report Backend
![image](https://github.com/user-attachments/assets/f5adba6a-cacc-421f-9020-fd83e4ee8f77)

## Accumulative Flow Diagram Backend
![image](https://github.com/user-attachments/assets/fdf8f871-ed5d-4eaa-82b8-dc8c5593546d)
