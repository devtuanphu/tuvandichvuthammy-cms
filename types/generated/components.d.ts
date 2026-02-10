import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_items';
  info: {
    description: 'A single feature/reason item';
    displayName: 'Feature Item';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_blocks_process_steps';
  info: {
    description: 'A single process step';
    displayName: 'Process Step';
    icon: 'arrowRight';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_members';
  info: {
    description: 'A team member';
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface BlocksTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    description: 'A customer testimonial';
    displayName: 'Testimonial';
    icon: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface SectionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_forms';
  info: {
    description: 'Contact form section';
    displayName: 'Contact Form Section';
    icon: 'envelop';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_infos';
  info: {
    description: 'Contact information section';
    displayName: 'Contact Info';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    workingHours: Schema.Attribute.String;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    description: 'Call to action section';
    displayName: 'CTA Section';
    icon: 'cursor';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0110\u1EB7t l\u1ECBch t\u01B0 v\u1EA5n'>;
    buttonUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/contact'>;
    description: Schema.Attribute.Text;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFacility extends Struct.ComponentSchema {
  collectionName: 'components_sections_facilities';
  info: {
    description: 'Facility/location section';
    displayName: 'Facility Section';
    icon: 'house';
  };
  attributes: {
    address: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeaturedServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_services';
  info: {
    description: 'Featured services section';
    displayName: 'Featured Services';
    icon: 'apps';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Hero banner section';
    displayName: 'Hero Section';
    icon: 'star';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0110\u1EB7t l\u1ECBch t\u01B0 v\u1EA5n'>;
    ctaUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/contact'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsIntro extends Struct.ComponentSchema {
  collectionName: 'components_sections_intros';
  info: {
    description: 'Introduction section';
    displayName: 'Intro Section';
    icon: 'information';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsMap extends Struct.ComponentSchema {
  collectionName: 'components_sections_maps';
  info: {
    description: 'Google Maps embed section';
    displayName: 'Map Section';
    icon: 'pinMap';
  };
  attributes: {
    embedUrl: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_sections_mission_visions';
  info: {
    description: 'Mission and vision section';
    displayName: 'Mission Vision';
    icon: 'eye';
  };
  attributes: {
    missionContent: Schema.Attribute.RichText;
    missionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    visionContent: Schema.Attribute.RichText;
    visionTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsProcess extends Struct.ComponentSchema {
  collectionName: 'components_sections_processes';
  info: {
    description: 'Process/workflow section';
    displayName: 'Process Section';
    icon: 'layout';
  };
  attributes: {
    steps: Schema.Attribute.Component<'blocks.process-step', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_teams';
  info: {
    description: 'Team members section';
    displayName: 'Team Section';
    icon: 'oneToMany';
  };
  attributes: {
    members: Schema.Attribute.Component<'blocks.team-member', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_sections';
  info: {
    description: 'Customer testimonials section';
    displayName: 'Testimonials Section';
    icon: 'message';
  };
  attributes: {
    items: Schema.Attribute.Component<'blocks.testimonial', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_choose_us';
  info: {
    description: 'Why choose us section with feature items';
    displayName: 'Why Choose Us';
    icon: 'thumbUp';
  };
  attributes: {
    items: Schema.Attribute.Component<'blocks.feature-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata component';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 260;
      }>;
    metaRobots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'index, follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String;
    twitterDescription: Schema.Attribute.Text;
    twitterImage: Schema.Attribute.Media<'images'>;
    twitterTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.feature-item': BlocksFeatureItem;
      'blocks.process-step': BlocksProcessStep;
      'blocks.team-member': BlocksTeamMember;
      'blocks.testimonial': BlocksTestimonial;
      'sections.contact-form': SectionsContactForm;
      'sections.contact-info': SectionsContactInfo;
      'sections.cta': SectionsCta;
      'sections.facility': SectionsFacility;
      'sections.featured-services': SectionsFeaturedServices;
      'sections.hero': SectionsHero;
      'sections.intro': SectionsIntro;
      'sections.map': SectionsMap;
      'sections.mission-vision': SectionsMissionVision;
      'sections.process': SectionsProcess;
      'sections.team': SectionsTeam;
      'sections.testimonials': SectionsTestimonials;
      'sections.why-choose-us': SectionsWhyChooseUs;
      'shared.seo': SharedSeo;
    }
  }
}
