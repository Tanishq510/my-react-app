const User = ({ name = 'Tanishq Joshi', designation = 'Software Engineer', about = '', contacts = [], skills = [], tools = [] }) => {
  return (
    <div className="w-1/4 text-black p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-blue-800">{name}</h1>
        <p className="text-xl mb-4">{designation}</p>
        {/* <p className="text-sm text-balance mb-2   ">{about}</p> */}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-blue-800">Contacts</h2>
        <ul className="list-disc pl-5 text-sm">
          {contacts.map((contact, key) => {
            return <li key={key} className="text-sm mb-1">{contact}</li>
          })}
        </ul>

      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-blue-800">Skills</h2>
        <ul className="list-disc pl-5 text-sm">
          {skills.map((skill, key) => {
            return <li key={key}>{skill}</li>
          })}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 text-blue-800">Tools</h2>
        <ul className="list-disc pl-5 text-sm">
          {tools.map((tool, key) => {
            return <li key={key}>{tool}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default User