import logo from '../assets/logo.png';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={`${classes.paragraph}`}
        // style={{
        //     // color: 'red',
        //     // camelCase replaces the use of the '-' character in inline styles (text-align => textAlign)
        //     // or you wrap the style key in quotes (text-align => 'text-align')
        //     textAlign: 'center'
        // }}
      >A community of artists and art-lovers.</p>
    </header>
  );
}
