import React from 'react'
import './Tray.css' ;

function Tray() {
  return (
    <div className='tray'>
        <div className="container-fluid">
            <div className="row justify-content-md-center tray__row">
                  <div className="col-auto mx-auto h1 row__elmn">Pogramming & Tech</div>
                  <div className="col-auto mx-auto h1 row__elmn">Design & Art</div>
                  <div className="col-auto mx-auto h1 row__elmn">Writing & Translation</div>
                  <div className="col-auto mx-auto h1 row__elmn">SEO & Digital Marketting</div>
                  <div className="col-auto mx-auto h1 row__elmn">Music & Audio</div>
                  <div className="col-auto mx-auto h1 row__elmn">Videos & Animation</div>
                  <div className="col-auto mx-auto h1 row__elmn">Business & Sales</div>
            </div>
        </div>
    </div>
  )
}

export default Tray