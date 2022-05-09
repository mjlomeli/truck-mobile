import React from 'react';
import './flow_layout.css'
import {v4 as uuidv4} from "uuid";

let defaultComponents = () => {
    let components = [];
    for (let i = 0; i < 17; i++) {
        let comp = <CardThumbnail />;
        components.push(comp);
    }
    return components
}


class FlowLayout extends React.Component {
    constructor(props) {
        super(props);
        if (props.components) {
            this.classGrid = `global-flowlayout-grid ${props.classGrid || ""}`;
            this.classElements = `global-flowlayout-items ${props.classElements || ""}`;
            this.state = {
                components: props.components || defaultComponents(),
                maxColumns: props.maxColumns || 0
            }
        } else {
            this.classGrid = `global-flowlayout-grid global-default-flowlayout-grid`;
            this.classElements = `global-flowlayout-items global-default-flowlayout-items`;
            this.state = {
                components: defaultComponents(),
                maxColumns: 1
            }
        }

        this.onmouseenter = props.onMouseEnter;
        this.onmouseleave = props.onMouseLeave;
        this.onclick = props.onClick;
    }

    render() {
        let flexBasis = this.state.maxColumns && `calc(100vw / ${this.state.maxColumns + 1})` || 0;
        let style = {flexBasis: flexBasis};
        return <>
            <div onMouseEnter={this.onmouseenter} onMouseLeave={this.onmouseleave} onClick={this.onclick}
                 className={this.classGrid} >{
                this.state.components.map(component => {
                        return <div key={uuidv4()} className={this.classElements} style={style}>{component}</div>
                    })
            }</div>
        </>
    }
}

export default FlowLayout;
