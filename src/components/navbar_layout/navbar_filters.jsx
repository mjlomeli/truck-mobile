import React from 'react';
import NavbarLayout from "./navbar";
import './navbar_filters.css'
import {sortName, sortAddress} from "../../actions/side_effect_action";
import {activateModal} from "../../actions/modal_action";
import {notification} from "../../actions/alert_action";
import {connect} from "react-redux";


const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    notification: (message) => dispatch(notification(message)),
    activateModal: () => dispatch(activateModal("create")),
    sortName: () => dispatch(sortName()),
    sortAddress: () => dispatch(sortAddress())
});

class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.onclickaddtruck = this.onClickAddTruck.bind(this);
        this.onclicksortname = this.onClickSortName.bind(this);
        this.onclicksortaddress = this.onClickSortAddress.bind(this);
    }
    onClickAddTruck(e){
        this.props.activateModal();
    }

    onClickSortName(e){
        this.props.sortName()
    }

    onClickSortAddress(e){
        this.props.sortAddress();
    }

    render() {
        const components = [
            {header:
                    <button className="filter-sort-name-button"
                            onClick={this.onclicksortname}
                            type="button">
                        Sort by name
                    </button>
            },
            {header:
                    <button className="filter-sort-address-button"
                            onClick={this.onclicksortaddress}
                            type="button">
                        Sort by address
                    </button>
            },
            {header:
                    <button className="filter-add-truck-button"
                            onClick={this.onclickaddtruck}
                            type="button">
                        Add Truck
                    </button>
            }
        ]
        return <>
            <NavbarLayout components={components}
                          className="navbar"
                          classHeader="navbar-link"/>
        </>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
