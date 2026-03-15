import {hero} from './objects/hero'
import {ctaSection} from './objects/ctaSection'
import {blockContent} from './objects/blockContent'

import {siteSettings} from './documents/siteSettings'
import {teamMember} from './documents/teamMember'
import {service} from './documents/service'
import {page} from './documents/page'

import {homePage} from './singletons/homePage'
import {aboutPage} from './singletons/aboutPage'
import {servicesPage} from './singletons/servicesPage'
import {teamPage} from './singletons/teamPage'
import {contactPage} from './singletons/contactPage'

export const schemaTypes = [
  // Objects
  hero,
  ctaSection,
  blockContent,
  // Documents
  siteSettings,
  teamMember,
  service,
  page,
  // Singletons
  homePage,
  aboutPage,
  servicesPage,
  teamPage,
  contactPage,
]
