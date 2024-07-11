
const Country = ({country, handleVisit}) => {
    const {name, flags} = country

    
    return (
        <div className="border-2 border-blue-600 p-5">
            <h1>country name : {name.common}</h1>
            <button onClick={()=>handleVisit(country)} className="btn btn-secondary">Visited</button>

        </div>
    );
};

export default Country;