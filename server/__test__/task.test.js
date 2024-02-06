const TaskController = require('../controllers/taskController');
const modelTask = require('../models/taskModel');

jest.mock('../models/taskModel');

describe('TaskController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('addTask', () => {
    it('should create a task successfully', async () => {
      const req = {
        body: {
          title: 'Task Title',
          description: 'Task Description',
          priority: 'High',
          deadline: '2024-12-31',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      modelTask.create.mockResolvedValueOnce({});

      await TaskController.addTask(req, res);

      expect(modelTask.create).toHaveBeenCalledWith({
        title: 'Task Title',
        description: 'Task Description',
        priority: 'High',
        deadline: '2024-12-31',
        user_id: '65b8de064a05a780a4a18cc9',
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: {},
        message: 'La tâche a été ajoutée avec succès.',
      });
    });
  });

  describe('getAll', () => {
    it('should get all tasks successfully', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      modelTask.find.mockResolvedValueOnce([]);

      await TaskController.getAll(req, res);

      expect(modelTask.find).toHaveBeenCalledWith({ is_deleted: false });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        success: true,
        data: [],
      });
    });
  });

  describe('updateTask', () => {
    it('should update a task successfully', async () => {
      const req = {
        params: { id: 'taskId' },
        body: { title: 'Updated Title', description: 'Updated Description' },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      modelTask.findByIdAndUpdate.mockResolvedValueOnce({});

      await TaskController.updateTask(req, res);

      expect(modelTask.findByIdAndUpdate).toHaveBeenCalledWith(
        'taskId',
        { title: 'Updated Title', description: 'Updated Description' },
        { new: true }
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: {},
        message: 'La tâche a été modifiée avec succès.',
      });
    });
  });


});