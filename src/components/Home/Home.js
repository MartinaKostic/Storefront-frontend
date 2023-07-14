import picture from "../../pics/hero-merch.png";
const Home = () => {
  return (
    <div className="text-center p-10 flex flex-col">
      <h1 className="text-5xl text-primary_varient font-medium">
        Welcome to our Medusa Store!
      </h1>
      <img className="h-64 self-center" src={picture} alt="picture"></img>
      <p className="text-md">
        You can find all of the Medusa merch by clicking on Products button.
      </p>
      <p className="text-2xl">Happy shopping!</p>
    </div>
  );
};

export default Home;
