import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Select a book please</div>
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title : &nbsp;{this.props.book.title}</div>
                <div>Pages : &nbsp;{this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);