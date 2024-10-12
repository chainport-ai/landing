import { ContactForm } from "@/app/waitlist/waitlist-form";
import { stringReplace } from "@/lib/utils";

export const runtime = "edge";

const headline = "Join the **waitlist**";
const subheadline =
  "Get early access to Chainport and build your next project faster.";

const WaitlistPage = () => {
  return (
    <div className="container max-w-6xl flex flex-col space-y-6 pt-40">
      <h1 className="font-display text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        {headline.split("\n").map((line, index) => (
          <span key={index}>
            {stringReplace(line, /\*\*(.*?)\*\*/g, (match, index) => (
              <span key={index} className="word-animation">
                {match}
              </span>
            ))}
            <br />
          </span>
        ))}
      </h1>
      <h2 className="text-md mx-auto mb-8 mt-6 max-w-4xl text-center md:text-lg lg:text-xl">
        {subheadline}
      </h2>
      <ContactForm />
    </div>
  );
};

export default WaitlistPage;
