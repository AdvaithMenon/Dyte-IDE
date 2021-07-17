import React, { Component } from 'react';
import { Row, Form } from 'reactstrap';


class JSCoder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            JSCode: null
        }

        this.submitJS = this.submitJS.bind(this);
        this.handleTab = this.handleTab.bind(this);
    }


    submitJS() {
        var currentText = document.getElementById("js-text").value;
        this.setState({
            JSCode : currentText
        }, () => {
            this.props.updateJS(this.state.JSCode);
        });
        
    }





    handleTab(e) {
        var jsText = document.getElementById("js-text");
        if (e.key === "Tab") {
            e = e || window.event;
            e.preventDefault();

            var end = jsText.selectionEnd;
            var currentText = jsText.value;
            jsText.value = currentText.substring(0, jsText.selectionStart) + "\t" + currentText.substring(jsText.selectionStart, currentText.length);
            jsText.focus();
            jsText.selectionEnd = end + 1;
        }
    }

    render() {



        return (
            <Form>

                <Row>
                    <div style={{ padding: "40px 30px 5px 30px" }} className="container">
                        <textarea id="js-text" style={{ padding: "10px 10px 10px 10px", height: "500px", width: "100%" }} onChange={this.submitJS} onKeyDown={this.handleTab}>

                        </textarea>
                    </div>
                </Row>

            </Form>

        );
    }
}

export default JSCoder;