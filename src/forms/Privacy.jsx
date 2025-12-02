import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState('English');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='p-6 max-w-6xl mx-auto mt-12'>
        <Navbar/>
        
        <div className=' mt-1 lg:mt-24'>
          <p className='text-3xl font-bold mb-4'>
            {activeTab === 'English'
              ? 'Privacy & Policy'
              : 'गोपनीयता नीति'}
          </p>
        </div>
        <div className='flex justify-start space-x-4 mb-4 border-b-2 border-gray-300'>
          <button
            className={`px-4 py-2 border-b-4 ${
              activeTab === 'English'
                ? 'border-red-500 text-blue-500 font-semibold'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab('English')}
          >
            English
          </button>
          <button
            className={`px-4 py-2 border-b-4 ${
              activeTab === 'Hindi'
                ? 'border-red-500 text-blue-500 font-semibold'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab('Hindi')}
          >
            हिंदी
          </button>
        </div>
        {activeTab === 'English' && (
          <div className='p-2'>
            <h1 className='text-2xl font-bold mb-4'>
              Updated 27th March 2025
            </h1>
            <p className='mt-4  text-justify'>
              Buchi Pay Fintech is developed by Buchi Pay Private Limited,
              a company incorporated under the Companies Act, 1956 with its
              Yelgonda guda shabad Rangareddy Telangana - 509217 This
              Policy describes how Buchi Pay and its
              Affiliates/Entities/Subsidiaries including but not limited to
              Buchi Pay Private Limited, Buchi Pay Insurance Broking
              Services Private Limited, Buchi Pay Wealth Broking Private
              Limited, Buchi Pay Wealth Private Limited (collectively
              “Buchi Pay , we, our, us” as the context may require)
              collect, store, use and otherwise process your Personal
              Information through Buchi Pay website, Buchi Pay Application,
              m-site, chatbot, notifications or any other medium used by
              Buchi Pay to provide its services to you (hereinafter
              referred to as the “Platform”). By downloading and using
              Buchi Pay , visiting the Buchi Pay website, providing your
              information or availing our product/services, you expressly
              agree to be bound by this Privacy Policy (“Policy”) and the
              applicable service/product terms and conditions. We value the
              trust you place in us and respect your privacy, maintaining
              the highest standards for secure transactions and protection
              of your personal information.{' '}
            </p>
            <p className='mb-4  text-justify'>
              This Privacy Policy is published and shall be construed in
              accordance with the provisions of Indian laws and regulations
              including the Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011 under the Information Technology
              Act, 2000, the Aadhaar Act, 2016 and its Amendments,
              including the Aadhaar Regulations; that require publishing of
              the privacy policy for collection, use, storage, transfer,
              disclosure of Personal Information. Personal Information
              means and includes all information that can be linked to a
              specific individual and also includes Sensitive Personal
              Information (all Personal Information which requires
              heightened data protection measures due to its sensitive and
              personal nature), both, hereinafter referred to as “Personal
              Information”, excluding any information that is freely
              available or accessible in public domain. Please note, we do
              not offer any product/service under our Platform outside
              India. If you do not agree with this Privacy Policy, please
              do not use or access our Platform{' '}
            </p>
            <h1 className='font-bold'>Information Collection</h1>
            <p className='mb-4  text-justify'>
              We may collect your Personal Information when you use our
              services or Platform or otherwise interact with us during the
              course of our relationship. We collect Personal Information
              which is relevant and absolutely necessary for providing the
              services requested by you and to continually improve the
              Buchi Pay Platform.
            </p>

            <p className='  text-justify'>
              <strong>
                Personal and Sensitive Personal Information collected
                includes but is not limited to:
              </strong>
            </p>
            <ul className='list-disc pl-6  text-justify '>
              <li>
                Personal details (e.g., name, contact details including
                residential address, date of birth, user photo, documents
                such as identity card / passport details / Aadhaar details
                / PAN / Voter ID / driving license, and/or education
                details) provided by you to us to avail various
                products/services from us.
              </li>
              <li>
                PAN card number, KYC related information such as videos or
                other online/offline verification documents as mandated by
                relevant regulatory authorities, your business-related
                information.
              </li>
              <li>
                Aadhaar information including Aadhaar number or Virtual ID
                for the purposes of e-KYC authentication with the Unique
                Identification Authority of India (UIDAI). Note that
                submission of Aadhaar information is not mandatory for
                e-KYC authentication, you can also use other types of
                information, such as your PAN or GST number.
              </li>
              <li>
                Images of documents/photos required to avail any of our
                products/services.
              </li>
              <li>OTP sent to you by your bank or Buchi Pay.</li>
              <li>
                Balance, transaction history and value, bank account
                details, wallet balance, investment details and
                transactions, service or transaction-related communication,
                part of your card details for smooth transaction using
                Buchi Pay or any of the services.
              </li>
              <li>
                Your device details such as device identifier, internet
                bandwidth, mobile device model, browser plug-ins, and
                cookies or similar technologies that may identify your
                browser/Buchi Pay Application and plug-ins, and time spent,
                IP address, and location.
              </li>
            </ul>

            <p className='  mt-4 text-justify'>
              <strong>
                Information may be collected at various stages of your
                usage of the Buchi Pay Platform such as:
              </strong>
            </p>
            <ul className='list-disc pl-6  text-justify '>
              <li>
                Access to your mobile camera device for the functioning of
                many in-app functionalities for recording video including,
                but not limited to, video KYC process and scan & pay, etc.
              </li>
              <li>
                Third-party vendors will require images and documents to
                get their KYC completed.
              </li>
              <li>
                User Self Picture selfie image is required for the purpose
                of KYC and to display on the Dashboard. This picture/image
                can be shared with Government Authorities and KYC Service
                Providers just like NSDL, UTI, UIDAI. It is taken as per
                Indian government compliance for the photo of the user of
                the services taken on the app.
              </li>
              <li>Visiting Buchi Pay Platform.</li>
              <li>
                Registering on Buchi Pay Platform as a “user” or “merchant”
                or any other relationship that may be governed by terms and
                conditions listed on Buchi Pay Platform.
              </li>
              <li>
                Transacting or attempting to transact on Buchi Pay
                Platform.
              </li>
              <li>
                Accessing links, e-mails, chat conversations, feedbacks,
                notifications sent or owned by Buchi Pay Platform, and if
                you opt to participate in our occasional surveys.
              </li>
              <li>
                Otherwise dealing with any of the Buchi Pay
                Affiliates/Entities/Subsidiaries.
              </li>
              <li>
                While applying for career opportunities with Buchi Pay.
              </li>
            </ul>

            <p className='mt-4  text-justify'>
              <strong>
                We and our service providers or business partners may also
                collect your Personal Information from third parties or
                information made publicly available including but not
                limited to:
              </strong>
            </p>
            <ul className='list-disc pl-6  text-justify'>
              <li>
                Financial history and other information for the purpose of
                verifying and authenticating an investment transaction
                request you place with us to prevent suspicious
                transactions, or to comply with court judgments and
                bankruptcies, from credit reference and fraud prevention
                agencies.
              </li>
              <li>
                Vehicle-related information when you opt for vehicle
                insurance.
              </li>
              <li>
                Your resume, your past employment and educational
                qualification for background checks and verifications,
                through online or offline databases that are otherwise
                legitimately obtained in case you apply for employment
                opportunities with Buchi Pay.
              </li>
              <li>
                Your demographic and photo information including but not
                limited to Aadhaar number, address, gender, and date of
                birth as a response received from UIDAI upon successful
                Aadhaar e-KYC.
              </li>
            </ul>
            <h1 className='font-bold mt-4'>
              Retention of Your Personal Data
            </h1>
            <p className='  text-justify'>
              Buchi Pay will retain Your Personal Data only for as long as
              is necessary for the purposes set out in this Privacy Policy.
              We will retain and use Your Personal Data to the extent
              necessary to comply with our legal obligations (for example,
              if we are required to retain your data to comply with
              applicable laws), resolve disputes, and enforce our legal
              agreements and policies.
            </p>
            <ul className='list-disc pl-6  text-justify'>
              <li className='font-semibold'>
                Comply with Legal Obligations :
              </li>
              For example, if we are required to retain your data to comply
              with applicable laws, regulations, or legal processes.
              <li className='font-semibold'>Resolve Disputes:</li>
              Retaining certain data helps us address and resolve disputes
              or claims that may arise between you and the Company.
              <li className='font-semibold'>
                Enforce Legal Agreements and Policies
              </li>
              Data retention supports the enforcement of our agreements,
              terms of service, and other policies to ensure compliance and
              protection of our rights.
            </ul>
            <h1 className='font-bold mt-4'>
              Purpose and Use of Information
            </h1>

            <p className='  text-justify'>
              Buchi Pay may process your Personal Information for the
              following purposes:
            </p>
            <ul className='list-disc pl-6  text-justify'>
              <li>
                creation of your account and verification of your identity
                and access privileges
              </li>
              <li>
                provide you access to the products and services being
                offered by us, merchants, affiliates, subsidiaries,
                associates, or business partners
              </li>
              <li>
                to conduct the KYC compliance process as a mandatory
                prerequisite as per the requirements of various regulatory
                bodies, including UIDAI under the Aadhaar Act and its
                Regulations
              </li>
              <li>
                to validate, process and/or share your KYC information,
                nominee details with other intermediaries, Regulated
                Entities (REs) or AMCs or financial institutions or with
                any other service providers as may be required
              </li>
              <li>
                to process payments on your behalf and on your
                instructions; communicate with you for your queries,
                transactions, and/or any other regulatory requirement, etc.
              </li>
              <li>
                to authenticate a transaction request; validate a standing
                instruction for a Systematic Investment Plan or confirm a
                payment made via the services
              </li>

              <li>
                enhancing your user experience in various
                processes/submission of applications/availment of
                product/service offerings by analysing user behaviour on an
                aggregated basis
              </li>

              <li>
                to monitor and review products/services from time to time;
                customize the services to make your experience safer and
                easier, and conducting audits
              </li>

              <li>
                to allow third parties to contact you for products and
                services availed/requested by you on Buchi Pay Platform or
                third-party links
              </li>

              <li>
                to carry credit checks, screenings or due diligence checks
                as lawfully required by us; detect and protect us against
                error, fraud, money laundering and other criminal activity;
                enforce our terms and conditions
              </li>

              <li>
                to inform you about online and offline offers, products,
                services, and updates; customizing and improving your
                experience by marketing, presenting advertising, and
                offering tailored products and offers
              </li>

              <li>
                to resolve disputes; troubleshoot problems; technical
                support and fixing bugs; help promote a safe service
              </li>

              <li>
                to identify security breaches and attacks; investigating,
                preventing, and taking action on illegal or suspected fraud
                or money laundering activities and conducting forensic
                audits as part of internal or external audit or
                investigation by Buchi Pay or government agencies located
                within India or outside the Indian jurisdiction
              </li>

              <li>to meet legal obligations</li>
            </ul>
            <p className='mb-4  text-justify'>
              While we may also process your Personal Information for other
              legitimate business cases, we ensure to take appropriate
              steps to minimize the processing to the extent possible,
              making it less intrusive to your privacy.
            </p>
            <h1 className='font-bold'>Cookies or Similar Technologies</h1>
            <p className='mb-4  text-justify'>
              We use data collection devices such as "cookies" or similar
              technologies on certain pages of the Platform to help analyse
              our web page flow, measure promotional effectiveness, and
              promote trust and safety. "Cookies" are small files placed on
              your device hard-drive/storage that assist us in providing
              our services. Cookies do not contain any of your Personal
              Information. We offer certain features that are only
              available through the use of a "cookie" or similar
              technologies. We also use cookies to allow you to enter your
              password less frequently during a session. Cookies or similar
              technologies can also help us provide information that is
              targeted to your interests. Most cookies are "session
              cookies," meaning that they are automatically deleted from
              your device hard-drive/storage at the end of a session. You
              are always free to decline/delete our cookies or similar
              technologies if your browser/device permits, although in that
              case you may not be able to use certain features on the
              Platform and you may be required to re-enter your password
              more frequently during a session. Additionally, you may
              encounter "cookies" or other similar technologies on certain
              pages of the Platform that are placed by third parties. We do
              not control the use of cookies by third parties.
            </p>

            <h2 className='font-bold'>Shipping & Delivery Policy</h2>
            <p className='mb-4  text-justify'>
              BUCHIPAY FINTECH PVT LTD ("we", "our", "us") is committed to
              delivering your order with the best service possible. We aim
              to provide efficient and timely delivery to our customers
              while ensuring the safety and quality of our products.
            </p>
            <p className='  text-justify'>
              <strong>Shipping Locations:</strong>
            </p>
            <p className='mb-4  text-justify'>
              We currently offer shipping services within [Country/Region
              Name]. We do not ship to P.O. Boxes or international
              locations unless specifically mentioned.
            </p>
            <p className='  text-justify'>
              <strong>Shipping Charges:</strong>
            </p>
            <p className='mb-4  text-justify'>
              Shipping charges are calculated based on the weight and
              dimensions of the items, as well as the delivery location.
              The exact shipping charges will be displayed at checkout
              before you complete your order.
            </p>
            <p className='  text-justify'>
              <strong>Delivery Timeframe:</strong>
            </p>
            <p className='mb-4  text-justify'>
              Orders are typically processed within [X] business days. Once
              your order is shipped, you will receive an email with the
              tracking information.
            </p>
            <p className='  text-justify'>
              <strong>Tracking Your Order:</strong>
            </p>
            <p className='mb-4  text-justify'>
              After your order is shipped, you will receive a tracking
              number via email. You can use this tracking number to check
              the status of your delivery on our logistics partner's
              website.
            </p>
            <p className='  text-justify'>
              <strong>Delays and Issues:</strong>
            </p>
            <p className='mb-4  text-justify'>
              In the event of a delay, we will notify you via email or
              phone. BUCHIPAY FINTECH PVT LTD is not responsible for any
              delays caused by unforeseen circumstances or issues beyond
              our control, such as weather conditions, strikes, or courier
              service disruptions.
            </p>

            <p className='  text-justify'>
              <strong>International Shipping:</strong>
            </p>
            <p className='mb-4  text-justify'>
              If applicable, we offer international shipping to select
              locations. Please note that additional customs duties and
              taxes may apply and are the responsibility of the customer.
            </p>

            <p className='  text-justify'>
              <strong>Lost or Damaged Packages:</strong>
            </p>
            <p className='mb-4  text-justify'>
              If your package is lost or arrives damaged, please contact
              our customer service team within [X] days of the delivery
              date. We will work with our courier partners to resolve the
              issue as quickly as possible.
            </p>

            <p className='  text-justify'>
              <strong>Changes to Shipping Policy:</strong>
            </p>
            <p className='mb-4  text-justify'>
              BUCHIPAY FINTECH PVT LTD reserves the right to update or
              modify this Shipping & Delivery Policy at any time. Changes
              will be effective immediately upon posting to our website.
            </p>

            <h2 className='font-bold'>
              Information Sharing and Disclosures
            </h2>
            <p className='  text-justify'>
              Your Personal Information is shared as allowed under
              applicable laws, after following due diligence and in line
              with the purposes set out in this Policy.
            </p>
            <p className='mb-2  text-justify'>
              We may share your Personal Information in the course of your
              transaction with different categories of recipients such as
              business partners, service providers, merchants, affiliates,
              associates, subsidiaries, legally recognized authorities,
              regulatory bodies, governmental authorities, financial
              institutions, internal teams such as marketing, security,
              investigation team, etc.
            </p>
            <p className='  text-justify'>
              Personal Information will be shared, as applicable, on a
              need-to-know basis, for the following purposes:
            </p>
            <ul className='list-disc pl-6  text-justify'>
              <li>
                For enabling the provision of the products/services availed
                by you and facilitating the services between you and the
                service provider, as requested.
              </li>
              <li>
                For the Aadhaar authentication process by submitting
                Aadhaar information to Central Identities Data Repository
                (CIDR) and National Securities Depository Limited (NSDL).
              </li>
              <li>
                For complying with applicable laws as well as meeting the
                Know Your Customer (KYC) requirements as mandated by
                various regulatory bodies, whose regulated service/product
                you opt through our services/Platforms.
              </li>
              <li>
                For completing a payment transaction initiated by you on a
                merchant site, where based on your instructions, the
                merchant requests to fetch your Personal Information from
                us.
              </li>
              <li>
                For the purpose of processing your financial product
                subscription requests placed with us and ensuring that
                these requests reach the relevant financial institution
                whose service/product you have opted for.
              </li>
              <li>
                If it is required by financial institutions to verify,
                mitigate, or prevent fraud or to manage risk or recover
                funds in accordance with applicable laws/regulations.
              </li>
              <li>
                For services related to communication, marketing, data and
                information storage, transmission, security, analytics,
                fraud detection, risk assessment, and research.
              </li>
              <li>
                To enforce our Terms or Privacy Policy; respond to claims
                that an advertisement, posting, or other content violates
                the rights of a third party; or protect the rights,
                property, or personal safety of our users or the general
                public.
              </li>
              <li>
                If required to do so by law or in good faith we believe
                that such disclosure is reasonably necessary to respond to
                subpoenas, court orders, or other legal process.
              </li>
              <li>
                If requested by government authorities for government
                initiatives and benefits.
              </li>
              <li>For grievance redressal and resolution of disputes.</li>
              <li>
                With the internal investigation department within Buchi Pay
                or agencies appointed by Buchi Pay for investigation
                purposes located within or outside the Indian jurisdiction.
              </li>
              <li>
                Should we (or our assets) plan to merge with, or be
                acquired by any business entity, or re-organization,
                amalgamation, restructuring of our business then with such
                other business entity.
              </li>
            </ul>
            <p className='mb-4  text-justify'>
              While the information is shared with third parties as per the
              purposes set out in this Policy, processing of your Personal
              Information is governed by their policies. Buchi Pay ensures
              stricter or no less stringent privacy protection obligations
              are cast on these third-parties, wherever applicable and to
              the extent possible. However, Buchi Pay may share Personal
              Information with third-parties such as legally recognized
              authorities, regulatory bodies, governmental authorities, and
              financial institutions as per the purposes set out in this
              Policy or as per applicable laws. We do not accept any
              responsibility or liability for the usage of your Personal
              Information by these third parties or their policies.
            </p>

            <h2 className='font-bold'>Storage and Retention</h2>
            <p className='  text-justify'>
              To the extent applicable, we store Personal Information
              within India and retain it in accordance with applicable laws
              and for a period no longer than it is required for the
              purpose for which it was collected. However, we may retain
              Personal Information related to you if we believe it may be
              necessary to prevent fraud or future abuse or if required by
              law such as in the event of the pendency of any
              legal/regulatory proceeding or receipt of any legal and/or
              regulatory direction to that effect or for other legitimate
              purposes.
            </p>
            <p className='mb-4  text-justify'>
              Once the Personal Information has reached its retention
              period, it shall be deleted in compliance with applicable
              laws.
            </p>

            <h2 className='font-bold'>Reasonable Security Practices</h2>
            <p className='  text-justify'>
              Buchi Pay has deployed technical and physical security
              measures to safeguard user’s Personal Information and
              Sensitive Personal Information. Specifically, in order to
              safeguard your Aadhaar information, we have implemented
              applicable security controls as given under and required by
              the Aadhaar Regulations. We understand that as effective as
              our security measures are, no security system is
              impenetrable. Hence, as part of our reasonable security
              practices, we undergo strict internal and external reviews to
              ensure appropriate information security encryption or
              controls are placed for both data in motion and data at rest
              within our network and servers respectively. The database is
              stored on servers secured behind a firewall; access to the
              servers is password-protected and is strictly limited.
            </p>
            <p className=''>
              Further, you are responsible for maintaining the
              confidentiality and security of your login id and password.
              Please do not share your Buchi Pay login, password, and OTP
              details with anybody. It shall be your responsibility to
              intimate us in case of any actual or suspected compromise to
              your Personal Information.
            </p>
            <p className='mb-4  text-justify'>
              We have provided multiple levels of security to safeguard the
              Buchi Pay Application by login/logout option and Buchi Pay
              Application lock feature (“Enable Screen Lock”) that can be
              enabled by you. We have preventive controls implemented to
              ensure you use Buchi Pay Application on your device and the
              same login credentials cannot be used on different device
              without any additional authentication/OTP.
            </p>

            <h2 className='font-bold'>
              Third-Party Products, Services, or Websites
            </h2>
            <p className='  text-justify'>
              When you are availing products and services of service
              providers on Buchi Pay Platform, Personal Information may be
              collected by respective service providers and such Personal
              Information shall be governed by their privacy policy. You
              may refer to their privacy policy and terms of service to
              understand how your Personal Information will be handled by
              such service providers.
            </p>
            <p className='mb-4  text-justify'>
              Our services may include links to other websites or
              applications when you visit our Platform. Such websites or
              applications are governed by their respective privacy
              policies, which are beyond our control. Once you leave our
              servers (you can tell where you are by checking the URL in
              the location bar on your browser or on the m-site you are
              redirected to), use of any Personal Information that you
              provide on these websites or applications is governed by the
              privacy policy of the operator of the application/website,
              you are visiting. That policy may differ from ours and you
              are requested to review those policies or seek access to the
              policies from the domain owner before proceeding to use those
              applications or websites. We do not accept any responsibility
              or liability for the usage of your Personal Information by
              these third parties or their policies.
            </p>

            <h2 className='font-bold'>Your Consent</h2>
            <p className='mb-4  text-justify'>
              We process your Personal Information with consent. By using
              the Buchi Pay Platform or services and/or by providing your
              Personal Information, you consent to the processing of your
              Personal Information by Buchi Pay in accordance with this
              Privacy Policy. If you disclose to us any Personal
              Information relating to other people, you represent that you
              have the authority to do so and permit us to use the
              information in accordance with this Privacy Policy.
            </p>

            <h2 className='font-bold'>Choice/Opt-out</h2>
            <p className='mb-4  text-justify'>
              We provide all users with the opportunity to opt-out of
              receiving any of our services or non-essential (promotional,
              marketing-related) communications from us, after setting up
              an account. If you want to remove your contact information
              from all our lists and newsletters or discontinue any of our
              services, please click on the unsubscribe button on the
              emailers.
            </p>

            <h2 className='font-bold'>
              Personal Information Access/Rectification and Consent
            </h2>
            <p className='  text-justify'>
              You can access and review your Personal Information shared by
              you by placing a request with us. In addition, you may at any
              time revoke consent given to us to store your e-KYC
              information, collected as part of the Aadhaar-based e-KYC
              process. Upon such revocation, you may lose access to
              services that were availed on the basis of the consent
              provided. In some cases, we may continue to retain your
              information as per the ‘Storage and Retention’ section of
              this Policy. To raise any of the above requests, you may
              write to us using the contact information provided under the
              ‘Contact Us’ section of this Policy.
            </p>
            <p className=' text-justify'>
              In case you wish to delete your account or Personal
              Information, please use the ‘Help’ section of the Buchi Pay
              Platform. However, retention of your Personal Information
              will be subject to applicable laws.
            </p>
            <p className=' text-justify'>
              For the above requests, Buchi Pay may need to request
              specific information from you to confirm your identity and
              ensure authentication. This is a security measure to ensure
              that Personal Information is not disclosed to any person who
              does not have a right to receive it or is not incorrectly
              modified or deleted.
            </p>
            <p className='mb-4  text-justify'>
              In cases where you need any further information specific to
              the product/ services that you are availing, we request you
              to read through the Terms and Conditions specific to the
              product/service which is easily accessible through the Buchi
              Pay Platform. For seeking any further information on the
              same, you can write to us at the details mentioned in the
              ‘Contact Us’ section of this Policy.
            </p>

            <h2 className='font-bold'>Children Information</h2>
            <p className='mb-4  text-justify'>
              We do not knowingly solicit or collect Personal Information
              from children under the age of 18 years. If you are under the
              age of 18 years, you are requested not to access the Buchi
              Pay services or provide any of your Personal Information. In
              the case of an Indian jurisdiction, the age of majority will
              be the age of 18 years; however, in jurisdictions other than
              India, if the age of majority as per applicable laws is above
              18 years, such age will be applicable for this purpose. If we
              learn that we have collected or received Personal Information
              from a child, we will delete that information unless we are
              required to retain such information under applicable law.
            </p>

            <h2 className='font-bold'>Changes to This Policy</h2>
            <p className='mb-4  text-justify'>
              We reserve the right to update, change, or modify this Policy
              at any time. The Policy shall come into effect from the date
              of such update, change, or modification.
            </p>

            <h2 className='font-bold'>Contact Us</h2>
            <p className='mb-4  text-justify'>
              If you have any queries relating to the processing/ usage of
              information provided by you or Buchi Pay Privacy Policy, you
              may email us at{' '}
              <a href='mailto:info@buchipay.com'>info@buchipay.com</a>.
            </p>
          </div>
        )}
        {activeTab === 'Hindi' && (
          <div>
            <h1 className='text-2xl font-bold mb-4'>
              6 अप्रैल 2023 को अपडेट किया गया
            </h1>
            <p className='mt-4  text-justify'>
              Buchi Pay ऐप्लिकेशन को Buchi Pay प्राइवेट लिमिटेड ने तैयार
              किया है। इस कंपनी का गठन कंपनी अधिनियम, 1956 के तहत किया गया
              है। इसके रजिस्टर्ड ऑफ़िस का पता है - येलगोंडा गुडा शबद
              रंगारेड्डी तेलंगाना - 509217 इस पॉलिसी में यह बताया गया है कि
              Buchi Pay और इससे जुड़ी हुई या इसके तहत काम करने वाली
              कंपनियां/ इसकी इकाइयां/इसके नियंत्रण वाली कंपनियां/इसकी
              सहयोगी कंपनियां, अपनी सेवाएं आपको उपलब्ध कराने के लिए आपकी
              निजी जानकारी, Buchi Pay की वेबसाइट, Buchi Pay ऐप्लिकेशन,
              मोबाइल साइट, चैटबॉट, सूचना या Buchi Pay के ज़रिए इस्तेमाल किए
              जाने वाले किसी अन्य माध्यम (यहां इन सभी को “प्लैटफ़ॉर्म” लिखा
              गया है) की मदद से कैसे इकट्ठा करती हैं, उसे कैसे सेव,
              इस्तेमाल या प्रोसेस करती हैं। Buchi Pay और इससे जुड़ी हुई या
              इसके तहत काम करने वाली कंपनियों/ इसकी इकाइयों/इसके नियंत्रण
              वाली कंपनियों/इसकी सहयोगी कंपनियों में Buchi Pay प्राइवेट
              लिमिटेड, Buchi Pay इंश्योरेंस ब्रोकिंग सर्विसेज प्राइवेट
              लिमिटेड, Buchi Pay वेल्थ ब्रोकिंग प्राइवेट लिमिटेड, Buchi Pay
              वेल्थ प्राइवेट लिमिटेड (इन सबको एक साथ, संदर्भ के हिसाब से
              “Buchi Pay, हम, हमारा/हमारी, हमें” लिखा गया है) के अलावा, और
              भी कंपनियां शामिल हो सकती हैं। अगर आप Buchi Pay डाउनलोड करते
              हैं और इसका इस्तेमाल करते हैं, Buchi Pay की वेबसाइट पर जाते
              हैं, अपनी जानकारी उपलब्ध कराते हैं या हमारे प्रॉडक्ट/सेवाओं
              का लाभ लेते हैं, तो इसका मतलब है, आप यह स्वीकार करते हैं कि
              आप इस प्राइवेसी पॉलिसी (“पॉलिसी”) और सेवा/प्रॉडक्ट से जुड़े
              लागू होने वाले नियम और शर्तों का पालन करेंगे। आपने हम पर जो
              भरोसा किया है उसकी हम कद्र करते हैं और आपकी निजता का सम्मान
              करते हैं। इसलिए, हम सुरक्षित लेन-देन और आपकी निजी सूचना की
              सुरक्षा का सबसे ऊंचा मानक बनाए रखते हैं।
            </p>
            <p className='mb-4  text-justify'>
              इस प्राइवेसी पॉलिसी को सूचना प्रौद्योगिकी अधिनियम, 2000 के
              तहत आधार अधिनियम, 2016 और आधार विनियमों सहित इसके संशोधन;
              सूचना प्रौद्योगिकी (सुरक्षा से जुड़े उचित तरीके और कार्रवाई
              और संवेदनशील निजी डेटा या सूचना) नियम, 2011 सहित भारतीय
              कानूनों और विनियमों के प्रावधानों के हिसाब से प्रकाशित किया
              जाएगा और उसी के हिसाब से इसका मतलब निकाला जाएगा। निजी जानकारी
              (में ऐसी सभी जानकारी शामिल हैं जो किसी खास व्यक्ति से जुड़ी
              हो सकती हैं और उनको इकट्ठा, इस्तेमाल, सेव, ट्रांसफ़र या
              ज़ाहिर करने के लिए प्राइवेसी पॉलिसी को प्रकाशित करना ज़रूरी
              है। इसमें, संवेदनशील निजी जानकारी (ऐसी सभी निजी जानकारी
              जिन्हें संवेदनशील और निजी प्रकृति की होने की वजह से, उनके लिए
              डेटा की हाई लेवल सुरक्षा के उपाय करना ज़रूरी है ) (दोनों तरह
              की जानकारी को, अब से “निजी जानकारी” लिखा जाएगा) भी शामिल है।
              इसमें, ऐसी कोई भी जानकारी शामिल नहीं है जो बिना किसी रोक-टोक
              के उपलब्ध है या जिसे सार्वजनिक डोमेन में एक्सेस किया जा सकता
              है। कृपया ध्यान दें, हम अपने प्लेटफ़ार्म के तहत भारत से बाहर
              कोई प्रॉडक्ट/सेवा ऑफ़र नहीं करते हैं। अगर आप इस प्राइवेसी
              पॉलिसी से सहमत नहीं हैं, तो कृपया हमारे प्लेटफ़ार्म का न तो
              इस्तेमाल करें और न ही उसे एक्सेस करें।
            </p>

            <h1 className='text-lg font-bold'>जानकारी इकट्ठा करना</h1>
            <p className='  text-justify'>
              हम उस समय आपकी निजी जानकारी इकट्ठा कर सकते हैं, जब आप हमारी
              सेवाओं या प्लेटफ़ार्म का इस्तेमाल करेंगे या जब हमारे बीच
              बातचीत होगी। हम उसी निजी जानकारी को इकट्ठा करते हैं जो काम की
              होती है और आपने जिन सेवाओं का अनुरोध किया है उन्हें उपलब्ध
              कराने के लिए बहुत ज़रूरी होती है। साथ ही, हम Buchi Pay
              प्लेटफ़ार्म में सुधार करते रहने के लिए भी इसे इकट्ठा करते
              हैं।
            </p>
            <p className='mb-1  text-justify'>
              इकट्ठा की जाने वाली निजी और संवेदनशील निजी जानकारी में नीचे
              दी गई चीज़ों के अलावा, और भी चीज़ें शामिल हो सकती हैं:
            </p>
            <ul className='list-disc pl-6  text-justify'>
              <li>
                नाम, उम्र, लिंग, फ़ोटो, पता, फ़ोन नंबर, ईमेल आईडी, आपके
                संपर्क और नॉमिनी की जानकारी
              </li>

              <li>
                PAN कार्ड नंबर, आपके कारोबार से जुड़ी जानकारी, KYC से जुड़ी
                जानकारी, जैसे कि वीडियो या ऑनलाइन/ऑफ़लाइन पुष्टि करने के वे
                दस्तावेज़ जिसे नियामक संस्थाओं के ज़रिए ज़रूरी बनाया गया है
              </li>

              <li>
                भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI) के साथ ई-KYC
                प्रमाणीकरण के प्रयोजनों के लिए आधार नंबर या वर्चुअल आईडी
                सहित आधार जानकारी। ध्यान दें कि ई-KYC प्रमाणीकरण के लिए
                आधार जानकारी जमा करना अनिवार्य नहीं है, आप अन्य प्रकार की
                जानकारी का भी उपयोग कर सकते हैं, जैसे कि आपका पैन या GST
                नंबर।
              </li>

              <li>
                वह OTP जो आपके बैंक या Buchi Pay की ओर से भेजा गया हो
              </li>

              <li>
                बैलेंस, लेन-देन की जानकारी और वैल्यू, बैंक खाते की जानकारी,
                वॉलेट बैलेंस, निवेश की जानकारी और लेन-देन, सेवा या लेन-देन
                से जुड़ी बातचीत, Buchi Pay या इसकी किसी सेवा का इस्तेमाल
                करके ठीक से लेन-देन के लिए आपके कार्ड की कुछ जानकारी
              </li>

              <li>
                आपके डिवाइस की जानकारी, जैसे कि डिवाइस की पहचान वाला कोड,
                इंटरनेट बैंडविथ, मोबाइल डिवाइस का मॉडल, ब्राउज़र प्लग-इन,
                और कुकी या इसी तरह की तकनीक जिसकी मदद से आपके
                ब्राउज़र/Buchi Pay ऐप्लिकेशन और प्लग-इन की पहचान की जा सके,
                और बिताए गए समय, IP पता और जगह की जानकारी
              </li>
            </ul>
            <p className='mt-2  text-justify'>
              आपके ज़रिए Buchi Pay प्लेटफ़ार्म का इस्तेमाल करने के अलग-अलग
              चरणों के दौरान सूचना इकट्ठा की जा सकती है, जैसे कि:
            </p>
            <ul className='list-disc pl-6  text-justify'>
              <li>जब आप Buchi Pay प्लेटफ़ार्म पर जाएंगे</li>

              <li>
                जब आप Buchi Pay प्लेटफ़ार्म पर “यूज़र” या “मर्चेंट” या किसी
                ऐसे कारोबारी रिश्ते के लिए रजिस्टर करेंगे जिस पर Buchi Pay
                प्लेटफ़ार्म पर उपलब्ध सूची में दिए गए नियम और शर्तें लागू
                हों
              </li>

              <li>
                जब आप Buchi Pay प्लेटफ़ार्म पर कोई लेन-देन करेंगे या
                लेन-देन की कोशिश करेंगे
              </li>

              <li>
                जब आप Buchi Pay प्लेटफ़ार्म की ओर से भेजे गए या इसके
                मालिकाना हक वाले लिंक, ईमेल, चैट की बातचीत, फ़ीडबैक, सूचना
                को एक्सेस करेंगे या अगर आप समय-समय पर होने वाले हमारे सर्वे
                में भाग लेने का विकल्प चुनेंगे
              </li>

              <li>
                जब आप Buchi Pay से जुड़ी हुई या इसके तहत काम करने वाली किसी
                कंपनी/ इसकी किसी इकाई/इसके नियंत्रण वाली किसी कंपनी/इसकी
                सहयोगी किसी कंपनी से कोई डील करेंगे
              </li>

              <li>
                जब आप Buchi Pay के पास उपलब्ध करियर के लिए आवेदन करेंगे
              </li>
            </ul>
            <p className='mt-2  text-justify'>
              हम और हमारे सेवा प्रदाता या बिजनेस पार्टनर आपकी व्यक्तिगत
              जानकारी थर्ड पार्टी से या सार्वजनिक रूप से उपलब्ध कराई गई
              जानकारी सहित एकत्र कर सकते हैं, लेकिन इन तक सीमित नहीं हैं:
            </p>
            <ul className='list-disc pl-6  text-justify'>
              <li>
                वित्तीय इतिहास और अन्य जानकारी एक निवेश लेनदेन अनुरोध को
                सत्यापित करने और प्रमाणित करने के उद्देश्य से जो आपने हमारे
                साथ संदिग्ध लेनदेन को रोकने के लिए, या क्रेडिट संदर्भ और
                धोखाधड़ी रोकथाम एजेंसियों से अदालती निर्णयों और दिवालिया
                होने का पालन करने के लिए किया है।
              </li>

              <li>
                वाहन से संबंधित जानकारी जब आप वाहन बीमा का विकल्प चुनते हैं
              </li>

              <li>
                यदि आप Buchi Pay के साथ रोजगार के अवसरों के लिए आवेदन करते
                हैं तो ऑनलाइन या ऑफलाइन डेटाबेस के माध्यम से आपका रिज्यूमे,
                आपका पिछला रोजगार और बैकग्राउंड की जांच और सत्यापन के लिए
                शैक्षिक योग्यता वैध रूप से प्राप्त की जाती है।
              </li>

              <li>
                सफल आधार ई-KYC पर UIDAI से प्राप्त प्रतिक्रिया के रूप में
                आधार संख्या, पता, लिंग और जन्म तिथि सहित आपकी जनसांख्यिकीय
                और फोटो जानकारी तक सीमित नहीं है।
              </li>
            </ul>

            <h1 className='text-lg font-bold mt-4'>
              सूचना इकट्ठा करने का मकसद और उसका इस्तेमाल
            </h1>
            <p className='  text-justify'>
              Buchi Pay नीचे बताए गए मकसद के लिए आपकी निजी सूचना का
              इस्तेमाल कर सकता है:
            </p>
            <ul className='list-disc pl-6  text-justify'>
              <li>
                आपका खाता बनाने और आपकी पहचान की पुष्टि करने के लिए। इसके
                अलावा, आपको सुविधाओं का एक्सेस देने के लिए।
              </li>
              <li>
                आपको उन प्रॉडक्ट और सेवाओं का एक्सेस देने के लिए जो हम ऑफ़र
                करते हैं या हमारे प्लेटफ़ार्म पर मौजूद मर्चेंट, हम से जुड़ी
                या हमारे तहत काम करने वाली कंपनी, हमारे नियंत्रण वाली
                कंपनी, हमारी सहयोगी कंपनी या हमारे बिज़नेस पार्टनर ऑफ़र
                करते हैं।
              </li>
              <li>
                आधार अधिनियम और इसके विनियमों के तहत UIDAI सहित अलग-अलग
                नियामक संस्थाओं की शर्तों के हिसाब से, पहले से ज़रूरी शर्त
                के तौर पर KYC के अनुपालन की प्रक्रिया पूरी करने के लिए।
              </li>
              <li>
                अन्य मध्यस्थों, नियमित होने वाली संस्थाओं (REs) या AMCs या
                वित्तीय संस्थानों या सेवा देने वाली किसी अन्य कंपनी (ज़रूरत
                के हिसाब से) के साथ आपकी KYC जानकारी या नॉमिनी की जानकारी
                की पुष्टि करने, उसे प्रोसेस करने और/या शेयर करने के लिए।
              </li>
              <li>
                आपकी ओर से और आपके निर्देश पर पेमेंट को प्रोसेस करने के
                लिए; आपकी क्वेरी, लेन-देन, और/या अन्य नियामक शर्तों, वगैरह
                के बारे में आपसे बातचीत करने के लिए।
              </li>
              <li>
                लेन-देन के किसी अनुरोध को प्रमाणित करने के लिए; सिस्टेमेटिक
                इन्वेस्टमेंट प्लान के लिए स्थायी निर्देश की पुष्टि करने या
                हमारी किसी सेवा का इस्तेमाल करके की गई पेमेंट की पुष्टि
                करने के लिए।
              </li>
              <li>
                अलग-अलग प्रोसेस, जैसे कि आवेदन जमा करने/प्रॉडक्ट या सेवा की
                पेशकश का फ़ायदा लेने की प्रोसेस में आपके उपयोगकर्ता अनुभव
                को बेहतर बनाना। इसके लिए उपयोगकर्ताओं के व्यवहार के
                उदाहरणों को इकट्ठा करके एक साथ उनका विश्लेषण किया जाता है।
              </li>
              <li>
                समय-समय पर प्रॉडक्ट/सेवाओं की निगरानी और समीक्षा करने, ऑडिट
                करने; सेवाओं को आपके मुताबिक बनाने के मकसद से, ताकि आपको
                ऐसा महसूस कराया जाए कि यहां आपका डेटा सुरक्षित है और इस
                प्लेटफ़ार्म को इस्तेमाल करना आसान है।
              </li>
              <li>
                थर्ड पार्टी को उन प्रॉडक्ट और सेवाओं के बारे में आपसे
                संपर्क करने की अनुमति देने के लिए जिनका या तो आपने Buchi
                Pay प्लेटफ़ार्म या थर्ड पार्टी के लिंक पर इस्तेमाल किया
                है/उनके लिए अनुरोध किया है।
              </li>
              <li>
                क्रेडिट से जुड़ी जांच, स्क्रीनिंग या वित्तीय रिकॉर्ड की
                जांच के लिए (जो हमारे लिए कानूनी तौर पर ज़रूरी हो), हमें
                खुद को किसी तरह की गड़बड़ी, धोखाधड़ी, मनी लॉन्ड्रिंग और
                अन्य आपराधिक गतिविधि से बचाने के लिए; अपने नियम और शर्तों
                को लागू करने के लिए।
              </li>
              <li>
                आपको ऑनलाइन और ऑफ़लाइन ऑफ़र, प्रॉडक्ट, सेवाओं, और अपडेट के
                बारे में जानकारी देने के लिए; आपको आपके मुताबिक प्रॉडक्ट और
                ऑफ़र पेश करके, उनकी मार्केटिंग करके, उनका विज्ञापन करके
                आपके अनुभव को बेहतर बनाने और आपको आपके मुताबिक अनुभव देने
                के लिए।
              </li>
              <li>
                विवादों और समस्याओं का हल करने; तकनीकी सहायता उपलब्ध कराने
                और गड़बड़ियों का हल करने; सुरक्षित सेवा को बढ़ावा देने में
                सहायता करने के लिए।
              </li>
              <li>
                सुरक्षा से जुड़े खतरों और हमलों की पहचान करने के लिए; गैर
                कानूनी या संदिग्ध धोखाधड़ी या मनी लॉन्ड्रिंग की गतिविधियों
                की जांच करने, उनकी रोकथाम, और उनके खिलाफ कार्रवाई करने के
                लिए और Buchi Pay या भारत के अधिकार क्षेत्र में या उसके बाहर
                स्थित सरकारी एजेंसियों की अंदरूनी या बाहरी ऑडिट या जांच के
                हिस्से के तौर पर फ़ॉरेंसिक ऑडिट के लिए।
              </li>
              <li>कानूनी जवाबदेही का पालन करने के लिए।</li>
            </ul>

            <h1 className='text-lg font-bold mt-4'>
              कुकीज़ या इसी तरह की तकनीक
            </h1>
            <p className='mb-4  text-justify'>
              हम प्लेटफ़ार्म के कुछ पेज पर डेटा इकट्ठा करने वाली डिवाइसों,
              जैसे कि "कुकीज़" या इसी प्रकार की तकनीकों का इस्तेमाल करते
              हैं। ऐसा, हम भरोसा और सुरक्षा को बढ़ावा देने और अपने वेब पेज
              के फ़्लो के विश्लेषण में मदद के लिए करते हैं। इसके अलावा, यह
              पता लगाने के लिए करते हैं कि प्रमोशन कितना असरदार रहा।
              "कुकीज़" ऐसी छोटी फ़ाइलें होती हैं जिन्हें आपकी डिवाइस की
              हार्ड ड्राइव/स्टोरेज में रखा जाता है और ये हमें, आपको सेवा
              देने में मदद करती हैं। कुकीज़ में आपकी कोई भी निजी जानकारी
              नहीं होती है। हम कुछी ऐसी सुविधाएं ऑफ़र करते हैं जिन्हें
              सिर्फ़ "कुकी" या इसी तरह की तकनीकों का इस्तेमाल करके ही
              उपलब्ध कराया जा सकता है। एक सेशन के दौरान आपको अपना पासवर्ड
              बहुत कम बार डालना पड़े, इसके लिए भी हम कुकीज़ का इस्तेमाल
              करते हैं। कुकीज़ और इस तरह की तकनीक हमें ऐसी जानकारी उपलब्ध
              कराने में मदद कराती हैं जो आपकी दिलचस्पी से जुड़ी है।
              ज़्यादातर कुकीज़ "सेशन कुकीज़" होती हैं। इसका मतलब यह है कि
              सेशन के खत्म होने पर ये कुकीज़ आपके डिवाइस की हार्ड
              ड्राइव/स्टोरेज से अपने-आप डिलीट हो जाती हैं। अगर आपका
              ब्राउज़र/डिवाइस अनुमति देता है, तो आप कभी भी हमारी कुकीज़ या
              इसी तरह की तकनीकों को अस्वीकार/डिलीट कर सकते हैं। हालांकि, इस
              तरह के मामले में आप हमारे प्लेटफ़ार्म पर कुछ सुविधाओं का
              इस्तेमाल नहीं कर पाएंगे और आपको एक सेशन के दौरान बार-बार अपना
              पासवर्ड डालना होगा। इसके अलावा, प्लेटफ़ार्म के कुछ पेज पर
              आपको ऐसी "कुकीज़" या इस प्रकार की अन्य तकनीकें मिलेंगी जो
              थर्ड पार्टी ने रखी होंगी। थर्ड पार्टी के ज़रिए कुकीज़ के
              इस्तेमाल को हम कंट्रोल नहीं करते हैं।
            </p>

            <h1 className='text-lg font-bold mt-4'>
              जानकारी शेयर करना और उसे ज़ाहिर करना
            </h1>
            <p className='  text-justify'>
              आपकी व्यक्तिगत जानकारी को उचित सावधानी का पालन करने के बाद और
              इस नीति में निर्धारित उद्देश्यों के अनुरूप लागू कानूनों के
              तहत अनुमति के अनुसार साझा किया जाता है। आपकी निजी जानकारी,
              लागू होने वाले कानून के तहत दी गई अनुमति के हिसाब से और इस
              पॉलिसी में तय किए गए मकसद के मुताबिक शेयर की जाती है। इसे
              शेयर करने से पहले, ज़रूरी कार्रवाई पूरी की जाती है।
            </p>
            <p className='  text-justify'>
              आपके लेन-देन के दौरान, हम आपकी निजी जानकारी को अलग-अलग
              प्राप्तकर्ताओं के साथ शेयर कर सकते हैं। इनमें, हमारे बिज़नेस
              पार्टनर, सर्विस प्रोवाइडर, मर्चेंट, हमसे जुड़ी या हमारे तहत
              काम करने वाली कंपनियां, हमारी सहयोगी कंपनियां, हमारे नियंत्रण
              वाली कंपनियां, कानूनी तौर पर मान्यता प्राप्त अथॉरिटी, नियामक
              संस्थाएं, सरकारी अधिकारी, वित्तीय संस्थान, अंदरूनी टीम जैसे
              मार्केटिंग, सुरक्षा, जांच टीम वगैरह शामिल हैं।
            </p>
            <p className=' text-justify'>
              निजी जानकारी, लागू होने के हिसाब से, नीचे दिए गए मकसद के लिए
              जानने की ज़रूरत के आधार पर शेयर की जाएगी:
            </p>
            <ul className='list-disc pl-6  text-justify'>
              <li>
                आप जिन प्रॉडक्ट/सेवाओं का इस्तेमाल करना चाहते हैं उन्हें
                आपके पास पहुंचाने और आपके और सर्विस प्रोवाइडर के बीच अनुरोध
                किये गये सेवाओं का लेन-देन शुरू करने के लिए।
              </li>
              <li>
                आधार प्रमाणीकरण प्रक्रिया के लिए केंद्रीय पहचान डेटा
                रिपोजिटरी (CIDR) और नेशनल सिक्योरिटीज डिपॉजिटरी लिमिटेड
                (NSDL) को आधार जानकारी जमा करके।
              </li>
              <li>
                लागू होने वाले कानूनों का पालन करने के साथ-साथ ‘अपने ग्राहक
                को जानें’ (KYC) प्रक्रिया से जुड़ी ज़रूरी शर्तों को पूरा
                करने के लिए। इन शर्तों को नियामक संस्थाओं द्वारा मांगा गया
                है।
              </li>
              <li>
                हमारे साथ या हमारे तहत काम करने वाली कंपनी द्वारा या हमारी
                साइट पर या थर्ड पार्टी लिंक पर इस्तेमाल किए गए प्रॉडक्ट या
                सेवाओं से जुड़ी जानकारी को क्यूरी या रिसॉल्व करने के लिए।
              </li>
              <li>
                समय-समय पर, हम तीसरी पार्टी को आपकी व्यक्तिगत जानकारी शेयर
                कर सकते हैं, जो आपके प्रॉडक्ट और/या सेवाओं के लिए
                मार्केटिंग संदेश और ऑफ़र भेजने का काम कर सकते हैं।
              </li>
              <li>
                कानूनी उत्तरदायित्व को पूरा करने के लिए, जैसे कि एक अदालत
                के आदेश, अधिनियम, या कोई अन्य कानूनी प्रक्रिया और/या लागू
                होने वाले नियमों का पालन करने के लिए।
              </li>
              <li>
                अपने नियम और शर्तों को लागू करने, सुरक्षा उल्लंघनों की
                निगरानी करने, धोखाधड़ी, मनी लॉन्ड्रिंग और अन्य आपराधिक
                गतिविधियों की जांच करने और निवारण करने के लिए।
              </li>
              <li>
                कंपनी के अधिकारों और उसके कर्मचारियों के अधिकारों की
                सुरक्षा करने और किसी भी सुरक्षा जोखिमों या हमलों का पता
                लगाने के लिए।
              </li>
              <li>
                सिस्टम की सुरक्षा सुनिश्चित करने और ऑपरेशनल कामकाज को बेहतर
                बनाने के लिए और हमारे सिस्टम को दुरुपयोग से बचाने के लिए।
              </li>
            </ul>

            <h1 className='text-lg font-bold mt-4'>
              आपके व्यक्तिगत डेटा का प्रतिधारण
            </h1>
            <p className='  text-justify'>
              कंपनी आपके व्यक्तिगत डेटा को केवल उतनी अवधि तक संग्रहीत करेगी
              जितना इस गोपनीयता नीति में निर्दिष्ट उद्देश्यों के लिए आवश्यक
              है। हम आपके व्यक्तिगत डेटा को तब तक संग्रहीत और उपयोग करेंगे
              जब तक यह हमारे कानूनी दायित्वों को पूरा करने के लिए आवश्यक है
              (उदाहरण के लिए, यदि हमें आपके डेटा को लागू कानूनों का पालन
              करने के लिए संग्रहीत करना आवश्यक हो), विवादों का समाधान करने
              के लिए, और हमारे कानूनी समझौतों और नीतियों को लागू करने के
              लिए।{' '}
            </p>

            <ul className='list-disc pl-6  text-justify'>
              <li className='font-semibold'>
                कानूनी दायित्वों का पालन करना :
              </li>
              उदाहरण के लिए, यदि हमें आपके डेटा को लागू कानूनों, नियमों, या
              कानूनी प्रक्रियाओं का पालन करने के लिए संरक्षित करना आवश्यक
              हो।
              <li className='font-semibold'>विवादों को सुलझाना:</li>
              कुछ डेटा संरक्षित करना हमें आपके और कंपनी के बीच उत्पन्न होने
              वाले विवादों या दावों को हल करने में मदद करता है।
              <li className='font-semibold'>
                कानूनी समझौतों और नीतियों को लागू करना
              </li>
              डेटा प्रतिधारण हमारे समझौतों, सेवा की शर्तों, और अन्य नीतियों
              को लागू करने और हमारे अधिकारों की सुरक्षा सुनिश्चित करने में
              सहायता करता है।
            </ul>

            <h1 className='text-lg font-bold mt-4'>
              सुरक्षा से जुड़े उचित तरीके
            </h1>
            <p className='  text-justify'>
              Buchi Pay और इसने यूज़र की निजी जानकारी और संवेदनशील जानकारी
              की सुरक्षा के लिए तकनीकी और सामान्य सुरक्षा उपाय किए हैं।
              विशेष रूप से, आपकी आधार जानकारी की सुरक्षा के लिए, हमने लागू
              सुरक्षा नियंत्रणों को लागू किया है जैसा कि आधार विनियमों के
              तहत और आवश्यक है। हम यह समझते हैं कि भले ही हमारे सुरक्षा
              उपाय बहुत असरदार हैं, लेकिन कोई भी सुरक्षा प्रणाली ऐसी नहीं
              है जो अभेद्य हो। इसलिए, सुरक्षा से जुड़े अपने उचित तरीकों के
              हिस्से के तौर पर, हम अंदरूनी और बाहरी समीक्षा करते हैं। हम
              ऐसा यह पक्का करने के लिए करते हैं कि जानकारी से जुड़ी सुरक्षा
              को उचित तौर पर एन्क्रिप्ट किया गया हो और जो डेटा गति में है
              उस कंट्रोल करने के लिए लिए हमारे नेटवर्क पर और जो डेटा स्थिर
              है उसे कंट्रोल करने के लिए हमारे सर्वर पर व्यवस्था की जाए।
              डेटाबेस को जिन सर्वर पर सेव करके रखा गया है उनकी सुरक्षा के
              लिए फ़ायरवॉल का इस्तेमाल किया जाता है; सर्वर के एक्सेस को
              पासवर्ड से सुरक्षित किया गया है और इसके एक्सेस को सख्ती से
              सीमित किया गया है।
            </p>

            <p className=' text-justify'>
              इसके अलावा, अपनी लॉगिन आईडी और पासवर्ड की गोपनीयता बनाए रखने
              और उसकी सुरक्षा के लिए आप ज़िम्मेदार हैं। कृपया Buchi Pay से
              जुड़ी अपनी लॉगिन, पासवर्ड, और OTP की जानकारी किसी व्यक्ति से
              शेयर न करें। अगर आपकी निजी जानकारी से वाकई में कोई समझौता
              किया जाता है या ऐसा होने का संदेह है, तो इस बारे में हमें
              सूचना देना आपकी ज़िम्मेदारी होगी।
            </p>

            <p className=' text-justify'>
              हमने Buchi Pay ऐप्लिकेशन की सुरक्षा के लिए सुरक्षा के कई स्तर
              उपलब्ध कराए हैं। इसके लिए, हमने लॉगिन/लॉग आउट के विकल्प दिए
              हैं। इसके अलावा, Buchi Pay ऐप्लिकेशन को लॉक करने की (“स्क्रीन
              लॉक चालू करें”) सुविधा दी गई है जिसे आप चालू कर सकते हैं।
              हमने एहतियात के तौर पर कुछ उपाय लागू किए हैं, ताकि यह पक्का
              किया जा सके कि आप Buchi Pay ऐप्लिकेशन का इस्तेमाल अपने डिवाइस
              पर करें और उसी लॉगिन क्रेडेंशियल का इस्तेमाल किसी दूसरे
              डिवाइस पर, पुष्टि करने के अतिरिक्त उपाय/OPT के बिना न किया जा
              सके।
            </p>

            <h1 className='text-lg font-bold mt-4'>
              थर्ड पार्टी के प्रॉडक्ट, सेवाएं या वेबसाइट
            </h1>

            <p className='  text-justify'>
              जब आप Buchi Pay प्लेटफ़ार्म पर मौजूद सर्विस प्रोवाइडर के
              प्रॉडक्ट और सेवाओं का इस्तेमाल करते हैं, तो निजी जानकारी
              उन्हीं सर्विस प्रोवाइडर के ज़रिए इकट्ठा की जा सकती है और इस
              तरह की निजी जानकारी पर उनकी प्राइवेसी पॉलिसी लागू होगी। यह
              समझने के लिए कि इस तरह के सर्विस प्रोवाइडर, आपकी निजी जानकारी
              को कैसे मैनेज करेंगे, आप उनकी प्राइवेसी पॉलिसी और सेवा की
              शर्तों को देख सकते हैं।
            </p>
            <p className='mb-4  text-justify'>
              जब आप हमारे प्लेटफ़ार्म पर आते हैं, तो आपको अन्य वेबसाइट या
              ऐप्लिकेशन के लिंक मिल सकते हैं। इस तरह की वेबसाइट या
              ऐप्लिकेशन पर उनकी अपनी-अपनी प्राइवेसी पॉलिसीयां लागू होती
              हैं, जो हमारे नियंत्रण से बाहर होती हैं। जब आप हमारे सर्वर से
              चले जाते हैं (आप बता सकते हैं कि अपने ब्राउज़र पर लोकेशन बार
              में या मोबाइल साइट पर URL पर क्लिक करने के बाद आप किस पेज पर
              पहुंचते हैं), तो आपने इन वेबसाइट या ऐप्लिकेशन पर जो निजी
              जानकारी उपलब्ध कराई गई होगी, उस पर उस ऐप्लिकेशन/वेबसाइट
              ऑपरेटर की प्राइवेसी पॉलिसी लागू होगी, जहां आप गए थे। वह
              पॉलिसी, हमारी पॉलिसी से अलग हो सकती है और आपसे अनुरोध किया
              जाता है कि उन ऐप्लिकेशन या वेबसाइट का इस्तेमाल करने के लिए
              आगे बढ़ने से पहले उनकी पॉलिसी को देखें या डोमेन के मालिक से
              पॉलिसी का एक्सेस देने को कहें। हम इन थर्ड पार्टी के ज़रिए
              आपकी निजी जानकारी के इस्तेमाल या उनकी पॉलिसी के लिए किसी भी
              तरह की जिम्मेदारी या जवाबदेही स्वीकार नहीं करते हैं।
            </p>

            <h1 className='text-lg font-bold'>आपकी सहमति</h1>
            <p className='mb-4  text-justify'>
              हम आपकी सहमति से आपकी निजी जानकारी को प्रोसेस करते हैं। Buchi
              Pay प्लेटफ़ार्म या सेवाओं का इस्तेमाल करके और/या अपनी निजी
              जानकारी उपलब्ध कराकर, आप इस बात की सहमति देते हैं कि इस
              प्राइवेसी पॉलिसी के मुताबकि, Buchi Pay के ज़रिए आपकी निजी
              जानकारी को प्रोसेस किया जा सकता है। अगर आप किसी अन्य व्यक्ति
              से जुड़ी निजी जानकारी हमें ज़ाहिर करेंगे, तो इसका मतलब आपकी
              ओर से यह स्वीकार करना है कि आपको ऐसा करने का अधिकार है और आप
              हमें इस प्राइवेसी पॉलिसी के मुताबिक जानकारी को इस्तेमाल करने
              की अनुमति देते हैं।
            </p>

            <h1 className='text-lg font-bold'>विकल्प/ऑप्ट-आउट</h1>
            <p className='mb-4  text-justify'>
              खाता सेटअप करने के बाद, हम सभी उपयोगकर्ताओं को इस विकल्प को
              चुनने का मौका देते हैं कि वह हमारी सेवाओं को इस्तेमाल नहीं
              करना चाहते हैं या हमारी ओर से उन्हें गैर ज़रूरी (प्रमोशन या
              मार्केटिंग से जुड़ा) कम्यूनिकेशन न भेजा जाए। अगर आप अपनी
              संपर्क जानकारी हमारी सभी सूचियों और न्यूज़लेटर से हटाना चाहते
              हैं या हमारी किसी सेवा को बंद करना चाहते हैं, तो कृपया भेजे
              जाने वाले ईमेल पर सदस्यता छोड़ें बटन पर क्लिक करें।
            </p>

            <h1 className='text-lg font-bold '>
              निजी जानकारी को एक्सेस करना/ सुधार करना और सहमति
            </h1>
            <p className='  text-justify'>
              आप जो हमारे साथ अपनी निजी जानकारी शेयर करते हैं उसे एक्सेस कर
              सकते हैं और देख सकते हैं। इसके अलावा, आप किसी भी समय
              आधार-आधारित ई-KYC प्रक्रिया के हिस्से के रूप में एकत्रित आपकी
              ई-KYC जानकारी संग्रहीत करने के लिए हमें दी गई सहमति को कैंसिल
              कर सकते हैं। इस तरह के निरसन पर, आप उन सेवाओं तक पहुंच खो
              सकते हैं जो दी गई सहमति के आधार पर ली गई थीं। कुछ मामलों में,
              हम इस पॉलिसी के 'भंडारण और अवधारण' अनुभाग के अनुसार आपकी
              जानकारी को बनाए रखना जारी रख सकते हैं। उपरोक्त किसी भी अनुरोध
              को उठाने के लिए, आप इस पॉलिसी के 'हमसे संपर्क करें' अनुभाग के
              तहत प्रदान की गई संपर्क जानकारी का उपयोग करके हमें लिख सकते
              हैं।
            </p>
            <p className='  text-justify'>
              यदि आप अपना खाता या व्यक्तिगत जानकारी हटाना चाहते हैं, तो
              कृपया Buchi Pay प्लेटफॉर्म के 'सहायता' अनुभाग का उपयोग करें।
              हालांकि, आपकी व्यक्तिगत जानकारी का प्रतिधारण लागू कानूनों के
              अधीन होगा।
            </p>
            <p className='  text-justify'>
              उपरोक्त अनुरोधों के लिए, Buchi Pay को आपकी पहचान की पुष्टि
              करने और प्रमाणीकरण सुनिश्चित करने के लिए आपसे विशिष्ट जानकारी
              का अनुरोध करने की जरुरत हो सकती है। यह सुनिश्चित करने के लिए
              एक सुरक्षा उपाय है कि व्यक्तिगत जानकारी को किसी ऐसे व्यक्ति
              के सामने प्रकट नहीं किया जाता है जिसके पास इसे प्राप्त करने
              का अधिकार नहीं है या गलत तरीके से बदलाव या हटाया नहीं गया है।
            </p>
            <p className='mb-4  text-justify'>
              अगर, आपको उस प्रॉडक्ट/सेवाओं से जुड़ी खास जानकारी की ज़रूरत
              है जिसका आपका इस्तेमाल करते हैं या ऐसी जानकारी की ज़रूरत है
              जो हमारे ज़रिए हम आपसे अनुरोध करते हैं कि आप उस प्रॉडक्ट/सेवा
              से जुड़े खास नियम और शर्तों को ध्यान से पढ़ें। ये नियम और
              शर्तें Buchi Pay प्लेटफ़ार्म का इस्तेमाल करके आसानी से एक्सेस
              की जा सकती हैं। अगर इस के बारे में कुछ और जानकारी चाहिए, तो
              आप हमें इस पॉलिसी के ‘हमसे संपर्क करें’ सेक्शन में दी गई
              संपर्क जानकारी का इस्तेमाल करके, हमसे संपर्क कर सकते हैं।
            </p>

            <h1 className='text-lg font-bold '>बच्चों से जुड़ी जानकारी</h1>
            <p className='mb-4  text-justify'>
              हम जानबूझकर न तो 18 साल से कम उम्र बच्चों की निजी जानकारी
              मांगते हैं और न ही उसे इकट्ठा करते हैं। ध्यान देने वाली बात
              है कि हमारे प्लेटफ़ार्म का इस्तेमाल सिर्फ़ ऐसे व्यक्ति ही कर
              सकते हैं जो भारतीय अनुबंध अधिनियम, 1872 के तहत कानूनी तौर पर
              मान्य समझौता कर सकते हैं। अगर आपकी उम्र 18 साल से कम है, तो
              आपको अपने माता-पिता, कानूनी अभिभावक या किसी ऐसे ज़िम्मेदार
              व्यक्ति की निगरानी में हमारे प्लेटफ़ार्म या सेवाओं का
              इस्तेमाल करना होगा जो वयस्क हो।
            </p>

            <h1 className='text-lg font-bold '>
              पॉलिसी में होने वाले बदलाव
            </h1>
            <p className='mb-4  text-justify'>
              चूंकि हमारे कारोबार में लगातार बदलाव होता रहता है, इसी तरह
              हमारी पॉलिसी में भी बदलाव होता रहता है। हमारे पास इस बात का
              अधिकार है कि हम अपने विवेक से इस प्राइवेसी पॉलिसी में किसी भी
              समय, आपको पहले लिखित सूचना दिए बिना बदलाव या संशोधन कर सकते
              हैं, कुछ हिस्से इसमें जोड़ सकते हैं या हटा सकते हैं। हालांकि
              हम बदलावों के बारे में आपको सूचित करने की पूरी कोशिश करेंगे,
              लेकिन यह आपकी ज़िम्मेदारी है कि अपडेट/बदलावों के लिए समय-समय
              पर आप प्राइवेसी पॉलिसी को देखते रहें। कोई बदलाव पोस्ट करने के
              बाद, अगर आप लगातार हमारी सेवाओं/प्लेटफ़ार्म का इस्तेमाल करते
              रहेंगे, तो इसका मतलब यह होगा कि आप बदलावों को स्वीकार करते
              हैं और उनसे सहमत हैं। हम पॉलिसी में कभी भी ऐसा बदलाव नहीं
              करेंगे, जिससे कि आपकी ओर से पहले शेयर की गई निजी जानकारी कम
              सुरक्षित हो जाए।
            </p>

            <h1 className='text-lg font-bold '>हमसे संपर्क करें</h1>
            <p className='mb-4  text-justify'>
              अगर आपके पास आपकी निजी जानकारी को प्रोसेस किए जाने या इस
              प्राइवेसी पॉलिसी से जुड़ा कोई सवाल है, समस्याएं हैं, तो आप
              Buchi Pay गोपनीयता अधिकारी को इस बारे में लिख सकते हैं। इसके
              लिए, आपको{' '}
              <a href='http://www.buchipay.in' target='_blank'>
                www.buchipay.in
              </a>{' '}
              लिंक पर जाना होगा। हम उचित समयसीमा के अंदर आपके सवालों का
              जवाब देंगे। अगर इसमें ज़्यादा समय लगेगा, तो इस बारे में आपको
              पहले ही बता दिया जाएगा।
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;