
import Menu from './menu'


const MenuBar = () => {
  return (
    <div>
    <div className="flex justify-end w-screen min-w-screen bg-gray-900 h-14 md:pr-5">
      <Menu showHome={false}/>
    </div>
    </div>
  );
  }

export default MenuBar