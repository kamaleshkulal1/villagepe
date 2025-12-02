import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { privacyPolicyData } from '../content/PrivacyPolycyEnglish'; // Import the file

// const scrollToSection = (id) => {
//   const section = document.getElementById(id);
//   if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//   }
// };

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("privacy-policy");
  const [language, setLanguage] = useState("english");
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(renderContent()); // Call renderContent on language change
  }, [language]);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const renderContent = () => {
    const data = language === "hindi" ? privacyPolicyData.hindi : privacyPolicyData.english;

    return (
      <div>
        <h1 className="text-3xl font-semibold mb-4">{data.lastUpdated}</h1> {/* Dynamic title */}
        <p>{data.introduction}</p> {/* Render the introduction */}

        {/* Render other sections */}
        <RenderSection sectionData={data.informationCollection} />
        <RenderSection sectionData={data.retentionOfPersonalData} />
        <RenderSection sectionData={data.purposeAndUseOfInformation} />
        <RenderSection sectionData={data.cookies} />
        <RenderSection sectionData={data.shippingAndDeliveryPolicy} />
        <RenderSection sectionData={data.security} />
        <RenderSection sectionData={data.thirdPartySharing} />
        <RenderSection sectionData={data.changesToPolicy} />
      </div>
    );
  };

  const RenderSection = ({ sectionData }) => {
    if (!sectionData) { // Handle cases where sectionData might be missing
      return null;
    }

    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{sectionData.title}</h2>
        {Array.isArray(sectionData.content) ? (  // Check sectionData.content
          <ul className="list-disc pl-6">
            {sectionData.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{sectionData.content}</p>
        )}
      </div>
    );
  };

  return (
    <div className="border-2 border-sky-400">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-[80px]">
        <section id="privacy-policy" className="container mx-auto px-4 py-8">
          <div className="mb-4">
            <button onClick={() => handleLanguageChange("english")} className="mr-4">English</button>
            <button onClick={() => handleLanguageChange("hindi")}>हिंदी</button>
          </div>

          {content}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
