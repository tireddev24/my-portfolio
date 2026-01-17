/* eslint-disable react/prop-types */

function About({ personalData }) {
  const data = personalData;

  return (
    <>
      <div
        id="about"
        className=" my-10  text-[14px] tablet:text-[17px] flex flex-col mx-[10%] desktop:mx-[15%]  desktop:items-start *:desktop:text-xl"
      >
        <section className="mainbody-content about  ">
          <h4 className="section-title  "> About </h4>
          <p className="content ml-5   mt-3  wide:max-w-[90%]  ">
            I&apos;m
            <b className="scale-70 "> {data.fullName}. </b> {data.about}
          </p>
        </section>

        <section className="mt-5 interests ">
          <h4 className="section-title appear">Interests </h4>
          <div className="content ml-5 mt-3">
            <ol className="list  list-inside">
              {data.interests &&
                data.interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
            </ol>
          </div>
        </section>
        <section className=" mt-5 stack appear ">
          <b className="section-title ">Technology Stack</b>
          <ul className="stack list list-disc list-inside ml-5  mt-4 font-semibold *:marker:text-darkpink *:dark:marker:text-darkText drop-shadow-xl drop-shadow-darkpink">
            {data.stack &&
              data.stack.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
        </section>

        <section className=" mt-5 stack appear ">
          <b className="section-title ">Languages</b>
          <ul className="stack list list-disc list-inside ml-5  mt-4 font-semibold *:marker:text-darkpink *:dark:marker:text-darkText drop-shadow-xl drop-shadow-darkpink">
            {data.languages &&
              data.languages.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default About;
