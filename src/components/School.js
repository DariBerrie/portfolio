const School = ({school}) => {

    return (
        <div>
          <h5>{school.diploma.toUpperCase()}</h5>
          <p>{school.name}</p>
        </div>

    )
}
export default School
