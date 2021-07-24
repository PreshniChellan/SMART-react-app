import SideBar from '../../../Components/SideNav/Sidebar'
import ProcessLeadInfo from '../Leads Components/ProcessLeadsInfo'
import ProcessLeadQuali from '../Leads Components/ProcessLeadQuali'

export default function ProcessLead() {

    return (
        <>
            <SideBar />
            <ProcessLeadInfo />
            <br />
            <ProcessLeadQuali />
        </>
    )
}