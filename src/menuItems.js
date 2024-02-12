const data = await fetch(
  `https://etkndr.pythonanywhere.com/api/menus/visible`
).then((res) => res.json())

const menuArr = []

if (!data.message) {
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
        url: "/owners",
      },
      {
        title: "our mission",
        url: "/mission",
      },
      {
        title: "who we serve",
        url: "/service",
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
