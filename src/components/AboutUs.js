class AboutUs extends  React.Component{
    render() {
        return (
            <div>
                Username:
                <input name="username" onChange={this.handleUsernameOnChange}/>
                Password:
                <input name="password" onChange={this.handlePasswordOnChange}/>
                <button onClick={this.handleSubmit} >Login</button>
            </div>
        );
    }
}
