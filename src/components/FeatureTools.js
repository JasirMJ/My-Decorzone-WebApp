import React from 'react'

function FeatureTools() {
    return (
        <>
          <div className="ec-tools-sidebar-overlay" />
      <div className="ec-tools-sidebar">
        <div className="tool-title">
          <h3>Features</h3>
        </div>
        {/* <a href="#" className="ec-tools-sidebar-toggle in-out">
          <img alt="icon" src="assets/images/common/settings.png" />
        </a> */}
        <div className="ec-tools-detail">
          <div className="ec-tools-sidebar-content ec-change-color ec-color-desc">
            <h3>Color Scheme</h3>
            <ul className="bg-panel">
              <li className="active" ><a href="#" className="colorcode1" /></li>
              <li ><a href="#" className="colorcode2" /></li>
              <li ><a href="#" className="colorcode3" /></li>
              <li ><a href="#" className="colorcode4" /></li>
              <li ><a href="#" className="colorcode5" /></li>
            </ul>
          </div>
          <div className="ec-tools-sidebar-content">
            <h3>Backgroung</h3>
            <ul className="bg-panel">
              <li className="bg"><a className="back-bg-1" id="bg-1">Background-1</a></li>
              <li className="bg"><a className="back-bg-2" id="bg-2">Background-2</a></li>
              <li className="bg"><a className="back-bg-3" id="bg-3">Background-3</a></li>
              <li className="bg"><a className="back-bg-4" id="bg-4">Default</a></li>
            </ul>
          </div>
          <div className="ec-tools-sidebar-content">
            <h3>Full Screen mode</h3>
            <div className="ec-fullscreen-mode">
              <div className="ec-fullscreen-switch">
                <div className="ec-fullscreen-btn">Mode</div>
                <div className="ec-fullscreen-on">On</div>
                <div className="ec-fullscreen-off">Off</div>
              </div>
            </div>
          </div>
          <div className="ec-tools-sidebar-content">
            <h3>Dark mode</h3>
            <div className="ec-change-mode">
              <div className="ec-mode-switch">
                <div className="ec-mode-btn">Mode</div>
                <div className="ec-mode-on">On</div>
                <div className="ec-mode-off">Off</div>
              </div>
            </div>
          </div>
          <div className="ec-tools-sidebar-content">
            <h3>RTL mode</h3>
            <div className="ec-change-rtl">
              <div className="ec-rtl-switch">
                <div className="ec-rtl-btn">Rtl</div>
                <div className="ec-rtl-on">On</div>
                <div className="ec-rtl-off">Off</div>
              </div>
            </div>
          </div>
          <div className="ec-tools-sidebar-content">
            <h3>Clear local storage</h3>
            <a className="clear-cach" href="javascript:void(0)">Clear Cache &amp; Default</a>
          </div>
        </div>
      </div>  
        </>
    )
}

export default FeatureTools
