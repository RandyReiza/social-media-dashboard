import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DisabledInput,
  SimpleForm,
  TextInput,
  DeleteButton,
  Show,
  SimpleShowLayout,
  ShowButton,
  ReferenceManyField,
  EmailField
} from "admin-on-rest";

// List Component
export const UserList = props => (
  <List {...props} sort={{field: "id", order: "ASC"}}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" label="adress" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" label="company" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Show Component
export const UserShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" label="adress"  />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" label="company" />
      <ReferenceManyField label="Posts" reference="posts" target="userId">
        <Datagrid>
          <TextField source="title" />
          <TextField source="body" />
          <ShowButton />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
      <ReferenceManyField label="Albums" reference="albums" target="userId">
        <Datagrid>
          <TextField source="title" />
          <ShowButton />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

// Create Component
export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="adress" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" label="company" />
    </SimpleForm>
  </Create>
);

// Title Component for Edit Title
const UserName = ({record}) => {
  return <span>{record ? `${record.username}` : ""}</span>;
};

// Edit Component
export const UserEdit = props => (
  <Edit title={<UserName />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Edit>
);

// Delete Component
export const UserDelete = ({record}) => {
  return <span>Delete {record ? `"${record.username}"` : ""}</span>;
};
