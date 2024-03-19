import aboutme from "../../img/aboutme.jpg";
function Biography() {
  return (
    <div className="bg-black text-white mg-40">
      <div className="p-12">
        <div className="text-2xl text-blue mb-16">
          <h1>About Me</h1>
        </div>

        <div className=" grid grid-cols-5 gap-x-8 gap-y-16">
          <div className="text-lg px-6 col-span-3">
            <div className="mb-8">
              <h2 className="text-blue text-xl">Tech Stack Experience:</h2>
              <ul>
                <li>
                  <span className="text-blue">Front End: </span>
                  HTML, CSS (Vanilla, Tailwind, Bootstrap), JavaScript, React,
                  Framer Motion
                </li>
                <li>
                  <span className="text-blue">Back End: </span>JavaScript,
                  Node.js, Express.js
                </li>
                <span className="text-blue">Database: </span>
                MongoDB, Firebase, MySQL, MSSQL Server
                <li>
                  <span className="text-blue">Other Learning: </span>
                  Object-Oriented Programming (OOP), Java, JavaFX, Python, Git,
                  GitHub
                </li>
              </ul>
            </div>

            <div className="aside-content">
              <h2 className="text-xl text-blue">Aside from Coding: </h2>
              <p className="mb-4">
                I'm currently studying Computer Science at Langara College in
                Vancouver. Originally from India, the photo I took on my home's
                rooftop reminds me of my roots. Besides coding, I love playing
                football and listening to hip-hop music. Cooking, especially
                dishes taught by my mother, brings me comfort and nostalgic
                memories of home. One of my favorite quotes-
              </p>

              <blockquote className="italic font-bold">
                "When you aspire to grow and contribute meaningfully to society,
                your efforts naturally garner recognition and reward from the
                community."
              </blockquote>
              <span className="text-blue text-sm italic">
                - Bhagavad Gita, Chapter 3, Verse 12
              </span>
            </div>
          </div>

          <img className="col-span-2 rounded-lg" src={aboutme} />
        </div>
      </div>
    </div>
  );
}

export default Biography;
