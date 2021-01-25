import { Button } from "react-bootstrap";
import React from "react";
import s from '../../App.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.buttonVote}>
      <NavLink to={"/"}>
        <Button variant="success">Main</Button>
      </NavLink>
      <NavLink to={"/vote"}>
        <Button variant="warning">Vote</Button>
      </NavLink>
      <NavLink to={"/logs"}>
        <Button variant="danger">Logs</Button>
      </NavLink>
    </div>
  );
};

export default Header;
