import axios from 'axios';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import styles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import formStyles from "../../styles/SignInUpForm.module.css";

const ContactForm = () => {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const { name, email, message } = contactData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/contact/", contactData);
            history.push("/");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Row className={formStyles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${styles.Content} p-4 `}>
                    <h1 className={formStyles.Header}>Contact us</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className={formStyles.Input}
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.name?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}

                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                className={formStyles.Input}
                                type="email"
                                placeholder="Email address"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.email?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}

                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                className={formStyles.Input}
                                as="textarea"
                                placeholder="Type your message here"
                                name="message"
                                value={message}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.message?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}

                        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Teal}`} type="submit">
                            Send
                        </Button>
                        {errors.non_field_errors?.map((message, idx) =>
                            <Alert variant="warning" className="mt-3" key={idx}>{message}</Alert>
                        )}
                    </Form>

                </Container>
            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${formStyles.SignUpCol}`}
            >
                <Image
                    className={`${styles.FillerImage}`}
                    src={
                        "https://res.cloudinary.com/dvywqvgif/image/upload/v1701287626/pexels-nina-mace-photography-3913555_spkzyl.jpg"
                    }
                />
            </Col>
        </Row>
    );
};

export default ContactForm;