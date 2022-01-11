import Image from "next/image";
import classes from "./hero.module.css";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/gokul.jpg"
          alt="A picture"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi,I am Gokul</h1>
      <p>I blog about web development</p>
    </section>
  );
};

export default Hero;
