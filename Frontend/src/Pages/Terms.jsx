import React from 'react'
import Term from './Term'
import './Terms.css'

// Terms & Conditions
// Terms & Conditions and Privacy Policy both follows the same styling

function Terms() {
    // To add a term simply give a title and define an array string, each string is a point

  let title1 = "Introduction"
  let points1 = [
        'Apna College (Jainemo Private Limited) provides online courses and conducts online classes, live demo, doubt clearing sessions for the students seeking to enrol for such courses (the " Services"), which Services are accessible at https://www.apnacollege.in/ and any other websites through which Apna College makes the Services available (collectively, the "Site ") and as applications for mobile, tablet and other smart devices and application program interfaces (collectively, the "Applications").',

        'By accessing or using the Site, Application or Services or by downloading or posting any content from or on the Site, via the Applications, you would be indicating that you have read, and that you understand and agree to be bound by these terms and receive our Services (“ Terms of Services” or “Terms”), whether or not you have registered with the Site and/or Application.',

        'Therefore, kindly read these Terms of service before accessing or using the Site, Application or Services or downloading or posting any content from or on the Site, via the Application or through the Services, carefully as they contain important information regarding your legal rights, remedies and obligations.'
  ]

  let title2 = "Definition"
  let points2 = [
        'Apna College (Jainemo Private Limited) provides online courses and conducts online classes, live demo, doubt clearing sessions for the students seeking to enrol for such courses (the " Services"), which Services are accessible at https://www.apnacollege.in/ and any other websites through which Apna College makes the Services available (collectively, the "Site ") and as applications for mobile, tablet and other smart devices and application program interfaces (collectively, the "Applications").',

        'By accessing or using the Site, Application or Services or by downloading or posting any content from or on the Site, via the Applications, you would be indicating that you have read, and that you understand and agree to be bound by these terms and receive our Services (“ Terms of Services” or “Terms”), whether or not you have registered with the Site and/or Application.',

        'Therefore, kindly read these Terms of service before accessing or using the Site, Application or Services or downloading or posting any content from or on the Site, via the Application or through the Services, carefully as they contain important information regarding your legal rights, remedies and obligations.'
  ]

  let title3 = "GDPR Compliance Statement"
  let points3 = [
        'Consent : We explain what you’re consenting to clearly and without ‘legalese’, and ask that you explicitly consent to contact from us.',
        'Breach Notification : In the event of a breach, we will notify affected users within 72 hours of first having become aware of the breach.',       
        'Right to Access : Users can request confirmation as to whether or not personal data concerning them is being processed, where and for what purpose. Further, we shall provide a copy of the personal data, in an electronic format.',
        'Right to be Forgotten : Once we have compared your rights to the public interest in the availability of the data, we may delete your personal data where you have requested this.',
        'Listing" means Courses that are listed by Apna College as available via the Site, Application, and Services.',
        'Data Portability : We allow you to receive the personal data concerning you, which we will provide in a "commonly used and machine readable format" and you have the right to transmit that data to another ‘controller’',
        'Privacy by Design : We implement appropriate measures, in an effective way and protect the rights of data subjects. We hold and process only the data absolutely necessary for the completion of our duties, as well as limiting the access to personal data to those needing to act out the processing.',
        'Eligibility :Use of the Site, Application and Services is available only to persons who can form legally binding contracts under Indian laws. The Website is intended solely for persons who are 18 years of age or older. If you are below 18, then your parent or guardian can open an account and help you enrol in courses that are appropriate for you.'
  ]

  let title4 = "COMMUNITY"
  let points4 = [
        'Apna College (Jainemo Private Limited) provides online courses and conducts online classes, live demo, doubt clearing sessions for the students seeking to enrol for such courses (the " Services"), which Services are accessible at https://www.apnacollege.in/ and any other websites through which Apna College makes the Services available (collectively, the "Site ") and as applications for mobile, tablet and other smart devices and application program interfaces (collectively, the "Applications").',

        'By accessing or using the Site, Application or Services or by downloading or posting any content from or on the Site, via the Applications, you would be indicating that you have read, and that you understand and agree to be bound by these terms and receive our Services (“ Terms of Services” or “Terms”), whether or not you have registered with the Site and/or Application.',

        'Therefore, kindly read these Terms of service before accessing or using the Site, Application or Services or downloading or posting any content from or on the Site, via the Application or through the Services, carefully as they contain important information regarding your legal rights, remedies and obligations.'
  ]

  return (
    <div className="terms-container">

      <h1 className="headline">Terms and Conditions</h1>

      <div>
        <Term title={title1} points={points1} />
        <Term title={title2} points={points2} />
        <Term title={title3} points={points3} />
        <Term title={title4} points={points4} />
      </div>
      
    </div>
  )
}

export default Terms