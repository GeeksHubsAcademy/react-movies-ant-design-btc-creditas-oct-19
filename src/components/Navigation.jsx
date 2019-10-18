import React from 'react';
import { PageHeader, Button } from 'antd';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';


const Wrapper = styled.div`
    .active button {
        background:black;
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
          <NavLink to='/category/top_rated' activeClassName='active'>
            <Button key='3'>Top rated</Button>
          </NavLink>,
          <NavLink to='/category/upcoming' activeClassName='active'>
            <Button key='2'>Upcoming</Button>
          </NavLink>,
          <NavLink to='/category/popular' activeClassName='active'>
            <Button key='1'>
              Popular
            </Button>
          </NavLink>,
        ]}
      ></PageHeader>
    </Wrapper>
  );
}

export default withRouter(Navigation);
