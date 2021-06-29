
function ReportTable({stand}){

    if (stand.condition) {
        return (
            <p className='m-2 text-gray-600' >
                <span>location : {stand.location} </span>,
                <span>min : {stand.min} </span>,
                <span>max : {stand.max} </span>,
                <span>avg : {stand.avg} </span>
             </p>
        )
    } else {
        return (
            <p className='m-5 text-gray-700 text-xl' >No Cookie Stands Available</p>
        )
    }
}

export default ReportTable;