import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Home = () => {
  return (
    <div className="space-y-6">
      <Profile />
      <Skills />
      <Projects />
      <Contact />
      <img
        src="/images/cara.png"
        alt="background"
        className="fixed bottom-10 right-0 h-72 pointer-events-none -z-10"
      />
    </div>
  );
};

export default Home;
