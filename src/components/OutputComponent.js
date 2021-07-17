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

        if (this.props.htmlCode)
            html = this.props.htmlCode;

        //console.log("CSS = " + this.props.cssCode);
        if (this.props.cssCode)
            style = "<style>" + this.props.cssCode + "</style>";

        if (this.props.jsCode)
            document.getElementById("scripter").innerHTML = this.props.jsCode;

        if (output != null)
            output.innerHTML = style + "\n" + html;

        this.placeholder();
    }


	changeColour = () => {
		document.body.style.color = "red";
	}
	


    placeholder() {
        console.log("HTML: " + this.props.htmlCode + "\nCSS: " + this.props.cssCode);
        console.log(this.props.htmlCode.length + " " + this.props.cssCode.length);
        if ((!this.props.htmlCode || this.props.htmlCode.length === 0) && (!this.props.cssCode || this.props.cssCode.length === 0)) {
            var output = document.getElementById("output");
            if (output) {
                output.innerHTML = "Your output comes here...";
                output.style.color = "GrayText";
            }
        }
        else {
            document.getElementById("output").style.color = "black";
        }

    }




    render() {
        return (
            
            <Row>
                <script id="scripter">

                </script>
                <div id="output" style={{ marginTop: "40px", padding: "5px 30px 5px 10px", height: "500px", width: "80%", border: "1px solid black", color: 'GrayText' }} className="container">
                
                </div>
            </Row>
        );
    }
}

export default Output;