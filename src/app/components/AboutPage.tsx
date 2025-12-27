import { Users, Award, Heart, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const timeline = [
    { year: '2010', event: 'Artisan Bakery founded by Sarah and Michael Thompson' },
    { year: '2013', event: 'Expanded to include custom cake design services' },
    { year: '2016', event: 'Won "Best Local Bakery" award' },
    { year: '2019', event: 'Opened our second location downtown' },
    { year: '2023', event: 'Celebrated serving over 100,000 happy customers' },
  ];

  const team = [
    {
      name: 'Sarah Thompson',
      role: 'Master Baker & Co-Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
      name: 'Michael Thompson',
      role: 'Pastry Chef & Co-Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head Cake Decorator',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our hearts into every creation, treating each order with care and dedication.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Only the finest organic ingredients make it into our kitchen, ensuring exceptional taste.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in supporting local farmers and giving back to our community.',
    },
    {
      icon: Clock,
      title: 'Tradition',
      description: 'Our recipes blend time-honored techniques with modern innovation.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl mb-6 text-amber-900">
              Our Story
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A family tradition of baking excellence, passed down through generations 
              and shared with our community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">
                Baking Since 2010
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Artisan Bakery was born from a simple dream: to bring authentic, 
                  handcrafted baked goods to our local community. What started as a 
                  small family operation has grown into a beloved neighborhood destination.
                </p>
                <p>
                  Sarah and Michael Thompson, both trained pastry chefs with a passion 
                  for traditional baking methods, founded Artisan Bakery in 2010. Their 
                  commitment to quality, authenticity, and customer satisfaction has been 
                  the foundation of our success.
                </p>
                <p>
                  Every morning, our bakers arrive at 4 AM to start the day's production, 
                  ensuring that when you walk through our doors, you're greeted with the 
                  aroma of fresh bread and the warmth of genuine hospitality.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80"
                alt="Baker working in the kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-gray-900">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-amber-700 text-white rounded-full flex items-center justify-center text-xl">
                  {item.year}
                </div>
                <div className="flex-1 pt-4">
                  <p className="text-lg text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-4 text-gray-900">
            Our Values
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-amber-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-4 text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mb-12">
            The talented bakers behind your favorite treats
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-amber-700">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6 text-gray-900">
            Certifications & Awards
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="text-xl mb-2 text-gray-900">Best Local Bakery</h3>
              <p className="text-gray-600">City Awards 2016, 2019, 2022</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-2">🌾</div>
              <h3 className="text-xl mb-2 text-gray-900">Organic Certified</h3>
              <p className="text-gray-600">USDA Organic Certification</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="text-xl mb-2 text-gray-900">5-Star Rated</h3>
              <p className="text-gray-600">4.9/5 from 500+ reviews</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
