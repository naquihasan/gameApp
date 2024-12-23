import React from 'react'
import './Modal.scss'
import close_btn from '../../assets/close-button.svg'
import i_button from '../../assets/i_button.svg'
import Layer_2 from '../../assets/Layer_2.png'

const Modal = ({ isOpen, onClose}) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div>
            <div className='modal-header'>
            <h3>GST? No Worries</h3>
            <button className="close-button" onClick={onClose}>
                <img src={close_btn} alt="" />
            </button>
          </div>
          <div className='modal-body'>
            <div className='gst-info'>
              <div>
                <img src={i_button} alt="" />
                <p>Starting 1st October 2023, 28% GST is being charged by Government on your deposits.</p>
              </div>
              <div>
                <img src={Layer_2} alt="" />
                <p>100% Govt. GST paid by RummyCircle</p>
              </div>
            </div>
            <div className='gst-benifits'>
              <div className='gst-benifits-header'>
                <p>GST benefits earned so far</p>
                <h2>₹1,10,000</h2>
              </div>
              <div className='gst-benifits-body'>
                <div className='gst-benifits-top'>
                  <h2>How GST on deposit works?</h2>
                  <p>You Pay</p>
                  <h3>₹1000</h3>
                  <p>Inclusive of Govt. GST</p>
                </div>
                <div className='gst-benifits-middle'>
                  <div className='gst-benifits-middle-left'>
                      <h3>₹780</h3>
                      <p>Goes to your wallet</p>
                  </div>
                  <div className='gst-benifits-middle-right'>
                      <h3>₹220</h3>
                      <p>Govt. GST on your deposit</p>
                  </div>
                </div>
                <div className='gst-benifits-bottom'>
                  <div className='gst-benifits-bottom-left'>
                    <h3>₹220</h3>
                    <div>
                      <p><img src={Layer_2} alt="" /><span> 100% Govt. GST paid by <strong>RummyCircle</strong> <br /> on your behalf</span></p>
                    </div>
                  </div>
                  <div className='gst-benifits-bottom-right'>
                      <h3>You Get</h3>
                      <h1>₹220</h1>
                      <p>in your wallet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };

export default Modal