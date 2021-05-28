import {BrowserRouter,Switch, Route} from 'react-router-dom'
import ContactListTable from '../components/contact-list-table'
import ContactForm from '../components/contact-form'


export default function Routes(props) {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ='/'>
                    <ContactListTable />
                </Route>

                <Route exact path ='/add-or-update-contact'>
                    <ContactForm />
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
}