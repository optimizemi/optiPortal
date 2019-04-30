# optiPortal: optiMize Community Portal

A tool to search for, find and connect with members in the optiMize community.

## Motivation

The motivation for this tool comes from the several key observations divided up into different use cases:

Alumni Directory:
* Cases

Team Directory:
* Provide updates on all teams through the optiMize challenge

Mentorship Directory:
* Mentorship is a key part of the optiMize Social Innovaton Challenge
* As the number of students increase, mentorship needs to scale as well
* Students currently meet a small portion of mentors through mentor check-ins
* Mentors want more engagement with students
* No easy way exists for a student to directly reach out to a mentor

## Vision

A website where students and mentors can visit to see other mentors, students, fellows and broadly the whole optiMize community. Using a search feature, members of the optiMize community can find other members in this directory. Features like getting information, submitting mentorship requests, etc are possible extensions in the future. Members are able to leverage this platform to enhance one of the greatest parts of the optiMize: the community!

## Architecure & Tech Stack
This application is a ReactJS application built on Node.js and run in the client. 

Backend:
* AWS DynamoDB database
* AWS AppSync/GraphQL based APIs
* AWS Lambda for serverless functions
* AWS Cognito User Pool for authentication
* AWS S3 for file storage

Frontend:
* ReactJS
* Material-UI

Hosting & Deployment:
* Static, client-run application
* Deployed and hosted on Netlify
