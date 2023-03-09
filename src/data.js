// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about-svg.svg';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/hero.svg';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'Home',
    href: '#hero',
  },
  {
    name: 'Pricing',
    href: '#pricing',
  },
  {
    name: 'Features',
    href: '#features',
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
  },
];

export const heroData = {
  title: `Bring Statistic to Your Language`,
  subtitle:
    'Firstat menyediakan layanan konsultasi statistik ahli untuk membantu mencapai kesuksesan akademik pada skripsi atau tesis Anda.',
  btnText: 'Get in touch',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Find Out A Little More About Us',
  subtitle:
    'We have been establishing the company since 2019. We evolved the brand multiple times until we finally decided to invent our brand-new label for the business in the post-pandemic era. The Firstat means first and statistics. It showcases our promising capability in providing first class quality in all statistical-related services.',
};

export const featuresData = {
  title: 'Kenapa harus kami? ',
  subtitle:
    'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'TRUSTED',
      description:
        'Kami sudah melayani ratusan klien dalam mengerjakan skripsi, tesis, maupun disertasi dari berbagai negara seperti Indonesia, Malaysia, Australia, Belanda, dan Amerika Serikat.',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'HIGH-QUALITY CONSULTANTS',
      description:
        'Tim konsultan kami dipimpin oleh lulusan statistik dari Amerika Serikat dengan pengalaman lebih dari 10 tahun.',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'UNDERSTANDABLE EXPLANATION',
      description:
        'Kami menjelaskan statistika dengan bahasa yang simpel dan mudah dimengerti',
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'FAST and ACCURATE',
      description:
        'Kami bekerja dengan cepat dan akurat karena bagi kami kepuasan klien itu nomor satu.',
      delay: '1300',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'WORTH THE MONEY ',
      description:
        'Free: konsultasi, interpretasi, dan revisi.',
      delay: '1300',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'BILINGUAL SERVICE',
      description:
        'Penjelasan dan tulisan bisa dalam bahasa Indonesia dan Inggris.',
      delay: '1000',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Serena',
    web: 'rena.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Natalia',
    web: 'nataliya.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Vebin',
    web: 'vebin.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: LogoV2,
  address: 'Product Texas, 234 Bokki Avenue Street BMW 99388',
  email: 'info@producttexas.project',
  phone: '1-232-7788 (Main)',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.',
  icon: <BsChatDotsFill />,
};
