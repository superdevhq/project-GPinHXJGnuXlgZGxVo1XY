
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon, PlayIcon, VolumeIcon } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  // Add Google Fonts for the serif font used in headers
  useEffect(() => {
    // Add Playfair Display for the serif headers
    const playfairLink = document.createElement("link");
    playfairLink.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap";
    playfairLink.rel = "stylesheet";
    document.head.appendChild(playfairLink);

    // Add Poppins for the body text
    const poppinsLink = document.createElement("link");
    poppinsLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    poppinsLink.rel = "stylesheet";
    document.head.appendChild(poppinsLink);

    return () => {
      document.head.removeChild(playfairLink);
      document.head.removeChild(poppinsLink);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Red banner at top */}
      <div className="bg-red-600 text-white text-center py-1 px-4">
        <p className="text-sm font-medium">International Bestseller With Over 300,000+ Copies Sold!</p>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-gray-700 text-xl mb-2">Want To Build Your <span className="font-semibold">Very First Online Business</span>?</h2>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get This FREE Book
              </h1>
              <p className="text-lg md:text-xl mb-6">
                <span className="font-semibold">DotCom Secrets Is The #1 Playbook</span> On How To Go From Zero To Success With Your Online Business
              </p>

              {/* Video placeholder */}
              <div className="relative bg-gray-900 aspect-video rounded-lg mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <PlayIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <VolumeIcon className="h-5 w-5 text-white" />
                  <span className="text-white text-sm">SOUND ON</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="/placeholder.svg" 
                alt="DotCom Secrets Book Cover" 
                className="w-full max-w-[300px] mb-4"
              />
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-700">4.6 - 2,340 Amazon Ratings</span>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md">
                Get Your Free Copy Now
              </Button>
              <p className="text-xs text-gray-500 mt-2">You pay only $9.95 for shipping and handling in US ($19.95 intl)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
              <img 
                src="/placeholder.svg" 
                alt="Tony Robbins" 
                className="w-20 h-20 rounded-md object-cover"
              />
              <div>
                <p className="text-sm text-gray-700 mb-2">
                  "A Simple Process That Any Company Can Use To Geometrically Improve Their Traffic, Conversion, And Sales Online."
                </p>
                <p className="font-bold text-gray-800">Tony Robbins</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
              <img 
                src="/placeholder.svg" 
                alt="Dan S. Kennedy" 
                className="w-20 h-20 rounded-md object-cover"
              />
              <div>
                <p className="text-sm text-gray-700 mb-2">
                  "Go Into This Book In Search Of Deep Understanding And Profound Clarity About The Strategies And Tactics Of Direct Response Marketing To Be Applied In The Online Media Universe."
                </p>
                <p className="font-bold text-gray-800">Dan S. Kennedy</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline" className="flex items-center gap-2">
              <span>Learn More</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Headline Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl text-gray-700 mb-4">This One Book Has Helped</h2>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Thousands Of Entrepreneurs, Small<br />Business Owners, And Creatives
          </h2>
          <p className="text-xl mb-8">
            <span className="text-red-600 font-bold">Build Thriving Online Businesses</span> From Scratch!
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Success Story 1 - Eileen Wilder with the provided image */}
            <Card>
              <CardContent className="p-4">
                <img 
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/4d592909-3426-4cf6-b1e4-7ba22b20946d/GPinHXJGnuXlgZGxVo1XY/1741703139769-pasted-image-1741703132472.png" 
                  alt="Eileen Wilder" 
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <p className="text-sm text-gray-700 mb-3">
                  "I Didn't Know What A Funnel Was Before Reading DotCom Secrets, But This Book Changed Everything For Me! From Uber Driving To Winning Multiple Two Comma Club Awards!"
                </p>
                <p className="font-bold text-gray-800">Eileen Wilder</p>
              </CardContent>
            </Card>

            {/* Success Story 2 */}
            <Card>
              <CardContent className="p-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Eric Thayne" 
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <p className="text-sm text-gray-700 mb-3">
                  "DotCom Secrets Blew My Mind When I First Read It! I Remember Thinking In All My Years Of Business, Why Didn't I Learn These Principles For The First Time!"
                </p>
                <p className="font-bold text-gray-800">Eric Thayne</p>
              </CardContent>
            </Card>

            {/* Success Story 3 */}
            <Card>
              <CardContent className="p-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Anissa Holmes" 
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <p className="text-sm text-gray-700 mb-3">
                  "DotCom Secrets Is THE Go To Book For Both A Mindset Businesses. The Survey Funnel Alone Has Transformed Our Practice, Bringing In Hundreds Of New Qualified Leads A Month."
                </p>
                <p className="font-bold text-gray-800">Anissa Holmes</p>
              </CardContent>
            </Card>

            {/* Success Story 4 */}
            <Card>
              <CardContent className="p-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Annie Grace" 
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <p className="text-sm text-gray-700 mb-3">
                  "This Book Changed My Business And My Life. I've Read It Cover To Cover Multiple Times And It's The Single Best Marketing Book On The Planet!"
                </p>
                <p className="font-bold text-gray-800">Annie Grace</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Claim Your Copy Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-widest text-gray-700 mb-4">C L A I M  Y O U R</h2>
            <h3 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hardcover Copy Of 'DotCom Secrets'
            </h3>
            <p className="text-lg">
              Today And Receive The Following <span className="text-red-600 font-bold">Bonuses For Free!</span>
            </p>
          </div>

          {/* Pricing Box */}
          <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-8 relative">
            <div className="absolute -right-4 -top-4 bg-amber-100 border border-amber-300 rounded-full p-2 rotate-12">
              <span className="text-sm font-bold">SCIENCE FREE</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Everything Included:</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-red-600 mt-0.5" />
                <div className="flex justify-between w-full">
                  <span className="font-medium">DotCom Secrets Hardcover</span>
                  <span className="text-green-600 font-bold">$37 FREE</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-red-600 mt-0.5" />
                <div className="flex justify-between w-full">
                  <span className="font-medium">3 Core Sales Funnels EBook</span>
                  <span className="text-green-600 font-bold">$47 FREE</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-red-600 mt-0.5" />
                <div className="flex justify-between w-full">
                  <span className="font-medium">Follow-Up Funnels EBook</span>
                  <span className="text-green-600 font-bold">$47 FREE</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-red-600 mt-0.5" />
                <div className="flex justify-between w-full">
                  <span className="font-medium">108 Split-Test EBook</span>
                  <span className="text-green-600 font-bold">$47 FREE</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-red-600 mt-0.5" />
                <div className="flex justify-between w-full">
                  <span className="font-medium">Funnel Audibles Video</span>
                  <span className="text-green-600 font-bold">$97 FREE</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">Your Price Today: Free!</h3>
              <p className="text-gray-700 mb-4">List Price: <span className="line-through">$274.99</span></p>
              <p className="text-sm text-gray-700 mb-6">
                Just Pay The Small Shipping & Handling Fee And I'll Deliver A Hardcover Copy Of DotCom Secrets To Wherever You Live!
              </p>
              <p className="text-xs text-gray-600 mb-6">
                (Sure— You Could Order The Book From Amazon And Pay $36.99, Or You Can Order It Through This Page Right Now And Secure All Of The FREE Bonuses And Just Pay The Tiny Shipping & Handling Fee!)
              </p>
            </div>
            
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-md text-lg">
              Get Your Free Copy Now
            </Button>
            <p className="text-xs text-center text-gray-500 mt-2">You pay only $9.95 for shipping and handling in US ($19.95 intl)</p>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 
            className="text-3xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            DotCom Secrets
          </h2>
          <h3 
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Is The Step-By-Step Shortcut
          </h3>
          <p className="text-lg mb-8">
            To The <span className="text-red-600 font-bold">Business, Life,</span> And The <span className="text-red-600 font-bold">Income</span> You Want And Deserve!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">28 Secrets To Selling Anything Online</h4>
              <ul className="text-left space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sm">•</span>
                  <span className="text-sm">Works for any business, regardless of industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sm">•</span>
                  <span className="text-sm">Easy-to-follow instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sm">•</span>
                  <span className="text-sm">Step-by-step guides</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">393 Pages</h4>
              <ul className="text-left space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sm">•</span>
                  <span className="text-sm">Everything you need to build and scale your very first online business</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">1 Easy-To-Master Method</h4>
              <ul className="text-left space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sm">•</span>
                  <span className="text-sm">Read this book, implement these steps, and see your business grow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
