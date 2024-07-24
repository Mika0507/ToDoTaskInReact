import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";

function App() {
  const initialState = { tickets: [], editingTicket: null };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket}></TicketForm>

        {/* En la línea inferior tenemos un condicional que se traduce como: si tenemos tickets, "entonces (&&)" se muestran. Ese && no es operador y. */}
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All tickets</h2>
            <TicketList
              tickets={state.tickets}
              dispatch={dispatch}
            ></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
