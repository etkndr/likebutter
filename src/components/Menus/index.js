import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { getMenuById } from "../../store/menu"
import "./Menus.css"

export default function Menus() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const menu = useSelector((state) => state.menus.menu)

  useEffect(() => {
    if (id) {
      dispatch(getMenuById(id)).then(() => setLoaded(true))
    }
  }, [id, dispatch])

  if (!loaded || !menu) {
    return (
      <div className="cater-menu">
        <div className="price">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <div className="cater-menu">
        <h1 className="menu-title">{menu?.title.toUpperCase()}</h1>
        <div className="price">
          {menu?.price > 0 && `($${menu?.price}/person)`}
        </div>
        {Object.values(menu.sections) &&
          Object.values(menu?.sections)?.map((section, idx) => {
            const items = Object.values(section.items)
            return (
              <div className="section" key={section.id}>
                {section.choice_desc && (
                  <div className="choose-one">{`${section.choice_desc}:`}</div>
                )}
                {items?.map((item, idx) => {
                  const descs = Object.values(item.descs)
                  return (
                    <div className="cater-menu-item" key={`item-${item.id}`}>
                      <div className="item-title">
                        {item.title.toUpperCase()}
                      </div>
                      {item.includes && (
                        <div className="includes">{item.includes}</div>
                      )}
                      {descs?.map((desc, idx) => {
                        return (
                          <div className="item-info" key={`desc-${desc.id}`}>
                            {desc.body}
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
                <div className="separate" key={`separate-${section.id}`}>
                  {idx < Object.keys(menu.sections)?.length - 1 && `....`}
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}
