import { CheckCircle, ShoppingBag, Video, Users } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Live Video Shopping',
    description:
      'Connect with expert shoppers through high-quality video calls for a personal shopping experience.',
  },
  {
    icon: Users,
    title: 'Expert Assistance',
    description: 'Get real-time advice from fashion experts and product specialists.',
  },
  {
    icon: ShoppingBag,
    title: 'Virtual Try-On',
    description: 'See how products look in real-time with our advanced virtual try-on technology.',
  },
  {
    icon: CheckCircle,
    title: 'Secure Shopping',
    description: 'Shop with confidence knowing your transactions are protected and secure.',
  },
];

export const Features = () => {
  return (
    <section className='pb-24 bg-paper'>
      <div className='container px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>Why Choose Us</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Experience the future of online shopping with our innovative features
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className='p-6 rounded-xl bg-primaryLight hover:bg-blue-100 transition-colors scroll-reveal'
              style={{ animationDelay: `${index * 0.2}s` }}>
              <feature.icon className='h-12 w-12 text-primaryMain mb-4' />
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-muted-foreground'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
