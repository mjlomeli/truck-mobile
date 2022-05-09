import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import {connect} from "react-redux";
import FormModal from "./modal_form"


const mapStateToProps = (state, ownProps) =>{
    return { type: state.entities.modal.type}
};

const mapDispatchToProps = dispatch => ({
});

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let preType = this.props.type;
        let postType = nextProps.type;

        if (preType !== postType)
            return true;
        return false;
    }

    isRenderValid() {
        return !!this.props.type;
    }

    resolve(){ return null; }

    render() {
        if (!this.isRenderValid())
            return this.resolve();

        return <FormModal type={this.props.type}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);