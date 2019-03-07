import React from "react";
import {connect} from "react-redux";
import {fetchBlogPost} from "../../actions/BlogPost";

class Blog extends  React.Component{

    componentDidMount() {
        this.props.fetchBlogPost();

        //const {id, title, author} = this.props.posts;
        //console.log(id);
    }

    render() {
        return (
            <div>
                {this.props.post == null ? "" :""}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        posts : state.blogPostData.blogPost
    };
}

const mapDispachToProps = {
    fetchBlogPost
}

export default connect(mapStateToProps, mapDispachToProps)(Blog);