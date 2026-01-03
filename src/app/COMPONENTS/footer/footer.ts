import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  href?: string;
  routerLink?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  footerSections: FooterSection[] = [
    {
      title: 'المنتج',
      links: [
        { label: 'المميزات', routerLink: '/features' },
        { label: 'الأسعار', routerLink: '/pricing' },
        { label: 'الأمان', href: '#security' },
        { label: 'خارطة الطريق', href: '#roadmap' },
      ],
    },
    {
      title: 'الشركة',
      links: [
        { label: 'عن ركاز', href: '#about' },
        { label: 'المدونة', href: '#blog' },
        { label: 'تواصل معنا', routerLink: '/contact' },
        { label: 'الوظائف', href: '#careers' },
      ],
    },
    {
      title: 'الدعم',
      links: [
        { label: 'مركز المساعدة', href: '#help' },
        { label: 'الأسئلة الشائعة', href: '#faq' },
        { label: 'الحالة', href: '#status' },
        { label: 'التوثيق', href: '#docs' },
      ],
    },
  ];

  socialLinks: SocialLink[] = [
    {
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/reqaz',
      label: 'تويتر',
    },
    {
      icon: 'fab fa-facebook',
      url: 'https://facebook.com/reqaz',
      label: 'فيسبوك',
    },
    {
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/company/reqaz',
      label: 'لينكد إن',
    },
    {
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/reqaz',
      label: 'انستجرام',
    },
  ];

  companyInfo = {
    name: 'ركاز',
    tagline: 'منصة تعاون قوية لفرق العمل',
    address: 'الرياض، المملكة العربية السعودية',
    email: 'info@reqaz.com',
    phone: '+966 50 123 4567',
  };
}
