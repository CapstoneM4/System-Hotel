import { Router } from "express";
import EmployeesControllers from "../../controllers/employees/employees.controllers";
import HotelControllers from "../../controllers/hotel/hotel.controllers";
import RoomsControllers from "../../controllers/rooms/rooms.controllers";

const routesADM = Router();

//============= HOTEL
// Listagem e Criação de hotéis no banco de dados
routesADM.post(
  "",
  HotelControllers.createHotel /*Controller de criação do hotel*/
);
routesADM.get(
  "",
  HotelControllers.listHotel /*Controller de listagem dos hotéis*/
);

//Alterações de dados do hotel no banco de dados
routesADM.patch(
  "/:id",
  HotelControllers.updateHotel /*Controller de alteração de dados do hotel*/
);
routesADM.delete(
  "/:id",
  HotelControllers.deleteHotel /*Controller de deleção do hotel*/
);
routesADM.get(
  "/:id",
  HotelControllers.listHotelById /*Controller de listagem do hotel por idHotel*/
);

//============= CARGOS
//Criação e listagem de cargos
routesADM.post("/:id/jobtitles" /*Controller de criação de cargos do hotel*/);
routesADM.get("/:id/jobtitles" /*Controller de listagem dos cargos do hotel*/);

//Alterações de dados nos cargos
routesADM.get(
  "/:id/jobtitles/:id" /*Controller de listagem do cargo do hotel*/
);
routesADM.patch(
  "/:id/jobtitles/:id" /*Controller de alteração de dados do cargo no hotel*/
);
routesADM.delete(
  "/:id/jobtitles/:id" /*Controller de deleção de dados do cargo no hotel*/
);

//============== ROOMS
//Criação e listagem dos quartos do hotel
routesADM.get(
  "/rooms/:id",
  RoomsControllers.listRooms /*Controller de listagem dos quartos do hotel*/
);
routesADM.post(
  "/rooms/:id",
  RoomsControllers.createRooms /*Controller de criação do quarto do hotel*/
);

//Alterações de dados dos quartos
routesADM.get(
  "/:id/rooms",
  RoomsControllers.listRoomsByid /*Controller de listagem do quarto do hotel*/
);
routesADM.patch(
  "/rooms/:id",
  RoomsControllers.updateRoom /*Controller de alterações de dados do quarto do hotel*/
);
routesADM.delete(
  "/rooms/:id",
  RoomsControllers.deleteRoom /*Controller de deleção do quarto do hotel*/
);

//=========== EMPLOYEES
//Criação de funcionários
routesADM.post(
  "/:idH/employees",
  EmployeesControllers.createEmployees /*faltando id do hotel ex: "/:id/employees" */
);
routesADM.get(
  "/:idH/employees",
  EmployeesControllers.listEmployees /*Controller de listagem dos funcionários do hotel*/
);

export default routesADM;
