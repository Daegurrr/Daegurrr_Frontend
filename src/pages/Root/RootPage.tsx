import { Outlet } from 'react-router-dom';

import { Layout } from '../../styles/Layout';

import RootSider from './components/RootSider';

// import Input from '../components/common/input';
// import CategoryButton from '../components/common/button/CategoryButton';

const RootPage = () => {
  return (
    <Layout>
      <Outlet />
      <RootSider />
    </Layout>
  );
};

export default RootPage;
