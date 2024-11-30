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
    facebook: 'Genki Takayama (Social Media Contact)',
    instagram: 'genki_st (Social Media Contact)',
    linkedin: 'Saranyu Takayama (Works)',
    github: 'saranyu9569 (Works)'
  };

  const socialMediaContacts = [
    { 
      icon: Facebook, 
      href: '', 
      label: 'Facebook',
      username: contactInfo.facebook
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/genki_st', 
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
        {/* Contact Info */}
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

        {/* Social Media Links */}
        <div className="flex flex-col w-full max-w-md space-y-6">
          <div className="grid gap-4 w-full md:grid-cols-2">
            {[...socialMediaContacts, ...professionalLinks].map((social) => (
              <Link 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-gray-50 border rounded-lg shadow hover:shadow-md transition-shadow hover:bg-blue-50"
              >
                <social.icon className="w-8 h-8 text-gray-600" />
                <span className="mt-2 text-sm font-medium text-gray-700">{social.label}</span>
                <span className="text-xs text-gray-500">{social.username}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
