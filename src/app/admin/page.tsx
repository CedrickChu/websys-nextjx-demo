"use client";
import {
    Layout,
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    ShowGuesser,

} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import dataProvider from '../User/dataProvider';
import UserList from '../User/lists/page';
import UserEdit from '../User/edit/page';
import UserCreate from '../User/create/page';
import Header from '../../components/Header'; 
import '../../app/globals.css'

const MyLayout: React.FC<any> = (props) => (
    <Layout
        {...props}
        appBar={Header} 
    />
);
function App() {
    return (
        <Admin
            layout={MyLayout}
            dataProvider={dataProvider}

        >
            <Resource
                name="user_lists"
                list={UserList}
                edit={UserEdit}
                create={UserCreate}
                show={ShowGuesser}
                recordRepresentation="title"
                icon={BookIcon}
            />
            
           
        </Admin>
    );
}

export default App;