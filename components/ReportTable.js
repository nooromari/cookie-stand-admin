
function ReportTable({cookieStands}){
    const open_hours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7]

    if (cookieStands.length) {
        return (
            <table className="w-1/2 mx-auto border-4 border-collapse border-green-500 mt-10 bg-green-200">
                <thead>
                    <tr>
                        <th className="border border-green-500 p-1">Location</th>
                        {open_hours.map((h,i)=> <th key={i} className="border border-green-500 p-1">{h}am</th>)}
                        <th className="border border-green-500 p-1">Totals</th>
                    </tr>
                </thead>
                <tbody>

                    {cookieStands.map(stand => (
                        <tr key={stand.id} className="odd:bg-green-300">
                            <td className="pl-2 border border-green-500 p-1">{stand.location}</td>
                            {stand.hourly_sales.map((sales,i) => <td key={i} className="pl-2 border border-green-500 p-1">{sales}</td> )}
                            <td className="pl-2 border border-green-500 p-1">{stand.max}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot >
                    <tr>
                        <td>Totals</td>
                    </tr>
                </tfoot>
            </table>
        )
    } else {
        return (
            <h2 className='m-5 text-gray-700 text-xl' >No Cookie Stands Available</h2>
        )
    }
}

export default ReportTable;