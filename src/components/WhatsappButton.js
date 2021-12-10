import React from 'react'

function WhatsappButton() {
    return (
        <>
         <div className="ec-style ec-right-bottom">
        {/* Start Floating Panel Container */}
        <div className="ec-panel">
          {/* Panel Header */}
          <div className="ec-header">
            <strong>Need Help?</strong>
            <p>Chat with us on WhatsApp</p>
          </div>
          {/* Panel Content */}
          <div className="ec-body">
            <ul>
              {/* Start Single Contact List */}
              <li>
                <a className="ec-list" data-number={918866774266} data-message="Please help me! I have got wrong product - ORDER ID is : #654321485">
                  <div className="d-flex bd-highlight">
                    {/* Profile Picture */}
                    <div className="ec-img-cont">
                      <img src="assets/images/whatsapp/profile_01.jpg" className="ec-user-img" alt="Profile image" />
                      <span className="ec-status-icon" />
                    </div>
                    {/* Display Name & Last Seen */}
                    <div className="ec-user-info">
                      <span>Sahar Darya</span>
                      <p>Sahar left 7 mins ago</p>
                    </div>
                    {/* Chat iCon */}
                    <div className="ec-chat-icon">
                      <i className="fa fa-whatsapp" />
                    </div>
                  </div>
                </a>
              </li>
              {/*/ End Single Contact List */}
              {/* Start Single Contact List */}
              <li>
                <a className="ec-list" data-number={918866774266} data-message="Please help me! I have got wrong product - ORDER ID is : #654321485">
                  <div className="d-flex bd-highlight">
                    {/* Profile Picture */}
                    <div className="ec-img-cont">
                      <img src="assets/images/whatsapp/profile_02.jpg" className="ec-user-img" alt="Profile image" />
                      <span className="ec-status-icon ec-online" />
                    </div>
                    {/* Display Name & Last Seen */}
                    <div className="ec-user-info">
                      <span>Yolduz Rafi</span>
                      <p>Yolduz is online</p>
                    </div>
                    {/* Chat iCon */}
                    <div className="ec-chat-icon">
                      <i className="fa fa-whatsapp" />
                    </div>
                  </div>
                </a>
              </li>
              {/*/ End Single Contact List */}
              {/* Start Single Contact List */}
              <li>
                <a className="ec-list" data-number={918866774266} data-message="Please help me! I have got wrong product - ORDER ID is : #654321485">
                  <div className="d-flex bd-highlight">
                    {/* Profile Picture */}
                    <div className="ec-img-cont">
                      <img src="assets/images/whatsapp/profile_03.jpg" className="ec-user-img" alt="Profile image" />
                      <span className="ec-status-icon ec-offline" />
                    </div>
                    {/* Display Name & Last Seen */}
                    <div className="ec-user-info">
                      <span>Nargis Hawa</span>
                      <p>Nargis left 30 mins ago</p>
                    </div>
                    {/* Chat iCon */}
                    <div className="ec-chat-icon">
                      <i className="fa fa-whatsapp" />
                    </div>
                  </div>
                </a>
              </li>
              {/*/ End Single Contact List */}
              {/* Start Single Contact List */}
              <li>
                <a className="ec-list" data-number={918866774266} data-message="Please help me! I have got wrong product - ORDER ID is : #654321485">
                  <div className="d-flex bd-highlight">
                    {/* Profile Picture */}
                    <div className="ec-img-cont">
                      <img src="assets/images/whatsapp/profile_04.jpg" className="ec-user-img" alt="Profile image" />
                      <span className="ec-status-icon ec-offline" />
                    </div>
                    {/* Display Name & Last Seen */}
                    <div className="ec-user-info">
                      <span>Khadija Mehr</span>
                      <p>Khadija left 50 mins ago</p>
                    </div>
                    {/* Chat iCon */}
                    <div className="ec-chat-icon">
                      <i className="fa fa-whatsapp" />
                    </div>
                  </div>
                </a>
              </li>
              {/*/ End Single Contact List */}
            </ul>
          </div>
        </div>
        {/*/ End Floating Panel Container */}
        {/* Start Right Floating Button*/}
        <div className="ec-right-bottom">
          <div className="ec-box">
            <div className="ec-button rotateBackward">
              <img className="whatsapp" src="assets/images/common/whatsapp.png" alt="whatsapp icon" />
            </div>
          </div>
        </div>
        {/*/ End Right Floating Button*/}
      </div>   
        </>
    )
}

export default WhatsappButton
