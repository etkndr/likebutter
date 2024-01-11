import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { getMenuById } from "../../store/menu"
import { getAllItems } from "../../store/item"
import { getAllSections } from "../../store/section"
import "./Menus.css"

export default function Menus() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const menu = useSelector((state) => state.menus.menu)

  useEffect(() => {
    dispatch(getMenuById(id)).then(() => setLoaded(true))
  }, [])

  if (!loaded || !menu) {
    return <>Loading...</>
  }

  return (
    <>
      <div className="cater-menu">
        <h1 className="menu-title">{menu?.title.toUpperCase()}</h1>
        <div className="price">{`$${menu?.price}/person`}</div>
        {menu?.sections?.map((section, idx) => {
          const items = section.items
          return (
            <>
              <div className="choose-one">{section.choice_desc}</div>
              {items?.map((item, idx) => {
                const descs = item.descs
                return (
                  <div className="cater-menu-item" key={`section-${idx}`}>
                    <div className="item-title" key={`title-${idx}`}>
                      {item.title.toUpperCase()}
                    </div>
                    {descs?.map((desc, idx) => {
                      return (
                        <div className="item-info" key={`desc-${idx}`}>
                          {desc.body}
                        </div>
                      )
                    })}
                  </div>
                )
              })}
              <div className="separate">
                {idx < menu.sections.length - 1 && `...`}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
