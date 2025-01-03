/* eslint-disable @typescript-eslint/no-unused-vars */
import Wrapper from '@/components/Wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { schoolsData } from '@/data/schools';

// type SchoolData = {
//   name: string;
//   description: string;
//   programs: string[];
//   programDescriptions: string;
//   successStories: {
//     name: string;
//     testimonial: string;
//     picture: string;
//   }[];
// };

// type PageProps = {
//   params: {
//     school: string;
//   };
//};

export default function SchoolDat({ params }: { params: { school: string } }) {
  const schoolData = schoolsData[params.school as keyof typeof schoolsData] || null;

  if (!schoolData) {
    notFound(); // Return 404 page if the school doesn't exist
  }

  return (
    <>
      <section className="bg-fuchsia-50 py-20 text-center">
        <Wrapper>
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to the {schoolData.name}!
          </h1>
          {/* <p className="mt-4 text-lg text-muted-foreground">{schoolData.description}</p> */}
        </Wrapper>
      </section>

  <section className="bg-gray-50 py-20">
   <Wrapper>
    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10">
      {/* Video Section */}
      <div className="w-full lg:w-1/2">
          <iframe
          className="rounded-lg shadow-lg w-full h-64 md:h-80"
            src="https://www.youtube.com/embed/exampleVideoID" // Replace with your video link
            //title="{}"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>

      {/* Write-Up Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{schoolData.name}</h2>
        <p className="text-lg text-muted-foreground">
          {schoolData.description}
        </p>
      </div>
    </div>
   </Wrapper>
 </section>

      {/* Overview Section */}
      {/* <section className="bg-gray-50 py-20">
        <Wrapper>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            The {schoolData.name}
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            {schoolData.description} Dive deeper into specialized topics with
            our carefully curated curriculum and expert instructors.
          </p>
        </Wrapper>
      </section> */}

      {/* Programs Section */}
      {/* <section className="bg-white py-20">
        <Wrapper>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolData.programs.map((program, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900">{program}</h3>
              </div>
            ))}
          </div>
        </Wrapper>
      </section> */}

<section className="bg-white py-20 border-t border-gray-200">
  <Wrapper>
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Programs</h2>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {schoolData.programs.map((program, index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-center y-4 border rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
        >
          <div>
          <div className="flex justify-center mb-4">
            <img
              src={`/images/${program.toLowerCase().replace(/\s+/g, '-')}.jpg`} // Ensure these images exist
              alt={program}
              className="h-32 w-32 object-cover rounded-full"
            />
          </div>
          {/* <div className="text-center md:text-center"> */}
            <h3 className="text-2xl font-semibold text-gray-900">{program}</h3>
            <p className="mt-2 text-gray-700">
              {/* Add a brief description for each program here */}
              {schoolData.programDescriptions[program as keyof typeof schoolData.programDescriptions]}
            </p>
          </div> 
            <div className="mt-4">
              <Link
                href={`/programs/${program.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-fuchsia-900 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          {/* </div> */}
        </div>
      ))}
    </div>
  </Wrapper>
</section>



      {/* Success Stories Section */}
      <section className="bg-neutral-950 py-20">
        <Wrapper>
          <h2 className="text-3xl font-bold text-white text-center mb-10">Read Our Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schoolData.successStories.map((story, index) => (
              <div key={index} className="bg-fuchsia-50 p-6 rounded-lg shadow-md text-center">
                <img
                  src={story.picture}
                  alt={story.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-sm">{story.testimonial}</p>
                <p className="mt-4 text-sm font-medium text-fuchsia-900">- {story.name}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 text-center">
        <Wrapper>
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join the {schoolData.name}?</h2>
          <Link href="/sign-up" className="px-6 py-3 bg-fuchsia-600 text-white rounded-full">
            Enroll Now
          </Link>
        </Wrapper>
      </section>
    </>
  );
}


