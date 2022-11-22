export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button onClick={() => props.onSearch("Esto seria el ID de un personaje")}>Agregar</button> 
      </div>
   );
}
