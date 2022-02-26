import React from "react";
import {HiMail} from "react-icons/hi"
import {BsFillTelephoneInboundFill} from "react-icons/bs"


const contact = ({ heading, email, number }) => {

  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center">
        <HiMail /><a style={{ color:'black' }} href={`mailto:${email}`}> {email}</a>
      </p>
      <p className="lead text-center">
        <BsFillTelephoneInboundFill className='mr-2' />{number}
      </p>
    </>
  );
};

export default contact;
