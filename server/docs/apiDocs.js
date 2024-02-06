const { addTask, updateTask, changeTaskStatus, deleteTask } = require('./taskDocs');

// Définition de la documentation de l'API
const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'My REST API - Documentation',
    description: 'Description of my API here',
    contact: {
      name: 'Mohamed SANABI',
      email: 'sanabi_mohamed@hotmail.fr',
      url: 'https://wwww.mohamedsanabi.com',
    },
  },
  servers: [
    {
      url: `http://localhost:3020`,
      description: 'Local Server',
    },
    {
      url: 'https://api.mysite.com',
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Courses',
    },
  ],
  paths: {
    '/courses': {
      get: getAllCourses,
      post: addCourse,
      tags: ['Courses'],
      summary: 'Get all courses',
      operationId: 'getAllCourses',
      responses: {
        '200': {
          description: 'Courses retrieved successfully!',
        },
      },
    },
    '/courses/{id}': {
      get: getCourseById,
      put: updateCourse,
      delete: deleteCourse,
      tags: ['Courses'],
      summary: 'Get course by ID, update course, delete course',
      operationId: 'getUpdateDeleteCourse',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'ID of the course',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        '200': {
          description: 'Course retrieved/updated/deleted successfully!',
        },
      },
    },
    '/tasks': {
      post: addTask,
      tags: ['Tasks'],
      summary: 'Add a new task',
      operationId: 'addTask',
      responses: {
        '201': {
          description: 'Task added successfully!',
        },
      },
    },
    '/tasks/{id}': {
      put: updateTask,
      delete: deleteTask,
      tags: ['Tasks'],
      summary: 'Update task, delete task',
      operationId: 'updateDeleteTask',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'ID of the task',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        '200': {
          description: 'Task updated/deleted successfully!',
        },
      },
    },
  },
  components: {
    schemas: {
      Course: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          courseName: { type: 'string' },
          courseImage: { type: 'string' },
        },
      },
      User: {
        type: 'object',
        properties: {
          userName: { type: 'string' },
          password: { type: 'string' },
          completName: { type: 'string' },
          email: { type: 'string' },
          role: { type: 'string' },
        },
        required: ['userName', 'password', 'completName', 'email', 'role'],
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

export { apiDocumentation };
