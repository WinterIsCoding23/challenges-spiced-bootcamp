import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: '🍌 Banana',
      color: 'yellow',
    },
    {
      id: 1338,
      name: '🍎 Apple',
      color: 'green',
    },
    {
      id: 1339,
      name: '🍊 Orange',
      color: 'orange',
    },
    {
      id: 1340,
      name: '🍋 Lemon',
      color: 'yellow',
    },
    {
      id: 1341,
      name: '🥝 Kiwi',
      color: 'brown',
    }
  ];

  return (
    <div className="app">
      {fruits.map(({id, name, color})=>{             // {id, name} = destructured for fruit/object within fruits with keys "id" & "name"
        return <Card key={id} name={name} backgroundColor={color} />
      })}
      
    </div>
  );
}


