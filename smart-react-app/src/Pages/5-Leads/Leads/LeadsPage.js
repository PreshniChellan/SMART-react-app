import Sidebar from '../../../Components/SideNav/Sidebar'
import '../Leads.css'
import LeadsFilterContainer from '../Leads Components/Leads Container1/LeadsFilterContainer'

export default function LeadsPage() {

    return (
        <div>
            <Sidebar />
            <br />
            <LeadsFilterContainer />
            <br /><br />
            <div>
                <table>
                    <tr>
                        <th>Lead Owner</th>
                        <th>Lead Name</th>
                        <th>Created By</th>
                        <th>Created Date</th>
                        <th>Campaign</th>
                        <th>Call Count</th>
                        <th>Lead Rating</th>
                        <th>Lead Status</th>
                        <th>Contact</th>
                        <th>Lead Actions</th>
            
                    </tr>
                    <tr class='rowHighlight'>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                    </tr>
                    <tr class='rowHighlight'>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                    </tr>
                    <tr class='rowHighlight'>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                    </tr>
                    
                </table>
            </div>
        </div>
    )
}
