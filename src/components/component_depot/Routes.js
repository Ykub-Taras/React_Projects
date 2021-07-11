import {Route, Switch} from "react-router-dom";
import Users from "../users/Users";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";
import Albums from "../albums/Albums";
import Photos from "../photos/Photos";
import Todos from "../todos/Todos";
import Links from "./Links";
import Counter from "../counter/Counter";
import TodosBlock from "../todosBlock/TodosBlock";

const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/counter'} render={() => <Counter/>}/>
            <Route exact path={'/jsonholder'} render={() => <Links/>}/>
            <Route exact path={'/todosblock'} render={() => <TodosBlock/>}/>

            <Route exact path={'/users'} render={() => <Users/>}/>
            <Route exact path={'/posts'} render={() => <Posts/>}/>
            <Route exact path={'/comments'} render={() => <Comments/>}/>
            <Route exact path={'/albums'} render={() => <Albums/>}/>
            <Route exact path={'/photos'} render={() => <Photos/>}/>
            <Route exact path={'/todos'} render={() => <Todos/>}/>
        </Switch>
    )
}
export default Routes;


//-------------------------
//<Route exact path={'/users'}>#</Route>