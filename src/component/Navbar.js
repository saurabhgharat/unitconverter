import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartArea,
  FaRulerHorizontal,
  FaWeightHanging,
  FaCubes,
  FaThermometerHalf,
  FaRegClock,
  FaTachometerAlt,
  FaRegLightbulb
} from "react-icons/fa";

import pressure from "../assets/pressure.png";
import angle from "../assets/protractor.png";
import data from "../assets/folder.png";
import freq from "../assets/waves.png";
import energy from "../assets/solar-energy.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavLink className="item" to="/">
            <div className="center link">
              <FaRulerHorizontal />
              <div className="center">
                <label className="label">Length</label>
              </div>
            </div>
          </NavLink>
          <NavLink className="item" to="/area">
            <div className="center link">
              <FaChartArea />
              <div className="center">
                <label className="label">Area</label>
              </div>
            </div>
          </NavLink>

          {/* <div>Icons made by <a href="https://www.flaticon.com/authors/iconnice" title="Iconnice">Iconnice</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
          <NavLink className="item" to="/weight">
            <div className="center link">
              <FaWeightHanging />
              <div className="center">
                <label className="label"> Weight</label>
              </div>
            </div>
          </NavLink>
          <NavLink className="item" to="/volume">
            <div className="center link">
              <FaCubes />
              <div className="center">
                <label className="label"> Volume</label>
              </div>
            </div>
          </NavLink>
          <NavLink className="item" to="/temp">
            <div className="center link">
              <FaThermometerHalf />
              <div className="center">
                <label className="label"> Temperature</label>
              </div>
            </div>
          </NavLink>
          <NavLink className="item" to="/time">
            <div className="center link">
              <FaRegClock />
              <div className="center">
                <label className="label"> Time</label>
              </div>
            </div>
          </NavLink>
          <NavLink className="item" to="/speed">
            <div className="center link">
              <FaTachometerAlt />
              <div className="center">
                <label className="label"> Speed</label>
              </div>
            </div>
          </NavLink>

          {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
          <NavLink className="item" to="/pressure">
            <div className="center link">
              <img src={pressure} alt="pressure" />
              <div className="center">
                <label className="label"> Pressure</label>
              </div>
            </div>
          </NavLink>

          {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
          <NavLink className="item" to="/power">
            <div className="center link">
              <FaRegLightbulb />
              <div className="center">
                <label className="label"> Power</label>
              </div>
            </div>
          </NavLink>

          {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
          <NavLink className="item" to="/angle">
            <div className="center link">
              <img src={angle} alt="angle" />
              <div className="center">
                <label className="label"> Angle</label>
              </div>
            </div>
          </NavLink>

          {/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
          <NavLink className="item" to="/data">
            <div className="center link">
              <img src={data} alt="data" />
              <div className="center">
                <label className="label"> Data</label>
              </div>
            </div>
          </NavLink>

          {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
          <NavLink className="item" to="/frequency">
            <div className="center link">
              <img src={freq} alt="freq" />
              <div className="center">
                <label className="label">Frequency</label>
              </div>
            </div>
          </NavLink>
          <NavLink className="item" to="/energy">
            <div className="center link">
              <img src={energy} alt="energy" />
              <div className="center">
                <label className="label">Energy</label>
              </div>
            </div>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
