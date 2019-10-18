import React from 'react';
import { PageHeader, Button } from 'antd';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';


const Wrapper = styled.div`
    color: black;
    .active button {
        background:black;
        color:white;
    }
    a.active {
      color:white;
    }
`

function Navigation(props) {
  const path = props.location.pathname;
  const [title, subtitle] = path.split('/').filter(item => !!item);

  return (
    <Wrapper className='Navigation'>
      <PageHeader
        ghost={false}
        onBack={() => props.history.goBack()}
        title={title}
        subTitle={subtitle.replace('_', ' ')}
        extra={[
          <NavLink key='3' to='/category/top_rated' activeClassName='active'>
            <Button>Top rated</Button>
          </NavLink>,
          <NavLink key='2' to='/category/upcoming' activeClassName='active'>
            <Button>Upcoming</Button>
          </NavLink>,
          <NavLink key='1' to='/category/popular' activeClassName='active'>
            <Button>Popular</Button>
          </NavLink>,
        ]}
      ></PageHeader>
    </Wrapper>
  );
}

export default withRouter(Navigation);
