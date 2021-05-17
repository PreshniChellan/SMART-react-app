import { Redirect } from 'react-router-dom'

export default function Sales({ authorized }) {

    if (!authorized) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <p>test</p>
        </div>
    )
}