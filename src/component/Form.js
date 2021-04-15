import React, { useState } from 'react';
import FormList from './FormList';

const Form = () => {
    const [name, setName] = useState('');
    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            <FormList name={name} />
        </div>
    )
}

export default Form;