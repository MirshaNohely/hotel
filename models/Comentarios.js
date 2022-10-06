import { Sequelize } from "sequelize";
import db from '../config/db.js';

export const comentario = db.define('comentarios',{

    correo:{
        type:Sequelize.STRING
    },
    imagen:{
        type:Sequelize.STRING
    },
    opinion:{
        type:Sequelize.STRING
    }
},{timestamps:false});