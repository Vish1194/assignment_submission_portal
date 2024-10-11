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
    
        git clone https://github.com/Vish1194/assignment_submission_portal.git

2. **Install the dependencies:**

        cd assignment_submission_portal
        
        npm install

3. **Setup Google OAuth**

    **If you have Client ID and Client Secret of Google OAuth already, then proceed to next step.**

    [If you don't have Client ID and Client Secret of Google OAuth then follow these step](#setup-google-oauth)

4. **Set up the environment variables:**

    Create a .env file in the root directory of the project.

    Add the following variables to the .env file

        MONGODB_CONN_STRING="YOUR_MONGODB_CONNECTION_STRING"
        DB_NAME="YOUR_DATABASE_NAME"
   Copy and Paste the Client ID and Client Secret to the .env file
   
        GOOGLE_CLIENT_ID="GOOGLE_OAuth_CLIENT_ID"
        GOOGLE_CLIENT_SECRET="GOOGLE_OAuth_CLIENT_ID"

    NOTE: Add BASE_URL="YOUR_URL" variable, only if you change port. Else no need to add base url.

6. **Start the development server:**

        npm run dev

## Usage

1. **Admin Flow**
    
    Select 'Admin' option in Navigation Menu.

    Click on the "Sign in with Google" button.

    Follow the Google sign-in flow to sign in with your Google account.

    Upon successfull sign in, you will be redirected to admin/dashboard

    Here you can see Pending tasks, which you can ACCEPT or REJECT.

    In Finalized tasks section, you can see all task which are accepted or rejected previously.

   ![admin_flow](https://github.com/user-attachments/assets/1a16bfd2-96ac-43e2-a90b-00cff2144acf)


3. **User Flow**

    Go to http://localhost:3000 (if you didn't changed)

    Click on the "Sign in with Google" button.

    Follow the Google sign-in flow to sign in with your Google account.

    Upon successfull sign in, you will be redirected to /dashboard

    Here you can upload the select the admin, and you can define the task in provided textarea, and POST TASK.


![user_flow](https://github.com/user-attachments/assets/cd290787-0d02-4635-9fe6-429bd9901755)



#### **SETUP Google OAuth**
go to https://console.cloud.google.com/

Login with your gmail account,create one if you don't have one.

Create new project and give it some name (to create new cloud project you don't need to have gcp(google cloud) account) 

Then go to navigation menu and hover on api & services click on oAuth consent screen

![1](https://github.com/user-attachments/assets/11d9cd13-4a37-49b7-bc5b-b4b9428c4a30)

Fill only neccessary (marked asteriek) info  then, click on save and continue.

![2](https://github.com/user-attachments/assets/e4c5f698-2202-4a8a-89ac-7467559c393f)

![3](https://github.com/user-attachments/assets/8035c046-1c02-42a1-b405-648dff1b2f1e)

Now click on add/remove scope and check first two options and click on save and continue.

![4](https://github.com/user-attachments/assets/fd16dc1d-daec-4ad4-a749-f77e588d8548)

Now click on add users and add your email. and then click on save and continue and then back to dashboard. 
    
![5](https://github.com/user-attachments/assets/ec1b2624-4f5e-40f3-a3fd-fef07f4496ff)

Now click on Credentials and click on OAuth Client Id in create credentilas option

![6](https://github.com/user-attachments/assets/410cbf2b-6866-480c-892c-15ffb9521aea)

Now fill the information as shown below

![7](https://github.com/user-attachments/assets/7850f9c8-2811-4080-a1c2-824d0ca3e3be)

Finally you will get Client id and Client secret copy and paste in .env file as shown below. 

![clientidsecret](https://github.com/user-attachments/assets/4e9d4e68-f17f-4d14-ab59-11721865e1d3)
