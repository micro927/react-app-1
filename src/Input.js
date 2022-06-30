import React, { useState } from 'react';
import PropsTypes from 'prop-types'

function Input({ addPost }) {
    const [input, setInput] = useState('')

    function onChange(event) {
        setInput(event.target.value)
    }

    function onKeydown(event) {
        const title = event.target.value;

        if (event.key === 'Enter' && title) {
            addPost(title)
            setInput('')
        }
    }

    return (
        <div className='Input'>
            <div className='Input__header'>Create Post</div>
            <input className='Input__field' type="text" value={input}
                onChange={onChange}
                onKeyDown={onKeydown} />
        </div>
    )
}

Input.PropsTypes = {
    addPost: PropsTypes.func.isRequired
}

export default Input