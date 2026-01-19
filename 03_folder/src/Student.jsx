import propTypes from 'prop-types'

function Student(props) {
    return(
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Is Student : {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    );
}


Student.propTypes = {
  name : propTypes.string,
  age : propTypes.number,
  isStudent : propTypes.bool,
}

export default Student