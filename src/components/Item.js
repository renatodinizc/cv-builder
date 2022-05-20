import React, { useState } from 'react';

function Item(props) {
    const [isEditing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.defaultValue);

    function handleTitle(event) {
       setTitle(event.target.value);
    };

    function handleItemSubmission(event) {
        event.preventDefault();
        if (title.trim()) {
            setTitle(title);
            setEditing(false);
        } else {
            setTitle(props.defaultValue);
            setEditing(false);
        };
    };

    if (isEditing == false) {
        return (
            <props.tag className={props.defaultValue.replace(/\s/g, '')} onClick={() => setEditing(true)}> {title} </props.tag>
        );
    };

    return (
        <form className={props.defaultValue.replace(/\s/g, '')}  onSubmit={handleItemSubmission}>
            <input type='text' value={title} onChange={handleTitle} placeholder={props.defaultValue} autoComplete='off' />
        </form>
    );
;}

export default Item;