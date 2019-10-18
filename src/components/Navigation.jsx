import React from 'react';
import { PageHeader, Button } from 'antd';

import { NavLink , withRouter} from 'react-router-dom';

function Navigation(props) {
    const [title, subtitle] = props.location.pathname.split('/').filter(item => !!item)

  return (
    <div className='Navigation'>
      <PageHeader
        ghost={false}
        onBack={() => props.history.goBack()}
        title={title}
        subTitle={subtitle.replace('_', ' ')}
        extra={[
          <Button key='3'>
            <NavLink to='/category/top_rated'>Top rated</NavLink>
          </Button>,
          <Button key='2'>
            <NavLink to='/category/upcoming'>Upcoming</NavLink>
          </Button>,
          <Button key='1' type='primary'>
            <NavLink to='/category/popular'>Popular</NavLink>
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
}

export default withRouter(Navigation);
