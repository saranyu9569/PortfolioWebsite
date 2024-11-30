import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone,
  Instagram, 
  Facebook, 
  Linkedin, 
  Github 
} from 'lucide-react';

const Page = () => {
  const contactInfo = {
    email: 'saranyu9569@outlook.com',
    telephone: '0882856552',
    facebook: 'social_username (Social Media Contact)',
    instagram: 'social_username (Social Media Contact)',
    linkedin: 'professional_username (Works)',
    github: 'saranyu9569 (Works)'
  };

  const socialMediaContacts = [
    { 
      icon: Facebook, 
      href: `https://facebook.com/${contactInfo.facebook.split(' ')[0]}`, 
      label: 'Facebook',
      username: contactInfo.facebook
    },
    { 
      icon: Instagram, 
      href: `https://instagram.com/${contactInfo.instagram.split(' ')[0]}`, 
      label: 'Instagram',
      username: contactInfo.instagram
    }
  ];

  const professionalLinks = [
    { 
      icon: Linkedin, 
      href: `https://linkedin.com/in/${contactInfo.linkedin.split(' ')[0]}`, 
      label: 'LinkedIn',
      username: contactInfo.linkedin
    },
    { 
      icon: Github, 
      href: `https://github.com/${contactInfo.github.split(' ')[0]}`, 
      label: 'GitHub',
      username: contactInfo.github
    }
  ];

  return (
    <div className="h-[calc(100vh-96px-64px)] flex flex-col">
      <h1 className="text-4xl text-center font-bold pt-10 ">Contact Me</h1>
      
      <div className="flex justify-center items-center mb-6">
        <div className="border-t border-gray-300 w-1/5" />
      </div>
      
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center space-y-2 text-lg">
          <div className="flex items-center space-x-2">
            <Mail className="w-6 h-6 text-gray-600" />
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="text-blue-600 hover:underline"
            >
              {contactInfo.email}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-6 h-6 text-gray-600" />
            <a 
              href={`tel:${contactInfo.telephone}`} 
              className="text-blue-600 hover:underline"
            >
              {contactInfo.telephone}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 w-full max-w-md">
            <div className="w-full">
              {socialMediaContacts.map((social) => (
                <Link 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <social.icon className="w-6 h-6" />
                    <span>{social.label}</span>
                  </div>
                  <span>{social.username}</span>
                </Link>
              ))}
            </div>

            <div className="w-full">
              {professionalLinks.map((social) => (
                <Link 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <social.icon className="w-6 h-6" />
                    <span>{social.label}</span>
                  </div>
                  <span>{social.username}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;