import React, { Component } from 'react';
import './footer.css';
export default class Footer extends Component<any, any>{
    render() {
        return (
            <section className="contact-form">
                <footer>
                    <div className="footer">
                        <div>
                            <h3>Left Footer Links</h3>
                            <small>Left Footer Link ONE</small>
                            <small>Left Footer Link TWO</small>
                        </div>
                        <div>
                            <h3>Left Footer Links</h3>
                            <small>Left Footer Link ONE</small>
                            <small>Left Footer Link TWO</small>
                        </div>
                    </div>
                </footer>
            </section>
        )
    }
}