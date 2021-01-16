import { Route, Switch } from "react-router-dom"
import MovieDetails from "./components/MovieDetails"
import MoviesList from "./components/MoviesList"

const Movies = () => {
    return (
        <Switch>
            <Route path="/movies" exact>
                <MoviesList />
            </Route>
            <Route path="/movies/:movieId">
                <MovieDetails />
            </Route>
        </Switch>
    )
}

export default Movies;