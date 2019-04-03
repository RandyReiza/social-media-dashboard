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
  ReferenceManyField,
  EmailField,
  ReferenceField,
  ChipField
} from "admin-on-rest";

// List Component
export const PostList = props => (
  <List {...props} sort={{field: "id", order: "ASC"}}>
    <Datagrid>
      <TextField source="id" label="No" />
      <TextField source="title" />
      <TextField source="body" />
      <ReferenceField label="Posted by" source="userId" reference="users">
        <ChipField source="name" />
      </ReferenceField>
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Show Component
export const PostShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <RichTextField source="body" />
      <ReferenceField label="Posted by" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceManyField perPage={100} label="Comments by" reference="comments" target="postId">
        <Datagrid>
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="body" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

// Create Component
export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);

// Title Component for Edit Title
const PostTitle = ({record}) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

// Edit Component
export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

// Delete Component
export const PostDelete = ({record}) => {
  return <span>Delete Post {record ? `"${record.title}"` : ""}</span>;
};
