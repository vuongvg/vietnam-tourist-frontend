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

export const ToursList = (listField) => {
   return (
      <>
         <List actions={<ListActions />}>
            <Datagrid 
            rowClick="edit"
            >
               <ImageField source="avatar" />
               <TextField source="_id" />
               <TextField source="title" />
               <TextField source="content" />
               <FunctionField label="Description" render={(record) => spliceString(record.description, 50)} />
               <FunctionField label="Location" render={(record) => spliceString(record.location, 30)} />
               <FunctionField label="Price" render={(record) => record.price.toLocaleString()} />
               <FunctionField label="Regular Price" render={(record) => record.regularPrice.toLocaleString()} />
               <EditButton />
               <DeleteButton/>
            </Datagrid>
         </List>
      </>
   );
};

const TourTitle = ({ record }) => {
   return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const TourEdit = () => (
   <Edit title={<TourTitle />}>
      <SimpleForm>
         <TextInput fullWidth disabled source="id" />
         <ImageField source="avatar" 
         />
         <TextInput fullWidth source="avatar" 
         />
         <TextInput fullWidth source="title" />
         <TextInput fullWidth source="content" />
         <TextInput fullWidth source="description" multiline />
         <TextInput fullWidth source="location" />
         <TextInput fullWidth source="price" />
         <TextInput fullWidth source="regularPrice" />
          
      </SimpleForm>
   </Edit> 
);

export const TourCreate = () => {
   const [value, setValue] = React.useState("");
   return (
      <Create title="Create a Post">
         <SimpleForm>
            <TextInput fullWidth disabled source="id" />
            <ImageInput source="avatar" label="Related avatar" accept="image/*" validate={[required()]} multiline>
               <ImageField source="src" title="title" multiline/>
            </ImageInput>
            <TextInput fullWidth source="title" validate={[required()]} multiline/>
            <TextInput fullWidth source="content" validate={[required()]} multiline/>
            <TextInput fullWidth source="description" validate={[required()]} multiline/>
            <TextInput fullWidth source="location" validate={[required()]} multiline/>
            <TextInput fullWidth source="price" validate={[required()]} multiline/>
            <TextInput fullWidth source="regularPrice" validate={[required()]} multiline/>
         </SimpleForm>
      </Create>
   );
};
