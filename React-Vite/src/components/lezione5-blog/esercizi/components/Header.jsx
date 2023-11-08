import logo from '../cards/header.svg'


const headerStyle = {
  backgroundImage: `url(${logo})`,
};

export default () => {
    const appTitle = 'Memory Game';
  
    return (
      <header className="flex flex-row justify-between items-center bg-sky-600">
        <img className=' w-[350px]' src={logo}></img>
        <div className='text-center text-9xl text-white italic font-bold p-3'>Cards....</div>
      </header>
    );
  };