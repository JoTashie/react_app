import React from 'react';
import '../style.css';
function Contact () {
    return (
        <div className="container mt-5">
            <h1>Contact Us</h1>
            <p>For any inquiries, please fill out the form below:</p>
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea className="form-control" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
