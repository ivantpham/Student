import React from 'react'

function Form() {
    return (
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
                        <td><input type="submit" value="Save" className="save" /></td>
                    </tr>

                </tbody>
            </table>
        </form>
    )
}

export default Form
