import React from "react";
import { useState } from 'react';
import CreateStudent from "./CreateStudents";
import StudentListItem from "./StudentListItems";

function StudentList() {
    const [students, setStudents] = useState(["Person A", "Person B"],["Person C","Person D"]);
    const [name, setName] = useState("");

    const nameList = students.map(name =>
        <StudentListItem key={name} name={name} />
    );

    return (<>
        <h1>Products</h1>
        {nameList}
        <CreateStudent students={students} setStudents={setStudents} name={name} setName={setName} />
    </>);
}

export default StudentList;