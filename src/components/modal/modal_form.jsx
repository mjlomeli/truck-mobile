import React from 'react';
import "./modal.css"
import GridLayout from "../grid_layout/grid_layout";
import {connect} from "react-redux";
import {notification} from "../../actions/alert_action";
import {deactivateModal} from "../../actions/modal_action";
import {createRestaurant, updateRestaurant} from "../../actions/restaurant_action";


const mapStateToProps = (state, ownProps) =>{
    let modal = state.entities.modal;
    let restaurants = state.entities.restaurants;
    let restaurant = {name: "", address: "", foodtypes: ""}
    if (modal && modal.type === 'update'){
        restaurant = {...restaurant, ...restaurants[modal.permit]}
    }
    return {...modal, restaurant}
};

const mapDispatchToProps = dispatch => ({
    notification: (message) => dispatch(notification(message)),
    deleteModal: () => dispatch(deactivateModal()),
    updateRestaurant: (permit, restaurant) => dispatch(updateRestaurant(permit, restaurant)),
    createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant))
});

class FormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props.restaurant, disabled: true}
        this.onclickbackground = this.onClickBackground.bind(this);
        this.onclicksubmit = this.onClickSubmit.bind(this);
        this.onchangeinput = this.onChangeInput.bind(this);
        this.onkeyupinput = this.onKeyUpInput.bind(this);
    }

    onClickBackground(e) {
        this.props.deleteModal();
    }

    onClickSubmit(e) {
        let restaurant = Object.assign({}, this.state);
        if (this.props.type === 'create')
            this.props.createRestaurant(restaurant);
        else
            this.props.updateRestaurant(this.props.permit, restaurant);
        this.props.deleteModal();
    }

    onKeyUpInput(){
        let disabled = this.state.name.length === 0 ||
            this.state.address.length === 0 ||
            this.state.foodtypes.length === 0;
        if (disabled !== this.state.disabled)
            this.setState({disabled: disabled})
    }

    onChangeInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    header() {
        let areas = ['title .', 'text .']
        let components = {
            "title": <div className="modal-header-title">Truck Mobile</div>,
            "text": <div className="modal-header-text">Register your business</div>,
        }
        return <GridLayout areas={areas} components={components} className="modal-header"/>
    }

    form() {
        let areas = ['name', 'address', 'foodtypes']
        let components = {
            'name': <>
                <span className="modal-name-text">Company Name *</span>
                <input className="modal-input-name" onChange={this.onchangeinput("name")} value={this.state.name} onKeyUp={this.onkeyupinput} type="text"/>
            </>,

            'address': <>
                <span className="modal-address-text">Address *</span>
                <input className="modal-input-address" onChange={this.onchangeinput("address")} value={this.state.address} onKeyUp={this.onkeyupinput} type="text"/>
            </>,
            'foodtypes': <>
                <span className="modal-foodtypes-text">Food items *</span>
                <textarea className="modal-input-foodtypes" onChange={this.onchangeinput("foodtypes")} value={this.state.foodtypes} onKeyUp={this.onkeyupinput}/>
            </>
        }

        return <GridLayout areas={areas} components={components} className="modal-form"/>
    }

    render() {
        let buttonText = this.props.type === 'create' ? "Create" : "Update";
        let areas = ['header', 'form', 'submit']
        let components = {
            'header': this.header(),
            'form': this.form(),
            "submit": <button className="modal-submit-button" onClick={this.onclicksubmit} disabled={this.state.disabled} type="button">{buttonText}</button>,
        }

        return <div>
            <div className="modal-background" onClick={this.onclickbackground}/>
            <GridLayout areas={areas} components={components} className="modal"
                        classElements="modal-items"/>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);