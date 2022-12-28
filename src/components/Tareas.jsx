import React from "react";

const Tareas = ({ todo }) => {
  return (
    <div className="m-3 bg-white shadow-xl px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Persona: {""}
        <span className="font-normal normal-case">{todo.nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Tarea: {""}
        <span className="font-normal normal-case">{todo.tarea}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        email: {""}
        <span className="font-normal normal-case">{todo.email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{todo.fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Comentarios: {""}
        <span className="font-normal normal-case">{todo.comentario}</span>
      </p>

      <div className="flex mt-10 justify-between m-auto">
        <button
          type="button"
          className=" bg-sky-600 py-2 px-10 text-white uppercase font-bold hover:bg-sky-800 rounded-md cursor-pointer transition-all"
          // onClick={() => setTarea(tarea)}
        >
          Editar
        </button>

        <button
          type="button"
          className="bg-red-600 py-2 px-10 text-white uppercase font-bold hover:bg-red-800 rounded-md cursor-pointer transition-all"
          // onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Tareas;
