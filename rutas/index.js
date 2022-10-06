import express from "express";
import {paginaComentarios, paginaCreadores, paginaInicio, paginaMaterias} from '../controller/paginasController.js';
import { guardarComentarios, listaComentarios, cambiarComentarios, eliminarComentarios } from "../controller/comentariosController.js";

const rutas = express.Router();
rutas.get("/",paginaInicio);

rutas.get("/creadores",paginaCreadores);

rutas.get("/materias",paginaMaterias);

rutas.get("/comentarios", paginaComentarios);
rutas.post("/comentarios", guardarComentarios);

rutas.get("/listcomentarios", listaComentarios);
rutas.get("/modificarCom", cambiarComentarios);
rutas.get("/eliminar",eliminarComentarios);

export default rutas;