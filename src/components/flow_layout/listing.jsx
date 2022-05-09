import React from 'react';
import CardListing from "./../card/card_listing";
import FlowLayout from "./flow_layout";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";

const mapStateToProps = (state, ownProps) => {
    return {trucks: state.entities.effects}
};

const mapDispatchToProps = dispatch => ({});

class Listing extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let preLength = this.props.trucks.length;
        let postLength = nextProps.trucks.length;

        let preList = this.props.trucks;
        let postList = nextProps.trucks;

        if (preLength !== postLength)
            return true;

        let notEqual = preList.map((e, i) => [e, postList[i]]).some(([a, b]) => {
            return JSON.stringify(a) !== JSON.stringify(b);
        });
        console.log(notEqual)
        if (notEqual)
            return true;

        return false;
    }

    isRenderValid() {
        return this.props.trucks.length > 0;
    }

    resolve() {
        return null;
    }

    render() {
        if (!this.isRenderValid())
            return this.resolve();
        let cards = this.props.trucks.map(({permit}) => <CardListing key={permit} permit={permit}/>);
        return <>
            <div className="App">
                <FlowLayout key={uuidv4()} components={cards} maxColumns={2}/>
            </div>
        </>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing);