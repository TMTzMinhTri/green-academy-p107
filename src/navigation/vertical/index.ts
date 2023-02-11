// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Trang Cá Nhân',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Quầy hàng của bạn',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Đã lưu',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Bài viết của bạn',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      sectionTitle: 'Lối tắt của bạn'
    },
    {
      title: 'Chợ 2 nông',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Diễn đàn nông nghiệp',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Thời tiết',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Giá cả thị trường',
      icon: Table,
      path: '/tables'
    },
    {
      title: 'Trộn phân NPK',
      icon: CubeOutline,
      path: '/form-layouts'
    }
  ]
}

export default navigation
