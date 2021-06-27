import React, { Component } from "react";
import "./exp.css";
import { Fade, Flip } from "react-reveal";

class ExperienceAccordion extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <>
        <Fade bottom duration={2000} distance="40px">
          <div class="container">
            <center>
              <h2>Work Experience</h2>
            </center>
            <br />
            <div class="col-twelve"></div>
            <div class="timeline-wrap">
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <h5 class="resume-title">Infosys ltd</h5>
                  </h3>
                  <i>August 2020 - Present</i>
                  <br />
                  <i>Full Time</i>
                </div>

                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Full Stack Engineer</h5>
                  </h3>
                  <i>December 2020 - Present</i>
                  <br />
                  <i>Full Time</i>
                  <br />
                  <br />
                  Deleaing with Engineering team as a Front-end and as a
                  Back-end developer
                  <br /> uisng ReactJs and SpringBoot
                  <br />
                  <br />
                  <p>
                    Client : <i>HSBC</i> (Hongkong and Shanghai Banking
                    Corporation) 6th largest <br />
                    multinational investment bank and financial services holding
                    company
                  </p>
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Automation Tester</h5>
                  </h3>
                  <i>October 2020 - December 2020</i>
                  <br />
                  <i>Full Time</i>
                  <br />
                  <br />
                  Worked with Selenium and Java to automate my Work Also i
                  created a new <br /> way of automation that successfully
                  reduce the work effort by half
                  <br />
                  <br />
                  Client : <i>FORD</i> (Ford Motor Company Automaker company)
                  <br />
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Automation Tester</h5>
                  </h3>
                  <i>August 2020 - October 2020</i>
                  <br />
                  <i>Trainee</i>
                  <br />
                  <br />
                  Successfully trained in Java automation in Selenium and UFT
                 
                  <br />
                  <br />
                  
                  <br />
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <h5 class="resume-title">Indel Systems</h5>
                  </h3>
                  <i>April 2020 - July 2020</i>
                  <br />
                  <i>Full Time</i>
                </div>

                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Full Stack Web Developer</h5>
                  </h3>

                  <p>
                    Indel System is a small software based company founded in
                    1992.
                    <br />
                    This is a private company consist of 14 employees
                  </p>
                  <p>
                    I worked as a Web Developer in Indel Systems
                    <br />
                    The main technologies that i used over ther are Springboot,
                    Spring, <br/>,JSP, HTML, CSS, JQuery ,PHP and a little bit of ReactJs<br/>
                  </p>
                </div>
                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Back End Developer</h5>
                  </h3>

                  <p>
                    The technologies i used are Springboot, Spring Microservices and ExpressJS<br/> with NodeJs
                  </p>
                </div>
                
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <h5 class="resume-title">SanthiSoft Technology</h5>
                  </h3>
                  <i>November 2019 - march 2020</i>
                  <br />
                  <i>Intership</i>
                </div>

                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Software Developer</h5>
                  </h3>

                  <p>
                    Santhisoft is a software product development company in
                    Kerala, India <br />
                    incorporated in 2005 and is managed by CMI congregation.
                  </p>
                  <p>
                    I worked as a Java Software Developer in SanthiSoft as an
                    Intern as a part <br />
                    of my final year project and documentation
                    <br />
                  </p>
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  
                  <h3>
                    <h5 class="resume-title1">Web Tech Soltions</h5>
                  </h3>
                  
                  <i>June 2017 - Feb 2020</i>
                  <br />
                  <i class="i1">
                   <h3> <b>CEO & Founder</b></h3>
                  </i>
                </div>

                <div class="timeline-content">
                  
                  <h3>
                    <h5 class="resume-title1">Software and Web Developer</h5>
                  </h3><i>CEO & Founder</i>
                

                  <p>
                    Works as a freeLancer specialized in Web and Software
                    Development
                    <br />
                    Mainly deals with creating, hosting and maintaining the
                    websites and <br />
                    utility softwares with online database access.
                    <br /><br />
                    We are also bulding Desktop Computer as per client
                    requirement as well.
                  </p>
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title1">Software Developer</h5>
                  </h3>
                  <i>Januvary 2017 - July 2020</i>
                  <br />
                  <i>Co-Founder</i>
                  <br />
                  <br />
                  All In One, We provide the best experience to your industry<br/>20+ Happy Clents
                  
                </div>
              </div>
            </div>
            
          </div>
          <div class="container">
            <center>
              <h2>
                <i class="vv">Volunteer Experience</i>
              </h2>
            </center>
            <br />
            <div class="col-twelve"></div>
            <div class="timeline-wrap">
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i clas="vv">Participants</i>
                  </h3>
                  <i>June 2021</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>Google Developer Student Clubs</i>
                  </h3>
                  Successfully Participated in Google Developer Student Clubs
                  <br />
                  <br />
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>Code Contributor</i>
                  </h3>
                  <i>May 2021</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>Leet Code</i>
                  </h3>
                  Contribute codes for some problems
                  <br />
                  <br />
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>
                      HR Assistant for <br />
                      Off Campus Drive
                    </i>
                  </h3>
                  <i>April 2021</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>Infosys, Pune</i>
                  </h3>
                  Support the HR for Conducteting the Campus Drive
                  <br /> I worked as an assistant for following up each and
                  every candidate
                  <br />
                  <br />
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>GitHub Contributor</i>
                  </h3>
                  <i>July 2019</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>private IT Clubs </i>
                  </h3>
                  Contributed codes for Various organization and also support
                  for solving some
                  <br /> of my colleagues code issues
                  <br />
                  <br />
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>Software Support Volunteer</i>
                  </h3>
                  <i>February 2019</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>Santhigiri Institude Of Management, Vazhithala</i>
                  </h3>
                  Volunteered as a Software Support in a Mega Job Fair with
                  consist of 50+
                  <br /> companies and 2500+ Candidates
                  <br />
                  <br />
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>Seminar Co-ordinator</i>
                  </h3>
                  <i>October 2019 </i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>Santhigiri College of Computer Sciences, Vazhithala</i>
                  </h3>
                  I carry out one of the role for taking an excel
                  project/seminar for our junior <br />
                  students in my college as a foundation step for their career
                  <br />
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>
                      Computer Hardware <br />
                      Explanation
                    </i>
                    <i>and Assembly</i>
                  </h3>
                  <i>August 2018</i>
                  <br />
                </div>
                <div class="timeline-content">
                  <h3>
                    <i>Santhigiri College of Computer Sciences, Vazhithala</i>
                  </h3>

                  <p>
                    Conducted one day seminar to the junior students about the
                    computer <br />
                    hardware, hands-on experience, specification and assemblying
                    like cpu, ram,
                    <br /> bios etc...
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}

export default ExperienceAccordion;
