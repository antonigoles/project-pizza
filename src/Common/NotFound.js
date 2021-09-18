import {
    Link
  } from "react-router-dom";

function NotFound() {
    return (
        <div style={{
            fontSize: 40, 
            marginTop: `20vh`, 
            fontWeight: 'bold', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <img src="pizza.svg" alt=":(" style={{ width: `20vw`}}/>
            404 not found :(
            <Link to="" style={{
              textDecoration: 'none',
              color: 'gray',
            }}> 
              Take me back! 
            </Link>
          </div>
    )
}

export default NotFound;