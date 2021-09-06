import { HOME_PAGE_URL, KOMP_WIEDZY_OFERTA } from "../settings/settings";
import {
  kompendium_wiedzy,
  sytuacje_i_niespodzianki,
} from "../store/reducers/usersReducer";

export const path = {
  learn: "/nauka-pytan",
  exam: "/wykonaj-egzamin",
  exam_reviev: "/wyniki-egzaminow",
  blog: "/blog",
  stats: "/statystyki",
  super_admin: "/super-admin",
  sign_in: "/logowanie",
  sign_up: "/rejestracja",
  user_profile: "/twoj-profil",
  pricing: "/cennik",
  fast: "/szybkie-menu",
  courses: "/szkolenia-wideo",
  pages: "/strony",
  difficult: "/trudne",
  terms: "/regulamin-i-polityka-prywatnosci",
  contact: "/kontakt",
};

const url = HOME_PAGE_URL;

export const link_outside = {
  poznaj_testy_premium_3_miesiace:
    url + "koszyk/poznaj-testy-premium-3-miesiace/",
  blog: url,
  kompendium_wiedzy: url + "kompendium-wiedzy/",
  sytuacje_i_niespodzianki: url + "sytuacje-i-niespodzianki/",
};

export const coursesList = [
  {
    id: 1,
    title: "Kompendium wiedzy przed egzaminem na prawo jazdy.",
    slug: "kompendium-wiedzy",
    slugToPaidContent: KOMP_WIEDZY_OFERTA,
    hasAccess: kompendium_wiedzy,
    offerLinkOutside: KOMP_WIEDZY_OFERTA,
  },
  {
    id: 2,
    title: "Sytuacje i niespodzianki na drodze.",
    slug: "sytuacje-i-niespodzianki",
    slugToPaidContent: sytuacje_i_niespodzianki,
    hasAccess: sytuacje_i_niespodzianki,
    offerLinkOutside: link_outside.sytuacje_i_niespodzianki,
  },
];

export const add_img_link = {
  kompendium_wiedzy_1:
    url + "wp-content/uploads/2019/12/kompendium-wiedzy-1.png",
  sytuacje_i_niespodzianki_1:
    url + "wp-content/uploads/2019/12/sytuacje_i_niespodzianki_1.png",
};
