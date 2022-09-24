import React from 'react';
const Modal = (props) => {
    // const { action, bullet, capacity, category, id, img, name, price } = data;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => props.setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Product Name:{props.data.name}</h3>
                    <li>
                        category:{props.data.category}
                    </li>
                    <li> price:{props.data.price}</li>
                    <li>bullet:{props.data.bullet}</li>
                    <li>action:{props.data.action}</li>
                    <li>Capacity:{props.data.capacity}</li>
                    <li>id:{props.data.id}</li>
                    <img src={props.data.img} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Modal;