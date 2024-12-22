import React from 'react'
import Policy from './Policy'
import './PrivacyPolicy.css'
 
// Privacy Policy
// Privacy Policy and Terms & Conditions both follows the same styling

function PrivacyPolicy() {
    // To add a policy simply give a title and a paragraph to Policy component

  let title1 = null
  let para1 = 'This Privacy Policy discloses the privacy practices for Apna College (“We/we” or “Us/us”) with regard to Your (“You/you” or “Your/your”) use of the online platform www.apnacollege.in (“Website”). This Privacy Policy and Terms of Use describes our current practices regarding, including your choices in relation to how we collect, compile, store, use, share and secure your personal information across our Website. It also describes your choices regarding access, use and correction of personal information and your rights in relation to your personal information and how you can contact us or authorities in the event you have a grievance or complaint. By visiting www.apnacollege.in, you agree to be bound by the terms and conditions of this Privacy Policy. Kindly go through this Privacy Policy carefully. By using the Website, you indicate that you understand and abide by this Policy. If you are not in agreement with the terms and conditions of this Privacy Policy, kindly do not access this Website. We ensure to review this Privacy Policy from time to time so that it is updated. If you are just a visitor, then kindly note that this Policy is subject to change at any time without notice. To ensure that you are aware of any changes in the Policy, please review this Policy from time to time. By Personal Data, we mean any information that can either itself identify you as an individual.'


  let title2 = "Collection of Information"
  let para2 = 'As a visitor, you can browse through our Website to find out more about Apna College. You are not required to provide us with any Personal Data if you are merely a visitor. When you visit the Site, we collect and store certain information in order to increase security, analyse developments and administer the Website with a view to help us in making customer experience better. We utilise this information to analyse traffic patterns on our Website so as to make it more beneficial for our visitors. We collect your Personal Data only when you register with us, when you are interested in obtaining information regarding our products and services, when you participate in activities on our Website or contact us. We will only collect your Personal Information if there is a proper and valid reason for doing so, for instance : to comply with our regulatory and legal obligations; for the performance of our contract with you or to take the required steps at your request before entering into a legal contract; for our legitimate interests or where you have given consent. A legitimate interest is when we have a valid commercial or business reason to use your information. In certain cases, we may also have a legal obligation to collect personal data from you or may otherwise need the personal information to protect your interests or those of another individual (for instance, in order to prevent payment fraud or confirm your identity). Our primary objective in collecting your Personal Information is to provide you a safe, effective, seamless and customized experience. This allows us to provide online courses, study material and tutorials that most likely meet your needs and to customize our Website to make your experience easier, better and safer. The information we gather from you helps us personalize and continually improve customer experience at our Website. We do not voluntarily make this information available to any third parties, nor do we use it for any other objective, except as set out herein.'


  let title3 = "Usage and Retention of Information"
  let para3 = 'We use the personal information we collect, including your Personal Data where it is necessary to render the services requested by you, where it is necessary to comply with legal obligations or rights or for normal business purposes of the kind set out in this Policy. We will use your personal information to provide, analyse and improve our offerings, to provide you with a customized experience on our Website, to contact you about your account and our services, to render customer service, to provide you with personalized marketing and to any fraudulent or illegal activities. In addition to this, we use your personal information to figure out your general geographic location, provide localized course content and classes, recommendations, determine your ISP, and help us quickly and efficiently respond to queries and enforcing our terms and communicate with you concerning our service (for example by email, push notifications, text messaging ,and online messaging channels), so that we can provide you details about latest features and content available on the Website, offers, and promotions, surveys, and to assist you with operational requests like password reset requests.'


  let title4 = "Community"
  let para4 = 'Apna College is a community, wherein we offer a number of features that allow members to connect and communicate in public or semi-public spaces, such as Forums and Teams. Please use your judgment before posting in these community spaces or sharing your personal information with others on Apna College. You should be aware that any personal information you submit there can be read, collected, or used by others, or could be used to send you unsolicited messages.'


  let title5 = "Sharing and Disclosing Personal Information"
  let para5 = 'We use other Service Providers to perform services on our behalf or to assist us with the provision of services to you. We engage these Service Providers to provide promotional, infrastructure and IT services, to personalize and optimize our service, to process payment transactions, to provide customer service, to analyze and enhance data, and to conduct consumer surveys. In the process of providing such services, these Service Providers may have access to your personal or other information. We do not authorize them to use or disclose your personal information except in relation to providing their services.'

  return (
    <div className="terms-container">

      <h1 className="headline">Privacy Policy</h1>

      <div>
        <Policy title={title1} para={para1} />
        <Policy title={title2} para={para2} />
        <Policy title={title3} para={para3} />
        <Policy title={title4} para={para4} />
        <Policy title={title5} para={para5} />
      </div>

    </div>
  )
}

export default PrivacyPolicy