
const sessions = [
  {
    time: '09:00 AM - 09:30 AM',
    title: 'Registration and Welcome Coffee',
    speaker: '',
    description: 'Check-in and enjoy a cup of coffee to start the day.'
  },
  {
    time: '09:30 AM - 10:15 AM',
    title: 'Opening Keynote',
    speaker: 'Jane Doe',
    description: 'An inspiring talk to kick off the conference by Jane Doe, renowned tech entrepreneur.'
  },
  {
    time: '10:15 AM - 11:00 AM',
    title: 'Building Scalable Web Applications',
    speaker: 'John Smith',
    description: 'Learn the best practices for building scalable web applications from John Smith, Senior Engineer at TechCorp.'
  },
  {
    time: '11:00 AM - 11:15 AM',
    title: 'Coffee Break',
    speaker: '',
    description: 'Take a short break to network and enjoy some refreshments.'
  },
  {
    time: '11:15 AM - 12:00 PM',
    title: 'Introduction to Machine Learning',
    speaker: 'Emily White',
    description: 'Emily White, Data Scientist at DataWorld, will introduce the basics of machine learning.'
  },
  {
    time: '12:00 PM - 01:00 PM',
    title: 'Lunch Break',
    speaker: '',
    description: 'Enjoy a delicious lunch and network with other attendees.'
  },
  {
    time: '01:00 PM - 01:45 PM',
    title: 'Building RESTful APIs with Node.js',
    speaker: 'Michael Brown',
    description: 'Michael Brown will guide you through the process of building RESTful APIs using Node.js.'
  },
  {
    time: '01:45 PM - 02:30 PM',
    title: 'Modern Front-End Development',
    speaker: 'Sarah Green',
    description: 'Sarah Green, Front-End Developer at WebFlow, will discuss modern front-end development techniques.'
  },
  {
    time: '02:30 PM - 02:45 PM',
    title: 'Afternoon Break',
    speaker: '',
    description: 'A short break to stretch and recharge.'
  },
  {
    time: '02:45 PM - 03:30 PM',
    title: 'Cybersecurity Best Practices',
    speaker: 'David Lee',
    description: 'David Lee, Security Expert, will share the best practices for ensuring cybersecurity in your projects.'
  },
  {
    time: '03:30 PM - 04:15 PM',
    title: 'Cloud Computing Fundamentals',
    speaker: 'Jessica Brown',
    description: 'Jessica Brown from CloudTech will introduce the fundamentals of cloud computing.'
  },
  {
    time: '04:15 PM - 05:00 PM',
    title: 'Closing Remarks and Networking',
    speaker: '',
    description: 'Closing remarks followed by a networking session to end the conference.'
  }
];

const ConferenceAgenda = () => {
  return (
    <section className="ml-80 py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Conference Schedule</h2>
            <div className="grid gap-8 md:gap-12 lg:gap-16">
              <div className="grid grid-cols-[100px_1fr] items-center gap-4 md:gap-6 lg:gap-8">
                <div className="bg-[#d8761a] text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  9:00 AM
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium">Keynote: The Future of Web Development</h3>
                  <p className="text-muted-foreground">John Doe, CEO of Acme Inc.</p>
                </div>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-4 md:gap-6 lg:gap-8">
                <div className="bg-[#d8761a] text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  10:30 AM
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                    Building Scalable Web Apps with Next.js
                  </h3>
                  <p className="text-muted-foreground">Jane Smith, Senior Engineer at Vercel</p>
                </div>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-4 md:gap-6 lg:gap-8">
                <div className="bg-[#d8761a] text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  12:00 PM
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium">Lunch Break</h3>
                  <p className="text-muted-foreground">Enjoy a catered lunch with your fellow attendees.</p>
                </div>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-4 md:gap-6 lg:gap-8">
                <div className="bg-[#d8761a] text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  1:30 PM
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium">Designing for Accessibility</h3>
                  <p className="text-muted-foreground">Sarah Lee, UX Designer at Acme Inc.</p>
                </div>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-4 md:gap-6 lg:gap-8">
                <div className="bg-[#d8761a] text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  3:00 PM
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium">Networking and Closing Remarks</h3>
                  <p className="text-muted-foreground">Join us for a final networking session and closing remarks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default ConferenceAgenda;