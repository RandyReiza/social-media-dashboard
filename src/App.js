import React from "react";
import {jsonServerRestClient, Admin, Resource, Delete} from "admin-on-rest";

import {UserList, UserEdit, UserCreate, UserShow, UserDelete} from "./Users";
import {PostList, PostEdit, PostCreate, PostShow, PostDelete} from "./Posts";

const App = () => (
  <Admin
    restClient={jsonServerRestClient("http://jsonplaceholder.typicode.com")}
  >
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      remove={props => <Delete {...props} title={<UserDelete />} />}
      show={UserShow}
    />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      remove={props => <Delete {...props} title={<PostDelete />} />}
      show={PostShow}
    />
  </Admin>
);

export default App;
