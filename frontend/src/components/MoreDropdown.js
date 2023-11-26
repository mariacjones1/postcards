import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '../styles/MoreDropdown.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fas fa-ellipsis-v"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

const MoreDropdown = () => {
    return (
        <div>MoreDropdown</div>
    );
};

export default MoreDropdown;

export function ProfileEditDropdown({ id }) {
    const history = useHistory();
    return (
        <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
            <Dropdown.Toggle as={ThreeDots} />
            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit`)}
                    aria-label="edit-profile"
                >
                    <i className="fas fa-edit" /> Edit profile
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit/username`)}
                    aria-label="edit-username"
                >
                    <i className="far fa-id-card" />
                    Change username
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit/password`)}
                    aria-label="edit-password"
                >
                    <i className="fas fa-key" />
                    Change password
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}