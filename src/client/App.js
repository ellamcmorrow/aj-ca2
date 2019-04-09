import React from "react";
import "bulma/css/bulma.css";
import { HashRouter, Route } from "react-router-dom";
import CreateHunter from "./CreateHunter";
import EditHunter from "./EditHunter";
import HunterList from "./HunterList";
import CreateAdvert from "./CreateAdvert";
import EditAdvert from "./EditAdvert";
import AdvertList from "./AdvertList";
import TenantList from "./TenantList";
import UserList from "./UserList";
import EditUser from "./EditUser";
import CreateUser from "./CreateUser";

// 'main' Component. Sets up the React Router and respective routes
//parent component
const App = () => {
  return (
    <HashRouter>
      <div>
        <Route exact path="/hunters" component={HunterList} />
        <Route path="/create-hunter" component={CreateHunter} />
        <Route path="/edit-hunter/:id" component={EditHunter} />
        <Route path="/create-advert" component={CreateAdvert} />
        <Route path="/edit-advert/:id" component={EditAdvert} />
        <Route exact path="/" component={AdvertList} />
        <Route path="/tenant/:id" component={TenantList} />
        <Route path="/users" component={UserList} />
        <Route path="/edit-user/:id" component={EditUser} />
        <Route path="/create-user" component={CreateUser} />
      </div>
    </HashRouter>
  );
};

export default App;
