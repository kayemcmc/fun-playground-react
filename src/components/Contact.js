import React from 'react';
import github from '../img/github.png';
import email from '../img/email.png';
import linkedin from '../img/Linkedin.png';

export default () => {
  return (
    <div className="container">
    <div className="row mt-5 pt-5">
      <div className="col-md-6 mx-auto text-center">
      <h1>Contact</h1>
      </div>
    </div>
    <div className="row mt-5 pt-5">
    <div className="col-lg-4 col-sm-6 text-center mb-4">
    <a href="https://github.com/kayemcmc">  <img class="rounded-circle img-fluid d-block mx-auto" src={github} alt="Github" /></a>
      <h3>Github</h3>
      
    </div>
    <div className="col-lg-4 col-sm-6 text-center mb-4">
    <a href="https://www.linkedin.com/in/karen-p-6169878/"> <img className="rounded-circle img-fluid d-block mx-auto" src={linkedin} alt="Linkedin" target="_blank"/></a>
      <h3>Linkedin</h3>
    </div>
    <div className="col-lg-4 col-sm-6 text-center mb-4">
    <a href="mailto:k100posada@gmail.com">  <img className="rounded-circle img-fluid d-block mx-auto" src={email} alt="email" /></a>
      <h3>Email
      </h3>
    </div>

  </div>
    </div>
  )
}
