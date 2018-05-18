// hoc = highter order component -- component(HOC), ktory renderuje component(REGULAR)
//reuse code po to jest hoc
//render hijacking
//props manipulation
//abstract state
import React from 'react'
import reactDOM from 'react-dom';
import { EHOSTUNREACH } from 'constants';

const Info = (props) => ( //a to regular
    <div>
    <h1>INFO IdsaasdNFO INFO HOC</h1>
    <p>info infadsso is {props.info}</p>
    </div>
)
const withAdminWarning = (WrappedComponent) => { //to jest hoc
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private info, please dont share</p>}
            {/* isAdmin = true tekst pokaze sie, false nie pokaze sie */}
            <WrappedComponent {...props} /> 
            {/* props potrzebne zeby props.info sie pokazalo */}
            {/* wrappedcomponent to Info component */}
        </div>
    )
};
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuth && <p>your login</p>}
        {props.isAuth ? <p>hello luki</p> : 'please login'}
            <WrappedComponent {...props}/>
            
        </div>
    )
}

//requireAuthetication
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// reactDOM.render(<AdminInfo isAdmin={true} info='this is the detail' />, document.getElementById('app'))
reactDOM.render(<AuthInfo isAuth={true} />, document.getElementById('app'));