import React from 'react';
import User from './components/User';
import html2pdf from 'html2pdf.js';

const App = () => {
  const contacts = [
    'tanishqjoshi93@gmail.com',
    '+917869900340',
    'https://tanishq510.github.io',
    'https://linkedin.com/in/tanishq-joshi-b396a2170'
  ]
  const about = "With over 5 years of experience specializing in both front-end and back-end technologies. I have a proven track record in developing solutions  I thrive in collaborative environments, solving complex  problems, and leading teams to deliver projects on time and with high quality"
  const designation = 'Software Engineer'
  const tools = ['Gitlab', 'Github', 'Jira', 'Swagger', 'Postman', 'Asana', 'Figma', 'Ubuntu']
  const skills = ['React js',
    'Node js',
    'Javascript',
    'Typescript',
    'Redux',
    'Express Js',
    'Docker',
    'jQuery',
    'Bootstrap',
    'Taliwind',
    'Scss',
    'AWS',
    'Stripe',
    'MySQL',
    'NPM',
    'Git']
  const name = 'Tanishq Joshi'

  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    const options = {
      margin: 1,
      filename: 'Resume_Tanishq_Joshi.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  };
  return (
    <> <div className="bg-neutral-50 font-sans p-8 w-3/5 mx-auto border rounded-3xl m-4" id='resume-content'>
      <div className="flex justify-between">
        {/* Left Column */}
        <User
          name={name}
          designation={designation}
          about={about}
          contacts={contacts}
          tools={tools}
          skills={skills}
        />

        {/* Right Column */}
        <div className="w-2/3 bg-neutral-100 p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-800">Software Engineer</h3>
              <p className="text-sm text-gray-600">Mindbowser, May 2022 - Present</p>
              <ul className="list-disc pl-5 text-sm mt-2">
                <li>Developed secured API contracts using JWT tokens for authentication, implemented rate limiting to prevent API misuse.</li>
                <li>Integrated AWS services including SQS, SES, Step Functions, Lambda Functions, and S3 Buckets, resulting in a 30% improvement in cloud service efficiency.</li>
                <li>Containerized projects using Docker, reducing deployment time by 40%.</li>
                <li>Transformed Figma designs into responsive UI, enhancing user experience and increasing website traffic by 25%.</li>
                <li>Developed frontend applications using React, Vue, and Nuxt, leading to a 20% reduction in load times.</li>
                <li>Integrated UI libraries (Antd, Material UI, Tailwind) to streamline design processes, reducing development time by 15%.</li>
                <li>Developed backend services using Node JS and Express, and integrated with Sequelize to optimize database interactions, achieving a 30% increase in efficiency.</li>
                <li>Led a 3-member team to deliver the project on time, enhancing team coordination and achieving a 100% on-time delivery rate.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-800">Software Developer</h3>
              <p className="text-sm text-gray-600">Codiant, Jan 2021 – May 2022</p>
              <ul className="list-disc pl-5 text-sm mt-2">
                <li>CMS and API Development</li>
                <li>UI conversion and API integration</li>
                <li>Problem solving involved in the application</li>
                <li>Project analysis</li>
                <li>Requirement Gathering</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-800">Fullstack developer</h3>
              <p className="text-sm text-gray-600">Webkodz, Aug 2020 – Jan 2021</p>
              <ul className="list-disc pl-5 text-sm mt-2">
                <li> CMS and API Development</li>
                <li> Active involvement in different phases of product development</li>
                <li> Database Designing</li>
                <li> UI Development</li>
                <li> UI Integration with Frontend Framework</li>
                <li> REST API integration</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-800">Jr. Fullstack Developer</h3>
              <p className="text-sm text-gray-600">SMT Groups, Mar 2019 – Aug 2020</p>
              <ul className="list-disc pl-5 text-sm mt-2">
                <li>UI Development</li>
                <li>REST API Integration</li>
                <li>Building REST API</li>
                <li>Testing and Reviewing Applications</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className='flex justify-around mt-8 bg-neutral-100 p-3 rounded-xl'>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-800">Bachelors Of Engineering - Automobile</h3>
            <p className="text-sm text-gray-600">SVITS, Indore | 2015 – 2019</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-800">HSC</h3>
            <p className="text-sm text-gray-600">Ideal Academy, Indore | 2014-2015</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-800">Resume Builder</h3>
            <p className="text-sm text-gray-600">https://tanishq510.github.io/Resume_Builder/</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-800">CMS Application</h3>
            <p className="text-sm text-gray-600">https://react-x2xngs.stackblitz.io/</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-800">Blogs and Articles</h3>
            <p className="text-sm text-gray-600">https://www.mindbowser.com/google-drive-api/</p>
          </div>
        </section>
      </div>
    </div>
      <div className="mt-8 text-center">
      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Download as PDF
      </button>
    </div>
    </>
   
  );
};

export default App;