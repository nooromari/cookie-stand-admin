import If from "./If"

function Stand({stand}){

    return(
        <If condition={stand.condition} >
            <p>
                <span>location : {stand.location} </span>,
                <span>min : {stand.min} </span>,
                <span>max : {stand.max} </span>,
                <span>avg : {stand.avg} </span>
            </p>
        </If>
    )
}

export default Stand