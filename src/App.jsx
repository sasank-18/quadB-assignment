import  { useState } from 'react';
import Header from './Components/Header';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
const App = () => {
    const [addItem, setadditem] = useState([]);

    const addNote = (note) => {
        console.log('note',note);
        setadditem((prevalue) => {
            return [...prevalue, note]
        })
    }

    const onDelete = (id) => {
        setadditem((prevalue) =>
            prevalue.filter((currdata, index) =>
                index !== id
            )
        )
    }


    return <>
        <Header />

        <CreateNote passNote={addNote} />

        {addItem.map((currdata, index) => {
            return <Note
                key={index}
                id={index}
                title={currdata.title}
                content={currdata.content}
                deleteItem={onDelete}
            />
        })}


        {/* <Footer/> */}

    </>;
}


export default App;