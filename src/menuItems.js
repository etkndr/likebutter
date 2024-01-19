import { baseUrl } from "./store/actions"

const data = await fetch(`${baseUrl}/api/menus/visible`).then((res) =>
  res.json()
)

const menuArr = []

if (Object.prototype.toString.call(data) === "[object Array]") {
  data?.forEach((menu) => {
    menuArr.push({ title: `${menu.title}`, url: `/menus/${menu.id}` })
  })
}

export const menuItems = [
  {
    title: "company",
    url: "/about",
    submenu: [
      {
        title: "meet the owners",
        url: "owners",
      },
      {
        title: "our mission",
        url: "mission",
      },
      {
        title: "who we serve",
        url: "service",
      },
    ],
  },
  {
    title: "menus",
    url: "/menus",
    submenu: menuArr,
  },
  {
    title: "gallery",
    url: "/gallery",
  },
  {
    title: "booking",
    url: "/booking",
  },
]
