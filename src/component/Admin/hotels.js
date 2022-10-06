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
      >
      </Button>
   </TopToolbar>
);

export const HotelsList = () => {
   return (
      <>
         <List actions={<ListActions />}>
            <Datagrid rowClick="edit" >
               <ImageField source="avatar" title="title" />
               <TextField source="id" />
               <TextField source="hotelname" />
               <FunctionField label="Description" render={record => spliceString(record.description,50)}/>
               
               <EmailField source="email" />
               <TextField source="phone" />
               <TextField source="city" />
               <FunctionField label="Location" render={record => spliceString(record.fullLocation,50)}/>
               <EditButton />
            </Datagrid>
         </List>
      </>
   );
};

const HotelTitle = ({ record }) => {
   return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const HotelEdit = () => (
   <Edit title={<HotelTitle />}>
      <SimpleForm>
         <TextInput fullWidth disabled source="id" />
         <ImageField source="avatar" title="title" />
         <TextInput fullWidth source="avatar" title="title" />
         <TextInput fullWidth source="hotelname" />
         <TextInput fullWidth source="email" />
         <TextInput fullWidth source="phone" />
         <TextInput fullWidth source="city" />
         <TextInput fullWidth source="fullLocation" />
         <TextInput  fullWidth source="description" multiline />
      </SimpleForm>
   </Edit>
);

export const HotelCreate = () => (
   <Create title="Create a Post">
      <SimpleForm>
         <TextInput fullWidth source="title" />
         <TextInput fullWidth source="teaser" options={{ multiline: true }} />
         <TextInput fullWidth multiline source="body" />
         <TextInput fullWidth label="Publication date" source="published_at" />
         <TextInput fullWidth source="average_note" />
      </SimpleForm>
   </Create>
);
