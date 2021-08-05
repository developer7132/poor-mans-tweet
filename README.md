# Summary
  Created a "Pooer Main's Twitter" by using Django and Vue.js

# Installation
  ## Prerequisites
    1. Install [Python](https://www.python.org/downloads/)
    2. Install [npm](https://nodejs.org/en/download/)
    
  ## Install Dependencies
    1. Install Django dependencies.
      - Navigate to project path.
      - Install virtualenv 
        `python -m venv venv`
      - Activate venv
        `source venv/bin/activate`
      - Install dependencies
        `pip install -r requirements.txt`
       
    2. Install Vue dependencies.
      - Navigate to `front` repository
      - Install npm packages
        `yarn install` or `npm install`
       
  ## Migrate Database
      Run migration command inside the project repository
        `python manage.py migrate`
        
# How to Test
  ## Run Django and Vue project on development mode
      - Run Django project
        `python manage.py runserver`
      - Run Vue project
        `yarn serve` or `npm run serve`
        
  ## Hit `localhost:8080` on the browser.
  ## Create Tweet.
    Fill in name and content.
    Click submit.
    If the name is null or the content length is less than 50, it will not be submitted.
    
