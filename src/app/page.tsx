/* eslint-disable @typescript-eslint/no-unused-vars */

import Wrapper from '@/components/Wrapper'
import soe from '../../public/images/soe.jpeg'
// import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import {
  BookOpen,
 // GraduationCap,
  Globe,
  CheckCircle,
  Leaf,
  LucideUser,
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
  'Welcome',
  'Personalized series of courses',
  'Evaluation',
  'Milestone',
  'Certification'


]

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    testimonial: "SkilledIn's courses helped me transition from a beginner to a confident developer. Highly recommend!",
    picture: "/images/intro.jpeg"
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    testimonial: "The School of Product gave me the tools to manage products with efficiency and creativity.",
    picture: '/images/test.jpeg'
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-fuchsia-50">
        <Wrapper >
          <div className="py-20 mx-auto text-center flex flex-col sm:flex-row items-center max-w-7xl">
            {/* Image on the left side */}
            <div className="flex-shrink-0 w-full sm:w-1/2">
              <img
                src="/images/intro.jpeg" 
                alt="School of Engineering"
                className="w-full h-auto object-cover rounded-lg bg-transparent" 
              />
            </div>

            {/* Content on the right side */}
            <div className="sm:ml-8 mt-6 sm:mt-0 w-full sm:w-1/2">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your place for top-tier{' '}
                <span className="text-fuchsia-900">skill-building programs</span>.
              </h1>
              <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                Welcome to SkilledIn. Every program on our platform is carefully curated
                and verified by industry experts to ensure the highest standards of learning
                and career growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/sign-up"
                  className={buttonVariants()}>
                  CREATE ACCOUNT
                </Link>
                <Button asChild className={buttonVariants()}>
                <Link href="#schools">OUR SCHOOLS</Link>
                </Button>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>



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
                      <img src="/images/intro.jpeg" alt={school.name} className="h-full w-full object-cover rounded-full" />
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
                    className="text-fuchsia-900 font-medium hover:underline"
                  >
                    Explore Courses →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Video Section */}
            <div className="relative w-full">
              <iframe
                className="rounded-lg shadow-lg w-full h-64 md:h-80"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Skilledin Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Why Skilledin Section */}
            <div id = 'why'>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Skilledin?
              </h2>
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-fuchsia-900 rounded-full flex items-center justify-center">
                    <LucideUser />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Comprehensive Learning
                    </h3>
                    <p className="text-gray-700">
                      Access a wide range of courses and resources tailored to your career needs.
                    </p>
                  </div>
                </div>

               
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-fuchsia-900 rounded-full flex items-center justify-center">
                    <LucideUser />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-700">
                      Learn from industry professionals who bring real-world experience to every lesson.
                    </p>
                  </div>
                </div>

                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-fuchsia-900 rounded-full flex items-center justify-center">
                    <LucideUser />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Achieve Your Goals
                    </h3>
                    <p className="text-gray-700">
                      Gain the skills you need to excel in your chosen field and stand out from the crowd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-fuchsia-50">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center pb-10 pr-20">Learning Pathway</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-8">
           
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <img
                src="/images/intro.jpeg"
                alt="Learning Journey"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6 w-full max-w-md">
              {milestones.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-fuchsia-600 rounded-full text-black font-bold">
                    {index + 1}
                  </div>

                  <button
                    className="px-6 py-3 w-full bg-fuchsia-950 text-white rounded-full text-left hover:bg-fuchsia-900 transition-colors"
                  >
                    {step}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>



      </section>

      <section className="py-20 bg-neutral-950">
        <Wrapper>
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            TESTIMONIALS
          </h2>
          <div className="space-y-8 bg-f">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 bg-fuchsia-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >

                <img
                  src={testimonial.picture}
                  alt={testimonial.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-fuchsia-900"
                />

                <div className="flex flex-col flex-grow text-center md:text-left">

                  <div className=" text-black rounded-lg p-4 relative w-full">
                    <p className="text-sm">{testimonial.testimonial}</p>
                  </div>
                  <p className="mt-4 text-sm font-medium text-purple-600">
                    - {testimonial.name}, <span className="text-fuchsia-900">{testimonial.role}</span>
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