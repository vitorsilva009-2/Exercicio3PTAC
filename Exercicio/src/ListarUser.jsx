// ListaUsuarios.jsx
import React from "react";


function ListaUsuarios({ usuarios }) {
  return (
    <ul>
      {usuarios.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default ListaUsuarios;
