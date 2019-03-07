import React from "react";
import store from "../../store"

class AboutUs extends  React.Component{

    add = () => {
        store.dispatch({ type: 'INCREMENT' })
    }

    subtract = () => {
        store.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return (
            <div>
                Username:
                <input name="username" onChange={this.handleUsernameOnChange}/>
                Password:
                <input name="password" onChange={this.handlePasswordOnChange}/>
                <button onClick={this.handleSubmit} >Login</button>
                <br/>
                <button onClick={this.add} >Add</button>
                <button onClick={this.subtract} >Subtract</button>

            </div>
        );
    }
}

export default AboutUs;