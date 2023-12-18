# 11343719_DCIT205_Mini-IA


Electronic Medical Record System (EMRS)
 The system is designed to streamline patient registration, encounter management, and vital data submission processes.

Technology Stack
The backend of EMRS is implemented using Node.js with the Express Framework for building robust REST APIs. 
MongoDB serves as the primary database for persisting data, allowing efficient and scalable storage for patient information and medical encounters.

Project Structure
server.js: The main server file sets up the Express application, connects to the MongoDB database, and defines middleware for handling JSON data.
/models: Contains Mongoose models for defining the structure of patient and encounter data.
/routes: Houses route handlers for patient and encounter operations.
/controllers: Implements logic for handling requests and interacting with the database.
/middlewares: Includes middleware functions for request validation.
/config: Contains the MongoDB connection setup.
Getting Started
Clone the repository.
Install dependencies with npm install.
Start the server with node server.js.
Endpoints
Patient Registration: POST /patients/register
List Patients: GET /patients/list
Patient Details: GET /patients/:patientId
Start Encounter: POST /encounters/start
Submit Vitals: POST /encounters/vitals
