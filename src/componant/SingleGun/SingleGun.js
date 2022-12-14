import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modalData, setModalData] = useState({});
    // console.log(modalData)
    const { gun, countIncrease } = props;
    const { action, bullet, capacity, category, id, img, name, price } = gun;

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl ">
                <figure><img className='w-96 h-44' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions ">
                        <div className="badge badge-outline">price:{price}</div>
                        <div className="badge badge-outline">{action}</div>
                        <div className='mt-2'>
                            <button onClick={() => countIncrease()} className="btn btn-sm bg-emerald-500 m-2">Add to Cut</button>
                            {/* <button className="btn btn-sm bg-indigo-600 m-2">Details</button> */}
                            <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button btn btn-sm bg-indigo-600 m-2">Details</label>
                            {modalData && <Modal data={modalData} setModalData={setModalData} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;