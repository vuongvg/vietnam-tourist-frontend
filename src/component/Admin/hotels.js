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
} from "react-admin";

const ListActions = () => (
   <TopToolbar>
      {/* <FilterButton /> */}
      <CreateButton />
      <ExportButton />
      {/* Add your custom actions */}
      <Button
         onClick={() => {
            alert("Your custom action");
         }}
         label="Show calendar"
      >
         {/* <IconEvent/> */}
      </Button>
   </TopToolbar>
);

export const HotelsList = (props) => {
   return (
      <>
         <List actions={<ListActions />}>
            {/* <List> */}
            <Datagrid rowClick="edit">
               <ImageField source="avatar" title="title" />
               <TextField source="id" />
               <TextField source="hotelname" />
               <EmailField source="email" />
               <TextField source="phone" />
               <TextField source="city" />
               <TextField source="fullLocation" />
               <TextField source="description" />
               {/* <TextInput {...props} parse={(v) => (v === "" ? null : v)} /> */}
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
         <TextInput fullWidth source="avatar" title="title" />
         <TextInput fullWidth source="hotelname" />
         <TextInput fullWidth source="email" />
         <TextInput fullWidth source="phone" />
         <TextInput fullWidth source="city" />
         <TextInput fullWidth source="fullLocation" />
         <TextInput fullWidth source="description" />
         <TextInput fullWidth multiline source="description" />
      </SimpleForm>
   </Edit>
);

export const HotelCreate = () => (
   <Create title="Create a Post">
      <SimpleForm>
         <TextInput source="title" />
         <TextInput source="teaser" options={{ multiline: true }} />
         <TextInput multiline source="body" />
         <TextInput label="Publication date" source="published_at" />
         <TextInput source="average_note" />
      </SimpleForm>
   </Create>
);
