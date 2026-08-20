import { useState, useEffect } from 'react';
import ListaUsuarios from "./ListarUser";

function App() {

  const [posts, setPosts] = useState([]);
  const [information, setInformation]= useState([]);
  const [usuario, setUsuario] = useState([]);
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));


  //Buscar Posts 
     const buscarPosts = async () => {
      const post = await fetch('https://jsonplaceholder.typicode.com/posts') 
      const data = await post.json()
     setPosts(data.slice(0, 10));
    };

    const buscarInfos = async () => {
      const infos = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1') 
      const data = await infos.json()
     setInformation(data);
    }
    const buscarUser = async () =>{
      try{
      const user = await fetch('https://jsonplaceholder.typicode.com/users/5') 
      const data = await user.json()
      setUsuario(data)
    } finally{
        setLoading(false)
      }
    }
      
    buscarPosts() 
    buscarInfos()
    buscarUser()

  }, [])
 if (loading) {
    return <p>Carregando...</p>;
  }
 

  
  return (
    <>
   <h1>Listar Posts</h1>
   <ul> 
    {posts.map (p => (
      <li key={p.id}>
       <strong>ID:</strong> {p.id} - <strong>Título:</strong> {p.title}
        </li>
    ))}
    </ul>   
    <h1>Listar Nome e E-mail</h1>
   <ul> 
    {information.map (i => (
      <li key={i.id}>
       <strong>Name:</strong> {i.name} - <strong>Título:</strong> {i.email}
        </li>
    ))}
    </ul>   

    <h1> Listar user específico</h1>
    <h1>
      {usuario.name}
    </h1>
    <p>
      {usuario.email}
    </p>
    
    <div>
      <h1>Lista Usuarios</h1>
    <ListaUsuarios usuarios={user}/>  
    </div> 
    </> 
  )
}

export default App
