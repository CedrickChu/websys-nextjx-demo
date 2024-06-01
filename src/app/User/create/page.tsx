import {
    BooleanInput,
    Create,
    SimpleForm,
    TextInput,
    required,
    PasswordInput,
    SelectInput,
    DateInput,
    DateField, 
} from 'react-admin';
import { Stack } from '@mui/material';

function UserCreate() {
    const currentDate = new Date().toISOString();
    return (
        <Create>
            <SimpleForm>
                <TextInput source="created_at" defaultValue={currentDate}/>
                <TextInput source="name" validate={required()} fullWidth />
                <TextInput
                    source="email"
                    validate={required()}
                    fullWidth
                    type="email"
                />
                <SelectInput
                    source="role"
                    choices={[
                        { id: 'user', name: 'User' },
                        { id: 'administrator', name: 'Administrator' },
                    ]}
                    validate={required()}
                    fullWidth
                />
                <PasswordInput source="password" validate={required()} fullWidth />
                <TextInput
                    source="validatepassword"
                    validate={required()}
                    fullWidth
                    type="password"
                />
            </SimpleForm>
        </Create>
    );
}

export default UserCreate;