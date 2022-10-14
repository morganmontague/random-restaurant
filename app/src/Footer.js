import React from "react";

function FooterTime (){
    return(
        <footer className="footer fixed-bottom mt-auto py-3 bg-warning">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-8 text-start">Address:<br></br>
          153 South Broadway <br></br>
          Lexington, Kentucky 40502
          </div>
          <div className="col-4 text-start">
            Hours:<br></br>
            Monday-Friday 7:30 AM to 8:00 PM <br></br>
            Saturday and Sunday 8:00 AM to 9:00 PM
          </div>
          </div>
        </div>
      </footer>
    )
}

export default FooterTime

// {/* <footer class="footer mt-auto py-3 bg-light">
//   <div class="container">
//     <span class="text-muted">Place sticky footer content here.</span>
//   </div>
// </footer> */}

