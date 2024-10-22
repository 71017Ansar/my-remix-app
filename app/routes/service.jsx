import React from 'react';


const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4 text-center">
        <div className="text-6xl mb-4">{icon}</div>
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

const ServicePage = () => {
  
  const services = [
    {
      icon: "🔧",
      title: "Web Development",
      description: "Building responsive and scalable websites."
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description: "Creating stunning designs for your brand."
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Developing user-friendly mobile applications."
    },
    {
      icon: "💼",
      title: "Business Consultation",
      description: "Helping you grow your business with expert advice."
    }
  ];

  return (
    <div>
     
      <header className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">
          Explore the wide range of services we offer to help your business succeed.
        </p>
      </header>

     
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>

     
      <footer className="text-center py-8 bg-gray-900 text-white">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServicePage;
