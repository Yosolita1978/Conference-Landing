import React from 'react'

function CodeConductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-center">
      <h2 className="font-bold text-2xl p-1">TechConMe Code of Conduct</h2>
      </header>
      <main className="flex items-center justify-center">
      <div className="p-5 max-w-2xl">
      <p className="text-justify">
            TechConMe is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity, gender expression, sexual orientation, disability, physical appearance, body size, race, ability, ethnicity, socioeconomic status, or religion (or lack thereof). TechConMe does not tolerate harassment of participants or staff at any time nor in any form.
            <br /><br />
            All communication throughout any TechConMe event (both online and in-person) should be appropriate for a professional audience including people of many different backgrounds. Sexual language and imagery are not appropriate for any part of the event, particularly when interfacing with any chat features built into the event experience. Please be kind to others. Do not insult or put down other attendees and behave professionally. Remember that harassment and sexist, racist, or exclusionary jokes are not appropriate for TechConMe.
            <br /><br />
            Anyone violating these guidelines may be removed from the event at our sole discretion and will not have a right to a refund if applicable.
            <br /><br />
            Thank you for helping make TechConMe a welcoming, friendly event for all.
          </p>
      </div>
      </main>
    </div>
  )
}

export default CodeConductPage