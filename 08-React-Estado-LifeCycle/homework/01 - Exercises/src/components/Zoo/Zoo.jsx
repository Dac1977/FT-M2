import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName: '',
      animals: [],
      spwcies: [],
      allAnimals: [],
   });
   return (
      <div>
         <h1>-</h1>
      </div>
   );
}
