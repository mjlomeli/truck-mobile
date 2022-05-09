import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import {connect} from 'react-redux';
import React from 'react';
import {isHTML} from '../../utils/component_utils'
import {DropdownLayout} from "./dropdown";
import {NavbarEntriesError} from "./navbar_error";


const mapStateToProps = ({entities, session, errors}) => ({
    //errors: errors.session, // need to add a ui or user_control errors
    nameId: "card_listing"
});

const mapDispatchToProps = dispatch => ({
    afunction: () => {
    }
});


const defaultNavbarStyle = {
    overflow: "hidden"
};


class NavbarLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {headerStyle: {}}

        this.classes = {}
        this.className = '';
        this.classHeader = '';
        this.classDropper = '';
        this.classLinks = '';

        this.classHover = '';
        this.classHeaderHover = '';
        this.classLinksHover = '';

        this.#assignClassNames(props);
    }

    #assignClassNames(props) {
        this.className = props.className || '';
        this.classHeader = props.classHeader || '';
        this.classDropper = props.classDropper || '';
        this.classLinks = props.classLinks || '';

        this.classHover = props.classHover || '';
        this.classHeaderHover = props.classHeaderHover || '';
        this.classLinksHover = props.classLinksHover || '';

        if (props.className) this.classes.className = props.className;
        if (props.classHeader) this.classes.classHeader = props.classHeader;
        if (props.classDropper) this.classes.classDropper = props.classDropper;
        if (props.classLinks) this.classes.classLinks = props.classLinks;
        if (props.classHover) this.classes.classHover = props.classHover;
        if (props.classHeaderHover) this.classes.classHeaderHover = props.classHeaderHover;
        if (props.classLinksHover) this.classes.classLinksHover = props.classLinksHover;
    }

    render() {
        let components = this.props.components;
        if (!components)
            return null;
        if (isHTML(components))
            throw new NavbarEntriesError();
        else if (!components)
            return null;
        return <div className={this.className}>{
            components.map((dropDown, idx) => {
                let {header, link, components} = dropDown;
                return <DropdownLayout key={idx}
                                       header={header}
                                       link={link}
                                       components={components} {...this.classes}
                                       // className={this.className}
                                       // classHeader={this.classHeader}
                                       // classDropper={this.classDropper}
                                       // classLinks={this.classLinks}
                                       // classHover={this.classHover}
                                       // classHeaderHover={this.classHeaderHover}
                                       // classLinksHover={this.classLinksHover}
                />
            })
        }</div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLayout);