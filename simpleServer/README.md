# simpleServer

## Tasks:

Create a simple website that is able to display posts, delete single posts and create new ones. For this purpose, the server provided in this repository acts as an API for the posts. It has endpoints which can be used to get all posts saved on the server, create a new post or delete an existing one.

- The website should be based on the Next.js framework (https://nextjs.org/).
- The website should consist of the following pages:

  - **Index** : Landing Page which links to the other Pages
  - **Display Posts** : Should list all posts available on the server and display their information in a clean format (e.g. a box for each Post). It should also be possible to delete single posts using a Button. When a post is deleted or a new one is created, this should also be visible here.

  - **Create Post** : Should display a form in which the user can enter the necessary information to create a new post. Submitting the form should lead to a POST request to the server including the post details.

- The website should have a simple, clean design.
- Create a simple Header and Footer component which is displayed on each page.

_Optional:_

- Build a docker container deploying your app.

## API Documentation

The server has the following 4 endpoints:

HTTP/**GET** `/` - This endpoint returns a JSON including a dummy message. Can be used for testing connection to the server.

HTTP/**GET** `/post` - This endpoint returns all posts available on the server. The endpoints returns a JSON object which includes the object `posts`. This object is an array of single post objects. Each post objects includes the attributes `id`,`name`,`date`, `content` and `author.

HTTP/**POST** `/post` - This endpoint is used to create a new post. To create a new post, the request body has to include the strings `name`, `content` and `author`. The `id` and `date` fields will be generated by the server. For this purpose the data included in the request body should be formatted as JSON or x-www-form-urlencoded data.

HTTP/**DELETE** `/post/:id` - This endpoint deletes the post with the post ID `:id`. Each post returned by the **GET** endpoint includes a unique ID, which should be used to identify the post to delete.

## How to start and use the server/API

### Requirements:

- Node version 10 or higher
- Terminal (Powershell on windows)

After cloning the git repository, open a terminal inside the folder. Then run `npm install` to install the necessary dependencies for the server on your local machine.

After that, the server can be started by `npm run start`. The console output of the server will show the port the server is listening on (Port 8080 by default) and log requests to the server.

(So, e.g. the **GET** `/post` endpoint can be accessed via the URL `localhost:8080/post`).

## Hints

- You can use Postman (https://www.postman.com/) to test the API and try out the different endpoints.

- Use the module `isomorphic-fetch` (https://www.npmjs.com/package/isomorphic-fetch) in your websites code to send requests to the API

- (React) Bootstrap can be used to simply improve the design of the website. It includes predesigned components like buttons, boxes etc.
