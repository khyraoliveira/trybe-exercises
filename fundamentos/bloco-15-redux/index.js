import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';
import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

console.log(store.getState())

// SUBSCRIBE: Ele adiciona um listener que executará uma callback toda vez que uma action for despachada. Para ilustrar, vamos usar o subscribe junto com nossa store . No nosso exemplo, toda vez que a store sofrer alguma alteração, pegamos nosso estado e fazemos um console.log dele.
store.subscribe(() => {
    console.log(store.getState());
  });

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}


const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;

// fazerLogin é a actionCreator, ou seja, é uma função que retorna uma action!
// Esta função (fazerLogin) irá enviar uma action ao nosso reducer, com a intenção de alterar para verdadeiro a chave login da nossa store.

const fazerLogin = (email) => ({
    type: "LOGIN",
    email});
  
  const ESTADO_INICIAL = {
    login: false,
    email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: !state.login,
          email: action.email,
        };
      default: // No switch, sempre precisamos ter um caso default!
        return state;
    }
  };
  
  const store = Redux.createStore(reducer);
  
  store.dispatch(fazerLogin("alguem@email.com"));
  
  console.log(store.getState());
  
  // { login: true, email: 'alguem@email.com' }