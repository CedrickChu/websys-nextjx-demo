import {
    BooleanField,
    CreateButton,
    DatagridConfigurable,
    DateField,
    ExportButton,
    List,
    NumberField,
    ReferenceArrayField,
    SearchInput,
    SelectColumnsButton,
    TextField,
    TopToolbar,
} from 'react-admin';

function UserList() {
    return (
        <List
            sort={{ field: 'created_at', order: 'DESC' }}
            filters={[<SearchInput source="q" alwaysOn key="q" />]}
            actions={
                <TopToolbar>
                    <SelectColumnsButton />
                    <ExportButton />
                    <CreateButton />
                </TopToolbar>
            }
        >
            <DatagridConfigurable rowClick="edit">
                <NumberField source="id" /> 
                <TextField source="name" />
                <TextField source="email" />
                <TextField source="role" />
                <DateField source="created_at" />
                <DateField source="updated_at" />
            </DatagridConfigurable>
        </List>
    );
}

export default UserList;