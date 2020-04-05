import React from 'react';
import './MainContent.scss';
import Header from '../Header/Header';
import Table from '../Table/Table';

import {useState, useRef}  from 'react';

const MainContent = () => {

 
  const [showLargeHeader, setShowLargeHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const contentRef = useRef();


  function handleScroll (e) {
    console.log(contentRef.current.scrollTop);

    if (contentRef.current.scrollTop > 100 && showLargeHeader) {
      setShowLargeHeader(false);
    } else if (contentRef.current.scrollTop < 100 && !showLargeHeader) {
      setShowLargeHeader(true);
    }

    if (contentRef.current.scrollTop > 0 && !scrolled) {
      setScrolled(true);
      console.log('sdkjsflj')
    } else if (contentRef.current.scrollTop === 0  && scrolled) {
      setScrolled(false);
      console.log('set false')
    }


    
  }

  const headerType = showLargeHeader ? 'large' : 'small';
  return (
    <div className="main-content" onScroll={handleScroll} ref={contentRef}>
      <Header type={headerType} scrolled={scrolled}></Header>

      <div className="main">
        <Table header={headerType}></Table>
      </div>
    </div>
  );
}

export default MainContent;