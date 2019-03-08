import React from 'react';

class PostComment extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    handleUsernameOnChange = (event) => {
        this.state.username = event.target.value;
    }
    handlePasswordOnChange = (event) => {
        this.state.password = event.target.value;
    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div>
                Username:
                <input name="username" onChange={this.handleUsernameOnChange}/>
                Password:
                <input name="password" onChange={this.handlePasswordOnChange}/>
                <button onClick={this.handleSubmit} >Login</button>
            </div>
        )
    }
};


export default PostComment;