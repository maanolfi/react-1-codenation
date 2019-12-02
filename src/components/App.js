import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'
import { withRouter, matchPath } from "react-router";


class App extends Component {

  handleChange = e => {
    this.props.history.push(e.target.value)
  }

  pathUrl = () => {
    const match = matchPath(this.props.location.pathname, {
      path: "/:id",
      exact: true
    });

    return match ? match.params.id : ''
  }



  render() {

    const searchString = this.pathUrl()

    return (
     
        <div className="App">

          <Navbar
            onChange={this.handleChange}
            searchString={searchString}
          />
          )}/>
  
        <div className="container mt-10">

            <Switch>
              <Route path="/" exact component={() =>
                <Home recipes={recipes.results} searchString={searchString} />} />

              <Route path="/recipe/:title" component={props => {
                const recipeFiltered = recipes.results.find(
                  recipe => slugify(recipe.title) === props.match.params.title
                );

                return <RecipePage recipe={recipeFiltered} />;
              }}
              />

              <Route path="/:searchString" render={(props) =>
                <Home recipes={recipes.results} searchString={searchString} />} />



            </Switch>


          </div>
        </div>
      
    )
  }
}

export default withRouter(App)
