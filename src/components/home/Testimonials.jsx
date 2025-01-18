import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fashion Enthusiast',
    content:
      'The virtual shopping experience was incredible. It felt like having a personal stylist right at my fingertips!',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
  },
  {
    name: 'Michael Chen',
    role: 'Tech Professional',
    content:
      'The video quality and expert advice made online shopping so much more confident and enjoyable.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    content:
      'Being able to see products in detail through video chat helped me make better purchasing decisions.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
  },
];

export const Testimonials = () => {
  return (
    <section className='py-24 bg-paper'>
      <div className='container px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>What Our Customers Say</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Discover why people love our virtual shopping experience
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className='p-6 rounded-xl bg-grey50 scroll-reveal'
              style={{ animationDelay: `${index * 0.2}s` }}>
              <div className='flex items-center mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className='h-5 w-5 fill-[#facc1f] text-[#facc1f]' />
                ))}
              </div>
              <p className='text-lg mb-6'>{testimonial.content}</p>
              <div className='flex items-center'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-12 h-12 rounded-full mr-4'
                />
                <div>
                  <h4 className='font-semibold'>{testimonial.name}</h4>
                  <p className='text-sm text-muted-foreground'>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
