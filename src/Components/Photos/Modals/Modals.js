import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Pricing from '../Pricing/Pricing';

import './Modals.css';

function PricingModal(props) {
  return (
    <Modal
      {...props}
      size="lg" 
      aria-labelledby="contained-modal-title-vcenter"      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pricing
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="modalContainer">
        <Pricing />
      </Modal.Body>
    </Modal>
  );
}

function PresetModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"      
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Presets
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalContainer">
          <h1>COMING SOON!</h1>
        </Modal.Body>
      </Modal>
    );
}

function GearModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"      
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Gear
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalContainer">
          <div id="GearContainer">
                <h4>Camera</h4>
                <p className="itemName">Sony A7R IV</p>
                <h4>Lens</h4>
                <p className="itemName">Sony FE 85mm f/1.4 G Master</p>
                <h4>Lens</h4>
                <p className="itemName">Sigma 35mm f/1.2 DG DN ART</p>
                <h4>Lens</h4>
                <p className="itemName">Canon FD 50mm f/1.8</p>
          </div>
        </Modal.Body>
      </Modal>
    );
}

function About() {
  const [pricingModalShow, setPricingModalShow] = React.useState(false);
  const [presetModalShow, setPresetModalShow] = React.useState(false);
  const [gearModalShow, setGearModalShow] = React.useState(false);
  
  return (
    <>

        <div id="modalButtonContainer">
            <button className="modalButton" onClick={() => setPricingModalShow(true)}>Pricing</button>
            <button className="modalButton" onClick={() => setPresetModalShow(true)}>Presets</button>
            <button className="modalButton" onClick={() => setGearModalShow(true)}>Gear</button>
        </div>
        
        <PricingModal
            show={pricingModalShow}
            onHide={() => setPricingModalShow(false)}
        />
        <PresetModal
            show={presetModalShow}
            onHide={() => setPresetModalShow(false)}
        />
        <GearModal
            show={gearModalShow}
            onHide={() => setGearModalShow(false)}
        />
      
    </>
  );
}
  

export default About;