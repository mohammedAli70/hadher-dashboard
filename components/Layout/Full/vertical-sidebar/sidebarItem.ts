import {
  LayoutDashboardIcon,
  BorderAllIcon,
  AlertCircleIcon,
  CircleDotIcon,
  BoxMultiple1Icon,
  LoginIcon,
  MoodHappyIcon,
  ApertureIcon,
  UserPlusIcon,

  ListNumbersIcon,
  DatabaseImportIcon,
  FriendsIcon,
  MopedIcon,
  BellMinusIcon,
  DiscountIcon,
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  BgColor?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  // { header: 'Home' },
  {
    title: 'الرئيسية',
    icon: LayoutDashboardIcon,
    to: '/',
  },
  // { header: 'ui' },
  {
    title: 'الطلبات',
    icon: ListNumbersIcon,
    to: '/orders',
  },
  {
    title: 'إدخال البيانات',
    icon: DatabaseImportIcon,
    to: '/ui-components/buttons',
  },
  {
    title: 'العملاء',
    icon: FriendsIcon,
    to: '/ui-components/cards',
  },
  {
    title: 'الموصلين',
    icon: MopedIcon,
    to: '/ui-components/tables',
  },
  {
    title: 'الاشعارات ',
    icon: BellMinusIcon,
    to: '/ui-components/buttons',
  },
  {
    title: 'الخصومات',
    icon: DiscountIcon,
    to: '/ui-components/cards',
  },
  {
    title: 'التقييمات',
    icon: BorderAllIcon,
    to: '/ui-components/tables',
  },
  {
    title: 'الأرشيف العام',
    icon: BoxMultiple1Icon,
    to: '/ui-components/cards',
  },
  {
    title: 'الإعدادات',
    icon: BorderAllIcon,
    to: '/ui-components/tables',
  },
  {
    title: 'الشكاوي والمقترحات',
    icon: BorderAllIcon,
    to: '/ui-components/tables',
  },

  // // { header: 'Auth' },
  // {
  //   title: 'Login',
  //   icon: LoginIcon,
  //   to: '/auth/login',
  // },
  // {
  //   title: 'Register',
  //   icon: UserPlusIcon,
  //   to: '/auth/register',
  // },
  // // { header: 'Extra' },
  // {
  //   title: 'Icons',
  //   icon: MoodHappyIcon,
  //   to: '/pages/icons',
  // },
  // {
  //   title: 'Sample Page',
  //   icon: ApertureIcon,
  //   to: '/pages/sample-page',
  // },
];

export default sidebarItem;
