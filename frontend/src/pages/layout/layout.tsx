import { Outlet } from 'react-router-dom';
import Sider from '../../components/sider';


export default function Layout() {
  return (


    <>
    
<div className="grid grid-cols-12  min-h-screen">

<div className='col-span-1 bg-gray-900 text-white'>
<Sider />
</div>

  <main className="col-span-11 p-6 bg-gray-900">
    <Outlet />
  </main>
</div>

    </>
  )
}
