import './Header.scss'
import Menu from './menu/Menu';


function Header(){
  return(
    <div className="header">
      <div className="section">
        <Menu value='Profile' handleClick={() => console.log("Profile")} link='/profile' />
        <Menu value='Contacts' handleClick={() => console.log("Contacts")} link='/contacts' />
        <Menu value='About us' handleClick={() => console.log("About us")} link='/about'/>
      </div>
    </div>
  );
}

export default Header;