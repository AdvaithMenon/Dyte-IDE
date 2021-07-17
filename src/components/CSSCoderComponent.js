import React, { Component } from 'react';
import { Row, Form } from 'reactstrap';


class CSSCoder extends Component {



    constructor(props) {
        super(props);

        this.state = {
            CSSCode: null
        }

        this.submitCSS = this.submitCSS.bind(this);
        this.handleTab = this.handleTab.bind(this);
    }


    submitCSS() {
        var currentText = document.getElementById("css-text").value;
        currentText = this.cleanCSSCode(currentText);
        this.setState({
            CSSCode : currentText
        });
        this.props.updateCSS(this.state.CSSCode);
    }

    cleanCSSCode(code) {
        //console.log("Code before: " + code);
        code = code.replaceAll(/body/gi, "#output");
        code = code.replaceAll(/html/gi, "#output");

        var pat = /\.([a-zA-Z]+\s)+\n*\r*{/g;
    
        code = code.replaceAll(pat, "#output " +  "$&");
        //console.log("Code after: " + code);
        return code;
    }



    handleTab(e) {
        var cssText = document.getElementById("css-text");
        if (e.key === "Tab") {
            e = e || window.event;
            e.preventDefault();

            var end = cssText.selectionEnd;
            var currentText = cssText.value;
            cssText.value = currentText.substring(0, cssText.selectionStart) + "\t" + currentText.substring(cssText.selectionStart, currentText.length);
            cssText.focus();
            cssText.selectionEnd = end + 1;
        }
    }

    render() {



        return (
            <Form>

                <Row>
                    <div style={{ padding: "40px 30px 5px 30px" }} className="container">
                        <textarea id="css-text" style={{ padding: "10px 10px 10px 10px", height: "500px", width: "100%" }} onChange={this.submitCSS} onKeyDown={this.handleTab}>

                        </textarea>
                    </div>
                </Row>

            </Form>

        );
    }
}

export default CSSCoder;