import Wrapper from '@/components/Wrapper'
import soe from '../../public/images/soe.jpeg'
// import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import {
  BookOpen,
  GraduationCap,
  Globe,
  CheckCircle,
  Leaf,
} from 'lucide-react'
import Link from 'next/link'

const schools = [
  {
    name: 'School of Engineering',
    Icon: soe,
    description:
      'Master the art of software development with courses in Frontend, Backend, Cloud, and Cybersecurity.',
    link: '/schools/engineering',
  },
  {
    name: 'School of Product',
    Icon: BookOpen,
    description:
      'Learn to design, market, and manage products that make a difference.',
    link: '/schools/product',
  },
  {
    name: 'School of Data',
    Icon: Globe,
    description:
      'Dive into the world of data with courses in Analysis, Science, and Engineering.',
    link: '/schools/data',
  },
  {
    name: 'School of Entrepreneurship',
    Icon: CheckCircle,
    description:
      'Gain foundational business skills and learn how to turn ideas into sustainable ventures.',
    link: '/schools/entrepreneurship',
  },
  {
    name: 'School of Skill Acquisition',
    Icon: Leaf,
    description:
      'Acquire practical skills like public speaking, video editing, and graphic design to thrive in the modern workplace.',
    link: '/schools/skill-acquisition',
  },
];

const milestones = [
  {
    title: "Complete 1st Project",
    description: "Finish your first course project to kickstart your learning journey.",
  },
  {
    title: "Become a Certified Graduate",
    description: "Complete all courses and earn your certification to show your expertise.",
  },
  {
    title: "Join the Workforce",
    description: "Leverage your skills to land a job or start your own business in your field of expertise.",
  }
];

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    testimonial: "SkilledIn's courses helped me transition from a beginner to a confident developer. Highly recommend!",
    picture: '/images/test.jpg'
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    testimonial: "The School of Product gave me the tools to manage products with efficiency and creativity.",
    picture: '/images/john.jpg'
  },
  {
    name: "Emily White",
    role: "Data Analyst",
    testimonial: "I gained in-depth knowledge and hands-on experience in data science, which landed me my first data job.",
    picture: '/images/john.jpg'
  }
];

export default function Home() {
  return (
    <>
      <Wrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Your place for top-tier{' '}
            <span className='text-blue-600'>
            skill-building programs
            </span>
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Welcome to SkilledIn. Every program on our platform is carefully curated 
          and verified by industry experts to ensure the highest standards of learning and career growth
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
              Get Started
            </Link>
            <Button variant='ghost'>
            View our schools &rarr;
            </Button>
          </div>
        </div>

        {/* <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Brand new'
        /> */}
      </Wrapper>

      <section className="border-t border-gray-200 bg-gray-50">
  <Wrapper className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
      Our Schools
    </h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {schools.map((school) => (
        <div
          key={school.name}
          className="flex flex-col justify-between text-center p-4 border rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
        >
          <div>
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
              <img src={school.Icon.src} alt={school.name} className="h-full w-full object-cover rounded-full" />
              </div>
            </div>
            <h3 className="text-base font-medium text-gray-900">
              {school.name}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {school.description}
            </p>
          </div>
          <div className="mt-6">
            <Link
              href={school.link}
              className="text-blue-600 font-medium hover:underline"
            >
              Explore Courses →
            </Link>
          </div>
        </div>
      ))}
    </div>
  </Wrapper>
</section>
<section className="py-20 bg-white">
        <Wrapper>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Learning Pathways
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <h3 className="text-xl font-medium text-gray-900">{milestone.title}</h3>
                <p className="mt-2 text-muted-foreground">{milestone.description}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
      <section className="py-20 bg-gray-50">
      <Wrapper>
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
    What Our Students Say
  </h2>
  <div className="space-y-8">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        {/* Picture */}
        <img
          src={testimonial.picture}
          alt={testimonial.name}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-500"
        />
        {/* Testimonial Content */}
        <div className="flex flex-col flex-grow text-center md:text-left">
          {/* Chat Bubble */}
          <div className="bg-gray-100 text-blue-900 rounded-lg p-4 relative w-full">
            <p className="text-sm">{testimonial.testimonial}</p>
          </div>
          {/* Name and Role */}
          <p className="mt-4 text-sm font-medium text-gray-900">
            - {testimonial.name}, <span className="text-gray-600">{testimonial.role}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
</Wrapper>

</section>



    </>
  )
}