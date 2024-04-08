import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Removed duplicate import of useEffect

import './../CSSFiles/Profile.css';
import Switch from "react-switch";

const Profile = (props) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();
    const [switchChecked, setSwitchChecked] = useState(false); // Use useState hook for switch state

    const onButtonClickedLogin = () => {
        navigate('./login');
    };

    const onButtonClickSignin = () => {
        navigate('./signup');
    };

    const handleSwitchChange = (checked) => { // Define a handler for switch state change
        console.log(checked);
        setSwitchChecked(checked);
    };

    return (
        <div className='container'>
            <div className='units'>
                <h2 className="text">Units</h2> {/* Use className instead of class for JSX */}

                <label>
                    <span className='unit_text'>Metric</span>
                    <Switch
                        checked={switchChecked}
                        onChange={handleSwitchChange}
                        onColor="#86d3ff"
                        offColor="#86d3ff"
                        onHandleColor="#2693e6"
                        offHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        className="react-switch"
                        id="material-switch"
                    />
                    <span className='unit_text'>Imperial</span>
                </label>
            </div>
        </div>
    );
};

export default Profile;
