import {useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from './components/Button';
import Result from './components/Result';
import './App.css';
const query = `
{
  omikujiCollection {
    items {
      title
      description
    }
  }
}
`

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/3eceeknkqcjb/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer -8mjkE5olGNltbRzEaZFBzUFQ0i46bvJqP0wba-0RJo",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        const number = Math.floor( Math.random() * ((data.omikujiCollection.items.length - 1) + 1 - 0) ) + 0
        setPage(data.omikujiCollection.items[number]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  // render the fetched Contentful data
  return (
    <div className="App">
      <Router basename='/react-omikuji/'>
        <Route exact path='/' render={() => <Button text='今日の運勢を占う'/>} />
        <Route exact path='/result' render={() => <Result title={page.title} description={page.description}/>} />
      </Router>
    </div>
  );
}

export default App;
