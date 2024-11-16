



export default function Profile(){


    return (


        <div className="flex p-4 w-full h-full bg-gray-800 rounded-lg">


            
    <div className="w-[40%] h-full bg-gray-700 rounded-lg ">


    <div className="rounded-t-lg h-[10em] overflow-hidden">
        <img className="object-cover  object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32"  src="public/avatar.png" alt='profile image'/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold text-lg mt-4 text-gray-100">Sarah Smith</h2>
        <p className="text-gray-300">Freelance Web Designer</p>
    </div>
  
    <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
    </div>
</div>



        </div>


    )
}