// tslint:disable
const context = require["context"]("./img", true, /\.(gif|png|jpe?g|svg)/);
const apothecary = context("./role_apothecary.jpg");
import begger from "./img/role_beggar.jpg";
import blacksmith from "./img/role_blacksmith.jpg";
import contagious_villager from "./img/role_contagious_villager.jpg";
import crow from "./img/role_crow.jpg";
import elder from "./img/role_elder.jpg";
import fallen_angel from "./img/role_fallen_angel.jpg";
import healer from "./img/role_healer.jpg";
import huntress from "./img/role_huntress.jpg";
import moderator from "./img/role_moderator.jpg";
import plague_doctor from "./img/role_plague_doctor.jpg";
import priest from "./img/role_priest.jpg";
import sentry from "./img/role_sentry.jpg";
import sinister_villager from "./img/role_sinister_villager.jpg";
import undertaker from "./img/role_undertaker.jpg";
import villager from "./img/role_villager.jpg";
import weak_villager from "./img/role_weak_villager.jpg";

const roleImagesMapper = {
  apothecary,
  begger,
  blacksmith,
  contagious_villager,
  crow,
  elder,
  fallen_angel,
  healer,
  huntress,
  moderator,
  plague_doctor,
  priest,
  sentry,
  sinister_villager,
  undertaker,
  villager,
  weak_villager,
};

export type RoleImageName = keyof typeof roleImagesMapper;

function roleImgResolver(roleName: RoleImageName) {
  return roleImagesMapper[roleName];
}

export default roleImgResolver;
