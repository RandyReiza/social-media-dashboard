import React from "react";
import {jsonServerRestClient, Admin, Resource, Delete} from "admin-on-rest";

import {UserList, UserEdit, UserCreate, UserShow, UserDelete} from "./Users";
import {PostList, PostEdit, PostCreate, PostShow, PostDelete} from "./Posts";
import {CommentList, CommentEdit, CommentCreate, CommentShow, CommentDelete} from "./Comments";
import {AlbumList, AlbumEdit, AlbumShow, AlbumDelete} from "./Albums";
import {PhotoList, PhotoShow, PhotoDelete} from "./Photos";

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
    <Resource
      name="comments"
      list={CommentList}
      edit={CommentEdit}
      create={CommentCreate}
      remove={props => <Delete {...props} title={<CommentDelete />} />}
      show={CommentShow}
    />
    <Resource
      name="albums"
      list={AlbumList}
      edit={AlbumEdit}
      remove={props => <Delete {...props} title={<AlbumDelete />} />}
      show={AlbumShow}
    />
    <Resource
      name="photos"
      list={PhotoList}
      remove={props => <Delete {...props} title={<PhotoDelete />} />}
      show={PhotoShow}
    />
  </Admin>
);

export default App;
