import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DisabledInput,
  LongTextInput,
  SimpleForm,
  TextInput,
  DeleteButton,
  Show,
  SimpleShowLayout,
  RichTextField,
  ShowButton,
  EmailField,
  ReferenceField
} from "admin-on-rest";

// List Component
export const CommentList = props => (
  <List {...props} sort={{field: "id", order: "ASC"}}>
    <Datagrid>
      <TextField source="id" label="No" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="body" />
      <ReferenceField label="On Post" source="postId" reference="posts">
        <TextField source="title" />
      </ReferenceField>
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Show Component
export const CommentShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <EmailField source="email" />
      <RichTextField source="body" />
      <ReferenceField label="On Post" source="postId" reference="posts">
        <TextField source="title" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

// Create Component
export const CommentCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);

// Title Component for Edit Title
const CommentTitle = ({record}) => {
  return <span>Comment by {record ? `"${record.name}"` : ""}</span>;
};

// Edit Component
export const CommentEdit = props => (
  <Edit title={<CommentTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

// Delete Component
export const CommentDelete = ({record}) => {
  return <span>Delete Comment by {record ? `"${record.name}"` : ""}</span>;
};
