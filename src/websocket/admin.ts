import { io } from '../http';
import { ConnectionService } from '../services/ConnectionService';

io.on('connect', (socket) => {
  const connectionService = new ConnectionService();

  const allConnectionsWithoutAdmin = await connectionService.findAllWithoutAdmin();
});
