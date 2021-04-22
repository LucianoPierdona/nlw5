import { io } from '../http';
import { ConnectionService } from '../services/ConnectionService';
import { MessageService } from '../services/MessageService';
import { UserService } from '../services/UserService';

interface IParams {
  text: string;
  email: string;
}

io.on('connect', (socket) => {
  const connectionService = new ConnectionService();
  const userService = new UserService();
  const messageService = new MessageService();

  socket.on('client_first_access', async (params) => {
    const socket_id = socket.id;
    let user_id;
    const { text, email } = params as IParams;

    const userExists = await userService.findByEmail(email);

    if (!userExists) {
      const user = await userService.create(email);

      await connectionService.create({
        socket_id,
        user_id: user.id,
      });

      user_id = user.id;
    } else {
      const connection = await connectionService.findByUserId(userExists.id);

      if (!connection) {
        await connectionService.create({
          socket_id,
          user_id: userExists.id,
        });
      } else {
        connection.socket_id = socket_id;

        await connectionService.create(connection);
      }

      user_id = userExists.id;
    }

    await messageService.create({
      text,
      user_id,
    });
  });
});
