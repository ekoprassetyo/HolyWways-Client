import React from 'react';
import "../../css/profile.css"
import pp from "../../assets/images/profile.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const Profile = () => {
    const [state] = useContext(UserContext)

    return (
        <div className="main-container2">
            <div className="section-1">
                <div className="my-profile fw-bold">
                    My profile
                </div>
                <div className="side-to-side1">
                    <div className="left-side1">
                        <img src={pp} alt="" />
                    </div>
                    <div className="right-side1">
                        <div className="text-danger fw-bold">Full Name</div>
                        <p>{state.user.fullName}</p>
                        <div className="text-danger fw-bold mt-4">Email</div>
                        <p>{state.user.email}</p>
                        <div className="text-danger fw-bold mt-4">Phone</div>
                        <p>{state.user.phone}</p>
                    </div>
                </div>
            </div>
            <div className="section-2">
                <div className='history-donation fw-bold'>
                    History Donation
                </div>
                <div>
                    <Card>
                        <Card.Body>
                            <Card.Title className="fw-bold">The Strength of a People. Power of Community</Card.Title>
                            <Card.Text>
                                <p className='mt-3'> <span className='fw-bold'>Saturday,</span>12 April 2021</p>
                            </Card.Text>
                            <Card.Text className="d-flex mt-3 align-center" style={{width:"100%"}}>
                                <div className="mt-2 text-danger">
                                        Total: Rp 45.000
                                </div>
                                <div>
                                    <p className="status text-success fw-bolder">Finished</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;