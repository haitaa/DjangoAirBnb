# DjangoAirBnb

## Overview
DjangoAirBnb is a web application inspired by Airbnb, built using Django and TypeScript. It provides a platform for users to list and book accommodations, featuring a real-time chat system.

## Features
- **User Authentication & Authorization**
- **Property Listings** with descriptions and images
- **Booking Management**
- **Reviews & Ratings**
- **Chat Feature** for user communication

## Technologies Used
- **Backend:** Django (Python)
- **Frontend:** TypeScript
- **Database:** PostgreSQL

## Getting Started

### Prerequisites
- Python 3.x
- Node.js
- PostgreSQL

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/haitaa/DjangoAirBnb.git
2. **Navigate to the project directory and set up a virtual environment:**
   ```bash
   cd DjangoAirBnb
   python -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
3. **Install dependencies:**
  ```bash
  pip install -r requirements.txt
  ```

4. **Set up PostgreSQL and update the database settings in settings.py.**
  
5. **Apply migrations and run the development server:**
   ```bash
   python3 manage.py migrate
   python3 manage.py runserver
   ```

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

### License
This project is licensed under the MIT License.

### Acknowledgements 
Inspired by the original **Airbnb** platform.


