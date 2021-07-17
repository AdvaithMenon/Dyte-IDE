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

        var style = "";
        var html = "";
        var js = "";

        if (this.props.htmlCode)
            html = this.props.htmlCode;

        //console.log("CSS = " + this.props.cssCode);
        if (this.props.cssCode)
            style = "<style>" + this.props.cssCode + "</style>";

        if (this.props.jsCode)
            document.getElementById("scripter").innerHTML = this.props.jsCode;

        if (output != null)
            output.innerHTML = style + "\n" + html;
    }


	changeColour = () => {
		document.body.style.color = "red";
	}
	


    placeholder() {
        if (!this.props.htmlCode && !this.props.cssCode) {
            return (
                <div id="output" style={{ marginTop: "40px", padding: "5px 30px 5px 10px", height: "500px", width: "80%", border: "1px solid black", color: 'GrayText' }} className="container">
                    Your Output Comes Here
                </div>
            );
        }
        else {
            return (
                <div id="output" style={{ marginTop: "40px", padding: "5px 30px 5px 10px", height: "500px", width: "80%", border: "1px solid black" }} className="container">

                </div>
            );
        }

    }




    render() {
        return (
            
            <Row>
                <script id="scripter">

                </script>
                {this.placeholder()}
            </Row>
        );
    }
}

export default Output;