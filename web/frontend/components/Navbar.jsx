import { useNavigate } from '@shopify/app-bridge-react';
import { Button, ButtonGroup, Stack } from '@shopify/polaris';
export function Navbar (){
  const navigate = useNavigate();

  return (
    <>
    
      {/* <Link onClick={() => {
        navigate('/dashboard');
      }}>Dashboard</Link>

      <Link onClick={() => {
        navigate('/products');
      }}>Products</Link> */}
      <ButtonGroup>
      <Stack >
        <Button url="/dashboard">Dashboard</Button>
        <Button url="/settings">Setting</Button>
        <Button url="/products">Products</Button>
        <Button url="/badge">Badge</Button>
      </Stack>
      </ButtonGroup>
      
    </>
  );
}