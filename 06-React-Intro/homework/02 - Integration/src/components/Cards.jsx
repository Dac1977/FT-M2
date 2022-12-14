import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map(character => (
         <Card
            name = {character.name}
            gender = {character.gender}
            species = {character.species}
            image = {character.image}
            key = {character.name}
            onClose = {() => window.alert('Emulamos que se cierra la card')}
            //{...character}// es otra forma de hacer lo mismo de arriba pero usando destructurin
         />
      ))}
   </div>;
}
