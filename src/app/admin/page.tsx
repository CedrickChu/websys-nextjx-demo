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
import dataProvider from '../posts/dataProvider';
import PostList from '../posts/lists/page';
import PostEdit from '../posts/edit/page';
import PostCreate from '../posts/create/page';
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
                list={PostList}
                edit={PostEdit}
                create={PostCreate}
                show={ShowGuesser}
                recordRepresentation="title"
                icon={BookIcon}
            />
            
           
        </Admin>
    );
}

export default App;