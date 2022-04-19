import { Outlet } from 'remix'

function Posts() {
  return (
    <>
    {/* add pagination  */}
      <Outlet />
    </>
  )
}

export default Posts
