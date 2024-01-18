import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Clientsay.css';

const Clientsay = () => {
    return (
        <Container >
            <Row>
                <Col md={12}>
                    <h2 className="section-title">What our Clients say</h2>
                    <div className="divider-light"></div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Carousel>

                        <Carousel.Item >
                            <Row>
                                <Col md={2}>
                                    <div className="profile" >
                                        <img src="https://storiesdesignstudio.com/wp-content/uploads/2016/08/Ishani-Tripathi.jpg" alt="Ishani Tripathi" />
                                    </div>
                                </Col>
                                <Col md={10}>
                                    <div className="testimonial image-bottom-overlapped testimonial-light">
                                        <div className="content-box">
                                            <div class="p-3 border rounded bg-white" style={{ maxWidth: '380px', maxHeight: '280px', overflow: 'hidden', marginRight: '100px' }}
>
                                                <h2 class="name">Ishani Tripathi</h2>
                                                <p class="testimonial-headline">“Almost everything we wanted demanded customization, that too in multiple dimensions. Certainly, our project put the team out of their comfort zone and they responded by doing their study, reaching out to artisans and vendors from Chennai to Mysore to Mumbai to get done the kind of work we wanted – all these during pandemic and the pandemic induced restrictions”</p>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        {/* Client 2 */}
                        <Carousel.Item>
                            <Row>
                                <Col md={2}>
                                    <div className="profile">
                                        <img src="https://storiesdesignstudio.com/wp-content/uploads/2023/04/bathri-1.jpg" alt="Bathri Narayanan" />
                                    </div>
                                </Col>
                                <Col md={10}>
                                    <div className="testimonial image-bottom-overlapped testimonial-light">
                                        <div className="content-box p-3 border rounded bg-white" style={{ maxWidth: '380px', maxHeight: '280px', overflow: 'hidden' }}>
                                            <div className="testimonial-content">
                                                <h2 className="name">Bathri Narayanan</h2>
                                                <p className="testimonial-headline">The two main things stand out in our mind about Stories are lighting execution and tasteful interior color choices</p>
                                            </div>
                                        </div>


                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        {/* Client 3 */}
                        <Carousel.Item>
                            <Row>
                                <Col md={2}>
                                    <div className="profile">
                                        <img src="https://storiesdesignstudio.com/wp-content/uploads/2023/04/RR-1.jpg" alt="Rohini Gadre" />
                                    </div>
                                </Col>
                                <Col md={10}>
                                    <div className="testimonial image-bottom-overlapped testimonial-light">
                                        <div className="content-box p-3 border rounded bg-white" style={{ maxWidth: '380px', maxHeight: '280px', overflow: 'hidden' }}>
                                            <div className="testimonial-content">
                                                <h2 className="name">Rohini Gadre</h2>
                                                <p className="testimonial-headline">We are ecstatic about the results the team achieved. It is a true testament to their talent that relatives, friends, and guests who visit our renovated home are in awe of the transformation</p>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        {/* Client 4 */}
                        <Carousel.Item>
                            <Row>
                                <Col md={2}>
                                    <div className="profile">
                                        <img src="https://storiesdesignstudio.com/wp-content/uploads/2016/08/Oasis-Reddy.jpg" alt="Oasis Reddy" />
                                    </div>
                                </Col>
                                <Col md={10}>
                                    <div className="testimonial image-bottom-overlapped testimonial-light">
                                        <div class="content-box p-3 border rounded bg-white" style={{ maxWidth: '380px', maxHeight: '280px', overflow: 'hidden' }}>
                                            <div class="testimonial-content">
                                                <h2 class="name">Rohini Gadre</h2>
                                                <p class="testimonial-headline">We are ecstatic about the results the team achieved. It is a true testament to their talent that relatives, friends, and guests who visit our renovated home are in awe of the transformation</p>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default Clientsay;
