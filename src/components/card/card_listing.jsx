import {
    Link
} from 'react-router-dom';
import React from 'react';
import './card_listing.css'
import GridLayout from "../grid_layout/grid_layout";
import {connect} from "react-redux";
import {activateModal} from "../../actions/modal_action";
import {deleteRestaurant, fetchRestaurants} from "../../actions/restaurant_action";
import {notification, success} from "../../actions/alert_action";


const mapStateToProps = (state, ownProps) => {
    let permit = ownProps.permit;
    let restaurants = state.entities.restaurants || {};
    let restaurant = permit && restaurants[permit] || {};
    return {restaurant, restaurants};
};

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    updateRestaurant: (permit) => dispatch(activateModal("update", permit)),
    deleteRestaurant: (permit) => dispatch(deleteRestaurant(permit)),
    notify: (message) => dispatch(notification(message)),
    success: (message) => dispatch(success(message))
});


class Availability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: props.enabled || false
        }
    }

    render() {
        // add a closing and opening timer depending on the time at san francisco
        let bgcolor = this.state.enabled ? '#D4E9D7' : '#E9D4D4FF';
        let text = this.state.enabled ? 'Open' : 'Closed';
        return <>
            <div className="card-listing-tags" style={{backgroundColor: bgcolor}}>
                <label className="card-listing-tags-label">{text}</label>
            </div>
        </>
    }
}

class CardListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onclickclose = this.onClickClose.bind(this);
        this.onclickupdate = this.onClickUpdate.bind(this);
        this.onclick = this.onClick.bind(this);
    }

    onClick(e){

    }

    onClickUpdate(e){
        this.props.updateRestaurant(this.props.permit);
    }

    onClickClose(e){
        this.props.notify(`You have deleted: ${this.props.restaurant.name}`)
        this.props.deleteRestaurant(this.props.permit);
    }

    update(){
        return <>
            <button className="card-update-button"
                    onClick={this.onclickupdate}
                    type="button">
                Update
            </button>
        </>
    }

    close(){
        return <div className={"close-border"}>
            <button type="button" className="close"
                       onClick={this.onclickclose}>
            ×
            </button>
        </div>
    }

    title() {
        let title = this.props.restaurant.name;
        return <>
            <Link to={`/product/${this.props.permit}`} style={{textDecoration: 'none'}}>
                <label className="card-listing-title">{title}</label>
            </Link>
        </>
    }

    address(){
        let location = this.props.restaurant.address;
        return <>
            <Link to={`/product/${this.props.permit}`} style={{textDecoration: 'none'}}>
                <label className="card-listing-title">{location}</label>
            </Link>
        </>
    }

    foodtypes(){
        let foods = this.props.restaurant.foodtypes;
        return <>
            <Link to={`/product/${this.props.permit}`} style={{textDecoration: 'none'}}>
                <label className="card-listing-title">{foods}</label>
            </Link>
        </>
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let prePermit = this.props.permit;
        let postPermit = nextProps.permit;

        let preRestaurant = JSON.stringify(this.props.restaurant);
        let postRestaurant = JSON.stringify(nextProps.restaurant);

        let preRestaurants = this.props.restaurants;
        let postRestaurants = nextProps.restaurants;

        if (prePermit !== postPermit)
            return true;
        if (preRestaurant !== postRestaurant)
            return true;
        if ((prePermit in preRestaurants) ^ (prePermit in postRestaurants))
            return true;
        return false;
    }

    isRenderValid() {
        return !!this.props.permit && this.props.permit in this.props.restaurants;
    }

    resolve() {
        this.props.fetchRestaurants();
        return null;
    }

    render() {
        if (!this.isRenderValid())
            return this.resolve();

        let areas = ['title', 'address', 'foodtypes', 'tag', 'update']
        let components = {
            'title': this.title(),
            'address': this.address(),
            'foodtypes': this.foodtypes()
        }

        return <div className={"card-listing"} onClick={this.onclick}>
            {this.close()}
            <GridLayout areas={areas}
                        components={components}
                        className="card-listing-grid"
                        classElements="card-listing-items"/>
            <div className={"card-listing-interactive"}>
                <Availability enabled={true}/>
                <div className={"border-update-button"}>
                {this.update()}
                </div>
            </div>
        </div>
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardListing);