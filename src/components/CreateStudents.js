
import React from "react";

function CreateStudent({ students, setStudents, name, setName }) {

    function addStudent() {
        setStudents([...students, name]);
        setName("");
    }

    return (<>
        <input type="text" value={name} onChange={(val) => {
            setName(val.target.value);
        }
        } />
        <button onClick={addStudent}>Add Student!</button>
    </>);
}

export default CreateStudent;