import Sidebar from '../../../Components/SideNav/Sidebar'
import LeadSettingOptions from '../../5-Leads/Leads Components/Leads Settings/LeadSettingOptions'
import LeadSettingTable from '../../5-Leads/Leads Components//Leads Settings/LeadSettingTable'


export default function LeadSettings() {

    return (
        <div>
            <Sidebar />
            <br />
            <LeadSettingOptions />
            <br />
            <LeadSettingTable />
        </div>
    )
}
