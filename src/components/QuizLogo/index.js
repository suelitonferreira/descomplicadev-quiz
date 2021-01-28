import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <div className={className} width="135" height="67">
      <img src="/img/logo.png" />
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  padding: 0px 5px 0px 20px;
  display: block;
  background-color: #cfd8dc;
  @media screen and (max-width: 500px) {
    margin: 0;
    padding: 0;
  }
`;

export default QuizLogo;