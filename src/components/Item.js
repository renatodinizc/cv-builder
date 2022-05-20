import React, { useState } from 'react';
import './item.css';

function Item(props) {
    const [isEditing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.title);

    function handleTitle(event) {
       setTitle(event.target.value);
    };

    function handleItemSubmission(event) {
        event.preventDefault();
        if (title.trim()) {
            setTitle(title);
            setEditing(false);
        } else {
            setTitle(props.title);
            setEditing(false);
        };
    };

    if (isEditing == false) {
        return (
            <props.tag onClick={() => setEditing(true)}> {title} </props.tag>
        );
    };

    return (
        <form onSubmit={handleItemSubmission}>
            <input type='text' value={title} onChange={handleTitle} placeholder={props.title} autoComplete='off' />
        </form>
    );
;}

export default Item;