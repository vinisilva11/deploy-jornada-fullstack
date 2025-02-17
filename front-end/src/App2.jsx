import React from "react";

const App2 = () => {
    return <div>App2</div>
};

export default App2;

// rafce

// Arrow Function
// const App2 = () => <h1>App2</h1>

// Nomeação de Componente
// Pascal Case

// Nomeação de variáveis
// Camel Case

// Export default posso importar com qualquer nome e sem chaves
// export "sem default", só posso importar entre chaves e com nome exportado

// Self closing tag
// <Header></Header>
// <Header/>

// Nomeação de classes em CSS
// Metodologa BEM
// Blocks
// Elements
// Modifiers
// bloco_elemento--modificador
// header
// header_link
// header_link--small

// Tag vazia em React se chama Fragment ou Fragmento
// Componentes recebe "props"

// items === 5 ? (
//     <>
//     <SingleItem /> 
//     <SingleItem /> 
//     <SingleItem /> 
//     <SingleItem /> 
//     <SingleItem /> 
//    </>
//  ) : (
//      <>
//      <SingleItem /> 
//      <SingleItem /> 
//      <SingleItem /> 
//      <SingleItem /> 
//      <SingleItem /> 
//      <SingleItem /> 
//      <SingleItem /> 
//      <SingleItem /> 
//      <SingleItem /> 
//      <SingleItem /> 
//     </>
//   )

// {Array(items)
//     .fill()
//     .map((currentValue, index) => (
//       <SingleItem key={`${title}-${index}`} />
//     ))}

//  Spread operator
// ...

//  Quando componentes se re-renderizão ?
// Uma das ocasiões é quando uma variável de estado usada por esse componente é atualizada
// Hook - useState