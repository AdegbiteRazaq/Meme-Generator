import logo from "../assets/Troll Face.png";
const Header = () => {
  return (
    <div className="flex bg-purple-900 text-gray-100 gap-7 items-center w-full text-lg px-6 py-4  border-2 drop-shadow-sm font-bold">
      <img src={logo} alt="scary" className="w-16 h-16" />
      <h1>Meme Generator</h1>
      <h3 className="ml-auto text-sm">React Course- Project 3</h3>
    </div>
  );
};
export default Header;
