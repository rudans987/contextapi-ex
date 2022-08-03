import React from 'react';


const MyStore = React.createContext();
const App = () => {
  const [name, setName]= React.useState();
    return(
     <div>
      <MyStore.Provider value={{  name, setName }}>
        {/* <MyStore.Consumer>
      {(value)=> {
        return (<div>{value.name}</div>)
      }}
    </MyStore.Consumer> */}
        <MyStoreConsumer />      
      </MyStore.Provider>
     </div>
  );
}

const MyStoreConsumer = () => {
  const{name, setName}= React.useContext(MyStore);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=>{setName("eke")}}>이름바꾸기</button>
    </div>
    
  )
}

export default App;