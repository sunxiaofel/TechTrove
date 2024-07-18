import { useModel } from '@umijs/max';
import { Card } from 'antd';

export default function MyCard({ ref, children }: { ref?: any; children?: any }) {
  const { initialState } = useModel('@@initialState');
  return (
    <Card
      ref={ref}
      style={{
        borderRadius: 8,
      }}
      styles={{
        body: {
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        },
      }}
    >
      {children ? children : <></>}
    </Card>
  );
}
