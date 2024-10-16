import logo from '../assets/logo.png';
// import { styled } from 'styled-components';

// & symbol used to replace 'header' in this case
// & refers to the current styled component being created
// const StyledHeader = styled.header`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin-top: 2rem;
//     margin-bottom: 2rem;

//     & img {
//     object-fit: contain;
//     margin-bottom: 2rem;
//     width: 11rem;
//     height: 11rem;
//     }
    
//     & h1 {
//         font-size: 1.5rem;
//         font-weight: 600;
//         letter-spacing: 0.4em;
//         text-align: center;
//         text-transform: uppercase;
//         color: #9a3412;
//         font-family: 'Pacifico', cursive;
//         margin: 0;
//     }
    
//     .paragraph {
//         text-align: center;
//         color: #a39191;
//         margin: 0;
//     }
    
//     @media (min-width: 768px) {
//         margin-bottom: 4rem;
    
//         & h1 {
//         font-size: 2.25rem;
//         }
//     }
// `

export default function Header() {
  return (
    // mb-8 md:mb-16 => the margin on the bottom will be 2rem unless the screen is at least a medium size, then it will be 4rem
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        className="mb-8 w-44 h-44 object-contain" 
        src={logo} 
        alt="A canvas" 
      />
      {/* font-title is setup as a new fontFamily in tailwind.config.js */}
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
        ReactArt
      </h1>
      <p
        className="text-center m-0 text-stone-500"
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
