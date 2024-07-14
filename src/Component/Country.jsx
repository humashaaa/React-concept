import PropTypes from 'prop-types'; // ES6

const Country = ({country, handleVisit, handleRemove}) => {
    const {name, flags} = country

    
    return (
        <div className="border-2 border-blue-600 p-5">
            <h1>country name : {name.common}</h1>
            <button onClick={()=>handleVisit(country) } className="btn btn-secondary">Visited</button>
            <button onClick={()=>handleRemove(country) } className="btn btn-secondary">Remove Visited</button>

        </div>
    );
};

Country.propTypes={
    country: PropTypes.object.isRequired,
    handleVisit : PropTypes.func,
    handleRemove : PropTypes.func,

}
export default Country;