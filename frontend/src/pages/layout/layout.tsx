import { Outlet } from 'react-router-dom';
import Sider from '../../components/sider';
import Navbar from '../../components/navbar';


export default function Layout() {
  return (


    <>
<Navbar/>
<div className="grid grid-cols-12  min-h-screen">

<div className='col-span-2 w-full text-white'>
<Sider />
</div>

  <main className="col-span-10 w-full p-6 bg-gray-900">
    <Outlet />
  </main>
</div>

    </>
  )
}
