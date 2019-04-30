# optiMize Mentor Finder

A tool to search for, find and connect with mentors in the optiMize community.

## Motivation

The motivation for this tool comes from the several key observations:

* Mentorship is a key part of the optiMize Social Innovaton Challenge
* As the number of students increase, mentorship needs to scale as well
* Students currently meet a small portion of mentors through mentor check-ins
* Mentors want more engagement with students
* No easy way exists for a student to directly reach out to a mentor

## Vision

A website where students and mentors can visit to see other mentors, students, fellows and broadly the whole optiMize community. Using a search feature, members of the optiMize community can find other members in this directory. Features like getting information, submitting mentorship requests, etc are possible extensions in the future. Members are able to leverage this platform to enhance one of the greatest parts of the optiMize: the community!

## Architecure & Tech Stack

AWS Backend with DynamoDB database.
GraphQL for defining objects and querying/serving data.
ReactJS front end and implmentation of off-the-shelf UI.
File and image storage in AWS S3, with a link to item contained in database record.

## Development Pipeline

This project may take different turns due to the demand of the product owners and stakeholders. However, this is just a generic outline of what may likely occur.

### Phase 1 - Jan 2019

* Backend database set up on [AWS Cloud](https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-node.html)
* Basic search functionality (enter a query and return relevant objects)
* Object definitions for an abstract person prototype
* User authentication via Higher Order Component and AWS Cognito pool (look into UMich Google log-in)

### Phase 2

* Users can sign in and create profile for themselves
* Concept of projects and team member association defined
* Admin control implementation

### Phase 3

* Adoption of alumni and fellows onto platform
* Split of mentors/cohort/fellows tabs (in terms of display)
* Past projects section

### Phase 4

* Linking of internal   ata with external projects/metrics databank
* Visualization component added