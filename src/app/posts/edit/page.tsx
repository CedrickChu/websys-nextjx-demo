import {
    BooleanInput,
    DateInput,
    Edit,
    Labeled,
    NumberField,
    ReferenceArrayInput,
    ReferenceManyCount,
    ReferenceManyField,
    SimpleList,
    TabbedForm,
    TextInput,
    required,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { Stack } from '@mui/material';

function PostEdit() {
    return (
        <Edit>
            <TabbedForm syncWithLocation={false}>
                <TabbedForm.Tab label="Content">
                    <TextInput
                        source="name"
                        validate={[required()]}
                        fullWidth
                    />
                    <TextInput
                        source="email"
                        validate={[required()]}
                        fullWidth
                        multiline
                    />
                    <TextInput
                        source="role"
                        validate={[required()]}
                        fullWidth
                        multiline
                    />
    
                    
                </TabbedForm.Tab>
              
            </TabbedForm>
        </Edit>
    );
}

export default PostEdit;