import PhotoCard from "@/components/PhotoCard";
import PageLayout from "@/components/PageLayout";
import Nikhil from "../assets/nikhil.jpg";
import yuvraj from "../assets/yuvraj.jpg";
import arifali from "../assets/arifali.jpg";
import vinay from "../assets/vinay.png";
import MudassirKhanPic from "../assets/mudassir.png";
const page = () => {
  return (
    <PageLayout>
      <div className="w-full min-h-screen mx-auto">
        <section className="flex flex-col p-12 space-y-4 md:space-y-0 md:space-x-8 md:flex-row ">
          <h2 className="md:w-1/2 text-4xl font-semibold text-transparent bg-gradient-to-r from-[#EEB33B] to-[#E8EABC] bg-clip-text ">
            Bug Bounty Brigade - Global Hacking Community
          </h2>
          <p className="text-lg md:w-1/2">
            At Bug Bounty Brigade, we are dedicated to empowering cybersecurity
            guardians worldwide. Our mission is to cultivate a thriving
            community
            <span className="text-[#E8EABB]"> by bug hunters, for bug hunters</span>
            . Join our vibrant community of ethical hackers and enthusiasts as
            we make a positive impact on cybersecurity.
          </p>
        </section>
        <section>
          <h3 className="text-3xl text-center font-semibold text-transparent bg-gradient-to-r from-[#EEB33B] to-[#E8EABC] bg-clip-text">
            Meet Our Team
          </h3>
          <div className="grid items-center justify-center grid-cols-1 gap-6 mx-auto mt-4 md:mt-8 md:grid-cols-2 lg:grid-cols-4 last:mb-2 last:md:mb-0">
            <PhotoCard
              name="SHAIK ARIF ALI"
              companyname="FOUNDER"
              linkedinurl="http://www.linkedin.com/in/shaikarifali"
              twitterurl="https://twitter.com/ShaikArifAli1"
              imageurl={arifali}
            />
          
            <PhotoCard
              name="Neerati Nikhil Kumar"
              companyname="CO-FOUNDER"
              linkedinurl="https://www.linkedin.com/in/neerati-nikhil-kumar-6998aa249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              twitterurl="https://x.com/Myth4ckz0x?t=BN6U2gk6qe3USKDmpgE8pA&s=08"
              imageurl={Nikhil}
            />
          
            <PhotoCard
              name="Yuvraj singh Thaku"
              companyname="CO-FOUNDER"
              linkedinurl="https://www.linkedin.com/in/yuvraj-singh-thakur-73487a1b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              twitterurl="https://twitter.com/itsyuvi8?t=iOrCLgoE5XZuMIwCIli4tQ&s=09"
              imageurl={yuvraj}
            />
            <PhotoCard
              name="Mudassir Khan"
              companyname="Developer"
              linkedinurl="https://www.linkedin.com/in/mudassirkhanmohammed/"
              twitterurl="https://twitter.com/Mudassir_222"
              imageurl={MudassirKhanPic}
            />
            <PhotoCard
              name="Vinay Boggavarpu"
              companyname="Developer"
              linkedinurl="https://www.linkedin.com/in/vinay-boggavarapu-522324230/"
              twitterurl="https://twitter.com/VinayBoggavarpu"
              imageurl={vinay}
            />
          
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default page;
