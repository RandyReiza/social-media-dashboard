import React from "react";
import {
  List,
  Edit,
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
  ReferenceField,
  ReferenceManyField,
  ImageField,
  ChipField
} from "admin-on-rest";

// List Component
export const AlbumList = props => (
  <List {...props} sort={{field: "id", order: "ASC"}}>
    <Datagrid>
      <TextField source="id" label="No" />
      <TextField source="title" />
      <ReferenceField label="Album by" source="userId" reference="users">
        <ChipField source="name" />
      </ReferenceField>
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Show Component
export const AlbumShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <ReferenceField label="Album by" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceManyField perPage={100} label="Photos:" reference="photos" target="albumId" sort={{field: "id", order: "ASC"}}>
        <Datagrid>
          <TextField source="title" />
          <ImageField source="thumbnailUrl" title="title" label="Image" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

// Title Component for Edit Title
const AlbumTitle = ({record}) => {
  return <span>Album {record ? `"${record.title}"` : ""}</span>;
};

// Edit Component
export const AlbumEdit = props => (
  <Edit title={<AlbumTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

// Delete Component
export const AlbumDelete = ({record}) => {
  return <span>Delete Album {record ? `"${record.title}"` : ""}</span>;
};
