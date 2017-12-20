import React from 'react';

const Comment = ({ text }) => text.replace(':)', '[smile]');

const TextOnlyComponent = () => (
    <Comment text="Text only component is awesome :)" />
);
export default TextOnlyComponent;