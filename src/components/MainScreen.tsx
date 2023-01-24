import React, { useState, useEffect } from 'react';
import {Pizza} from '../utils/Types';
import { Table, Td, Th, MainScreenStyle, ImgStyle } from '../utils/Styles';
import { imgMap } from 'utils/Mapper';
import { compareAsc } from 'date-fns';

function MainScreen(): JSX.Element {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);
  const [pizzasComponents, setPizzasComponents] = React.useState<Array<JSX.Element>>([]);

  function getPizzaField(pizza: Pizza): JSX.Element {
    return (
      <tr key={pizza.id}>
        <Td><ImgStyle src={imgMap.get(pizza.id)} alt="img"></ImgStyle></Td>
        <Td>{pizza.name}</Td>
        <Td>{pizza.price}</Td>
      </tr>
    );
  }

  useEffect(() => {
    fetch("api/pizzas").then(response => response.json()).then((pizzasData: Array<Pizza>) => {
      const pizzas: Array<JSX.Element> = [];
      for(const pizza of pizzasData.sort((a, b) => compareAsc(a.price || 0, b.price || 0))){
        pizzas.push(getPizzaField(pizza))
      }
      setPizzasComponents(pizzas);
      setPizzas(pizzasData)
    })
  }, []);

  return (
    <MainScreenStyle className="App">
          <Table>
          <thead>
            <tr>
              <Th>Photo</Th>
              <Th>Nom</Th>
              <Th>prix</Th>
            </tr>
          </thead>
          <tbody>{pizzasComponents}</tbody>
        </Table>
    </MainScreenStyle>
  );
}

export default MainScreen;
