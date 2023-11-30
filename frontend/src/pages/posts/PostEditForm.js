import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function PostEditForm() {
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        image: "",
        continent: "EU",
        holiday_type: "solo"
    });
    const {
        title,
        content,
        image,
        continent,
        holiday_type
    } = postData;

    const [continents, setContinents] = useState([]);
    const [holidayTypes, setHolidayTypes] = useState([]);

    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/${id}/`);
                const {
                    title,
                    content,
                    image,
                    continent,
                    holiday_type,
                    is_owner
                } = data;

                is_owner ? setPostData({ title, content, image, continent, holiday_type }) : history.push('/');
            } catch (err) {
                // console.log(err);
            }
        };

        const fetchContinents = async () => {
            try {
                const response = await axiosReq.get('/get_continents/');
                setContinents(response.data);
            } catch (err) {
                // console.log(err);
            }
        };

        const fetchHolidayTypes = async () => {
            try {
                const response = await axiosReq.get('/get_holiday_types/');
                setHolidayTypes(response.data);
            } catch (err) {
                // console.log(err);
            }
        };

        handleMount();
        fetchContinents();
        fetchHolidayTypes();
    }, [history, id]);

    const handleChange = (event) => {
        setPostData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0])
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('continent', continent);
        formData.append('holiday_type', holiday_type);

        if (imageInput?.current?.files[0]) {
            formData.append('image', imageInput.current.files[0]);
        }

        try {
            await axiosReq.put(`/posts/${id}/`, formData);
            history.push(`/posts/${id}`);
        } catch (err) {
            // console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>

            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>

            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Continent</Form.Label>
                <Form.Control
                    as="select"
                    value={continent}
                    name="continent"
                    onChange={handleChange}
                >
                    {continents.map((choice) => (
                        <option key={choice.value} value={choice.value}>
                            {choice.display}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>

            {errors?.continent?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Holiday type</Form.Label>
                <Form.Control
                    as="select"
                    value={holiday_type}
                    name="holiday_type"
                    onChange={handleChange}
                >
                    {holidayTypes.map((choice) => (
                        <option key={choice.value} value={choice.value}>
                            {choice.display}
                        </option>
                    ))}
                </Form.Control>

                {errors?.holiday_type?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

            </Form.Group>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            <>
                                <figure>
                                    <Image className={appStyles.Image} src={image} rounded />
                                </figure>
                                <div>
                                    <Form.Label
                                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                                        htmlFor="image-upload"
                                    >
                                        Change the image
                                    </Form.Label>
                                </div>
                            </>
                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                            />

                        </Form.Group>

                        {errors?.image?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={`${appStyles.Content} ${styles.Container}`}>{textFields}</Container>
                </Col>
                <Col className="p-0 p-md-2 text-center">
                    <Button
                        className={`${btnStyles.Button} ${btnStyles.Blue}`}
                        onClick={() => history.goBack()}
                    >
                        Cancel
                    </Button>
                    <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                        Save
                    </Button>
                </Col>
            </Row>
        </Form >
    );
}

export default PostEditForm;