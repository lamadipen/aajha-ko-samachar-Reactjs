import React from "react";
import {connect} from "react-redux";
import {fetchBlogPost} from "../../actions/BlogPost";

class Blog extends  React.Component{

    componentDidMount() {
        this.props.fetchBlogPost();

        //const {id, title, author} = this.props.posts;
        console.log(this.props.posts);
    }

    render() {
        return (
            <div>
                {this.props.posts == null ? "" :
                    this.props.posts.map( (post) => (
                        <div key={post.id}>
                            <label>
                                {post.id}
                            </label>
                            <br/>
                            <label>
                                {post.title}
                            </label>
                            <br/>
                            <label>
                                {post.author}
                            </label>
                        </div>
                    ))
                }
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