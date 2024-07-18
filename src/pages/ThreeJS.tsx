import { PageContainer } from '@ant-design/pro-components';
// 引入three.js
import EarthScene from './ThreeJS/EarthScene';

export default function ThreeJS() {
  return (
    <PageContainer>
      <EarthScene />
    </PageContainer>
  );
}
