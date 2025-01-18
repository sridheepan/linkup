import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    title: 'Browse & Connect',
    description: 'Choose from our selection of expert shoppers and schedule a video call.',
  },
  {
    number: '02',
    title: 'Shop Together',
    description: 'Get real-time advice and see products up close during your video session.',
  },
  {
    number: '03',
    title: 'Purchase & Enjoy',
    description: 'Complete your purchase securely and enjoy your perfectly chosen items.',
  },
];

export const HowItWorks = () => {
  return (
    <section className='py-24 bg-primaryLight'>
      <div className='container px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>How It Works</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Start your virtual shopping journey in three simple steps
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {steps.map((step) => (
            <div key={step.number} className='relative p-8 rounded-xl bg-paper scroll-reveal'>
              <span className='absolute -top-6 left-8 text-6xl font-bold text-primaryMain'>
                {step.number}
              </span>
              <h3 className='text-xl font-semibold mb-4 mt-4'>{step.title}</h3>
              <p className='text-muted-foreground'>{step.description}</p>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <Button size='lg' className='bg-[#2d78db] hover:bg-[#2463b5] text-paper'>
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};
