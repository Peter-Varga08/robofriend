/* *
! even Though you dont explicitly use React by code, you need it because you are
! in fact not using HTML here, you are using JSX!! */
import React, { Fragment } from "react";

/* 
! watch out to return only one thing by enclosing JSX element in one tag,
! like <div>...somuchcontent...<div/>*/
const Card = ({ name, email, id }) => {
  /*   const { name, email, id } = props; */
  return (
    <Fragment>
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt="photo" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
