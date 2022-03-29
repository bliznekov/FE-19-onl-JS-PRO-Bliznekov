import './Menu.scss'

type Menu = {
  value: string,
  handleClick: any,
  link: string,
}

const Menu = ({
  value,
  handleClick,
  link,
}: Menu) => {
  return(
    <div className="menu">
      <a href={link} onClick={handleClick}>{value}</a>
    </div>
  );
}

export default Menu;