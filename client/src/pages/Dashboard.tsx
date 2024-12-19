// import { Col, Row } from 'antd';
// import MonthlyChart from '../components/Charts/MonthlyChart';
// import Loader from '../components/Loader';
// import { useCountProductsQuery } from '../redux/features/management/productApi';
// import { useYearlySaleQuery } from '../redux/features/management/saleApi';
// import DailyChart from '../components/Charts/DailyChart';

// const Dashboard = () => {
//   const { data: products, isLoading } = useCountProductsQuery(undefined);
//   const { data: yearlyData, isLoading: isLoading1 } = useYearlySaleQuery(undefined);

//   if (isLoading && isLoading1) return <Loader />;
//   else
//     return (
//       <>
//         <Row style={{ paddingRight: '1rem' }}>
//           <Col xs={{ span: 24 }} lg={{ span: 8 }} style={{ padding: '.5rem' }}>
//             <div className='number-card'>
//               <h3>Total Stock</h3>
//               <h1>{products?.data?.totalQuantity || 0}</h1>
//             </div>
//           </Col>
//           <Col xs={{ span: 24 }} lg={{ span: 8 }} style={{ padding: '.5rem' }}>
//             <div className='number-card'>
//               <h3>Total Item Sell </h3>
//               <h1>
//                 {yearlyData?.data.reduce(
//                   (acc: number, cur: { totalQuantity: number }) => (acc += cur.totalQuantity),
//                   0
//                 )}
//               </h1>
//             </div>
//           </Col>
//           <Col xs={{ span: 24 }} lg={{ span: 8 }} style={{ padding: '.5rem' }}>
//             <div className='number-card'>
//               <h3>Total Revenue</h3>
//               <h1>
//                 $
//                 {yearlyData?.data.reduce(
//                   (acc: number, cur: { totalRevenue: number }) => (acc += cur.totalRevenue),
//                   0
//                 )}
//               </h1>
//             </div>
//           </Col>
//         </Row>
//         <div
//           style={{
//             border: '1px solid gray',
//             margin: '1rem',
//             padding: '1rem',
//             borderRadius: '10px',
//           }}
//         >
//           <h1 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Daily Sale and Revenue</h1>
//           <DailyChart />
//         </div>
//         <div
//           style={{
//             border: '1px solid gray',
//             margin: '1rem',
//             padding: '1rem',
//             borderRadius: '10px',
//           }}
//         >
//           <h1 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Monthly Revenue</h1>
//           <MonthlyChart />
//         </div>
//       </>
//     );
// };

// export default Dashboard;

import { Col, Row, Card, Typography } from 'antd';
import MonthlyChart from '../components/Charts/MonthlyChart';
import Loader from '../components/Loader';
import { useCountProductsQuery } from '../redux/features/management/productApi';
import { useYearlySaleQuery } from '../redux/features/management/saleApi';
import DailyChart from '../components/Charts/DailyChart';

const { Title } = Typography;

const Dashboard = () => {
  const { data: products, isLoading } = useCountProductsQuery(undefined);
  const { data: yearlyData, isLoading: isLoading1 } = useYearlySaleQuery(undefined);

  if (isLoading && isLoading1) return <Loader />;

  return (
    <>
      <Row gutter={[16, 16]} style={{ padding: '1rem' }}>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Card
            bordered={false}
            style={{
              borderRadius: '10px',
              textAlign: 'center',
              padding: '0.5rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Title level={4}>Total Stock</Title>
            <h1>{products?.data?.totalQuantity || 0}</h1>
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Card
            bordered={false}
            style={{
              borderRadius: '10px',
              textAlign: 'center',
              padding: '0.5rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Title level={4}>Total Item Sell</Title>
            <h1>
              {yearlyData?.data.reduce(
                (acc: number, cur: { totalQuantity: number }) => (acc += cur.totalQuantity),
                0
              )}
            </h1>
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Card
            bordered={false}
            style={{
              borderRadius: '10px',
              textAlign: 'center',
              padding: '0.5rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Title level={4}>Total Revenue</Title>
            <h1>${yearlyData?.data.reduce(
              (acc: number, cur: { totalRevenue: number }) => (acc += cur.totalRevenue),
              0
            )}</h1>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ padding: '1rem' }}>
  <Col xs={24} md={12}>
    <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem', borderRadius: '10px' }}>
      <Title level={3} style={{ textAlign: 'center', marginBottom: '.5rem' }}>Daily Sale and Revenue</Title>
      <DailyChart />
    </div>
  </Col>
  <Col xs={24} md={12}>
    <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem', borderRadius: '10px' }}>
      <Title level={3} style={{ textAlign: 'center', marginBottom: '.5rem' }}>Monthly Revenue</Title>
      <MonthlyChart />
    </div>
  </Col>
</Row>

    </>
  );
};

export default Dashboard;

