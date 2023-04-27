import React, { useState } from 'react'
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';

function Student() {

    const [students, setStudents] = useState([])
    const [isAddStudent, setIsAddStudent] = useState(true)
    const [studentEdit, setStudentEdit] = useState()



    const onEditStudent = (student) => {
        setStudentEdit(student);
        setIsAddStudent(false);
        console.log('Student:', student);
    }

    const onSaveEditStudent = (student) => {
        console.log('StudentEdit:', student);


        setStudents(students.map(i => i.id === student.id
            ? ({
                ...student,
                firstName: student.firstName,
                lastName: student.lastName,
                email: student.email,
            })
            : i))

    }



    return (
        <div>
            {
                isAddStudent
                    ? <AddStudent onAddStudent={student => setStudents([student, ...students])} />
                    : <UpdateStudent student={studentEdit} onSaveEdit={onSaveEditStudent} />

            }
            <div className="list-student">
                <table style={{ width: '100%' }}>
                    <thead style={{ backgroundColor: 'white' }}>
                        <tr>
                            <td style={{ width: '25%' }}>ID</td>
                            <td style={{ width: '25%' }}>FullName</td>
                            <td style={{ width: '25%' }}>Email</td>
                            <td style={{ width: '25%' }}>Option</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student =>
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.firstName} {student.lastName}</td>
                                    <td>{student.email}</td>
                                    <td><button onClick={() => onEditStudent(student)}>Edit</button></td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student