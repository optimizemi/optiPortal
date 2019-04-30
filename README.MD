# optiPortal: optiMize Community Portal

A tool to search for, find and connect with members in the optiMize community.

## Motivation & Vision

The motivation for this tool comes from the several key observations divided up into different use cases:

### Alumni Directory

- Current challenge members and fellows can better connect with alumni of the optiMize community
- Alumni can have one central place to keep all of their information up to date
- Allows for alumni to be easily converted to mentors

### Team Directory

- Current challenge members may want to see who came before them
- Members of the community can stay up to date will all historical projects

**Vision**: A website where someone can easily find and explore previous optiMize teams, seach by type of project, year of project, and project status. Projects also include links to associated members and that directly shows member profiles.

### Mentorship Directory

- Mentorship is a key part of the optiMize Social Innovaton Challenge
- As the number of students increase, mentorship needs to scale as well
- Students currently meet a small portion of mentors through mentor check-ins
- Mentors want more engagement with students
- No easy way exists for a student to directly reach out to a mentor

**Vision:** A website where students and mentors can visit to see other mentors, students, fellows and broadly the whole optiMize community. Using a search feature, members of the optiMize community can find other members in this directory. Features like getting information, submitting mentorship requests, etc are possible extensions in the future. Members are able to leverage this platform to enhance one of the greatest parts of the optiMize: the community!

## Architecure & Tech Stack

This application is a ReactJS application built on Node.js and run in the client.

**Backend:**

- AWS DynamoDB database
- AWS AppSync/GraphQL based APIs
- AWS Lambda for serverless functions
- AWS Cognito User Pool for authentication
- AWS S3 for file storage

**Frontend:**

- ReactJS
- Material-UI

**Hosting & Deployment:**

- Static, client-run application
- Deployed and hosted on Netlify

## Contributing

This project follows the GitHub Flow philosophy. GitHub Flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly. This [guide](https://guides.github.com/introduction/flow/) explains how and why GitHub Flow works.

### Project Workspace

The project directory is defind as such:

```
+-- .github
+-- amplify
+-- node_modules
+-- public
    +-- favicon.ico
|   +-- index.html
|   +-- manifest.json
+-- src
|   +-- components
|   +-- img
    +-- App.css
    +-- App.js
    +-- aws-exports.js
    +-- index.css
    +-- index.js
    +-- serviceWorker.js
+-- .amplifyrc
+-- .gitattributes
+-- .gitignore
+-- package.json
+-- README.md
```

### Project Scripts

`yarn start` starts a development server locally.
`yarn build` is reserved for the continoius deployment set up in Netlify.
