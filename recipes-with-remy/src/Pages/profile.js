import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Removed duplicate import of useEffect

import './../CSSFiles/Profile.css';
// from: https://github.com/markusenglund/react-switch?tab=readme-ov-file
import Switch from "react-switch";
import { Button } from '@mui/base/Button';


const Profile = (props) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();
    const [switchChecked, setSwitchChecked] = useState(false); // Use useState hook for switch state
    const [showEmailSentText, setShowEmailSentText] = useState(false);

    const handleSwitchChange = (checked) => { // Define a handler for switch state change
        console.log(checked);
        setSwitchChecked(checked);
    };

    const onButtonClickPassword = () => {
        setShowEmailSentText(true);
        setTimeout(() => {
            setShowEmailSentText(false);
        }, 5000); // Hide the text after 5 seconds
    };
    const onButtonClickLogout = () => {
        console.log("logout");
        navigate("/login");
    }

    return (
        <div className='container'>
            <div className='box'>
                <h2 className="text">Units</h2>

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

            <div className='box'>
                <div>
                    <h2 className='text'>Expiring Soon*</h2>
                    <p className='text'>Tomatoes (Apr 12), anchovies (Apr 15), blue cheese (Apr 10), bell peppers (Apr 10), ranch dressing (May 23),
                        hollandaise sauce (May 27), tartar sauce (May 3), salmon (Apr 11), caviar (Jun 4)</p>
                    <span className='text'>
                        * We define "soon" as being two-thirds through the period [date of expiry]-[date packed].
                    </span>

                    <div className='notify_box'>
                        <h3 className='text'>Notify by Email: </h3>
                        <input type='checkbox' className='checkbox'></input>
                    </div>
                </div>
            </div>

            <div className='box'>
                <div>
                    <h2 className="text">Email</h2>
                    <h2 className='text'>Password</h2>
                </div>
                <div>
                    <h4 className='text'>john.cena@gmail.com</h4>
                    <Button onClick={onButtonClickPassword}>Change Password</Button>
                    {showEmailSentText && <p>Email sent with instructions</p>}
                </div>
                <div>
                    <Button onClick={onButtonClickLogout}>Log Out</Button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
