import React, { Component } from 'react';
import { Row } from 'reactstrap';

class Output extends Component {
    constructor(props) {
        super(props);
        
        this.updateAllCodes = this.updateAllCodes.bind(this);
        //this.updateAllCodes();

    }

    componentDidUpdate(prev) {
        this.updateAllCodes();
    }

    updateAllCodes() {
        var output = document.getElementById("output");

        if (!output) 
            return;

        var style = "";
        var html = "";
        var js = "";

        if (this.props.htmlCode)
            html = this.props.htmlCode;

        //console.log("CSS = " + this.props.cssCode);
        if (this.props.cssCode) 
            style = "<style>" + this.props.cssCode + "</style>";

        if (this.props.jsCode)
            js = "<script>" + this.props.jsCode + "</script>";
        
        output.innerHTML = style + "\n" + html + "\n" + js;
    }


    placeholder() {
        if (!this.props.htmlCode && !this.props.cssCode) {
            return (
                <div id="output"  style={{ marginTop: "40px", padding: "5px 30px 5px 10px", height: "500px", width: "80%", border: "1px solid black"}} className="container">
                    <div style={{margin: "auto", color: 'gray'}}>
                        <p>Your Output Comes Here</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div id="output"  style={{ marginTop: "40px", padding: "5px 30px 5px 10px", height: "500px", width: "80%", border: "1px solid black"}} className="container">

                </div>
            );
        }

    }




    render() {
        return (
            <Row>
                {this.placeholder()}
            </Row>
        );
    }
}

export default Output;