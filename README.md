# assignment-2-3-3-liming65
assignment-2-3-3-liming65 created by GitHub Classroom
# Assignment  Details
Click the URL below to see how the database works without downloading the code and setting up enviroment:

# Language used
- React js and Next js will be used to develop the front end
- Node js on Azure is the backend
- PostgreSQL will be the database on Azure

# Summary of decisions on database part
I am working on the database part and I am going to set up postgreSQL database on Azure, as it is the required cloud platform from our partner. For now I am just going to make a simple schema and the purpose is to make sure users can type their "exercise progress information"， they will be able to save the info in the database and view the info from the database.
The schema wil be: 
- User_progress(PrescriptionID,YourName,DoctorName,ExerciseName, NumberOfCompletedSets, FinishStatus)
- PrescriptionID is the key

In order to visualize the database running on azure, I designed three simple ui interfaces. Users can "view" the database and add new data to the database without downloading code.In the future I will add more schema to the database and the database will be able to "delete" and "modify" the data.

# Individual Contribution
Mingyang(Nathan) Li: make simple UI for demo purpose, deploy database on Azure.

# All the details and instructions forTA to see and verify the work

By clicking the URL, the first page you will see is a static web page, only one button can be clicked, the purpose of this page is to provide users a link button to access to the data submit page, which is the "exercise progress information"/

(./img/pg1.jpg)
