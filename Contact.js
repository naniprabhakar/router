/*import React from 'react'


class Contact extends React.Component {
    render() {
        return <h1>Contact</h1>
    }
}
export default Contact  */

import React from 'react'
import { Route, Link } from 'react-router-dom'

const Contacts = ({ match }) => <p>{match.params.id}</p>

class Contact extends React.Component {
    render() {
        const { url } = this.props.match
        return (
            <div>
                <h1>Welcome to Contact Page</h1>
                <strong>Select Contact Id</strong>
                <ul>
                    <li> <Link to="/Contact/1">Contacts 1 </Link> </li>
                    <li> <Link to="/Contact/2">Contacts 2 </Link> </li>
                    <li> <Link to="/Contact/3">Contacts 3 </Link> </li>
                    <li> <Link to="/Contact/4">Contacts 4 </Link> </li>
                </ul>
                <Route path="/Contact/:id" component={Contacts} />
            </div>
        )
    }
}
export default Contact;