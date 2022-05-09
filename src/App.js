import React from 'react';
import Alert from "./components/alert/alert";
import Modal from "./components/modal/modal";
import Filters from "./components/navbar_layout/navbar_filters";
import Listing from "./components/flow_layout/listing";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <>
            <Filters />
            <div className="App">
                <Listing />
            </div>
            <Alert />
            <Modal />
            </>
    }
}

export default App;
