import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        const item = {
            name: name,
            quantity: parseInt(quantity)
        };

        if (action === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
            dispatch({
                type: 'ADD_QUANTITY',
                payload: item,
            });
        }
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ borderRadius: '0 0 0 0' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Items</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)} style={{ marginLeft: '0.5rem', borderRadius: '5px' }}>
                        <option defaultValue>Choose...</option>
                        <option value="Shirt" name="Shirt">Shirt</option>
                        <option value="Dress" name="Dress">Dress</option>
                        <option value="Jeans" name="Jeans">Jeans</option>
                        <option value="Hats" name="Hats">Hats</option>
                        <option value="Bags" name="Bags">Bags</option>
                    </select>
                    <div className="input-group-prepend" style={{ marginLeft: '1rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Action</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)} style={{ marginLeft: '0.5rem', borderRadius: '5px' }}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <span className="eco" style={{ marginRight: '8px' }}></span>
                    <input
                        required='required'
                        placeholder=" Amount" 
                        type='number'
                        id='cost'
                        value={quantity}
                        style={{ marginLeft: '0.5rem', size: 10 }}
                        onChange={(event) => setQuantity(event.target.value)}>
                    </input>
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '0.5rem', borderRadius: '5px' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemSelected;
