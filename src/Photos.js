import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  Show,
  SimpleShowLayout,
  ShowButton,
  ReferenceField,
  ImageField,
  ChipField,
  UrlField
} from "admin-on-rest";

// List Component
export const PhotoList = props => (
  <List {...props} sort={{field: "id", order: "ASC"}}>
    <Datagrid>
      <TextField source="id" label="No" />
      <TextField source="title" />
      <ImageField source="thumbnailUrl" title="title" label="thumbnail" />
      <UrlField source="url" />
      <ReferenceField label="On Album" source="albumId" reference="albums">
        <ChipField source="title" />
      </ReferenceField>
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Show Component
export const PhotoShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <ImageField source="thumbnailUrl" title="title" label="thumbnail" />
      <UrlField source="url" />
      <ReferenceField label="On Album" source="albumId" reference="albums">
        <TextField source="title" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

// Delete Component
export const PhotoDelete = ({record}) => {
  return <span>Delete Photo {record ? `"${record.title}"` : ""}</span>;
};
