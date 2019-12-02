import React from 'react'
import { Link } from 'react-router-dom'
import { slugify } from '../helpers'

const RecipeItem = ({ item }) =>
    item ?
        (
            <div className="col-sm-3 mt-4 RecipeItem" key={item.title}>
                <Link to={`/recipe/${slugify(item.title)}`} >
                    <div className="card" >

                        <img className="card-img-top img-fluid" src={item.thumbnail} alt={item.title} />

                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">
                                <strong>Ingredients: </strong>{item.ingredients}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

        ) : null







export default RecipeItem;