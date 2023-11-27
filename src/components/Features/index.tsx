import CoinsIcon from "../icons/CoinsIcon";
import SettingsIcon from "../icons/SettingsIcon";
import SmileIcon from "../icons/SmileIcon";

function Features() {
  return (
    <section id="about-us" className="w-full max-w-5xl py-20 px-6 flex gap-5 items-center">
      <div className="w-full flex flex-wrap gap-4">
        <div className="flex flex-col items-center justify-center gap-5 flex-grow basis-60 bg-secondary-color/50 p-4 rounded-lg">
          <CoinsIcon size={50} stroke="black" />
          <h3 className="text-lg sm:text-xl text-center">É gratuito</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 flex-grow basis-60 bg-secondary-color/50 p-4 rounded-lg">
          <SettingsIcon size={50} stroke="black" />
          <h3 className="text-lg sm:text-xl text-center">Fácil de usar</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 flex-grow basis-60 bg-secondary-color/50 p-4 rounded-lg">
          <SmileIcon size={50} stroke="black" />
          <h3 className="text-lg sm:text-xl text-center">9 entre 10 usuários aprovam</h3>
        </div>
      </div>
    </section>
  );
}

export default Features;
