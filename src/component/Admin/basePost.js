// in src/users.js
import * as React from "react";
import {
   List,
   Datagrid,
   TextField,
   EmailField,
   ImageField,
   Edit,
   SimpleForm,
   TextInput,
   DateInput,
   Create,
   EditButton,
   TopToolbar,
   FilterButton,
   CreateButton,
   ExportButton,
   Button,
   FunctionField,
   required,
   ImageInput,
   DeleteButton,
} from "react-admin";
import { spliceString } from "../../common";

const ListActions = () => (
   <TopToolbar>
      <CreateButton />
      <ExportButton />
      <Button
         onClick={() => {
            alert("Your custom action");
         }}
         label="Show calendar"
      ></Button>
   </TopToolbar>
);

export const PostList = (listField) => {
   return (
      <>
         <List actions={<ListActions />}>
            <Datagrid rowClick="edit">
               <ImageField source="avatar" />
               <TextField source="_id" />
               <TextField source="title" />
               <FunctionField label="Description" render={(record) => spliceString(record.description, 50)} />

               {listField.map((item, index) => (
                  <FunctionField key={index} label={item.name} render={(record) => spliceString(record[item.prop], 50)} />
               ))}

               {/* <FunctionField label="Content" render={(record) => spliceString(record.content, 30)} />
               <FunctionField label="Location" render={(record) => spliceString(record.location, 30)} />
               <FunctionField label="Price" render={(record) => record.price.toLocaleString()} />
               <FunctionField label="Regular Price" render={(record) => record.regularPrice.toLocaleString()} /> */}
               <EditButton />
               <DeleteButton />
            </Datagrid>
         </List>
      </>
   );
};

const PostTitle = ({ record }) => {
   return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = (listField) => (
   <Edit title={<PostTitle />}>
      <SimpleForm>
         <TextInput fullWidth disabled source="id" />
         <ImageField source="avatar" />
         <TextInput fullWidth source="avatar" />
         <TextInput fullWidth source="title" />
         <TextInput fullWidth source="description" multiline="true" />
         {listField.map((item, index) => (
            <TextInput key={index} fullWidth source={item.prop} multiline="true" />
         ))}
         {/* <TextInput fullWidth source="content" />
         <TextInput fullWidth source="location" />
         <TextInput fullWidth source="price" />
         <TextInput fullWidth source="regularPrice" /> */}
      </SimpleForm>
   </Edit>
);

export const PostCreate = (listField) => {
   const [value, setValue] = React.useState("");
   return (
      <Create title="Create a Post">
         <SimpleForm>
            <TextInput fullWidth disabled source="id" />
            <ImageInput source="avatar" label="Related avatar" accept="image/*" validate={[required()]} multiline="true">
               <ImageField source="src" title="title" multiline="true" />
            </ImageInput>
            <TextInput fullWidth source="title" validate={[required()]} multiline="true" />
            <TextInput fullWidth source="description" validate={[required()]} multiline="true" />
            {listField.map((item, index) => (
               <TextInput key={index} fullWidth source={item.prop} validate={[required()]} multiline="true" />
            ))}
            {/* <TextInput fullWidth source="content" validate={[required()]} multiline="true" />
            <TextInput fullWidth source="location" validate={[required()]} multiline="true" />
            <TextInput fullWidth source="price" validate={[required()]} multiline="true" />
            <TextInput fullWidth source="regularPrice" validate={[required()]} multiline="true" /> */}
         </SimpleForm>
      </Create>
   );
};
