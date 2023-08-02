# Company Ratings - JSB21RT

This is the repository of the project "Company Ratings," a search portal for companies with historical employee information, allowing job seekers to find the perfect company based on ratings and reviews from previous employees.

## Configuration and Installation

1. Install the necessary dependencies.
2. Create the .env file and configure the required environment variables (see .env.example).
3. Run 'npm run initDb' to create the necessary tables in the database.
4. Start the server.

## Database

### USERS

| Field            | Type         | Description                                |
| ---------------- | ------------ | ------------------------------------------ |
| id               | CHAR(36)     | Unique identifier for the user             |
| email            | VARCHAR(100) | User's email address                       |
| password         | VARCHAR(100) | User's password (hashed)                   |
| firstName        | VARCHAR(50)  | User's first name                          |
| lastName         | VARCHAR(100) | User's last name                           |
| photo            | CHAR(40)     | Image name for user's photo                |
| bio              | TEXT         | User's biography                           |
| active           | BOOLEAN      | Indica si el usuario está activo o no      |
| createdAt        | DATETIME     | Date and time of user creation             |
| modifiedAt       | DATETIME     | Date and time of last modification         |
| registrationCode | CHAR(30)     | Registration code                          |
| recoverPassCode  | CHAR(10)     | Recovery password code                     |
| modifiedAuth     | DATETIME     | Date and time of private info modification |

### COMPANIES

| Field      | Type         | Description                        |
| ---------- | ------------ | ---------------------------------- |
| id         | CHAR(36)     | Unique identifier for the company  |
| photo      | CHAR(40)     | Image name for the company         |
| name       | VARCHAR(100) | Company name                       |
| country    | VARCHAR(100) | Company's country                  |
| city       | VARCHAR(100) | Company's city                     |
| userId     | CHAR(36)     | User ID (foreign key)              |
| createdAt  | DATETIME     | Date and time of creation          |
| modifiedAt | DATETIME     | Date and time of last modification |

### RATINGCOMPANIES

| Field               | Type     | Description                      |
| ------------------- | -------- | -------------------------------- |
| id                  | CHAR(36) | Unique identifier for the rating |
| salary              | TINYINT  | Salary rating                    |
| workEnvironment     | TINYINT  | Work environment rating          |
| promotionPosibility | TINYINT  | Promotion possibility rating     |
| accessibility       | TINYINT  | Company accessibility rating     |
| companyId           | CHAR(36) | Company ID (foreign key)         |
| userId              | CHAR(36) | User ID (foreign key)            |
| createdAt           | DATETIME | Date and time of creation        |

### EMPLOYEES

| Field          | Type        | Description                         |
| -------------- | ----------- | ----------------------------------- |
| id             | CHAR(36)    | Unique identifier for the employee  |
| userId         | CHAR(36)    | Associated user ID (foreign key)    |
| companyId      | CHAR(36)    | Associated company ID (foreign key) |
| position       | VARCHAR(50) | Employee's position                 |
| validationCode | VARCHAR(30) | Employee validation                 |
| createdAt      | DATETIME    | Date and time of employee creation  |

## Endpoints

## User Endpoints

-   **POST** - [`/users/register`] - Allows users to register by providing name, email, password, bio, and photo. ✅
-   **PUT** - [`/users/validate/:registrationCode`] - Validates a newly registered user. ✅
-   **POST** - [`/users/login`] - Allows users to log in using email and password. ✅
-   **GET** - [`/users`] - Retrieves the own profile of the authenticated user. ➡️ `Token` ✅
-   **GET** - [`/users/:userId`] - Retrieves the profile of a user. ✅
-   **PUT** - [`/users/email`] - Updates the email of the authenticated user's profile. ➡️ `Token`✅
-   **PUT** - [`/users/password`] - Updates the password of the authenticated user's profile. ➡️ `Token` ✅
-   **POST** - [`/users/password/recover`] - Sends a password recovery email to the user.
-   **PUT** - [`/users/password/reset`] - Updates the user's password using a recovery code.
-   **PUT** - [`/users/photo`] - Updates the photo of the authenticated user's profile. ➡️ `Token`
-   **PUT** - [`/users/bio`] - Updates the biography of the authenticated user's profile. ➡️ `Token`
-   **POST** - [`/users/employees`] - Allows registered users to add themselves as employees to a company by providing the company ID and position.

## Company Endpoints

-   **GET** - [`/companies`] - Retrieves a list of companies (can be filtered by city or country).
-   **POST** - [`/companies`] - Allows registered users to publish a new company by providing the name, city, and country.
-   **GET** - [`/companies/:companyId`] - Retrieves all info about a specific company.
-   **POST** - [`/companies/:companyId/employees/:employeeId/confirm`] - Sends an email to the user who published the company to confirm the employment relationship with the specified employee. ➡️ `Token`

## Ratings Endpoints

-   **POST** - [`/ratings`] - Allows validated employees to make a rating for a company by providing the employee ID and ratings for aspects (work environment, accessibility, salaries, promotion possibility).
-   **GET** - [`/ratings/companies/:companyId`] - Retrieves a list of all ratings associated with the company with the provided ID.

## Additional Endpoints

### Ratings for a Specific Employee

-   **GET** [`/ratings/employees/:employeeId`] - Retrieves a list of all ratings made by the employee with the provided ID.

## TEAM NOTES
