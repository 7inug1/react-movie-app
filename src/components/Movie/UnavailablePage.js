import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

const loader_css = `
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 25px;
`;

const UnavailablePage = () => {
  return (
    <div>페이지 없습니다</div>
  );
};

export default UnavailablePage;
