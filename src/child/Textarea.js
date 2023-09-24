import React from 'react';

const Textarea = ({ value, onChange, placeholder }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Textarea;