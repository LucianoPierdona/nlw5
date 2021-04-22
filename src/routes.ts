import { Router } from 'express';
import { MessageController } from './controllers/MessageController';
import { SettingsController } from './controllers/SettingsController';
import { UserController } from './controllers/UserController';

const routes = Router();

const settingsController = new SettingsController();
const userController = new UserController();
const messageController = new MessageController();

routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.post('/users', userController.create);
routes.post('/messages', messageController.create);
routes.get('/messages/:user_id', messageController.getMessagesByUser);

export { routes };
