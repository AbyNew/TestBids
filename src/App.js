import './App.css';
import React, { useState } from 'react';

function App() {
let buyers = [
  {
      "name": "buyerA",
      "bids": [ 110, 130]
  },
  {
      "name": "buyerB",
      "bids": []
  },
  {
      "name": "buyerC",
      "bids": [ 125]
  },
  {
      "name": "buyerD",
      "bids": [ 105, 115, 90]
  },
  {
      "name": "buyerE",
      "bids": [ 132, 135, 140]
  }];
  let reservePrice = 100;
  let  [result, setResult] = useState('');

function lunchTest(e){
console.log("toto")
if (!buyers || buyers.length===0){
  setResult("pas d'enchéres !"); 
  return result;
}else{
  //on a besoin de trouver les meilleures enchéres 
  let sortedBuyers =[];
  sortedBuyers = buyers.map(buyer => {
      let topBids ={
          buyerName: buyer.name,
          bestBid: Math.max(...buyer.bids),
      }
  return topBids;
  });        
  //On a besoin de classer le resultat par ordre croissant     
  sortedBuyers.sort((a, b) => b.bestBid - a.bestBid);

  //Si le premier résultat dans le tableau est supérieur ou égal au prix de reserve on a notre gagnant.
  if(sortedBuyers[0].bestBid>=reservePrice){
  //on a notre gagnant qui est le premier resultat dans le tableau et le prix qui est le deuxiéme ! 
      setResult("L'enchérisseur "+sortedBuyers[0].buyerName+" remporte l'enchére au prix de "+sortedBuyers[1].bestBid+"€.");
  }
  return result;
}
}


  return (
    <div className="App">
      <div>
        Exercice de conception developpement 
        <button onClick={(e)=>lunchTest(e)}>Lancer le test</button>
      </div>
      <div>{result.length > 0 && <h2>{result}</h2>}</div>
    </div>
  );
}

export default App;
