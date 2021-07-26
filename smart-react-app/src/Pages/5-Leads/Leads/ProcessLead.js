import SideBar from '../../../Components/SideNav/Sidebar'
import ProcessLeadInfo from '../Leads Components/ProcessLeadsInfo'
import ProcessLeadQuali from '../Leads Components/ProcessLeadQuali'
import ProcessLeadWorking from '../Leads Components/ProcessLeadWorking'
import ProcessLeadConverted from '../Leads Components/ProcessLeadConverted'

export default function ProcessLead() {

    return (
        <>
            <SideBar />
            <ProcessLeadInfo />
            <br />
            <ProcessLeadQuali />
            <br />
            <ProcessLeadWorking />
            <br />
            <ProcessLeadConverted />
        </>
    )
}