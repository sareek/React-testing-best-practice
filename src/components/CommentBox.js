import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
import { Button, TextArea, Form, List, Divider } from 'semantic-ui-react'
import 'components/css/componentBox.css'

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }

    handleChange = (e) => {
      this.setState({comment:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //call an action creator
        //and save the comment

        this.props.saveComment(this.state.comment)

        this.setState({comment: ''});

    }
    
    render() {
        return (
            <div className = "space">
            <Form 
             onSubmit = {this.handleSubmit}
            >
                <Form.Field>
                <h4>Add a Comment</h4>
                <TextArea 
                 name='comment'
                 onChange={this.handleChange}
                 value={this.state.comment}
                />
                </Form.Field>
                <Form.Field>
                    <Button color = "teal"> Submit Comment</Button>
                </Form.Field>
            </Form>
            <br></br>
            <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox)