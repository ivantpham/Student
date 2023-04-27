import React, { useState } from 'react'

function UpdateStudent({ student, onSaveEdit }) {
    const [firstName, setFirstName] = useState(student.firstName)
    const [lastName, setLastName] = useState(student.lastName)
    const [email, setEmail] = useState(student.email)

    const onSubmitForm = (event) => {
        event.preventDefault()

        onSaveEdit({
            id: student.id,
            firstName,
            lastName,
            email,
        })
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    return (
        <>
            <h3>Edit Student</h3>

            <form onSubmit={onSubmitForm}>

                <table >
                    <tbody>
                        <tr>
                            <td><label>First name:</label></td>
                            <td><input type="text" value={firstName} onChange={event => setFirstName(event.target.value)} /></td>
                        </tr>

                        <tr>
                            <td><label>Last name:</label></td>
                            <td><input type="text" value={lastName} onChange={event => setLastName(event.target.value)} /></td>
                        </tr>

                        <tr>
                            <td><label>Email:</label></td>
                            <td><input type="text" value={email} onChange={event => setEmail(event.target.value)} /></td>
                        </tr>

                        <tr>
                            <td><label></label></td>
                            <td><input type="submit" value="Save" className="Save Edit" /></td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </>
    )
}

export default UpdateStudent