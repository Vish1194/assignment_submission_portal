# Assignment Submission Portal

This is an assignment submission portal built with
Next.js, MongoDB, and Auth.js. It allows users to submit assignments and admins to handle those assignments.

## Tech Stack

Programming Language : **JavaScript**

Fornt-end : **Tailwind CSS, React.js, Next.js**

Back-end : **Next.js, Node.js, Auth.js**

Database : **Mongo DB**

## Installation

1. **Clone the repository:**
    
        git clone 

2. **Install the dependencies:**

        cd assignment_submission_portal
        
        npm install

3. **Setup Google OAuth**

    **If you have Client ID and Client Secret of Google OAuth already, then skip to next step.**

    If you don't have Client ID and Client Secret of Google OAuth then follow these step

4. **Set up the environment variables:**

    Create a .env file in the root directory of the project.

    Add the following variables to the .env file

        MONGODB_CONN_STRING="YOUR_MONGODB_CONNECTION_STRING"
        DB_NAME="YOUR_DATABASE_NAME"
        GOOGLE_CLIENT_ID="GOOGLE_OAuth_CLIENT_ID"
        GOOGLE_CLIENT_SECRET="GOOGLE_OAuth_CLIENT_ID"

    NOTE: Add BASE_URL="YOUR_URL" variable, only if you change port. Else no need to add base url.

5. **Start the development server:**

    npm run dev

## Usage

1. **Admin Flow**
    
    Select 'Admin' option in Navigation Menu.

    Click on the "Sign in with Google" button.

    Follow the Google sign-in flow to sign in with your Google account.

    Upon successfull sign in, you will be redirected to admin/dashboard

    Here you can see Pending tasks, which you can ACCEPT or REJECT.

    In Finalized tasks section, you can see all task which are accepted or rejected previously.

2. **User Flow**

    Go to http://localhost:3000 (if you didn't changed)

    Click on the "Sign in with Google" button.

    Follow the Google sign-in flow to sign in with your Google account.

    Upon successfull sign in, you will be redirected to /dashboard

    Here you can upload the select the admin, and you can define the task in provided textarea, and POST TASK.



#### **SETUP Google OAuth**
    go to https://console.cloud.google.com/

    Login with your gmail account,create one if you don't hav one.

    Create new project and give it some name (to create new cloud project you don't need to have gcp(google cloud) account) 

    Then go to navigation menu and hover on api & services click on oAuth consent screen

    Fill only neccessary (marked asteriek) info  then, click on save and continue.

    Now click on add/remove scope and check first two options and click on save and continue.

    Now click on add users and add your email. and then click on save and continue and then back to dashboard. 

    Finally you will get Client id and Client secret copy and paste in .env file as shown below.  