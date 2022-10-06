import { comentario } from "../models/Comentarios.js";
const guardarComentarios = async (req, res) => {
    const {correo, imagen, opinion} = req.body;
    const errores = [];
    if(correo.trim() === ""){
        errores.push({mensaje: "El correo no debe ser vacio"});
    }
    if(imagen.trim() === ""){
        errores.push({mensaje: "La imagen no debe ser vacio"});
    }
    if(opinion.trim() === ""){
        errores.push({mensaje: "La opinion no debe ser vacio"});
    }
    if(errores.length > 0){
        res.render("comentarios", {
            pagina: "Comentarios",
            errores,
            correo,
            imagen,
            opinion,
        });
    } else {
        //Almacenar en la base de datos
        try{
            await comentario.create({
                correo,
                imagen,
                opinion
            });
            res.redirect('/comentarios');
        } catch (error) {
            console.log(error);
        }
    }
};
const listaComentarios = async (req, res) => {
    const comentarios = await comentario.findAll({
        attributes: ["id", "correo", "imagen", "opinion"],
    });
    res.render("listcomentarios", {
        pagina: "Comentarios",
        comentarios
    });
};
const cambiarComentarios = async (req, res) => {
    console.log(`Listo`+req.query.id)
    try {
        const com=await comentario.findByPk(req.query.id)
        console.log(com);

        const errores =[];
        res.render("comentarios",{
            pagina: "Comentarios",
            errores,
            id: com.id,
            correo: com.correo,
            imagen: com.imagen,
            opinion: com.opinion
        });
    } catch (error) {
        console.log(error);
    }
};
const eliminarComentarios = async (req, res) => {
    console.log(`Listo borrar`+req.query.id);
    try{
        await comentario.destroy({
            where: {id:req.query.id}});
        res.redirect("/lisComentarios");
    } catch (error) {
        console.log(error);
    }
};

export { guardarComentarios, listaComentarios, cambiarComentarios, eliminarComentarios};