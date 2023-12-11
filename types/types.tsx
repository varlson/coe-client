import React, { ReactElement } from "react";
import Colegiate from "../components/pages/Colegiate";
import Nde from "../components/pages/Nde";
import Ndee from "../components/pages/Ndee";

export interface INews {
  slug?: string;
  img_url: string;
  title: string;
  body: string;
  id: string;
  date: Date;
}

export interface ISlide {
  title: string;
  image_url: string;
  body: string;
  id: string;
}

export type SlideProps = {
  title: string;
  img_url: string;
};

export type subMenu = {
  label: string;
  link: string;
};

export type sidesProps = {
  clickHandle: (contentName: string) => void;
  label: string;
  subMenus?: IPost[];
  icon: string;
  contentName: string;
};

export type SobreType = {
  colegiate: ReactElement;
  nde: ReactElement;
  ndee: ReactElement;
};

export const Sobre: SobreType = {
  colegiate: <Colegiate />,
  nde: <Nde />,
  ndee: <Ndee />,
};

export type SobreKeyOf = keyof typeof Sobre;

export type subMenuTypes = {
  label: string;
  link: string;
};
export type menuTogleType = {
  label: string;
  subMenus: subMenuTypes[];
  id: string;
};

// export type IPost = {
//   title: string;
//   body: string;
//   author: string;
//   createdAt: string;
//   _id: string;
//   img: string;
// };

export type userType = {
  name: string;
  username: string;
  _id?: string;
  avatar?: string;
  premissionRole?: number | string;
  activityStatus?: boolean;
  password?: string;
};

export type IPost = {
  noticeNumber?: string;
  _id?: string;
  title: string;
  img: string;
  resumo: string;
  body: string;
  createdAt?: Date;
  updatedAt?: Date;
  postType: number;
  author: any;
  edit_by?: any;
};

export type labsInfoType = {
  title: string;
  preText: string;
  posText: string;
  img: string;
  isLeft: boolean;
};
