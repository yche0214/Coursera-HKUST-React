import React from 'react';

function Contact(props) {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>位置信息</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>地址</h5>
                    <address>
                        121, 清水湾路<br />
                        清水湾， 九龙<br />
                        香港<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="groop">
                        <a role="button" className="btn btn-primary" href="tel:+86212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelop-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;