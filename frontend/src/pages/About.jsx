import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-100">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-112.5" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur dolore praesentium culpa ipsum qui. Dolorum distinctio
            incidunt aliquam nobis aspernatur unde eos! Quae alias labore dicta
            asperiores est optio reiciendis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            laudantium consequuntur necessitatibus, soluta minima nesciunt rerum
            vel aspernatur corporis placeat laborum at vitae numquam provident,
            explicabo aliquid inventore reprehenderit eveniet?
          </p>
          <b className="text-gray-800">Our Misson</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            eligendi tempore debitis a ad quibusdam cupiditate eveniet? Deleniti
            maxime quaerat magni rerum eum voluptatum veritatis sint
            voluptatibus, dolorum incidunt quasi.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-100 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurence:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            suscipit deserunt corrupti exercitationem quam laborum obcaecati
            deleniti iste beatae consequuntur? Ex recusandae minima deleniti
            atque doloribus accusamus! Tempore, dolor cumque!
          </p>
        </div>
        <div className="border border-gray-100 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            suscipit deserunt corrupti exercitationem quam laborum obcaecati
            deleniti iste beatae consequuntur? Ex recusandae minima deleniti
            atque doloribus accusamus! Tempore, dolor cumque!
          </p>
        </div>
        <div className="border border-gray-100 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            suscipit deserunt corrupti exercitationem quam laborum obcaecati
            deleniti iste beatae consequuntur? Ex recusandae minima deleniti
            atque doloribus accusamus! Tempore, dolor cumque!
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
