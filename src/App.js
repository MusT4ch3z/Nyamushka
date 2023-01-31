import "./App.css";
import "./components/card-list/card-list.css"
import CardList from "./components/card-list/card-list";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">Ты сегодня покормил кота?</header>
      <CardList className="app__card-list"/>
    </div>
  );
}

export default App;
