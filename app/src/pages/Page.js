import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Template from "./Template";
import Wave from "../components/Wave";
import FirstView from "../views/FirstView";
import SecondView from "../views/SecondView";
import ThirdView from "../views/ThirdView";
import FooterView from "../views/FooterView";

const Page = () => {
  return (
    <Template
      FirstView={<FirstView />}
      SecondView={<SecondView />}
      ThirdView={<ThirdView />}
      FooterView={<FooterView />}
    />
  );
};

export default Page;
