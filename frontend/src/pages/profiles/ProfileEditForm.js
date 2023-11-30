import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import styles from "../../styles/ProfileEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const ProfileEditForm = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { id } = useParams();
    const history = useHistory();
    const imageFile = useRef();

    const [profileData, setProfileData] = useState({
        name: "",
        content: "",
        image: "",
        location: "",
        favourite_country: "",
        travel_experience: "",
    });
    const {
        name,
        content,
        image,
        location,
        favourite_country,
        travel_experience
    } = profileData;

    const [countries, setCountries] = useState([]);
    const [travelExperienceChoices, setTravelExperienceChoices] = useState([]);

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const handleMount = async () => {
            if (currentUser?.profile_id?.toString() === id) {
                try {
                    const { data } = await axiosReq.get(`/profiles/${id}/`);
                    const {
                        name,
                        content,
                        image,
                        location,
                        favourite_country,
                        travel_experience } = data;
                    setProfileData({
                        name,
                        content,
                        image,
                        location,
                        favourite_country,
                        travel_experience
                    });
                } catch (err) {
                    // console.log(err);
                    history.push("/");
                }
            } else {
                history.push("/");
            }
        };

        const fetchCountries = async () => {
            try {
                const response = await axiosReq.get('/get_countries/');
                setCountries(response.data);
            } catch (err) {
                // console.log(err);
            }
        };

        const fetchTravelExperienceChoices = async () => {
            try {
                const response = await axiosReq.get('/get_travel_experience_choices/');
                setTravelExperienceChoices(response.data);
            } catch (err) {
                // console.log(err);
            }
        };

        handleMount();
        fetchCountries();
        fetchTravelExperienceChoices();
    }, [currentUser, history, id]);

    const handleChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("content", content);
        formData.append("location", location);
        formData.append("favourite_country", favourite_country);
        formData.append("travel_experience", travel_experience);

        if (imageFile?.current?.files[0]) {
            formData.append("image", imageFile?.current?.files[0]);
        }

        try {
            const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_image: data.image,
            }));
            history.goBack();
        } catch (err) {
            // console.log(err);
            setErrors(err.response?.data);
        }
    };

    const textFields = (
        <>
            <Form.Group>
                <Form.Label>Bio</Form.Label>
                <Form.Control
                    as="textarea"
                    value={content}
                    onChange={handleChange}
                    name="content"
                    rows={7}
                />
            </Form.Group>

            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                    as="select"
                    value={location}
                    onChange={handleChange}
                    name="location"
                >
                    {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </Form.Control>
            </Form.Group>

            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Favourite country</Form.Label>
                <Form.Control
                    as="select"
                    value={favourite_country}
                    onChange={handleChange}
                    name="favourite_country"
                >
                    {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </Form.Control>
            </Form.Group>

            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Travel experience</Form.Label>
                <Form.Control
                    as="select"
                    value={travel_experience}
                    onChange={handleChange}
                    name="travel_experience"
                >
                    {travelExperienceChoices.map((choice) => (
                        <option key={choice.value} value={choice.value}>
                            {choice.display}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>

            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
        </>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
                    <Container className={`${styles.EditContainer} ${appStyles.Content}`}>
                        <Form.Group>
                            {image && (
                                <figure>
                                    <Image src={image} fluid />
                                </figure>
                            )}
                            {errors?.image?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            <Form.File
                                id="image-upload"
                                className="my-auto"
                                ref={imageFile}
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.target.files.length) {
                                        setProfileData({
                                            ...profileData,
                                            image: URL.createObjectURL(e.target.files[0]),
                                        });
                                    }
                                }}
                            />
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
                    <Container className={`${styles.EditContainer} ${appStyles.Content}`}>{textFields}</Container>
                </Col>
                <Col className="p-0 p-md-2 text-center">
                    <Button
                        className={`${btnStyles.Button} ${btnStyles.Blue}`}
                        onClick={() => history.goBack()}
                    >
                        Cancel
                    </Button>
                    <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                        Save changes
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default ProfileEditForm;