import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PopularProfiles from '../profiles/PopularProfiles';
import TrendingProfiles from '../profiles/TrendingProfiles';

const PostsPage = () => {
    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <PopularProfiles mobile />
            </Col>
            <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
                <TrendingProfiles />
            </Col>
        </Row>
    );
};

export default PostsPage;