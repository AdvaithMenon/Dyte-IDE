import React, { Component } from 'react';
import { Row } from 'reactstrap';

class Output extends Component {
    constructor(props) {
        super(props);
        
        this.updateAllCodes = this.updateAllCodes.bind(this);
        this.updateAllCodes();

    }

    componentDidUpdate(prev) {
        this.updateAllCodes();
    }

    updateAllCodes() {
        var output = document.getElementById("output");
        //console.log("HTML = " + this.props.htmlCode);
        if (this.props.htmlCode)
            output.innerHTML = this.props.htmlCode;

        //console.log("CSS = " + this.props.cssCode);
        if (this.props.cssCode) 
            output.innerHTML += "\n<style>" + this.props.cssCode + "</style>"
    }


    render() {
        return (
            <Row>
                <style id="styler">

                </style>
                <div id="output"  style={{ marginTop: "40px", padding: "5px 30px 5px 10px", height: "500px", width: "80%", border: "1px solid black"}} className="container">
                
                </div>
            </Row>
        );
    }
}

export default Output;