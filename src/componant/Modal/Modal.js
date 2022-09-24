import React from 'react';

const Modal = ({ data }) => {
    const { action, bullet, capacity, category, id, img, name, price } = data;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Product Name:{name}</h3>
                    <li>
                        category:{category}
                    </li>
                    <li> price:{price}</li>
                    <li>bullet:{bullet}</li>
                    <li>action:{action}</li>
                    <li>Capacity:{capacity}</li>
                    <li>id:{id}</li>
                    <img src={img} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Modal;