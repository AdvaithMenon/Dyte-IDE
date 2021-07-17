import React, { Component } from 'react';
import { Row, Form, Input } from 'reactstrap';


class HTMLCoder extends Component {



    constructor(props) {
        super(props);

        this.state = {
            htmlCode : null
        }


        this.handleTab = this.handleTab.bind(this);
        this.submitHTML = this.submitHTML.bind(this);
    }

    componentDidMount() {
        var multilineTextarea = document.getElementById("pre-html-text");
        if (multilineTextarea) {
            multilineTextarea.style.height = '200px';
        }
    }

    submitHTML() {
        var currentText = document.getElementById("html-text").value;
        this.setState({
            htmlCode : currentText
        }, () => {
            this.props.updateHTML(this.state.htmlCode);
        });
        //this.props.updateHTML(this.state.htmlCode);
    
    }


    handleTab(e) {
        var htmlText = document.getElementById("html-text");
        if (e.key === "Tab") {
            e = e || window.event;
            e.preventDefault();

            var end = htmlText.selectionEnd;
            var currentText = htmlText.value;
            htmlText.value = currentText.substring(0, htmlText.selectionStart) + "\t" + currentText.substring(htmlText.selectionStart, currentText.length);
            htmlText.focus();
            htmlText.selectionEnd = end + 1;
        }
    }

    render() {

        var htmlPreText = "<html>\n\
        <head>\n\
            <title> Index </title>\n\
            <link rel='stylesheet' href='index.css'>\n\
            <script src='index.js'></script>\n\
        </head>\n\
        <body>\n";

        var htmlPostText = "\
        </body>\n</html>\n";

        return (
            <Form>

                <Row>
                    <div style={{ padding: "30px 10px 5px 30px" }} className="container">
                        <Input style={{ color: "gray", resize: "none", overflow: "hidden" }} type="textarea" id="pre-html-text" readOnly value={htmlPreText}>

                        </Input>
                    </div>
                </Row>

                <Row>
                    <div style={{ padding: "5px 10px 5px 30px" }} className="container">
                        <textarea id="html-text" style={{ padding: "10px 10px 10px 50px", height: "250px", width: "100%" }} onChange={this.submitHTML} onBlur={this.submitHTML} onKeyDown={this.handleTab}>

                        </textarea>
                    </div>
                    
                </Row>
                <Row>
                    <div style={{ padding: "5px 10px 5px 30px" }} className="container">
                        <Input style={{ color: "gray", resize: "none", overflow: "hidden" }} type="textarea" id="post-html-text" readOnly value={htmlPostText}>

                        </Input>
                    </div>
                </Row>



            </Form>

        );
    }
}

export default HTMLCoder;