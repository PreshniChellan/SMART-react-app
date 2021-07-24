import '../../Leads.css'

export default function LeadSettingTable() {

    return(
        <>
             <div>
                <table>
                    <tr>
                        <th>Current Campaigns</th>
                        <th>Awareness Sources</th>
                        <th>Lead Statuses</th>
                        <th>App Outcomes</th>
                        <th>Call Outcomes</th>            
                    </tr>
                    <tr class='rowHighlight'>
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
                    </tr>
                </table>
            </div>
        </>
    )
}